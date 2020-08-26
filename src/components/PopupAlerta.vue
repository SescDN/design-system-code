<template>
  <v-dialog max-width="400px">
    <template v-slot:activator="{ on }">
      <v-btn slot="activator" class="primary mr-4" v-on="on" depressed>Alerta</v-btn>
    </template>
    <v-card class="pb-3">
      <v-card-title>
        <div class="text-xs-center width-100">
          <img class="text-xs-center" src="../assets/images/sesc-alerta.png" />
        </div>
      </v-card-title>
      <v-card-text class="text-xs-center">
        Este é um modal de amostra de diálogo para o design
        system do Sesc DN. Se você leu os nossos termos de
        uso para se candidatar a esta vaga, clique em "Aceitar"
        se concorda ou "Recusar" se não concorda.
      </v-card-text>
      <v-card-actions class="text-xs-center">
        <div class="text-xs-center width-100">
          <v-btn class="primary mr-3" depressed>Aceitar</v-btn>
          <v-btn color="#004C99" class="text-initial" outlined>Recusar</v-btn>
        </div>
      </v-card-actions>
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
.width-100 {
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PopupAlertaComponentClass extends Vue {
  private title: string = "";
  private description: string = "";

  public submit(): void {
    console.log(this.title, this.description);
  }
}
</script>