<template>
  <div class="text-center">
    <v-chip class="ma-2">Padrão</v-chip>

    <v-chip class="ma-2 white--text" color="primary">Cor primária</v-chip>

    <v-chip class="ma-2 white--text" color="secondary">Secondário</v-chip>

    <v-chip class="ma-2 white--text" color="red" text-color="white">Erro</v-chip>

    <v-chip class="ma-2 white--text" color="green" text-color="white">Sucesso</v-chip>

    <v-chip class="ma-2" color="primary" text-color="white">
      <v-avatar left>
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar>Italo Gomes
    </v-chip>

    <v-chip class="ma-2" color="#1DB6F2" text-color="white">
      Premium
      <v-icon right>mdi-star</v-icon>
    </v-chip>

    <v-chip class="ma-2" close color="primary" text-color="white" @click:close="close">
      <v-avatar left>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-avatar>Confirmado
    </v-chip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ChipsComponentClass extends Vue {
  public close(): void {
    alert("Chip foi clicado!");
  }
}
</script>