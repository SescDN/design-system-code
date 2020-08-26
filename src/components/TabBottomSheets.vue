 <template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <BottomSheets />
            </div>
          </template>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab>Código</v-tab>
    <v-tab-item>
      <v-card flat>
        <pre class="language-html">
          <code class="language-html">
    &lt;template&gt;
        &lt;div class=&quot;text-center&quot;&gt;

            &lt;v-btn color=&quot;primary&quot; 
                  class=&quot;text-initial&quot;
                  dark
                  @click=&quot;sheet = !sheet&quot;&gt;
                      Abrir a Sheet
            &lt;/v-btn&gt;

            &lt;v-bottom-sheet v-model=&quot;sheet&quot;&gt;
                &lt;v-sheet class=&quot;text-center&quot;
                            height=&quot;200px&quot;&gt;
            
            &lt;div class=&quot;py-3 text-xs-center&quot;&gt;
                Esta é uma Bottom Sheet com um texto. Mas você pode
                colocar qualquer tipo de elemento aqui dentro.
            &lt;/div&gt;
            
            &lt;div class=&quot;text-xs-center&quot;&gt;
                &lt;v-btn class=&quot;mt-6 text-xs-center text-initial&quot;
                    text color=&quot;primary&quot;
                    @click=&quot;sheet = !sheet&quot;&gt;
                        Fechar
                &lt;/v-btn&gt;
            &lt;/div&gt;

                &lt;/v-sheet&gt; 
            &lt;/v-bottom-sheet&gt;
    
        &lt;/div&gt;
    &lt;/template&gt;
          </code>
        </pre>
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
        export default class BottomSheetsComponentClass extends Vue {
            private sheet: boolean = false;
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
import BottomSheets from "@/components/BottomSheets.vue";

@Component({
  components: {
    BottomSheets
  }
})
export default class TabBottomSheetsComponentClass extends Vue {}
</script>