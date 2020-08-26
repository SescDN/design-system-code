<template>
  <div class="dashboard">
    <v-container>
      <v-row wrap>
        <v-col cols="12">
          <div class="display-1 grey--text mb-5">Ícones</div>
            <p>
              Todos os ícones contidos no Design System estão disponíveis na biblioteca do
              <a href="https://fonts.googleapis.com/icon?family=Material+Icons" target="_blank">
                <strong>Material Design</strong>
              </a>.
            </p>
            <h3>Instalando os ícones:</h3>
            <br />
            <pre class="language-js">
            <code class="language-js">
              $ yarn add @mdi/font -D
              // OR
              $ npm install @mdi/font -D
            </code>
            </pre>
            <pre class="language-js">
            <code class="language-js">
              import '@mdi/font/css/materialdesignicons.css'
              import Vue from 'vue'
              import Vuetify from 'vuetify/lib'
              
              Vue.use(Vuetify)

              export default new Vuetify({
                  icons: {
                  iconfont: 'mdi',
                },
              })
            </code>
            </pre>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
