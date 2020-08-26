<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Menu Gaveta</div>
            <p>
              O componente
              <strong>v-navigation-drawer</strong> (barra de navegação) é utilizada para navegar pelo aplicativo/site/sistema.
              A gaveta de navegação está pré-configurada para funcionar com ou sem uma rota vue (vue router).
              Se utilizar
              <em>null</em> como valor inicial, a gaveta estará fechada no celular e aberta no computador ou telas maiores.
            </p>
            <p>
              Você pode ver as propriedades que o &lt;v-navigation-drawer&gt; pode receber
              <a
                href="https://vuetifyjs.com/pt-BR/components/navigation-drawers"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabMenuGavetaMini />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabMenuGaveta from "@/components/TabMenuGaveta.vue";
import TabMenuGavetaMini from "@/components/TabMenuGavetaMini.vue";

@Component({
  components: {
    TabMenuGaveta,
    TabMenuGavetaMini
  }
})
export default class MenuGavetaClass extends Vue {}
</script>