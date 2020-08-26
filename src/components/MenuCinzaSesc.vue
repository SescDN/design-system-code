<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card height="80px" outlined>
        <v-card-title color="#F2F2F2" flat class="white--text" height="80px">
          <span class="headline">
            <img src="sesc-logotipo.png" />
          </span>

          <div class="flex-grow-1"></div>
          <v-spacer></v-spacer>
          <v-menu offset-y outlined>
            <template v-slot:activator="{ on }">
              <v-btn
                color="#FFFFFF"
                light
                v-on="on"
                class="text-initial grey--text"
                text
              >Menu Dropdown</v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title class="ml-1">
                  {{ item.title }}
                  <br />
                  <br />
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.text-initial {
  text-transform: initial;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenuCinzaSescComponentClass extends Vue {
  private items: { title: string }[] = [
    { title: "Início" },
    { title: "Equipes" },
    { title: "Projetos" },
    { title: "Orçamentos" }
  ];
}
</script>