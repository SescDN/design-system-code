<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <Tabelas />
        </v-card-text>
      </v-card>
    </v-tab-item>

    <v-tab>Código</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <div class="text-xs-left">
            <pre class="language-html">
            <code class="language-html">
    &lt;template&gt;
        &lt;div&gt;

            &lt;v-data-table :headers=&quot;headers&quot; :items=&quot;projects&quot;&gt;
                &lt;template v-slot:items=&quot;props&quot;&gt;
                    &lt;td class=&quot;text-xs-left&quot;&gt;
                        &#123;&#123; props.item.name 
                    &lt;/td&gt;
                    &lt;td class=&quot;text-xs-left&quot;&gt;
                        &#123;&#123; props.item.orcamento 
                    &lt;/td&gt;
                    &lt;td class=&quot;text-xs-left&quot;&gt;
                        &#123;&#123; props.item.data 
                    &lt;/td&gt;
                &lt;/template&gt;
            &lt;/v-data-table&gt;
            
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
          <pre class="language-js">
          <code class="language-js">
    &#x3C;script lang=&#x22;ts&#x22;&#x3E;

        import { Component, Vue } from &#x22;vue-property-decorator&#x22;;

        @Component
        export default class TabelasComponentClass extends Vue {
            private name: string = &#x22;Users&#x22;;
            
            private headers: {
                text: string;
                sortable?: boolean;
                value: string;
            }[] = [
                { text: &#x22;Projetos&#x22;, sortable: true, value: &#x22;name&#x22; },
                { text: &#x22;Or&#xE7;amento&#x22;, value: &#x22;orcamento&#x22; },
                { text: &#x22;Data prevista&#x22;, value: &#x22;data&#x22; }
            ];
            
            private projects: {
                name: string;
                orcamento: string;
                data: string;
            }[] = [
                { name: &#x22;Sistema de Or&#xE7;amento&#x22;, orcamento: &#x22;R$100.000&#x22;, data: &#x22;15/10/2018&#x22; },
                { name: &#x22;Sistema de Compara&#xE7;&#xE3;o&#x22;, orcamento: &#x22;R$25.000.000&#x22;, data: &#x22;15/10/2021&#x22; },
                { name: &#x22;Website Mesa Brasil&#x22;, orcamento: &#x22;R$7.000.000&#x22;, data: &#x22;25/10/2019&#x22; },
                { name: &#x22;Contata&#xE7;&#xF5;es de 2 anos&#x22;, orcamento: &#x22;R$5.000.000&#x22;, data: &#x22;28/12/2019&#x22; },
                { name: &#x22;SescPro&#x22;, orcamento: &#x22;R$18.000.000&#x22;, data: &#x22;18/08/2025&#x22; }
            ];
        }

    &#x3C;/script&#x3E;
          </code>
        </pre>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import Tabelas from "../components/Tabelas";

export default {
  components: {
    Tabelas
  }
};
</script>