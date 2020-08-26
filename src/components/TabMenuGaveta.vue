<template>
  <v-tabs dark slider-color="yellow" color="blue darken-4">
    <v-tab>Template</v-tab>
    <v-tab>Código</v-tab>
    <v-tab>Script</v-tab>
    <v-tabs-items v-model="tabs">
      <v-tab-item class="pa-5">
        <MenuGaveta />
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <code class="styleCode">
            &lt;template&gt;
            &lt;v-card class=&quot;mx-auto elevation-20&quot; height=&quot;400&quot; width=&quot;256&quot;&gt;
            &lt;v-navigation-drawer class=&quot;primary&quot; dark permanent&gt;
            &lt;div class=&quot;text-xs-center justify-center width-100 pa-3&quot;&gt;
            &lt;v-img src=&quot;/sesc-logo.png&quot; width=&quot;85&quot; /&gt;
            &lt;/div&gt;
            &lt;v-list&gt;
            &lt;v-list-tile v-for=&quot;item in items&quot;
            :key=&quot;item.title&quot;&gt;
            &lt;v-list-tile-action&gt;
            &lt;v-icon class=&quot;white--text&quot;&gt;
            &#123;&#123; item.icon
            &lt;/v-icon&gt;
            &lt;/v-list-tile-action&gt;
            &lt;v-list-tile-content&gt;
            &lt;v-list-tile-title class=&quot;white--text&quot;&gt;
            &#123;&#123; item.title
            &lt;/v-list-tile-title&gt;
            &lt;/v-list-tile-content&gt;
            &lt;/v-list-tile&gt;
            &lt;/v-list&gt;
            &lt;div class=&quot;pa-2&quot;&gt;
            &lt;v-btn color=&quot;white&quot; outline block&gt;
            Sair
            &lt;/v-btn&gt;
            &lt;/div&gt;
            &lt;/v-navigation-drawer&gt;
            &lt;/v-card&gt;
            &lt;/template&gt;
          </code>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card-text>
          <div>
            <code class="styleCode">
              &#x3C;script lang=&#x22;ts&#x22;&#x3E;
              import { Component, Vue } from &#x22;vue-property-decorator&#x22;;
              @Component
              export default class MenuGavetaComponentClass extends Vue {
              private items: { title: string; icon: string }[] = [
              { title: &#x22;Meu Perfil&#x22;, icon: &#x22;account_circle&#x22; },
              { title: &#x22;Meus Projetos&#x22;, icon: &#x22;assignment&#x22; },
              { title: &#x22;Or&#xE7;amentos&#x22;, icon: &#x22;gavel&#x22; },
              { title: &#x22;Estat&#xED;sticas&#x22;, icon: &#x22;trending_up&#x22; },
              { title: &#x22;Ferramentas&#x22;, icon: &#x22;build&#x22; }
              ];
              }
              &#x3C;/script&#x3E;
            </code>
          </div>
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuGaveta from "@/components/MenuGaveta.vue";

@Component({
  components: {
    MenuGaveta
  }
})
export default class TabMenuGavetaComponentClass extends Vue {}
</script>