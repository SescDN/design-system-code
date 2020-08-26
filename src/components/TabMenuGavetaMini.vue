<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <MenuGavetaMini />
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

        &lt;v-card flat outlined&gt;
            &lt;v-navigation-drawer v-model=&quot;drawer&quot; :mini-variant.sync=&quot;mini&quot; color=&quot;primary&quot; permanent&gt;
                &lt;v-list-item class=&quot;py-0&quot;&gt;
                    &lt;div class=&quot;ml-1 mt-2 cursor-pointer&quot; style=&quot;width: 95px;&quot;&gt;
                        &lt;img :src=&quot;alterarImagem()&quot; :width=&quot;widthLogo&quot; /&gt;
                    &lt;/div&gt;
                    &lt;v-btn icon @click.stop=&quot;mini = !mini&quot; class=&quot;white--text&quot;&gt;
                        &lt;v-icon class=&quot;white--text&quot;&gt;mdi-chevron-left&lt;/v-icon&gt;
                    &lt;/v-btn&gt;
                &lt;/v-list-item&gt;

                &lt;v-divider&gt;&lt;/v-divider&gt;

                &lt;v-list dense&gt;
                    &lt;v-list-item v-for=&quot;item in items&quot; :key=&quot;item.title&quot; link&gt;
                        &lt;v-list-item-icon&gt;
                            &lt;v-icon class=&quot;white--text&quot;&gt;{&nbsp;{ item.icon }}&lt;/v-icon&gt;
                        &lt;/v-list-item-icon&gt;

                        &lt;v-list-item-content&gt;
                            &lt;v-list-item-title class=&quot;white--text&quot;&gt;{&nbsp;{ item.title }}&lt;/v-list-item-title&gt;
                        &lt;/v-list-item-content&gt;
                    &lt;/v-list-item&gt;
                &lt;/v-list&gt;
            &lt;/v-navigation-drawer&gt;
        &lt;/v-card&gt;

    &lt;/template&gt;
          </code>
          </pre>
          </div>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab>Script</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <div>
            <pre class="language-js">
          <code class="language-js">
    &lt;script lang=&quot;ts&quot;&gt;

        import { Component, Vue } from &quot;vue-property-decorator&quot;;

        @Component
        export default class MenuGavetaMiniComponentClass extends Vue {
            private drawer: boolean = true;
            private items: { title: string; icon: string }[] = [
                { title: &quot;Home&quot;, icon: &quot;mdi-home&quot; },
                { title: &quot;Meu Perfil&quot;, icon: &quot;mdi-account&quot; },
                { title: &quot;Equipe GTI&quot;, icon: &quot;mdi-account-group-outline&quot; }
            ];
            private mini: boolean = true;
            private sescLogoMini: string = require(&quot;../assets/logo-mini.png&quot;);
            private sescLogo: string = require(&quot;../assets/logo-sesc.png&quot;);

            private alterarImagem(): string {
                if (this.mini == true) {
                    this.widthLogo = "100%";
                    return this.sescLogoMini;
                } else {
                    this.widthLogo = "75%";
                    return this.sescLogo;
                }
            }
        }

    &lt;/script&gt;
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
import MenuGavetaMini from "@/components/MenuGavetaMini.vue";

@Component({
  components: {
    MenuGavetaMini
  }
})
export default class TabMenuGavetaMiniComponentClass extends Vue {}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>