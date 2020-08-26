<template>
  <div>
    <v-stepper v-model="e6" vertical outlined>
      <v-stepper-step :complete="e6 > 1" step="1">Passo 1 do Stepper Vertical</v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-12" height="300px">
          <h1 class="grey--text">Conteúdo vem aqui...</h1>
        </v-card>
        <v-btn class="text-initial" color="primary" @click="e6 = 2" depressed>Continuar</v-btn>
        <v-btn class="text-initial" color="primary" text>Cancelar</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">Passo 2 do Stepper Vertical</v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-12" height="300px">
          <h1 class="grey--text">Conteúdo vem aqui...</h1>
        </v-card>
        <v-btn class="text-initial" color="primary" @click="e6 = 3" depressed>Continuar</v-btn>
        <v-btn class="text-initial" color="primary" text>Cancelar</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Passo 3 do Stepper Vertical</v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-12" height="300px">
          <h1 class="grey--text">Conteúdo vem aqui...</h1>
        </v-card>
        <v-btn class="text-initial" color="primary" @click="e6 = 4" depressed>Continuar</v-btn>
        <v-btn class="text-initial" color="primary" text>Cancelar</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">Passo 4 do Stepper Vertical</v-stepper-step>
      <v-stepper-content step="4">
        <v-card color="grey lighten-1" class="mb-12" height="300px">
          <h1 class="grey--text">Conteúdo vem aqui...</h1>
        </v-card>
        <v-btn class="text-initial" color="primary" @click="e6 = 1" depressed>Continuar</v-btn>
        <v-btn class="text-initial" color="primary" text>Cancelar</v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<style scoped>
.text-initial {
  text-transform: initial;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class VerticalSteppersComponentClass extends Vue {
  private e6: number = 1;
}
</script>