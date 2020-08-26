<template>
  <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat dark>
          <div class="text-xs-center">
              <MenuTranslucido />
            </div>
          <template>
            
          </template>
      </v-card>
    </v-tab-item>

    <v-tab>Código</v-tab>
    <v-tab-item>
        <div>
          <pre class="language-html">
          <code class="language-html">
    &#x3C;template&#x3E;
       
    &#x3C;/template&#x3E;
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
    &#x3C;script lang=&#x22;ts&#x22;&#x3E;
    
        import { Component, Vue } from &#x22;vue-property-decorator&#x22;;

        @Component
        export default class InputsComponentClass extends Vue {
            private valid: boolean = true;

            private name: string = &#x22;&#x22;;
            private nameRules: ((v: string | boolean) =&#x3E; string | boolean)[] = [
                v =&#x3E; !!v || &#x22;Nome &#xE9; obrigat&#xF3;rio&#x22;,
                v =&#x3E; (v &#x26;&#x26; v.length &#x3C;= 10) || &#x22;O nome deve ter menos de 10 caracteres.&#x22;
            ];

            private email: string = &#x22;&#x22;;
            private emailRules: ((v: string | boolean) =&#x3E; string | boolean)[] = [
                v =&#x3E; !!v || &#x22;E-mail &#xE9; obrigat&#xF3;rio&#x22;,
                v =&#x3E; /.+@.+\..+/.test(v) || &#x22;Voc&#xEA; deve informar um e-mail v&#xE1;lido&#x22;
            ];

            private items: string[] = [&#x22;Item 1&#x22;, &#x22;Item 2&#x22;, &#x22;Item 3&#x22;, &#x22;Item 4&#x22;];
            private itemRules: ((v: string | boolean) =&#x3E; string | boolean)[] = [
                v =&#x3E; !!v || &#x22;Item is required&#x22;
            ];

            private checkbox: boolean = false;
            private checkboxRules: ((v: string | boolean) =&#x3E; string | boolean)[] = [
                v =&#x3E; !!v || &#x22;You must agree to continue!&#x22;
            ];

            private select: null | boolean = null;

            private validate(): void {
                (this.$refs.form as Vue &#x26; { validate: () =&#x3E; boolean }).validate();
            }

            private reset(): void {
                (this.$refs.form as Vue &#x26; { reset: () =&#x3E; boolean }).reset();
            }
        }

    &#x3C;/script&#x3E;
          </code>
        </pre>
          </div>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuTranslucido from "@/components/MenuTranslucido.vue";

@Component({
  components: {
    MenuTranslucido
  }
})
export default class TabInputsComponentClass extends Vue {
  private active: boolean = true;
}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>