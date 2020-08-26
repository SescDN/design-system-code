<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <Steppers />
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
          
            &#x3C;v-stepper v-model=&#x22;e1&#x22; :vertical=&#x22;vertical&#x22; :alt-labels=&#x22;altLabels&#x22;&#x3E;
              &#x3C;template v-if=&#x22;vertical&#x22;&#x3E;
                &#x3C;template v-for=&#x22;n in steps&#x22;&#x3E;
                  &#x3C;v-stepper-step
                    :key=&#x22;&#x60;${n}-step&#x60;&#x22;
                    :complete=&#x22;e1 &#x3E; n&#x22;
                    :step=&#x22;n&#x22;
                    :editable=&#x22;editable&#x22;
                  &#x3E;Step {&shy;{ n }}&#x3C;/v-stepper-step&#x3E;

                  &#x3C;v-stepper-content :key=&#x22;&#x60;${n}-content&#x60;&#x22; :step=&#x22;n&#x22;&#x3E;
                    &#x3C;v-card class=&#x22;mb-12&#x22; flat outlined color=&#x22;grey lighten-1&#x22; height=&#x22;200px&#x22;&#x3E;&#x3C;/v-card&#x3E;

                    &#x3C;v-btn color=&#x22;primary&#x22; @click=&#x22;nextStep(n)&#x22; depressed class=&#x22;text-capitalize&#x22;&#x3E;Continuar&#x3C;/v-btn&#x3E;

                    &#x3C;v-btn class=&#x22;text-capitalize&#x22; color=&#x22;primary&#x22; text&#x3E;Cancelar&#x3C;/v-btn&#x3E;
                  &#x3C;/v-stepper-content&#x3E;
                &#x3C;/template&#x3E;
              &#x3C;/template&#x3E;
              &#x3C;template v-else&#x3E;
                &#x3C;v-stepper-header&#x3E;
                  &#x3C;template v-for=&#x22;n in steps&#x22;&#x3E;
                    &#x3C;v-stepper-step
                      :key=&#x22;&#x60;${n}-step&#x60;&#x22;
                      :complete=&#x22;e1 &#x3E; n&#x22;
                      :step=&#x22;n&#x22;
                      :editable=&#x22;editable&#x22;
                    &#x3E;Passo {&shy;{ n }}&#x3C;/v-stepper-step&#x3E;

                    &#x3C;v-divider v-if=&#x22;n !== steps&#x22; :key=&#x22;n&#x22;&#x3E;&#x3C;/v-divider&#x3E;
                  &#x3C;/template&#x3E;
                &#x3C;/v-stepper-header&#x3E;

                &#x3C;v-stepper-items&#x3E;
                  &#x3C;v-stepper-content v-for=&#x22;n in steps&#x22; :key=&#x22;&#x60;${n}-content&#x60;&#x22; :step=&#x22;n&#x22;&#x3E;
                    &#x3C;v-card flat class=&#x22;mb-12&#x22; color=&#x22;grey lighten-1&#x22; height=&#x22;200px&#x22; outlined&#x3E;
                      &#x3C;h1 class=&#x22;grey--text&#x22;&#x3E;Conte&#xFA;do vem aqui...&#x3C;/h1&#x3E;
                    &#x3C;/v-card&#x3E;

                    &#x3C;v-btn color=&#x22;primary&#x22; @click=&#x22;nextStep(n)&#x22; class=&#x22;text-capitalize&#x22;&#x3E;Continuar&#x3C;/v-btn&#x3E;

                    &#x3C;v-btn class=&#x22;text-capitalize&#x22; color=&#x22;primary&#x22; text&#x3E;Cancelar&#x3C;/v-btn&#x3E;
                  &#x3C;/v-stepper-content&#x3E;
                &#x3C;/v-stepper-items&#x3E;
              &#x3C;/template&#x3E;
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
          <pre class="language-html">
         <code class="language-html">
    &#x3C;script lang=&#x22;ts&#x22;&#x3E;

    import { Component, Vue, Watch } from &#x22;vue-property-decorator&#x22;;

    @Component
    export default class SteppersComponentClass extends Vue {
        private e1: number = 1;
        private steps: number = 2;
        private vertical: boolean = false;
        private altLabels: boolean = false;
        private editable: boolean = true;

        @Watch(&#x22;step&#x22;)
        OnStepsChange(val: number) {
            if (this.e1 &#x3E; val) {
              this.e1 = val;
            }
        }

        @Watch(&#x22;vertical&#x22;)
        OnVerticalChange() {
            this.e1 = 2;
            requestAnimationFrame(() =&#x3E; (this.e1 = 1)); // Workarounds
        }

        private onInput(val: number) {
            this.steps = val;
        }

        private nextStep(n: number) {
            if (n === this.steps) {
              this.e1 = 1;
            } else {
              this.e1 = n + 1;
            }
        }
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
import Steppers from "@/components/Steppers.vue";

@Component({
  components: {
    Steppers
  }
})
export default class TabSteppersComponentClass extends Vue {}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>