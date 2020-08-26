 <template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <Alertas />
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

            &lt;v-alert :value=&quot;true&quot;
                type=&quot;success&quot;&gt;
                Este é um alerta de sucesso.
            &lt;/v-alert&gt;
            
            &lt;v-alert :value=&quot;true&quot;
                type=&quot;info&quot;&gt;
                Este &eacute; um alerta de informação.
            &lt;/v-alert&gt;
            
            &lt;v-alert :value=&quot;true&quot;
                type=&quot;warning&quot;&gt;
                Este é um alerta de atenção.
            &lt;/v-alert&gt;
            
            &lt;v-alert :value=&quot;true&quot;
                type=&quot;error&quot;&gt;
                Este é um alerta de erro.
            &lt;/v-alert&gt;
          
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
import Alertas from "@/components/Alertas.vue";

@Component({
  components: {
    Alertas
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
