<template>
  <div>
    <v-container>
      <v-card flat>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Snackbars</div>
            <p>
              O componente
              <strong>v-snackbar</strong> é usado para exibir uma mensagem rápida
              para o usuário.
            </p>
            <p>
              Veja as propriedades
              <a href="https://vuetifyjs.com/pt-BR/components/snackbars/" target="_blank">
                <strong>aqui</strong>
              </a>.
            </p>
            <TabSnackbars />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Snackbars from "@/components/Snackbars.vue";
import TabSnackbars from "@/components/TabSnackbars.vue";

@Component({
  components: {
    Snackbars,
    TabSnackbars
  }
})
export default class SnackbarsClass extends Vue {}
</script>