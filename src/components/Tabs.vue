<template>
  <div>
    <v-tabs v-model="active" dark slider-color="yellow" background-color="primary">
      <v-tab>Sesc</v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="text-xs-left white--text">
              Criar oportunidades para que pessoas desenvolvam todo o seu potencial,
              por meio do acesso à cultura, educação, saúde, esporte, lazer e
              assistência, é o que o Sesc faz diariamente, em todo o país, ao longo
              de mais de 7 décadas. São mais de 580 unidades dedicadas a oferecer
              serviços e ações que melhoram a qualidade de vida dos brasileiros,
              em especial dos trabalhadores do comércio de bens, serviços e turismo.
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab>Tab</v-tab>
      <v-tab-item>
        <v-card-text>
          <div class="text-xs-left">
            O Sesc, Serviço Social do Comércio, surgiu do compromisso de empresários
            deste setor em colaborar com o cenário social, por meio de ações que
            proporcionassem melhores condições de vida a seus empregados e familiares
            e o desenvolvimento das comunidades onde vivem.
          </div>
        </v-card-text>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TabsComponentClass extends Vue {
  private active: boolean = true;
}
</script>