<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Tabs</div>
            <p class="text-xs-left">
              O componente
              <strong>v-tabs</strong> é usado para ocultar conteúdo por trás de um item selecionável.
              Isso também pode ser usado como uma pseudo-navegação para uma página, onde as guias são
              links e os itens da guia são o conteúdo.
            </p>
            <p>
              Veja as propriedades disponíveis
              <a
                href="https://vuetifyjs.com/pt-BR/components/tabs/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <h3 class="grey--text my-10">Exemplo horizontal:</h3>
            <TabTabs>
              <Tabs slot="template"></Tabs>
              <pre class="language-html" slot="codigo">
          <code class="language-html" slot="codigo">
    &lt;template&gt;
        &lt;div&gt;
          
            &lt;v-tabs 
                v-model=&quot;active&quot; 
                dark slider-color=&quot;yellow&quot; 
                color=&quot;primary&quot;&gt;
                    &lt;v-tab&gt;
                        Sesc
                    &lt;/v-tab&gt;
                    &lt;v-tab-item&gt;
                        &lt;v-card flat&gt;
                            &lt;v-card-text&gt;
                                &lt;div 
                                    class=&quot;text-xs-left&quot;&gt;
                                        Criar oportunidades para que pessoas desenvolvam todo o seu potencial, 
                                        por meio do acesso &agrave; cultura, educa&ccedil;&atilde;o, sa&uacute;de, esporte, lazer e
                                        assist&ecirc;ncia, &eacute; o que o Sesc faz diariamente, em todo o pa&iacute;s, ao longo 
                                        de mais de 7 d&eacute;cadas. S&atilde;o mais de 580 unidades dedicadas a oferecer 
                                        servi&ccedil;os e a&ccedil;&otilde;es que melhoram a qualidade de vida dos brasileiros,
                                        em especial dos trabalhadores do com&eacute;rcio de bens, servi&ccedil;os e turismo.
                                &lt;/div&gt;
                            &lt;/v-card-text&gt;
                        &lt;/v-card&gt;
                    &lt;/v-tab-item&gt;

                    &lt;v-tab&gt;
                      Tab
                    &lt;/v-tab&gt;
                    &lt;v-tab-item&gt;
                        &lt;v-card-text&gt;
                            &lt;div 
                                class=&quot;text-xs-left&quot;&gt;
                                    O Sesc, Servi&ccedil;o Social do Com&eacute;rcio, surgiu do compromisso de empres&aacute;rios 
                                    deste setor em colaborar com o cen&aacute;rio social, por meio de a&ccedil;&otilde;es que 
                                    proporcionassem melhores condi&ccedil;&otilde;es de vida a seus empregados e familiares
                                    e o desenvolvimento das comunidades onde vivem.
                            &lt;/div&gt;
                        &lt;/v-card-text&gt;
                    &lt;/v-tab-item&gt;
            &lt;/v-tabs&gt;

        &lt;/div&gt;
    &lt;/template&gt;
          </code>
        </pre>
            </TabTabs>

            <h3 class="grey--text my-6">Exemplo vertical:</h3>
            <TabTabs>
              <VerticalTabs slot="template"></VerticalTabs>
              <pre class="language-html" slot="codigo">
              <code class="language-html" slot="codigo">
                
  &lt;template&gt;
      &lt;div&gt;
        
          &lt;v-card&gt;

              &lt;v-toolbar 
                  flat color=&quot;primary&quot; 
                  dark&gt;
                  &lt;v-toolbar-title 
                      class=&quot;text-xs-center&quot;&gt;
                          &lt;img src=&quot;/sesc-logo.png&quot; /&gt;
                  &lt;/v-toolbar-title&gt;
              &lt;/v-toolbar&gt;

              &lt;v-tabs vertical&gt;

                  &lt;v-tab&gt;
                      &lt;v-icon left&gt;
                          mdi-account
                      &lt;/v-icon&gt;
                          Op&ccedil;&atilde;o 1
                  &lt;/v-tab&gt;

                  &lt;v-tab&gt;
                      &lt;v-icon left&gt;
                          mdi-lock
                      &lt;/v-icon&gt;
                          Op&ccedil;&atilde;o 2
                  &lt;/v-tab&gt;
                  
                  &lt;v-tab&gt;
                      &lt;v-icon left&gt;
                          mdi-access-point
                      &lt;/v-icon&gt;
                          Op&ccedil;&atilde;o 3
                  &lt;/v-tab&gt;

                  &lt;v-tab-item&gt;
                      &lt;v-card flat&gt;
                          &lt;v-card-text&gt;
                              &lt;p&gt;
                                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. 
                                  Etiam feugiat lorem non metus. Sed a libero.
                              &lt;/p&gt;
                              &lt;p&gt;
                                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean 
                                  tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis.
                                  Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                              &lt;/p&gt;
                              &lt;p
                              class=&quot;mb-0&quot;&gt;
                                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque 
                                  libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus 
                                  blandit leo ut odio.
                              &lt;/p&gt;
                          &lt;/v-card-text&gt;
                      &lt;/v-card&gt;
                  &lt;/v-tab-item&gt;

                  &lt;v-tab-item&gt;
                      &lt;v-card flat&gt;
                          &lt;v-card-text&gt;
                              &lt;p&gt;
                                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus 
                                  ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, 
                                  eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor 
                                  urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere 
                                  imperdiet, leo. Nunc sed turpis.
                              &lt;/p&gt;
                              &lt;p&gt;
                                  Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, 
                                  lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin 
                                  viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a 
                                  accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac 
                                  felis sit amet ligula pharetra condimentum.
                              &lt;/p&gt;
                              &lt;p&gt;
                                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis 
                                  gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer 
                                  turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                              &lt;/p&gt;
                              &lt;p&gt;
                                  Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. 
                                  Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                              &lt;/p&gt;
                              &lt;p
                              class=&quot;mb-0&quot;&gt;
                                  onec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna,
                                  posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam 
                                  arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                              &lt;/p&gt;
                          &lt;/v-card-text&gt;
                      &lt;/v-card&gt;
                  &lt;/v-tab-item&gt;
                  
                  &lt;v-tab-item&gt;
                      &lt;v-card 
                      flat&gt;
                          &lt;v-card-text&gt;
                              &lt;p&gt;
                                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget 
                                  dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique 
                                  sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, 
                                  vestibulum et, tempor auctor, justo.
                              &lt;/p&gt;
                              &lt;p
                              class=&quot;mb-0&quot;&gt;
                                  Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin 
                                  sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, 
                                  ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus 
                                  interdum sagittis.
                              &lt;/p&gt;
                          &lt;/v-card-text&gt;
                      &lt;/v-card&gt;
                  &lt;/v-tab-item&gt;

              &lt;/v-tabs&gt;
            
          &lt;/v-card&gt;

      &lt;/div&gt;
  &lt;/template&gt;
              </code>
              </pre>
            </TabTabs>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import TabTabs from "@/components/TabTabs.vue";
import VerticalTabs from "@/components/VerticalTabs.vue";

@Component({
  components: {
    Tabs,
    TabTabs,
    VerticalTabs
  }
})
export default class TabsClass extends Vue {}
</script>