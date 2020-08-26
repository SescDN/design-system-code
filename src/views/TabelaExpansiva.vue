<template>
  <div class="projects">
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Tabela Expansiva</div>
            <p>
              O componente
              <strong>Tabela Expansiva</strong> (expansion panel) é útil para reduzir o espaço vertical com grandes quantidades de informação.
              A funcionalidade padrão do componente é exibir apenas um corpo do painel de expansão por vez.
              No entanto, com a propriedade expansível, o painel de expansão pode permanecer aberto até ser explicitamente fechado.
            </p>
          </v-col>
        </v-row>
      <TabTabelaExpansiva />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabTabelaExpansiva from "@/components/TabTabelaExpansiva.vue";

@Component({
  components: {
    TabTabelaExpansiva
  }
})
export default class AcordeaoClass extends Vue {}
</script>