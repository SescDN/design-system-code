<template>
  <div>
    <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BreadcrumbsComponentClass extends Vue {
  private active: boolean = true;
  private items: { text: string; disabled: boolean; href: string }[] = [
    {
      text: "Início",
      disabled: false,
      href: "#"
    },
    {
      text: "Projetos",
      disabled: false,
      href: "#"
    },
    {
      text: "Mesa Brasil",
      disabled: true,
      href: "#"
    }
  ];
}
</script>

<style scoped>
.text-initial {
  text-transform: initial;
}

.v-breadcrumbs li {
    align-items: center;
    display: inline-flex;
    font-size: 14px;
    color: white !important;
}

a.v-breadcrumbs__item.v-breadcrumbs__item--disabled {
    color: white !important;
}
</style>
