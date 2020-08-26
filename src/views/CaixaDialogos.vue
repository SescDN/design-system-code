<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Caixa de Diálogos</div>
            <p>O componente de diálogo informa os usuários sobre uma tarefa específica e pode conter informações críticas, exigir decisões ou envolver várias tarefas. Use diálogos com moderação, porque são interruptivos.</p>
            <p>
              Você pode ver as propriedades disponíveis
              <a
                href="https://vuetifyjs.com/pt-BR/components/dialogs"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <div class="text-xs-center mb-5">
              <Popup />
              <PopupForm />
              <PopupAlerta />
              <PopupAlertaSucesso />
            </div>
            <div class="text-xs-center my-10">
              <TabCaixaDialogos />
            </div>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Popup from "@/components/Popup.vue";
import PopupForm from "@/components/PopupForm.vue";
import PopupAlerta from "@/components/PopupAlerta.vue";
import PopupAlertaSucesso from "@/components/PopupAlertaSucesso.vue";
import TabCaixaDialogos from "@/components/TabCaixaDialogos.vue";

@Component({
  components: {
    Popup,
    PopupForm,
    PopupAlerta,
    PopupAlertaSucesso,
    TabCaixaDialogos
  }
})
export default class CaixaDialogosClass extends Vue {}
</script>