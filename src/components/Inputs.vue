<template>
  <div>
    <v-form ref="form" v-model="valid">
      <v-text-field v-model="name" label="Nome" required :counter="20" :rules="nameRules" dark></v-text-field>

      <v-text-field v-model="email" label="E-mail" required :rules="emailRules" dark></v-text-field>

      <v-select v-model="select" :items="items" label="Item" required :rules="itemRules" dark></v-select>

      <v-checkbox v-model="checkbox" label="Você concorda?" required :rules="checkboxRules" dark></v-checkbox>

      <v-btn
        class="text-capitalize mr-4"
        depressed
        color="primary"
        @click="validate"
      >Enviar</v-btn>

      <v-btn color="primary" class="text-capitalize" outlined depressed @click="reset">Limpar</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class InputsComponentClass extends Vue {
  private valid: boolean = true;

  private name: string = "";
  private nameRules: [
    (v: string | boolean) => string | boolean,
    (v: string) => string | boolean
  ] = [
    v => !!v || "Nome é obrigatório",
    v => (v && v.length <= 10) || "O nome deve ter menos de 10 caracteres."
  ];

  private email: string = "";
  private emailRules: [
    (v: string | boolean) => string | boolean,
    (v: string) => string | boolean
  ] = [
    v => !!v || "E-mail é obrigatório",
    v => /.+@.+\..+/.test(v) || "Você deve informar um e-mail válido"
  ];

  private items: string[] = ["Item 1", "Item 2", "Item 3", "Item 4"];
  private itemRules: ((v: string | boolean) => string | boolean)[] = [
    v => !!v || "Item is required"
  ];

  private checkbox: boolean = false;
  private checkboxRules: ((v: string | boolean) => string | boolean)[] = [
    v => !!v || "You must agree to continue!"
  ];

  private select: null | boolean = null;

  private validate(): void {
    (this.$refs.form as Vue & { validate: () => boolean }).validate();
  }

  private reset(): void {
    (this.$refs.form as Vue & { reset: () => boolean }).reset();
  }
}
</script>