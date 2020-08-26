<template>
  <div>
    <v-container>
      <v-card flat>
        <div class="display-1 grey--text mb-5">Gráficos</div>
        <p>
          O componente
          <strong>gráfico</strong> pode receber qualquer tipo de dados e pode ser exibido em diversos
          formatos: Gráficos em linha, em formato de pizza, donut, balancetes e muito mais.
        </p>
        <p>
          Diferente dos outros componentes deste
          <em>design system</em>, os gráficos são criados à partir do
          <a
            href="https://developers.google.com/chart/interactive/docs/gallery"
            target="_blank"
          >
            <strong>Google Charts</strong>
          </a>.
          Ele deve ser instalado ao seu projeto com Vue antes de utilizar os templates. Veja
          <a
            href="https://www.npmjs.com/package/vue-google-charts"
            target="_blank"
          >
            <strong>aqui</strong>
          </a>.
        </p>
        <v-row wrap rows="12">
          <v-col cols="12">
            <TabGraficoPie />
          </v-col>
          <v-col cols="12">
            <TabGraficoBarChart />
          </v-col>
          <v-col cols="12">
            <TabGraficoAreaChart />
          </v-col>
          <v-col cols="12">
            <TabGraficoColumnChart />
          </v-col>
          <v-col cols="12">
            <TabGraficoDonutChart />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabGraficoPie from "@/components/TabGraficoPie.vue";
import TabGraficoBarChart from "@/components/TabGraficoBarChart.vue";
import TabGraficoAreaChart from "@/components/TabGraficoAreaChart.vue";
import TabGraficoColumnChart from "@/components/TabGraficoColumnChart.vue";
import TabGraficoDonutChart from "@/components/TabGraficoDonutChart.vue";

@Component({
  components: {
    TabGraficoPie,
    TabGraficoBarChart,
    TabGraficoAreaChart,
    TabGraficoColumnChart,
    TabGraficoDonutChart
  }
})
export default class GraficosClass extends Vue {}
</script>
