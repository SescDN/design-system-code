<template>
  <div class="text-center">
    <v-btn class="primary mr-5" depressed>Botão</v-btn>
    <v-btn color="accent" class="text-initial white--text mr-5" depressed>Botão</v-btn>
    <v-btn color="primary" class="text-initial mr-5" outlined>Botão</v-btn>
    <h3 class="grey--text mt-8 mb-8">Botões com ícones:</h3>
    <v-btn class="primary mr-5" depressed>
      <v-icon small class="mr-1">mdi-pencil</v-icon>Editar
    </v-btn>
    <v-btn class="primary mr-5" color="#004C99" depressed>
      <v-icon class="mr-1" small>mdi-printer</v-icon>Imprimir
    </v-btn>
    <v-btn class="error text-initial mr-5" color="#FF5252" depressed>
      <v-icon class="mr-1" small>mdi-alert</v-icon>Erro
    </v-btn>
    <v-btn class="success text-initial mr-5" depressed>
      <v-icon class="mr-1" small>mdi-checkbox-marked-circle</v-icon>Sucesso
    </v-btn>
    <v-btn color="#FB8C00" class="warning text-initial mr-5" depressed>
      <v-icon class="mr-1" small>mdi-alert</v-icon>Atenção!
    </v-btn>
    <br />
    <br />
    <h3 class="grey--text mt-8 mb-8">Botões de favoritos:</h3>
    <v-btn class="mr-5" color="#004C99" fab depressed dark>
      <v-icon>mdi-thumb-up</v-icon>
    </v-btn>
    <v-btn class="mr-5" color="#FF5252" fab depressed dark>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn class="mr-5" color="#808080" fab depressed dark>
      <v-icon>mdi-printer</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BotoesComponentClass extends Vue {}
</script>

<style scoped>
.primary {
  text-transform: initial;
  border-radius: 3px;
}
.text-initial {
  text-transform: initial;
}
</style>
