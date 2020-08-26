<template>
  <div>
    <v-card class="mx-auto" height="256" width="256" outlined>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-action>
            <v-icon class="grey--text">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ListasComponentClass extends Vue {
  private items: { title: string; icon: string }[] = [
    { title: "Meu Perfil", icon: "mdi-account-circle" },
    { title: "Meus Projetos", icon: "mdi-clipboard-text" },
    { title: "Orçamentos", icon: "mdi-gavel" },
    { title: "Estatísticas", icon: "mdi-trending-up" },
    { title: "Ferramentas", icon: "mdi-wrench" }
  ];
}
</script>