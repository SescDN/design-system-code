<template>
  <v-card flat outlined>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" color="primary" permanent>
      <v-list-item class="py-0">
        <div class="ml-1 mt-2 cursor-pointer" style="width: 95px;">
          <img :src="alterarImagem()" :width="widthLogo" />
        </div>
        <v-btn icon @click.stop="mini = !mini" class="white--text">
          <v-icon class="white--text">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenuGavetaMiniComponentClass extends Vue {
  private drawer: boolean = true;
  private items: { title: string; icon: string }[] = [
    { title: "Home", icon: "mdi-home" },
    { title: "Meu Perfil", icon: "mdi-account" },
    { title: "Equipe GTI", icon: "mdi-account-group-outline" }
  ];
  private mini: boolean = true;
  private sescLogoMini: string = require("../assets/logo-mini.png");
  private sescLogo: string = require("../assets/logo-sesc.png");
  private widthLogo: string = "";

  private alterarImagem(): string {
    if (this.mini == true) {
      this.widthLogo = "100%";
      return this.sescLogoMini;
    } else {
      this.widthLogo = "75%";
      return this.sescLogo;
    }
  }
}
</script>