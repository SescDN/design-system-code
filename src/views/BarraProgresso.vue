<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Barra de Progresso</div>
            <p>
              O componente
              <strong>v-progress-linear</strong> exibe uma barra de progresso horizontal. Use o valor prop (propriedade) para controlar o progresso. As cores utilizadas devem sempre ser uma combinação entre as principais cores do Sesc.
            </p>
            <p>
              Você pode ver as propriedades disponíveis
              <a
                href="https://vuetifyjs.com/pt-BR/components/progress-linear/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabBarraProgresso />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabBarraProgresso from "@/components/TabBarraProgresso.vue";

@Component({
  components: {
    TabBarraProgresso
  }
})
export default class BarraProgressoClass extends Vue {}
</script>