<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Alertas</div>
            <p class="text-xs-left">
              O componente
              <strong>&lt;v-alert&gt;&lt;/v-alert&gt;</strong> é usado para exibir
              informações relevantes para o usuário. Possui 4 variações que podem ser aplicadas
              somente mudando o seu tipo (type).
              São elas: sucesso, informação, aviso e erro. Estes têm ícones padrão do
              <a
                href="https://materialdesignicons.com/"
                target="_blank"
              >
                <strong>Material Design</strong>
              </a>
              atribuídos que podem ser alterados e representam ações diferentes.
            </p>
            <p class="text-xs-left">
              Você pode ver as propriedades que o &lt;v-alert&gt; pode receber
              <a
                href="https://vuetifyjs.com/pt-BR/components/alerts/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
          </v-col>
        </v-row>
      <TabAlertas />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Alertas from "@/components/Alertas.vue";
import TabAlertas from "@/components/TabAlertas.vue";

@Component({
  components: {
    Alertas,
    TabAlertas
  }
})
export default class AlertasClass extends Vue {}
</script>
