<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn slot="activator" class="primary mr-4" depressed v-on="on">Adicionar um novo projeto</v-btn>
    </template>
    <v-card class="pa-4">
      <v-card-title>
        <h2>Novo projeto</h2>
      </v-card-title>
      <v-form class="px-3">
        <v-text-field label="Título" v-model="title" prepend-icon="folder"></v-text-field>
        <v-textarea label="Descrição" v-model="description" prepend-icon="edit"></v-textarea>
        <v-btn class="primary text-initial ma-2 mb-4" depressed>Adicionar projeto</v-btn>
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
export default class PopupComponentClass extends Vue {
  private title: string = "";
  private description: string = "";
  private dialog: boolean = false;
}
</script>