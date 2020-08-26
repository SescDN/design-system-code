<template>
  <div>
    <v-container>
      <v-row wrap>
        <v-col cols="12">
          <div class="display-1 grey--text mb-5">Cores</div>
          <p class="text-xs-left">
            As cores são muito importantes na identificação visual de uma marca e sua
            utilização
            de forma estratégica otimiza o reconhecimento por parte do público.
          </p>
          <p class="text-xs-left">
            O Sesc tem duas cromias institucionais e duas de apoio, que devem ser utilizadas
            em todos os veículos de comunicação.
          </p>
          <p class="text-xs-left">
            A relação abaixo apresenta as especificações técnicas para reprodução digital em
            Hexacromia e RGB.
          </p>
        </v-col>
      </v-row>

      <v-row wrap>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
          justify="center"
          align="center"
        >
          <v-card outlined class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading white--text">{{ person.name }}</div>
              <div class="grey--text white--text">{{ person.role }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class CoresClass extends Vue {
  private team: { name: string; role: string; avatar: string }[] = [
    { name: "Azul Sesc", role: "#004C99", avatar: "cor-azul-sesc.png" },
    { name: "Amarelo Sesc", role: "#F6BE00", avatar: "cor-amarelo-sesc.png" },
    { name: "Azul Claro", role: "#02B3C5", avatar: "cor-azul-01.png" },
    { name: "Azul Médio", role: "#0884A3", avatar: "cor-azul-02.png" },
    { name: "Azul Escuro", role: "#1F385B", avatar: "cor-azul-03.png" },
    { name: "Cinza Claro", role: "#D0D0CE", avatar: "cor-cinza-claro.png" },
    { name: "Cinza Médio", role: "#747678", avatar: "cor-cinza-medio.png" },
    { name: "Preto", role: "#000000", avatar: "cor-preto.png" }
  ];
}
</script>

<style scoped>
.text-xs-center.ma-3.v-card.v-card--outlined.v-sheet.theme--light {
   background-color: #11202b !important;
    color: #e1e1e1 !important;
    padding: 20px !important;
}
</style>