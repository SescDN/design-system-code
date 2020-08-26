<template>
  <div>
    <v-stepper v-model="e1" :vertical="vertical" :alt-labels="altLabels">
      <template v-if="vertical">
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            :complete="e1 > n"
            :step="n"
            :editable="editable"
          >Step {{ n }}</v-stepper-step>

          <v-stepper-content :key="`${n}-content`" :step="n">
            <v-card class="mb-12" flat outlined color="grey lighten-1" height="200px"></v-card>

            <v-btn color="primary" @click="nextStep(n)" depressed class="text-capitalize">Continuar</v-btn>

            <v-btn class="text-capitalize" color="primary" text>Cancelar</v-btn>
          </v-stepper-content>
        </template>
      </template>
      <template v-else>
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step
              :key="`${n}-step`"
              :complete="e1 > n"
              :step="n"
              :editable="editable"
            >Passo {{ n }}</v-stepper-step>

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
            <v-card flat class="mb-12" color="grey lighten-1" height="200px" outlined>
              <h1 class="grey--text">Conteúdo vem aqui...</h1>
            </v-card>

            <v-btn color="primary" @click="nextStep(n)" class="text-capitalize">Continuar</v-btn>

            <v-btn class="text-capitalize" color="primary" text>Cancelar</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class SteppersComponentClass extends Vue {
  private e1: number = 1;
  private steps: number = 2;
  private vertical: boolean = false;
  private altLabels: boolean = false;
  private editable: boolean = true;

  @Watch("step")
  OnStepsChange(val: number) {
    if (this.e1 > val) {
      this.e1 = val;
    }
  }

  @Watch("vertical")
  OnVerticalChange() {
    this.e1 = 2;
    requestAnimationFrame(() => (this.e1 = 1)); // Workarounds
  }

  private onInput(val: number) {
    this.steps = val;
  }

  private nextStep(n: number) {
    if (n === this.steps) {
      this.e1 = 1;
    } else {
      this.e1 = n + 1;
    }
  }
}
</script>

<style scoped>
.text-capitalize {
  text-transform: capitalize;
}
</style>