<template>
  <div>
    <!--
  <GChart type="BarChart" :data="chartData" :options="chartOptions.chart" />
    -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class GraficoBarChartComponentClass extends Vue {
  private chartData: [string, string | number, string | number][] = [
    ["Ano", "Orçamento", "Despesas"],
    ["2014", 1000, 400],
    ["2015", 1170, 460],
    ["2016", 660, 1120],
    ["2017", 1030, 540],
  ];

  private chartOptions: { chart: { title: string; subtitle: string } } = {
    chart: {
      title: "Perfomance no Ano",
      subtitle: "",
    },
  };
}
</script>
