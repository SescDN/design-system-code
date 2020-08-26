<template>
  <div class="text-center">
    <v-pagination v-model="page" :length="6"></v-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PaginacaoComponentClass extends Vue {
  private page: number = 1;
}
</script>