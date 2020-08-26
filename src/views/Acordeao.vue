<template>
  <div class="projects">
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Acordeão</div>
            <p>
              O componente
              <strong>acordeão</strong> (expansion panel) é útil para reduzir o espaço vertical com grandes quantidades de informação.
              A funcionalidade padrão do componente é exibir apenas um corpo do painel de expansão por vez.
              No entanto, com a propriedade expansível, o painel de expansão pode permanecer aberto até ser explicitamente fechado.
            </p>
            <p>
              Para ver as outras propriedades disponíveis, visite
              <a
                href="https://v15.vuetifyjs.com/pt-BR/components/expansion-panels"
                target="_blank"
              >
                <strong>este link</strong>
              </a>.
            </p>
          </v-col>
        </v-row>
      <TabAcordeao />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabAcordeao from "@/components/TabAcordeao.vue";

@Component({
  components: {
    TabAcordeao
  }
})
export default class AcordeaoClass extends Vue {}
</script>