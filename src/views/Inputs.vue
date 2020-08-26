<template>
  <v-container>
      <v-row wrap>
        <v-col cols="12">
          <div class="display-1 grey--text mb-5">Inputs</div>
          <p>
            Esta página contém uma série de exemplos de formulários completos e inputs que podem ser
            facilmente adicionados a qualquer projeto. O componente
            <strong>v-form</strong> facilita
            a adição de validação para os campos. Todos os componentes input têm um suporte de regras
            que aceita uma matriz de funções. Essas funções, por sua vez, permitem especificar condições
            nas quais o campo é válido ou inválido. Sempre que o valor de uma entrada é alterado,
            cada função na matriz recebe o novo valor. Se uma função retornar false ou uma
            <em>string</em>,
            a validação falhou.
          </p>
          <p>
            Confira as propriedades para v-form
            <a
              href="https://vuetifyjs.com/pt-BR/components/forms"
              target="_blank"
            >
              <strong>aqui</strong>
            </a>.
          </p>

          <h3 class="grey--text my-5">Exemplo de formulário</h3>
        </v-col>
      </v-row>
    <TabInputs />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabInputs from "@/components/TabInputs.vue";

@Component({
  components: {
    TabInputs
  }
})
export default class InputsClass extends Vue {}
</script>