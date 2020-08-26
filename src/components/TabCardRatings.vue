<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-xs-center">
              <CardRatings />
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
            &lt;v-card class=&quot;mx-auto&quot; width=&quot;300&quot; outlined&gt;
                &lt;v-card-title class=&quot;headline&quot; primary-title &gt;
                    D&ecirc; uma nota para o almo&ccedil;o no Sesc DN
                &lt;/v-card-title&gt;
                &lt;v-card-text&gt;
                    Se voc&ecirc; gosta da comida servida no Condom&iacute;nio Sesc-Senac, 
                    considere alguns minutos para votar no sabor da comida. Nos ajuda a melhorar.
                    &lt;div class=&quot;text-center mt-12&quot;&gt;
                        &lt;v-rating v-model=&quot;rating&quot; color=&quot;yellow darken-3&quot; background-color=&quot;grey darken-1&quot;
                            empty-icon=&quot;$vuetify.icons.ratingFull&quot; half-increments hover&gt;
                        &lt;/v-rating&gt;
                    &lt;/div&gt;
                &lt;/v-card-text&gt;
                &lt;v-card-actions&gt;
                    &lt;div class=&quot;text-xs-center&quot;&gt;
                        &lt;v-btn class=&quot;primary&quot; text&gt;
                            Votar
                        &lt;/v-btn&gt;
                        &lt;v-btn color=&quot;primary&quot; class=&quot;primary&quot; text outlined&gt;
                            N&atilde;o, obrigado
                        &lt;/v-btn&gt;
                    &lt;/div&gt;
                &lt;/v-card-actions&gt;
            &lt;/v-card&gt;
        &lt;/template&gt;
          </code>
        </pre>
          </div>
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
        export default class CardRatingsComponentClass extends Vue {
            private rating: number = 4.5;
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
import CardRatings from "@/components/CardRatings.vue";

@Component({
  components: {
    CardRatings
  }
})
export default class TabCardRatingsComponentClass extends Vue {}
</script>