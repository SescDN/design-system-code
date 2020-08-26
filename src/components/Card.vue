<template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-img src="@/assets/images/escola-sesc-em.png" height="200px"></v-img>

      <v-card-text>
        <h3 class="grey--text">Escola SESC de Ensino Médio</h3>
        <span class="grey--text">
          A Escola Sesc de Ensino Médio é uma escola-residência, localizada no Rio de Janeiro
          e que reúne alunos de todas as unidades federativas do Brasil.
        </span>
      </v-card-text>

      <v-card-actions class="pb-4">
        <div class="text-center width-100">
          <v-btn class="primary ma-2 text-initial" text>Ver a escola</v-btn>

          <v-btn text class="text-initial ma-2" color="primary" outlined>Explorar</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CardComponentClass extends Vue {}
</script>

<style scoped>
.primary {
  text-transform: initial;
  border-radius: 5px;
}
.text-initial {
  text-transform: initial;
}
.width-100 {
  width: 100%;
}
</style>