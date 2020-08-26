<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card height="80px">
        <v-card-title flat class="primary white--text" height="80px">
          <span class="headline">
            <img src="sesc-logo.png" />
          </span>

          <div class="flex-grow-1"></div>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark v-on="on" class="text-initial white--text" text>Menu Dropdown</v-btn>
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
export default class MenuAzulSescComponentClass extends Vue {
  private items: { title: string }[] = [
    { title: "Início" },
    { title: "Equipes" },
    { title: "Projetos" },
    { title: "Orçamentos" }
  ];
}
</script>