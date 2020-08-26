 <template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <Badges />
            </div>
          </template>
        </v-card-text>
      </v-card>
    </v-tab-item>

    <v-tab>Código</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <pre class="language-html">
              <code class="language-html">
    &lt;template&gt;
      &lt;div&gt;

        &lt;span class=&quot;ma-3&quot;&gt;
          &lt;v-badge color=&quot;purple&quot; left overlap&gt;
            &lt;template v-slot:badge&gt;
              &lt;v-icon dark&gt;mdi-chec&lt;/v-icon&gt;
            &lt;/template&gt;
            &lt;v-icon color=&quot;grey lighten-1&quot; large&gt;mdi-account-circle&lt;/v-icon&gt;
          &lt;/v-badge&gt;
        &lt;/span&gt;

        &lt;span class=&quot;ma-3&quot;&gt;
          &lt;v-badge overlap color=&quot;orange&quot;&gt;
            &lt;template v-slot:badge&gt;
              &lt;v-icon dark&gt;mdi-bell&lt;/v-icon&gt;
            &lt;/template&gt;
            &lt;v-icon large color=&quot;grey darken-1&quot;&gt;mdi-account-box&lt;/v-icon&gt;
          &lt;/v-badge&gt;
        &lt;/span&gt;

        &lt;span class=&quot;ma-3&quot;&gt;
          &lt;v-badge overlap class=&quot;ml-2&quot;&gt;
            &lt;template v-slot:badge&gt;0&lt;/template&gt;
            &lt;v-icon large&gt;mdi-email&lt;/v-icon&gt;
          &lt;/v-badge&gt;
        &lt;/span&gt;
        
      &lt;/div&gt;
    &lt;/template&gt;
              </code>
                </pre>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Badges from "@/components/Badges.vue";

@Component({
  components: {
    Badges
  }
})
export default class TabAlertasComponentClass extends Vue {
  private active: boolean = true;
}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>
