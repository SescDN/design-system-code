<template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-xs-center">
              <Breadcrumbs />
            </div>
          </template>
      </v-card>
    </v-tab-item>

    <v-tab>Código</v-tab>
    <v-tab-item>
        <div>
          <pre class="language-html">
          <code class="language-html">
    &lt;template&gt;
        &lt;div&gt;

            &lt;v-breadcrumbs 
                :items=&quot;items&quot; 
                divider=&quot;&gt;&quot;&gt;
            &lt;/v-breadcrumbs&gt;

        &lt;/div&gt;
    &lt;/template&gt;
          </code>
        </pre>
        </div>
    </v-tab-item>
    <v-tab>Script</v-tab>
    <v-tab-item>
      <v-card flat>
          <div>
            <pre class="language-js">
          <code class="language-js">
    &lt;script lang=&quot;ts&quot;&gt;
        
        import { Component, Vue } from &quot;vue-property-decorator&quot;;
        import Breadcrumbs from &quot;@/components/Breadcrumbs.vue&quot;;

        @Component({
            components: {
                Breadcrumbs
            }
        })
        export default class TabBreadcrumbsComponentClass extends Vue {
            private active: boolean = true;
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
import Breadcrumbs from "@/components/Breadcrumbs.vue";

@Component({
  components: {
    Breadcrumbs
  }
})
export default class TabBreadcrumbsComponentClass extends Vue {
  private active: boolean = true;
}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>