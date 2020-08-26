<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Paginação</div>
          </v-col>
        </v-row>
        <p class="text-xs-left">
          O componente de paginação é criado com a tag
          <strong>v-pagination</strong> e serve
          para criar a numeração de páginas em uma aplicação ou sistema. Veja as propriedades
          <a
            href="https://vuetifyjs.com/pt-BR/components/paginations/"
            target="_blank"
          >
            <strong>aqui</strong>
          </a>.
        </p>
        <TabPaginacao />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabPaginacao from "@/components/TabPaginacao.vue";

@Component({
  components: {
    TabPaginacao
  }
})
export default class PaginacaoClass extends Vue {}
</script>