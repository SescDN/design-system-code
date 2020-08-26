<template>
  <div class="text-center ma-2">
    <v-btn class="primary text-initial" dark depressed @click="snackbar = true">Abrir Snackbar</v-btn>

    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="accent" class="text-initial" depressed text @click="snackbar = false">Fechar</v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SnackbarsComponentClass extends Vue {
  private snackbar: boolean = false;
  private text: string = "Oi, eu sou sua Snackbar";
}
</script>

<style scoped>
.text-initial {
  text-transform: initial;
}
</style>