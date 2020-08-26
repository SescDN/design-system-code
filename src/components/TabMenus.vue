<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-xs-center">
              <Menus />
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
                    &lt;v-menu offset-y&gt;
                        &lt;template v-slot:activator=&quot;{ on }&quot;&gt;
                            &lt;v-btn color=&quot;primary&quot; dark v-on=&quot;on&quot; class=&quot;text-initial&quot; &gt;
                                Menu Dropdown
                            &lt;/v-btn&gt;
                        &lt;/template&gt;
                        &lt;v-list&gt;
                            &lt;v-list-item v-for=&quot;(item, index) in items&quot; :key=&quot;index&quot; &gt;
                                &lt;v-list-item-title class=&quot;ml-1&quot;&gt;&#123; item.title &#125;&lt;br&gt;&lt;br&gt;
                                &lt;/v-list-item-title&gt;
                            &lt;/v-list-item&gt;
                        &lt;/v-list&gt;
                    &lt;/v-menu&gt;
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
          <div>
            <pre class="language-js">
          <code class="language-js">
              &lt;script&gt;
                export default {
                    data: () =&gt; ({
                        items: [
                            { title: 'Início' },
                            { title: 'Equipes' },
                            { title: 'Projetos' },
                            { title: 'Orçamentos' },
                        ],
                    }),
                }
            &lt;/script&gt;
          </code>
          </pre>
          </div>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menus from "@/components/Menus.vue";

@Component({
  components: {
    Menus
  }
})
export default class TabMenuComponentClass extends Vue {}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>