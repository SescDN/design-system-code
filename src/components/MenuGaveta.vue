<template>
  <v-card class="mx-auto elevation-20" height="400" width="256">
    <v-navigation-drawer class="primary" dark permanent>
      <div class="text-xs-center justify-center width-100 pa-3">
        <v-img src="sesc-logo.png" width="85" />
      </div>

      <v-list>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <div class="pa-2">
        <v-btn color="white" outline block>Sair</v-btn>
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<style scoped>
.width-100 {
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenuGavetaComponentClass extends Vue {
  private items: { title: string; icon: string }[] = [
    { title: "Meu Perfil", icon: "account_circle" },
    { title: "Meus Projetos", icon: "assignment" },
    { title: "Orçamentos", icon: "gavel" },
    { title: "Estatísticas", icon: "trending_up" },
    { title: "Ferramentas", icon: "build" }
  ];
}
</script>