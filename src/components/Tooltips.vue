<template>
  <div class="text-center">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn class="text-initial ma-5" color="primary" dark v-on="on">Botão com Tooltip</v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-icon class="ma-5" color="primary" dark v-on="on">mdi-home</v-icon>
      </template>
      <span>Tooltip</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <span class="ma-5" v-on="on">Eu possuo uma Tooltip ao passar o mouse :)</span>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TooltipsComponentClass extends Vue {}
</script>

<style scoped>
.text-initial {
  text-transform: initial;
}
</style>