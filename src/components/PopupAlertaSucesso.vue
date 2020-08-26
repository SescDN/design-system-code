<template>
  <v-dialog max-width="400px">
    <template v-slot:activator="{ on }">
      <v-btn slot="activator" class="primary mr-4" color="#014687" v-on="on" depressed>Alerta</v-btn>
    </template>
    <v-card class="pb-3">
      <v-card-title>
        <div class="text-xs-center">
          <img class="text-xs-center" src="../assets/images/sucesso-icone.png" />
        </div>
      </v-card-title>
      <v-card-text class="text-xs-center font-bold">
        Seu cadastro foi realizado
        <span class="success-font">com sucesso</span>!
        <br />Em breve entraremos em contato.
      </v-card-text>
      <v-card-actions>
        <div class="text-xs-center">
          <v-btn class="success text-initial mr-3" depressed>Aceitar</v-btn>
          <v-btn class="text-initial" color="#4CAF50" outlined>Recusar</v-btn>
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
.font-bold {
  font-size: 16px;
  font-weight: bold;
}
.success-font {
  color: #4caf50;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PopupAlertaSucessoComponentClass extends Vue {
  private title: string = "";
  private description: string = "";

  public submit(): void {
    console.log(this.title, this.description);
  }
}
</script>