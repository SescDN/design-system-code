<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Cards e Chips</div>
            <p>
              O componente
              <strong>v-card</strong> é um componente versátil que pode ser usado para qualquer coisa, de um painel, formulários de cadastro e imagens estáticas. O componente Card possui vários componentes auxiliares.
              Você pode ver as propriedades disponíveis para os cards
              <a
                href="https://vuetifyjs.com/pt-BR/components/cards/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <p>
              Já o componente
              <strong>v-chip</strong> é usado para transmitir pequenas informações. Usando a propriedade close,
              o chip se torna interativo, permitindo a interação do usuário. Veja todas as propriedades disponíveis
              <a
                href="https://vuetifyjs.com/pt-BR/components/chips/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabChips />
            <br><br>
            <TabCards />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Chips from "@/components/Chips.vue";
import Card from "@/components/Card.vue";
import TabChips from "@/components/TabChips.vue";
import TabCards from "@/components/TabCards.vue";

@Component({
  components: {
    TabChips,
    TabCards,
    Chips,
    Card
  }
})
export default class CardsChipsClass extends Vue {}
</script>