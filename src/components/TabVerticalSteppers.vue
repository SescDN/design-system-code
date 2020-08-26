<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <VerticalSteppers />
            </div>
          </template>
        </v-card-text>
      </v-card>
    </v-tab-item>

    <v-tab>Código</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <div>
            <pre class="language-html">
          <code class="language-html">
    &#x3C;template&#x3E;
        &#x3C;div&#x3E;

            &#x3C;v-stepper v-model=&#x22;e6&#x22; vertical outlined&#x3E;
                &#x3C;v-stepper-step :complete=&#x22;e6 &#x3E; 1&#x22; step=&#x22;1&#x22;&#x3E;Passo 1 do Stepper Vertical&#x3C;/v-stepper-step&#x3E;

                &#x3C;v-stepper-content step=&#x22;1&#x22;&#x3E;
                    &#x3C;v-card color=&#x22;grey lighten-1&#x22; class=&#x22;mb-12&#x22; height=&#x22;300px&#x22;&#x3E;
                        &#x3C;h1 class=&#x22;grey--text&#x22;&#x3E;Conte&#xFA;do vem aqui...&#x3C;/h1&#x3E;
                    &#x3C;/v-card&#x3E;
                    &#x3C;v-btn class=&#x22;text-initial&#x22; color=&#x22;primary&#x22; @click=&#x22;e6 = 2&#x22; depressed&#x3E;Continuar&#x3C;/v-btn&#x3E;
                    &#x3C;v-btn class=&#x22;text-initial&#x22; color=&#x22;primary&#x22; text&#x3E;Cancelar&#x3C;/v-btn&#x3E;
                &#x3C;/v-stepper-content&#x3E;

                &#x3C;v-stepper-step :complete=&#x22;e6 &#x3E; 2&#x22; step=&#x22;2&#x22;&#x3E;Passo 2 do Stepper Vertical&#x3C;/v-stepper-step&#x3E;

                &#x3C;v-stepper-content step=&#x22;2&#x22;&#x3E;
                    &#x3C;v-card color=&#x22;grey lighten-1&#x22; class=&#x22;mb-12&#x22; height=&#x22;300px&#x22;&#x3E;
                        &#x3C;h1 class=&#x22;grey--text&#x22;&#x3E;Conte&#xFA;do vem aqui...&#x3C;/h1&#x3E;
                    &#x3C;/v-card&#x3E;
                    &#x3C;v-btn class=&#x22;text-initial&#x22; color=&#x22;primary&#x22; @click=&#x22;e6 = 3&#x22; depressed&#x3E;Continuar&#x3C;/v-btn&#x3E;
                    &#x3C;v-btn class=&#x22;text-initial&#x22; color=&#x22;primary&#x22; text&#x3E;Cancelar&#x3C;/v-btn&#x3E;
                &#x3C;/v-stepper-content&#x3E;

                &#x3C;v-stepper-step :complete=&#x22;e6 &#x3E; 3&#x22; step=&#x22;3&#x22;&#x3E;Passo 3 do Stepper Vertical&#x3C;/v-stepper-step&#x3E;

                &#x3C;v-stepper-content step=&#x22;3&#x22;&#x3E;
                    &#x3C;v-card color=&#x22;grey lighten-1&#x22; class=&#x22;mb-12&#x22; height=&#x22;300px&#x22;&#x3E;
                        &#x3C;h1 class=&#x22;grey--text&#x22;&#x3E;Conte&#xFA;do vem aqui...&#x3C;/h1&#x3E;
                    &#x3C;/v-card&#x3E;
                    &#x3C;v-btn class=&#x22;text-initial&#x22; color=&#x22;primary&#x22; @click=&#x22;e6 = 4&#x22; depressed&#x3E;Continuar&#x3C;/v-btn&#x3E;
                    &#x3C;v-btn class=&#x22;text-initial&#x22; color=&#x22;primary&#x22; text&#x3E;Cancelar&#x3C;/v-btn&#x3E;
                &#x3C;/v-stepper-content&#x3E;

                &#x3C;v-stepper-step step=&#x22;4&#x22;&#x3E;Passo 4 do Stepper Vertical&#x3C;/v-stepper-step&#x3E;
                &#x3C;v-stepper-content step=&#x22;4&#x22;&#x3E;
                    &#x3C;v-card color=&#x22;grey lighten-1&#x22; class=&#x22;mb-12&#x22; height=&#x22;300px&#x22;&#x3E;
                        &#x3C;h1 class=&#x22;grey--text&#x22;&#x3E;Conte&#xFA;do vem aqui...&#x3C;/h1&#x3E;
                    &#x3C;/v-card&#x3E;
                    &#x3C;v-btn class=&#x22;text-initial&#x22; color=&#x22;primary&#x22; @click=&#x22;e6 = 1&#x22; depressed&#x3E;Continuar&#x3C;/v-btn&#x3E;
                    &#x3C;v-btn class=&#x22;text-initial&#x22; color=&#x22;primary&#x22; text&#x3E;Cancelar&#x3C;/v-btn&#x3E;
                &#x3C;/v-stepper-content&#x3E;
            &#x3C;/v-stepper&#x3E;
          
        &#x3C;/div&#x3E;
    &#x3C;/template&#x3E;
          </code>
        </pre>
          </div>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab>Script</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <pre class="language-js">
         <code class="language-js">
    &#x3C;script lang=&#x22;ts&#x22;&#x3E;

        import { Component, Vue } from &#x22;vue-property-decorator&#x22;;

        @Component
        export default class VerticalSteppersComponentClass extends Vue {
            private e6: number = 1;
        }

    &#x3C;/script&#x3E;
         </code>
        </pre>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VerticalSteppers from "@/components/VerticalSteppers.vue";

@Component({
  components: {
    VerticalSteppers
  }
})
export default class TabVerticalSteppersComponentClass extends Vue {}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>