<template>
  <v-tabs dark slider-color="yellow" background-color="primary">
    <v-tab>Template</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <template>
            <div class="text-xs-center">
              <TabelaExpansiva />
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
                  &lt;v-data-table :headers=&quot;headers&quot;
                          :items=&quot;itens&quot;
                          sort-by=&quot;itens&quot;
                          show-select
                          :expanded.sync=&quot;expanded&quot;
                          item-key=&quot;name&quot;
                          class=&quot;bg-tabela scheduler&quot;
                          @click:row=&quot;expandir&quot;
                          locale=&quot;pt-BR&quot;
                          hide-action dark&gt;
                                   
                          &lt;template v-slot:top&gt;
                                &lt;v-dialog dark v-model=&quot;dialog&quot;
                                            max-width=&quot;500px&quot;&gt;
                                      &lt;DialogEditar /&gt;                       
                                &lt;/v-dialog&gt;
                          &lt;/template&gt;
                                                        
                          &lt;template v-slot:expanded-item=&quot;{ headers }&quot;&gt;
                                  &lt;td :colspan=&quot;1&quot; style=&quot;background-color: #162834;&quot;&gt;
                                    &lt;v-card-text class&gt;&lt;/v-card-text&gt; &lt;/td&gt;
                                        &lt;td :colspan=&quot;1&quot;&gt;
                                            &lt;v-card-text class=&quot;accent-1 white--text&quot;&gt;
                                              Sucesso
                                            &lt;/v-card-text&gt;
                                  &lt;/td&gt;

                                  &lt;td :colspan=&quot;headers.length - 2&quot;&gt;     
                                      &lt;v-card-text class=&quot;white--text&quot;&gt;
                                              Quinta-Feira, 20/05/2020, de 11:00:05 a 11:00:05
                                      &lt;/v-card-text&gt;
                                  &lt;/td&gt;
                          &lt;/template&gt;
                                                    
                          &lt;template v-slot:item.actions=&quot;{ item }&quot;&gt;
                                &lt;v-tooltip left color=&quot;#2A3944&quot;&gt;
                                      &lt;template v-slot:activator=&quot;{ on, attrs }&quot;&gt;
                                        &lt;span v-bind=&quot;attrs&quot; v-on=&quot;on&quot;&gt;
                                              &lt;v-icon small class=&quot;mr-2 hovered&quot;&gt;
                                                  mdi-plus
                                              &lt;/v-icon&gt;
                                        &lt;/span&gt;
                          &lt;/template&gt;
                                              
                          &lt;span&gt;
                              Adicionar
                          &lt;/span&gt;
                    &lt;/v-tooltip&gt;
                    
                    &lt;v-tooltip left color=&quot;#2A3944&quot;&gt;
                          &lt;template v-slot:activator=&quot;{ on, attrs }&quot;&gt;
                            &lt;span v-bind=&quot;attrs&quot; v-on=&quot;on&quot;&gt;
                                      &lt;v-icon small class=&quot;mr-2&quot;
                                            @click=&quot;editItem(item)&quot;&gt;
                                              mdi-pencil
                                      &lt;/v-icon&gt;
                            &lt;/span&gt;
                          &lt;/template&gt;
                          
                          &lt;span&gt;
                              Editar
                          &lt;/span&gt;
                    &lt;/v-tooltip&gt;
                    
                    &lt;v-tooltip left color=&quot;#2A3944&quot;&gt;
                        &lt;template v-slot:activator=&quot;{ on, attrs }&quot;&gt;
                          &lt;span v-bind=&quot;attrs&quot; v-on=&quot;on&quot;&gt;
                            &lt;v-icon small class=&quot;mr-2&quot;&gt;mdi-lock&lt;/v-icon&gt;
                          &lt;/span&gt; 
                        &lt;/template&gt;
                          &lt;span&gt;Bloquear&lt;/span&gt;
                    &lt;/v-tooltip&gt;
                    
                    &lt;v-tooltip left color=&quot;#2A3944&quot;&gt;
                        &lt;template v-slot:activator=&quot;{ on, attrs }&quot;&gt;
                          &lt;span v-bind=&quot;attrs&quot; v-on=&quot;on&quot;&gt;
                            &lt;v-icon small class=&quot;mr-2&quot; 
                                @click=&quot;deleteItem(item)&quot;&gt;
                                  mdi-delete
                            &lt;/v-icon&gt;
                          &lt;/span&gt;
                        &lt;/template&gt;
                        &lt;span&gt;Excluir&lt;/span&gt;
                    &lt;/v-tooltip&gt;
                  &lt;/template&gt;
                &lt;/v-data-table&gt;
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
              &lt;script&gt;
                export default {
                    data: () =&gt; ({
                        items: [
                            { title: 'Início' },
                            { title: 'Equipes' },
                            { title: 'Projetos' },
                            { title: 'Orçamentos' },
                        ],
                    }),
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
import TabelaExpansiva from "@/components/TabelaExpansiva.vue";

@Component({
  components: {
    TabelaExpansiva
  }
})
export default class TabMenuComponentClass extends Vue {}
</script>

<style>
.styleCode {
  width: 100%;
}
</style>