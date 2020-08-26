<template>
  <div>
    <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
      <v-tab ripple>Template</v-tab>
      <v-tab ripple>Código</v-tab>
      <v-tab-item>
        <v-card flat>
            <div class="text-xs-center width-100 pa-3">
              <Paginacao />
            </div>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
            <pre class="language-html">
            <code class="language-html">
    &lt;template&gt;
        &lt;div class=&quot;text-center&quot;&gt;

            &lt;v-pagination 
                v-model=&quot;page&quot; 
                :length=&quot;6&quot;&gt;
            &lt;/v-pagination&gt;
        
        &lt;/div&gt;
    &lt;/template&gt;
            </code>
          </pre>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Paginacao from "@/components/Paginacao.vue";

@Component({
  components: {
    Paginacao
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