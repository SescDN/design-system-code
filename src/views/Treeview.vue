<template>
  <div>
    <v-container>
      <v-card flat>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Treeview</div>
            <p>
              O componente
              <strong>v-treeview</strong> é útil para exibir grandes quantidades de dados aninhados.
            </p>
            <p>
              Veja as propriedades disponíveis
              <a
                href="https://vuetifyjs.com/pt-BR/components/treeview"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <Treeview />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Treeview from "@/components/Treeview.vue";

@Component({
  components: {
    Treeview
  }
})
export default class TreeviewClass extends Vue {}
</script>