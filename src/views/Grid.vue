<template>
  <div>
    <v-container>
      <v-row wrap>
        <v-col cols="12">
          <div class="display-1 grey--text mb-5">Grids</div>
          <p>
            Com o Vuetify, você pode controlar o layout do site, sistema ou aplicação.
            Através de classes que definem o ponto de interrupção e modificação do layout para o dispositivo específico.
            Para mais informações, visitar
            <a
              href="https://vuetifyjs.com/pt-BR/framework/grid"
              target="_blank"
            >
              <strong>este link</strong>
            </a>.
            O Vuetify fornece 5 pontos de tamanhos predefinidos, definidos conforme descrito abaixo:
          </p>
          <Breakpoints />
          <h3 class="grey--text">Exemplos de uso:</h3>
          <pre class="language-html">
            <code class="language-html">
              &lt;template&gt;
                &lt;v-container class=&quot;grey lighten-5&quot;&gt;
                  &lt;v-row no-gutters&gt;
                    &lt;v-col v-for=&quot;n in 3&quot;
                            :key=&quot;n&quot; 
                            cols=&quot;12&quot;
                            sm=&quot;4&quot; &gt;
                            
                      &lt;v-card class=&quot;pa-2&quot;
                                outlined
                                tile &gt;
                              Uma de três colunas
                      &lt;/v-card&gt;
                    &lt;/v-col&gt;
                  &lt;/v-row&gt;
                &lt;/v-container&gt;
              &lt;/template&gt;
            </code>
          </pre>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Breakpoints from "@/components/Breakpoints.vue";

@Component({
  components: {
    Breakpoints
  }
})
export default class GridClass extends Vue {}
</script>