<template>
  <div>
    <v-navigation-drawer
      class="esconder-barra bg-toolbar"
      v-model="drawer"
      flat
      app
      temporary
    >
      <v-list dense>
        <img class="pa-5" src="@/assets/logo.png" />
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-content>
            <v-list-item-title class="pa-2 subtitle-1 white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-expansion-panels :flat="true">
          <v-expansion-panel class="transparent white--text" flat>
            <v-expansion-panel-header class="font-weight-bold white--text">
              Componentes
              <template v-slot:actions>
                <v-icon color="white">$expand</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item
                v-for="sublink in sublinks"
                :key="sublink.text"
                router
                :to="sublink.route"
              >
                <v-list-item-content>
                  <v-list-item-title class="pa-2 subtitle-1 white--text">{{ sublink.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="bg-toolbar" dark flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <img src="@/assets/logo.png" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/home">
        <v-btn text class="white--text text-initial">
          <v-icon small left>home</v-icon>
          <span>Home</span>
        </v-btn>
      </router-link>

      <router-link to="/versoes">
        <v-btn text class="white--text text-initial">
          <v-icon small left>get_app</v-icon>
          <span>Versões</span>
        </v-btn>
      </router-link>

      <a href="https://vuetifyjs.com/pt-BR/getting-started/quick-start" target="_blank">
        <v-btn text class="white--text text-initial">
          <v-icon small left>call_made</v-icon>
          <span>Vuetify</span>
        </v-btn>
      </a>
    </v-app-bar>
  </div>
</template>

<style scoped>
.text-initial {
  text-transform: initial;
}
.bg-toolbar {
  /*background: rgb(60, 154, 220);
  background: linear-gradient(
    90deg,
    rgba(60, 154, 220, 1) 0%,
    rgba(0, 16, 88, 1) 100%
  ); */
  background: rgba(31, 56, 91, 0.61);
  backdrop-filter: blur(3px);
}

.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background-color: rgba(31, 56, 91, 0.61);
    backdrop-filter: blur(3px);
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavbarClass extends Vue {
  private drawer: boolean = false;
  private links: { text: string; route: string }[] = [
    { text: "Versões", route: "/versoes" },
    { text: "Cores", route: "/cores" },
    { text: "Tipografia", route: "/tipografia" },
    { text: "Ícones", route: "/icones" },
    { text: "Grid", route: "/grid" }
  ];
  private sublinks: { text: string; route: string }[] = [
    { text: "Acordeão", route: "/acordeao" },
    { text: "Alertas", route: "/alertas" },
    { text: "Avatars", route: "/avatars" },
    { text: "Badges", route: "/badges" },
    { text: "Barra de Progresso", route: "/barraprogresso" },
    { text: "Botões", route: "/botoes" },
    { text: "BottomSheets", route: "/bottomsheets" },
    { text: "Breadcrumbs", route: "/breadcrumbs" },
    { text: "Caixa de Diálogos", route: "/caixadialogos" },
    { text: "Cards e Chips", route: "/cardschips" },
    { text: "Gráficos", route: "/graficos" },
    { text: "Images", route: "/images" },
    { text: "Inputs", route: "/inputs" },
    { text: "Listas", route: "/listas" },
    { text: "Menu Gaveta", route: "/menugaveta" },
    { text: "Menus", route: "/menus" },
    { text: "Menus Levels", route: "/navlevels" },
    { text: "Paginação", route: "/paginacao" },
    { text: "Ratings", route: "/ratings" },
    { text: "Snackbars", route: "/snackbars" },
    { text: "Steppers", route: "/Steppers" },
    { text: "Tabelas", route: "/tabelas" },
    { text: "Tabela Expansiva", route: "/tabelaexpansiva" },
    { text: "Tabs", route: "/tabs" },
    { text: "Tooltips", route: "/tooltips" },
    { text: "Treeview", route: "/treeview" }
  ];
}
</script>