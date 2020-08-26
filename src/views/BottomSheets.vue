<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Bottom Sheets</div>
            <p>
              O bottom sheet é um
              <strong>v-dialog</strong> modificado que é deslizado da parte
              inferior da tela, similar a um v-bottom-navigation. Enquanto um componente de navegação
              inferior é para botões e ações de nível da aplicação, um bottom sheet pode conter
              qualquer coisa.
            </p>
            <p>
              Veja as propriedades do BottomSheets
              <a
                href="https://vuetifyjs.com/pt-BR/components/bottom-sheets"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabBottomSheets />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BottomSheets from "@/components/BottomSheets.vue";
import TabBottomSheets from "@/components/TabBottomSheets.vue";

@Component({
  components: {
    BottomSheets,
    TabBottomSheets
  }
})
export default class BottomSheetsClass extends Vue {}
</script>