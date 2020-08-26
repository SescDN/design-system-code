<template>
  <div class="projects">
    <v-container>
      <v-row wrap>
        <v-col cols="12">
          <div class="display-1 grey--text mb-5">Botões</div>
          <p>
            Os botões são utilizados com a tag
            <strong>&lt;v-btn&gt;</strong> e com a class=&quot;primary&quot; para a cor Azul Sesc.
          </p>
          <p>
            Você pode ver as propriedades disponíveis
            <a
              href="https://v15.vuetifyjs.com/pt-BR/components/buttons"
              target="_blank"
            >
              <strong>aqui</strong>
            </a>.
          </p>
          <TabBotoes />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Botoes from "@/components/Botoes.vue";
import TabBotoes from "@/components/TabBotoes.vue";

@Component({
  components: {
    Botoes,
    TabBotoes
  }
})
export default class BotoesClass extends Vue {}
</script>