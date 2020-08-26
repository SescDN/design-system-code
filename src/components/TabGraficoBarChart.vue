 <template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <GraficoBarChart />
            </div>
          </template>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab>Código</v-tab>
    <v-tab-item>
      <v-card flat>
        <pre class="language-html">
          <code class="language-html">

    &lt;template&gt;
        &lt;div&gt;

            &lt;GChart type=&quot;BarChart&quot; 
                    :data=&quot;chartData&quot; 
                    :options=&quot;chartOptions.chart&quot; /&gt;
        
        &lt;/div&gt;
    &lt;/template&gt;

          </code>
        </pre>
      </v-card>
    </v-tab-item>
    <v-tab>Script</v-tab>
    <v-tab-item>
      <v-card flat>
        <pre class="language-js">
            <code class="language-js">
    &lt;script lang=&quot;ts&quot;&gt;

        import { Component, Vue } from &quot;vue-property-decorator&quot;;

        @Component
        export default class GraficoBarChartComponentClass extends Vue {
            private chartData: [string, string | number, string | number][] = [
                [&quot;Ano&quot;, &quot;Or&ccedil;amento&quot;, &quot;Despesas&quot;],
                [&quot;2014&quot;, 1000, 400],
                [&quot;2015&quot;, 1170, 460],
                [&quot;2016&quot;, 660, 1120],
                [&quot;2017&quot;, 1030, 540]
            ];

            private chartOptions: { chart: { title: string; subtitle: string } } = {
                chart: {
                title: &quot;Perfomance no Ano&quot;,
                subtitle: &quot;&quot;
                }
            }
        }

    &lt;/script&gt;
              </code>
            </pre>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GraficoBarChart from "@/components/GraficoBarChart.vue";

@Component({
  components: {
    GraficoBarChart
  }
})
export default class TabGraficoBarChartComponentClass extends Vue {}
</script>