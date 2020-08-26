<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Breadcrumbs</div>
            <p>
              O componente
              <strong>v-breadcrumbs</strong> é um auxiliar de navegação para páginas. Ele pode aceitar um
              ícone ou caracteres de texto como divisores. Uma matriz de objetos pode ser passada para a propriedade 'items'
              do componente. Veja as propriedades
              <a
                href="https://vuetifyjs.com/pt-BR/components/breadcrumbs/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabBreadcrumbs />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import TabBreadcrumbs from "@/components/TabBreadcrumbs.vue";

@Component({
  components: {
    Breadcrumbs,
    TabBreadcrumbs
  }
})
export default class BreadcrumbsClass extends Vue {}
</script>