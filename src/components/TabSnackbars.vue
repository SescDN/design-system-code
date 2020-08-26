<template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <Snackbars />
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
        &lt;div class=&quot;text-center ma-2&quot;&gt;

            &lt;v-btn 
                class=&quot;primary text-initial&quot; 
                dark
                depressed
                @click=&quot;snackbar = true&quot;&gt;
                    Abrir Snackbar
            &lt;/v-btn&gt;
            
            &lt;v-snackbar 
                v-model=&quot;snackbar&quot;&gt;
                    {&shy;{ text }&shy;}
                &lt;v-btn 
                    color=&quot;accent&quot; 
                    class=&quot;text-initial&quot; 
                    text 
                    @click=&quot;snackbar = false&quot;&gt;
                        Fechar
                &lt;/v-btn&gt;
            &lt;/v-snackbar&gt;
          
        &lt;/div&gt;
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
        export default class SnackbarsComponentClass extends Vue {
            private snackbar: boolean = false;
            private text: string = &quot;Oi, eu sou sua Snackbar&quot;;
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
import Snackbars from "@/components/Snackbars.vue";

@Component({
  components: {
    Snackbars
  }
})
export default class TabSnackbarsComponentClass extends Vue {
  private active: boolean = true;
}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>