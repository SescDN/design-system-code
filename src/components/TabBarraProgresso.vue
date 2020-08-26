<template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-xs-center">
              <BarraProgresso />
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

            &lt;v-progress-linear 
                value=&quot;15&quot;&gt;
            &lt;/v-progress-linear&gt;
            
            &lt;v-progress-linear
                v-model=&quot;valueDeterminate&quot;
                color=&quot;amber&quot;&gt;
            &lt;/v-progress-linear&gt;
            
            &lt;v-progress-linear 
                indeterminate 
                color=&quot;yellow 
                darken-2&quot;&gt;
            &lt;/v-progress-linear&gt;
            
            &lt;v-progress-linear
                v-model=&quot;value&quot;
                :buffer-value=&quot;bufferValue&quot;&gt;
            &lt;/v-progress-linear&gt;
          
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
        import BarraProgresso from &quot;@/components/BarraProgresso.vue&quot;;

        @Component({
            components: {
                BarraProgresso
            }
        })
        export default class TabBarraProgressoComponentClass extends Vue {
            private active: boolean = true;
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
import BarraProgresso from "@/components/BarraProgresso.vue";

@Component({
  components: {
    BarraProgresso
  }
})
export default class TabBarraProgressoComponentClass extends Vue {
  private active: boolean = true;
}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>