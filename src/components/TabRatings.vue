<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-xs-center">
              <Ratings />
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

            &lt;v-rating 
               v-model=&quot;rating&quot;&gt;
            &lt;/v-rating&gt;

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
        export default class RatingsComponentClass extends Vue {
            private rating: number = 4;
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
import Ratings from "@/components/Ratings.vue";

@Component({
  components: {
    Ratings
  }
})
export default class TabRatingsComponentClass extends Vue {
  private active: boolean = true;
}
</script>