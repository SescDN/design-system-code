<template>
    <div>
        <v-container>
            <v-row wrap>
                <v-col cols="12">
                    <div class="display-1 grey--text mb-5">Introdução</div>
                    <p>
                        O Design System do Sesc Departamento Nacional é baseado na framework em JavaScript progressivo
                        <a href="https://br.vuejs.org/index.html" target="_blank">
                            <strong>Vue.js</strong>
                        </a>
                        com plugin do
                        <a href="https://www.vuetifyjs.com/pt-BR/" target="_blank"> <strong>Vuetify 2.0.20</strong> </a
                        >. Todas as bases de design, layout, espaçamentos e grid são baseados no Vuetify 2.0.20 e os
                        ícones no
                        <a href="https://material.io/tools/icons/?style=baseline" target="_blank">
                            <strong>Material Design</strong>
                        </a>
                    </p>
                    <p>
                        Antes de começar a utilizar o Design System, deve-se instalar o Vue e o
                        <a href="https://v15.vuetifyjs.com/pt-BR/getting-started/quick-start" target="_blank">
                            <strong>Vuetify</strong> </a
                        >.
                    </p>

                    <h3>Instalar o Vue</h3>
                    <pre class="language-js">
            <code class="language-js">
$ yarn global add @vue/cli
// OR
$ npm install @vue/cli -g
            </code>
          </pre>

                    <div class="mt-5">
                        <h3 class="text-xs-left">Vue CLI</h3>
                        <pre class="language-js">
              <code class="language-js">
npm install -g @vue/cli
              </code>
            </pre>
                    </div>

                    <div class="mt-5">
                        <h3>Criando um projeto</h3>
                        <pre class="language-js">
              <code class="language-js">
vue create exemplo-projeto
              </code>
            </pre>
                    </div>

                    <div class="mt-5">
                        <pre class="language-js">
              <code class="language-js">
$ ? Choose a preset: (Use arrow keys)
$ > Default (recommended)
$ Prototype (rapid development)
$ Configure (advanced)
            </code>
             </pre>
                    </div>

                    <div class="mt-5">
                        <h3 class="text-xs-left">Instalando o Vuetify</h3>
                        <pre class="language-js">
                <code class="language-js">
$ vue add vuetify
                </code>
             </pre>
                    </div>

                    <div class="mt-5">
                        <p class="text-xs-left">
                            Uma vez que o Vuetify tenha sido instalado, navegue até o ponto de entrada principal da sua
                            aplicação. Na maioria dos casos, isso estará em
                            <span class="bold">index.js</span>
                            ou
                            <span class="bold">main.js</span>. Neste arquivo você importará Vuetify e informará ao Vue
                            para utilizá-lo:
                        </p>
                        <pre class="language-js">
                <code class="language-js">
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
                </code>
             </pre>
                    </div>

                    <div class="mt-5">
                        <h3 class="text-xs-left">Instalando o Vuex</h3>
                        <p class="text-xs-left">
                            O
                            <a href="https://vuex.vuejs.org/ptbr/" target="_blank">
                                <strong>Vuex</strong>
                            </a>
                            é um padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js. Ele serve como
                            um store centralizado para todos os componentes em uma aplicação, com regras garantindo que
                            o estado só possa ser mutado de forma previsível.
                        </p>

                        <pre class="language-js">
            <code class="language-js">
npm install vuex --save
          </code>
          </pre>

                        <pre class="language-js">
            <code class="language-js">
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
          </code>
          </pre>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
