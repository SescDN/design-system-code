<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-xs-center">
              <Botoes />
            </div>
          </template>
      </v-card>
    </v-tab-item>

    <v-tab>Código</v-tab>
    <v-tab-item>
      <v-card flat>
          <pre class="language-html">
          <code class="language-html">
    &lt;template&gt;
        &lt;div&gt;

            &lt;v-btn class=&quot;primary&quot;
                depressed&gt;
                  Bot&atilde;o
            &lt;/v-btn&gt;
            
            &lt;v-btn color=&quot;accent5&quot;
                class=&quot;white--text&quot;
                depressed&gt;
                  Bot&atilde;o
            &lt;/v-btn&gt;
            
            &lt;!-- Bot&otilde;es com apenas borda --&gt;
            &lt;v-btn color=&quot;primary&quot;
                      outlined&gt;
                        Bot&atilde;o
            &lt;/v-btn&gt;
            
            &lt;v-btn color=&quot;accent1&quot;
                      outlined&gt;
                        Bot&atilde;o
            &lt;/v-btn&gt;
            
            &lt;!-- Bot&otilde;es com &iacute;cones --&gt;
            &lt;v-btn class=&quot;primary&quot;
                      depressed&gt;
                      &lt;v-icon small class=&quot;mr-1&quot;&gt;
                          mdi-pencil
                      &lt;/v-icon&gt;
                          Editar
            &lt;/v-btn&gt;
            
            &lt;v-btn class=&quot;primary&quot;
                      color=&quot;primary&quot;
                      depressed&gt;
                      &lt;v-icon class=&quot;mr-1&quot;
                                  small&gt;mdi-printer
                      &lt;/v-icon&gt;
                          Imprimir
                      &lt;/v-btn&gt;
                      
            &lt;!-- Bot&otilde;es de favoritos --&gt;
            &lt;v-btn color=&quot;primary&quot;
                      fab
                      depressed
                      dark&gt;
                      &lt;v-icon&gt;
                            mdi-thumb-up
                      &lt;/v-icon&gt;
            &lt;/v-btn&gt;
            
            &lt;v-btn color=&quot;accent4&quot; 
                      fab
                      depressed
                      dark&gt;
                      &lt;v-icon&gt;
                            mdi-heart
                      &lt;/v-icon&gt;
          &lt;/v-btn&gt; 
        
      &lt;/div&gt;
  &lt;/template&gt;
          </code>
          </pre>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Botoes from "@/components/Botoes.vue";

@Component({
  components: {
    Botoes
  }
})
export default class TabBotoesComponentClass extends Vue {}
</script>