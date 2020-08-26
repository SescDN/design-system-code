<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn slot="activator" color="primary" class="primary mr-4" depressed v-on="on">Formulário</v-btn>
    </template>
    <v-card class="pa-5">
      <v-card-title>
        <h2>Cadastro de Usuário</h2>
      </v-card-title>
      <v-form class="px-3">
        <v-text-field label="Nome" v-model="title"></v-text-field>
        <v-text-field label="E-mail" v-model="title"></v-text-field>
        <v-text-field label="Endereço" v-model="title"></v-text-field>
        <v-text-field label="Bairro" v-model="title"></v-text-field>
        <v-btn depressed class="primary ma-2 mb-4">Cadastrar</v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.primary {
  text-transform: initial;
  border-radius: 3px;
}
.text-initial {
  text-transform: initial;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PopupFormComponentClass extends Vue {
  private title: string = "";
  private description: string = "";

  public submit(): void {
    console.log(this.title, this.description);
  }
}
</script>