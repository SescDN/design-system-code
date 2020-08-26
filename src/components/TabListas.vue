<template>
  <div>
    <v-tabs v-model="active1" dark slider-color="yellow" background-color="primary">
      <v-tab ripple>Template</v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="text-xs-center width-100 pa-3">
              <Listas />
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab ripple>Código</v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <pre class="language-html">
            <code class="language-html">
&lt;template&gt;
  &lt;div&gt;

    &lt;v-card
        class=&quot;mx-auto&quot;
        height=&quot;256&quot;
        width=&quot;256&quot;
        outlined
                &gt;

          &lt;v-list&gt;
            &lt;v-list-item 
                  v-for=&quot;item in items&quot; 
                  :key=&quot;item.title&quot;&gt;
                      &lt;v-list-item-action&gt;
                            &lt;v-icon 
                                class=&quot;grey--text&quot;&gt;
                                      {&shy;{ item.icon }&shy;}
                            &lt;/v-icon&gt;
                      &lt;/v-list-item-action&gt;
                      
                      &lt;v-list-item-content&gt;
                            &lt;v-list-item-title 
                                  class=&quot;grey--text&quot;&gt;
                                        {&shy;{ item.title }&shy;}
                            &lt;/v-list-item-title&gt;
                      &lt;/v-list-item-content&gt;
            &lt;/v-list-item&gt;
          &lt;/v-list&gt;

  &lt;/v-card&gt;

  &lt;/div&gt;
&lt;/template&gt;
              </code>
            </pre>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab ripple>Script</v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <pre class="language-js">
            <code class="language-js">
    &lt;script lang=&quot;ts&quot;&gt;
        
        import { Component, Vue } from &quot;vue-property-decorator&quot;;

        @Component
        export default class ListasComponentClass extends Vue {
            private items: { title: string; icon: string }[] = [
                { title: &quot;Meu Perfil&quot;, icon: &quot;mdi-account-circle&quot; },
                { title: &quot;Meus Projetos&quot;, icon: &quot;mdi-clipboard-text&quot; },
                { title: &quot;Or&ccedil;amentos&quot;, icon: &quot;mdi-gavel&quot; },
                { title: &quot;Estat&iacute;sticas&quot;, icon: &quot;mdi-trending-up&quot; },
                { title: &quot;Ferramentas&quot;, icon: &quot;mdi-wrench&quot; }
            ];
        }

    &lt;/script&gt;
            </code>
          </pre>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Listas from "@/components/Listas.vue";

@Component({
  components: {
    Listas
  }
})
export default class TabListasComponentClass extends Vue {
  private active1: boolean = true;
}
</script>






