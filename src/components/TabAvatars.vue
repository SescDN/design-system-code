<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <Avatars />
            </div>
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
        &lt;div&gt;

            &lt;v-avatar color=&quot;indigo&quot; class=&quot;mr-2&quot;&gt;
                &lt;v-icon dark&gt;
                    account_circle
                &lt;/v-icon&gt;
            &lt;/v-avatar&gt;
            
            &lt;v-avatar class=&quot;mr-2&quot;&gt;
                &lt;img src=&quot;/avatar-exemplo-01.png&quot;&gt;
            &lt;/v-avatar&gt;
            
            &lt;v-avatar class=&quot;mr-2&quot;&gt;
                &lt;img src=&quot;/avatar-exemplo-02.png&quot;&gt;
            &lt;/v-avatar&gt;
            
            &lt;v-avatar class=&quot;mr-2&quot;&gt;
                &lt;img src=&quot;/avatar-exemplo-03.png&quot;&gt;
            &lt;/v-avatar&gt;
            
            &lt;v-avatar class=&quot;mr-2&quot;&gt;
                &lt;img src=&quot;/avatar-exemplo-04.png&quot;&gt;
            &lt;/v-avatar&gt;
            
            &lt;v-avatar color=&quot;blue&quot;&gt;
                &lt;span class=&quot;white--text headline&quot;&gt;IG&lt;/span&gt;
            &lt;/v-avatar&gt;

        &lt;/div&gt;
    &lt;/template&gt;
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
import Avatars from "@/components/Avatars.vue";

@Component({
  components: {
    Avatars
  }
})
export default class TabAvatarsComponentClass extends Vue {
  private active: boolean = true;
}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>