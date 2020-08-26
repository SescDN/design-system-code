<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-xs-center">
              <PopupAlerta />
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

            &lt;v-dialog max-width=&quot;400px&quot;&gt;
                &lt;v-btn flat slot=&quot;activator&quot; class=&quot;primary elevation-10&quot;&gt; Alerta &lt;/v-btn&gt;
                &lt;v-card class=&quot;pb-3&quot;&gt;
                    &lt;v-card-title&gt;
                        &lt;div class=&quot;text-xs-center width-100&quot;&gt;
                            &lt;img class=&quot;text-xs-center&quot; src=&quot;/sesc-alerta.png&quot;&gt;
                        &lt;/div&gt;
                    &lt;/v-card-title&gt;
                    &lt;v-card-text class=&quot;text-xs-center&quot;&gt;
                        Este &eacute; um modal de amostra de di&aacute;logo para o design system do Sesc DN. Se voc&ecirc; leu os nossos termos de uso
                        para se candidatar a esta vaga, clique em &quot;Aceitar&quot; se concorda ou &quot;Recusar&quot; se n&atilde;o concorda.
                    &lt;/v-card-text&gt;
                    &lt;v-card-actions class=&quot;text-xs-center&quot;&gt;
                        &lt;div class=&quot;text-xs-center width-100&quot;&gt;
                            &lt;v-btn class=&quot;primary elevation-10 mr-3&quot;&gt; Aceitar &lt;/v-btn&gt;
                            &lt;v-btn class=&quot;primary elevation-10&quot; color=&quot;#004C99&quot; outline&gt; Recusar &lt;/v-btn&gt;
                        &lt;/div&gt;
                    &lt;/v-card-actions&gt;
                    &lt;/v-card&gt;
              &lt;/v-dialog&gt;

          &lt;/div&gt;
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
        export default class PopupAlertaComponentClass extends Vue {
            private title: string = &quot;&quot;;
            private description: string = &quot;&quot;;
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
import PopupAlerta from "@/components/PopupAlerta.vue";

@Component({
  components: {
    PopupAlerta
  }
})
export default class TabCaixaDialogosComponentClass extends Vue {}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>