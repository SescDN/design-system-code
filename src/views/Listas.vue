<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Listas</div>
            <p class="text-xs-left">
              O componente
              <strong>v-list</strong> é usado para exibir informações. Pode conter um avatar, conteúdo, ações, subtítulos e muito mais.
              As listas podem conter "filhos" (children) e são usadas na barra lateral. Além disso, podem receber uma variedade de itens.
            </p>
            <p>
              Veja as propriedas que as listas podem receber
              <a
                href="https://vuetifyjs.com/pt-BR/components/lists/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabListas />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabListas from "@/components/TabListas.vue";

@Component({
  components: {
    TabListas
  }
})
export default class ListasClass extends Vue {}
</script>
