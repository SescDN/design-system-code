<template>
  <div>
    <v-data-table :headers="headers" :items="projects">
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.orcamento }}</td>
        <td class="text-xs-left">{{ props.item.data }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TabelasComponentClass extends Vue {
  private name: string = "Users";

  private headers: {
    text: string;
    sortable?: boolean;
    value: string;
  }[] = [
    { text: "Projetos", sortable: true, value: "name" },
    { text: "Orçamento", value: "orcamento" },
    { text: "Data prevista", value: "data" }
  ];

  private projects: {
    name: string;
    orcamento: string;
    data: string;
  }[] = [
    {
      name: "Sistema de Orçamento",
      orcamento: "R$100.000",
      data: "15/10/2018"
    },
    {
      name: "Sistema de Comparação",
      orcamento: "R$25.000.000",
      data: "15/10/2021"
    },
    {
      name: "Website Mesa Brasil",
      orcamento: "R$7.000.000",
      data: "25/10/2019"
    },
    {
      name: "Contatações de 2 anos",
      orcamento: "R$5.000.000",
      data: "28/12/2019"
    },
    { name: "SescPro", orcamento: "R$18.000.000", data: "18/08/2025" }
  ];
}
</script>