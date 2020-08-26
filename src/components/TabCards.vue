<template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-xs-center">
              <Card />
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
        &lt;div&gt;

            &lt;v-card 
                class=&quot;mx-auto&quot; 
                max-width=&quot;344&quot;
                outlined&gt;
                &lt;v-img 
                    src=&quot;@/assets/images/escola-sesc-em.png&quot; 
                    height=&quot;200px&quot;&gt;
                &lt;/v-img&gt;

                &lt;v-card-text&gt;
                    &lt;h3 
                        class=&quot;grey--text&quot;&gt;
                        Escola SESC de Ensino M&eacute;dio
                    &lt;/h3&gt;
                    &lt;span 
                        class=&quot;grey--text&quot;&gt;
                        A Escola Sesc de Ensino M&eacute;dio &eacute; uma escola-resid&ecirc;ncia, localizada no Rio de Janeiro
                        e que re&uacute;ne alunos de todas as unidades federativas do Brasil.
                    &lt;/span&gt;
                &lt;/v-card-text&gt;

                &lt;v-card-actions 
                    class=&quot;pb-4&quot;&gt;
                    &lt;div 
                        class=&quot;text-center width-100&quot;&gt;
                        &lt;v-btn 
                            class=&quot;primary ma-2 text-initial elevation-10&quot; 
                            text&gt;
                            Ver a escola
                        &lt;/v-btn&gt;

                        &lt;v-btn 
                            text 
                            class=&quot;text-initial ma-2 elevation-10&quot; 
                            color=&quot;primary&quot; 
                            outlined&gt;
                            Explorar
                        &lt;/v-btn&gt;
                    &lt;/div&gt;
                &lt;/v-card-actions&gt;
            &lt;/v-card&gt;

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
import Card from "@/components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class TabCardsComponentClass extends Vue {
  private active: boolean = true;
}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>