<template>
  <div>
    <v-container>
      <v-card flat>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Steppers</div>
            <p>
              O componente
              <strong>v-stepper</strong> exibe o progresso nas etapas numeradas. Um stepper pode ser usado para vários cenários, incluindo criação de registros, cadastros, passo-a-passo e muito mais.
              Pode conter qualquer tipo de elemento: inputs, botões, imagens, etc.
            </p>
            <p>
              Você pode ver as propriedades disponíveis
              <a
                href="https://vuetifyjs.com/pt-BR/components/steppers"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabSteppers />
          </v-col>
        </v-row>
      </v-card>
      <!-- Vertical Steppers -->
      <v-card flat>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Vertical Steppers</div>
            <p>
              O componente
              <strong>v-stepper</strong> com etapas numeradas na vertical.
            </p>
            <p>
              Você pode ver as propriedades disponíveis
              <a
                href="https://vuetifyjs.com/pt-BR/components/steppers"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabVerticalSteppers />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Steppers from "@/components/Steppers.vue";
import VerticalSteppers from "@/components/VerticalSteppers.vue";
import TabSteppers from "@/components/TabSteppers.vue";
import TabVerticalSteppers from "@/components/TabVerticalSteppers.vue";

@Component({
  components: {
    Steppers,
    VerticalSteppers,
    TabSteppers,
    TabVerticalSteppers
  }
})
export default class SteppersClass extends Vue {}
</script>