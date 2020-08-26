<template>
  <div class="text-center">
    <span class="ma-3">
      <v-badge color="purple" left overlap>
        <template v-slot:badge>
          <v-icon dark>mdi-check</v-icon>
        </template>
        <v-icon color="grey lighten-1" large>mdi-account-circle</v-icon>
      </v-badge>
    </span>

    <span class="ma-3">
      <v-badge overlap color="orange">
        <template v-slot:badge>
          <v-icon dark>mdi-bell</v-icon>
        </template>
        <v-icon large color="grey darken-1">mdi-account-box</v-icon>
      </v-badge>
    </span>

    <span class="ma-3">
      <v-badge overlap class="ml-2">
        <template v-slot:badge>0</template>
        <v-icon class="white--text" large>mdi-email</v-icon>
      </v-badge>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BadgesComponentClass extends Vue {}
</script>