<template>
  <v-app>
    <Navbar />
    <v-content class="mx-4 mb-4 mt-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style>
#app {
  font-family: "Libre Franklin", sans-serif;
  font-size: 16px;
  color: #E1E1E1;
  background-color: #162834;
}

#app a {
  text-decoration: none;
}

.v-card.v-card--flat.v-sheet.theme--light {
    background-color: #11202b !important;
    color: #e1e1e1 !important;
    padding: 20px !important;
}

:not(pre) > code[class*="language-"], pre[class*="language-"] {
    background-color: #11202b !important;
}

.v-application code {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.0), 0px 0px 0px 0px rgba(0, 0, 0, 0.0), 0px 0px 0px 0px rgba(0, 0, 0, 0.0);
}

.card-dark {
    background-color: rgba(31, 56, 91, 0.61) !important;
    backdrop-filter: blur(3px) !important;
    color: #e1e1e1 !important;
}
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>
