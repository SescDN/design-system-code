<template>
  <div>
    <v-container>
      <v-card flat>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Tabelas</div>
            <p>
              O componente
              <strong>v-data-table</strong> é usado para exibir dados tabulares. Os recursos incluem classificação, pesquisa, paginação, edição em linha, dicas de ferramentas de cabeçalho e seleção de linhas.
            </p>
            <p>
              Veja as propriedades disponíveis
              <a href="https://vuetifyjs.com/pt-BR/components/data-tables" target="_blank">
                <strong>aqui</strong>
              </a>.
            </p>
            <TabTabelas />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabTabelas from "@/components/TabTabelas.vue";

@Component({
  components: {
    TabTabelas
  }
})
export default class TabelasClass extends Vue {}
</script>