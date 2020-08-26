<template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <Tooltips />
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
    &lt;template&gt;
        &lt;div class=&quot;text-center&quot;&gt;
          
            &lt;v-tooltip bottom&gt;
                &lt;template 
                    v-slot:activator=&quot;{ on }&quot;&gt;
                    &lt;v-btn 
                        class=&quot;text-initial ma-5&quot; 
                        color=&quot;primary&quot; 
                        dark v-on=&quot;on&quot;&gt;
                            Bot&atilde;o com Tooltip
                    &lt;/v-btn&gt;
                &lt;/template&gt;
                &lt;span&gt;
                    Tooltip
                &lt;/span&gt;
            &lt;/v-tooltip&gt;

            &lt;v-tooltip bottom&gt;
                &lt;template 
                    v-slot:activator=&quot;{ on }&quot;&gt;
                    &lt;v-icon 
                        class=&quot;ma-5&quot; 
                        color=&quot;primary&quot; 
                        dark v-on=&quot;on&quot;&gt;
                        mdi-home
                    &lt;/v-icon&gt;
                &lt;/template&gt;
                &lt;span&gt;
                    Tooltip
                &lt;/span&gt;
            &lt;/v-tooltip&gt;

            &lt;v-tooltip bottom&gt;
                &lt;template 
                    v-slot:activator=&quot;{ on }&quot;&gt;
                    &lt;span 
                        class=&quot;ma-5&quot; 
                        v-on=&quot;on&quot;&gt;
                            Eu possuo uma Tooltip ao passar o mouse :)
                    &lt;/span&gt;
                &lt;/template&gt;
                &lt;span&gt;
                    Tooltip
                &lt;/span&gt;
            &lt;/v-tooltip&gt;
          
        &lt;/div&gt;
    &lt;/template&gt;
          </code>
        </pre>
          </div>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tooltips from "@/components/Tooltips.vue";

@Component({
  components: {
    Tooltips
  }
})
export default class TabAlertasComponentClass extends Vue {
  private active: boolean = true;
}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>