<template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
          <template>
            <div class="text-center">
              <Images />
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

            &lt;v-img src=&quot;&commat;/assets/images/escola-sesc-em.png&quot;
                max-width=&quot;500&quot;
                max-height=&quot;300&quot;&gt;
            &lt;/v-img&gt;
            
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
import Images from "@/components/Images.vue";

@Component({
  components: {
    Images
  }
})
export default class TabImagesComponentClass extends Vue {
  private active: boolean = true;
}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>