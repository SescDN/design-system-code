<template>
  <v-tabs dark slider-color="yellow" background-color="#004C99">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <v-row justify="center">
              <v-expansion-panels accordion>
                <v-expansion-panel v-for="(item,i) in 5" :key="i">
                  <v-expansion-panel-header>Item</v-expansion-panel-header>
                  <v-expansion-panel-content>Exemplo de texto dentro do painel.</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>
          </template>
        </v-card-text>
      </v-card>
    </v-tab-item>

    <v-tab>Código</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <pre class="language-html">
            <code class="language-html">
    &lt;template&gt;
        &lt;div&gt;

            &lt;v-expansion-panel&gt;
                &lt;v-expansion-panel-content
                    v-for=&quot;(item,i) in 5&quot;
                    :key=&quot;i&quot;&gt;
                              
                    &lt;template v-slot:header&gt;
                        &lt;div&gt;
                            Item
                        &lt;/div&gt;
                    &lt;/template&gt;
                        
                    &lt;v-card&gt;
                        &lt;v-card-text&gt;
                            Exemplo de texto dentro do painel.
                        &lt;/v-card-text&gt;
                    &lt;/v-card&gt;

                &lt;/v-expansion-panel-content&gt;
            &lt;/v-expansion-panel&gt;

        &lt;/div&gt;
    &lt;/template&gt;
        </code>
        </pre>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TabAcordeaoComponentClass extends Vue {}
</script>

<style>
.styleCode {
  width: 500px;
}
</style>