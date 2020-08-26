<template>
  <div class="text-xs-center width-100">
    <v-rating v-model="rating"></v-rating>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RatingsComponentClass extends Vue {
  private rating: number = 4;
}
</script>