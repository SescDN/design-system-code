<template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-xs-center">
              <Chips />
            </div>
          </template>
      </v-card>
    </v-tab-item>

    <v-tab>Código</v-tab>
    <v-tab-item>
      <v-card flat>
          <div>
            <pre class="language-html">
            <code class="language-html">
    &lt;template&gt;
        &lt;div class=&quot;text-center&quot;&gt;
          
            &lt;v-chip
                class=&quot;ma-2&quot;&gt;
                Padr&atilde;o
            &lt;/v-chip&gt;

            &lt;v-chip
                class=&quot;ma-2 white--text&quot;
                color=&quot;primary&quot;&gt;
                Cor prim&aacute;ria
            &lt;/v-chip&gt;

            &lt;v-chip
                class=&quot;ma-2 white--text&quot;
                color=&quot;secondary&quot;&gt;
                Second&aacute;rio
            &lt;/v-chip&gt;

            &lt;v-chip
                class=&quot;ma-2 white--text&quot;
                color=&quot;red&quot;
                text-color=&quot;white&quot;&gt;
                Erro
            &lt;/v-chip&gt;

            &lt;v-chip
                class=&quot;ma-2 white--text&quot;
                color=&quot;green&quot;
                text-color=&quot;white&quot;&gt;
                Sucesso
            &lt;/v-chip&gt;

            &lt;v-chip
                class=&quot;ma-2&quot;
                color=&quot;primary&quot;
                text-color=&quot;white&quot;&gt;
                &lt;v-avatar left&gt;
                    &lt;v-icon&gt;mdi-account-circle&lt;/v-icon&gt;
                &lt;/v-avatar&gt;
                Italo Gomes
            &lt;/v-chip&gt;

            &lt;v-chip
                class=&quot;ma-2&quot;
                color=&quot;#1DB6F2&quot;
                text-color=&quot;white&quot;&gt;
                Premium
                &lt;v-icon right&gt;mdi-star&lt;/v-icon&gt;
            &lt;/v-chip&gt;

            &lt;v-chip
                class=&quot;ma-2&quot;
                close
                color=&quot;primary&quot;
                text-color=&quot;white&quot;
                @click:close=&quot;close&quot;&gt;
                &lt;v-avatar left&gt;
                    &lt;v-icon&gt;mdi-checkbox-marked-circle&lt;/v-icon&gt;
                &lt;/v-avatar&gt;
                Confirmado
            &lt;/v-chip&gt;

        &lt;/div&gt;
    &lt;/template&gt;
          </code>
        </pre>
          </div>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chips from "@/components/Chips.vue";

@Component({
  components: {
    Chips
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