<template>
  <div>
    <v-row justify="space-around">
      <v-avatar color="indigo" class="mr-2">
        <v-icon dark>account_circle</v-icon>
      </v-avatar>

      <v-avatar class="mr-2">
        <img src="avatar-exemplo-01.png" />
      </v-avatar>

      <v-avatar class="mr-2">
        <img src="avatar-exemplo-02.png" />
      </v-avatar>

      <v-avatar class="mr-2">
        <img src="avatar-exemplo-03.png" />
      </v-avatar>

      <v-avatar class="mr-2">
        <img src="avatar-exemplo-04.png" />
      </v-avatar>

      <v-avatar color="blue">
        <span class="white--text headline">IG</span>
      </v-avatar>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AvatarsComponentClass extends Vue {}
</script>