<template>
  <div>
    <v-card class="mx-auto" width="300" outlined>
      <v-card-text class="headline">
        <h3 class="grey--text text-center">Dê uma nota para o almoço no Sesc DN</h3>
      </v-card-text>
      <v-card-text>
        <span class="grey--text">
          Se você gosta da comida servida no Condomínio Sesc-Senac, considere alguns minutos para votar
          no sabor da comida. Nos ajuda a melhorar.
        </span>
        <div class="text-center mt-12">
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$vuetify.icons.ratingFull"
            half-increments
            hover
          ></v-rating>
        </div>
      </v-card-text>
      <v-card-actions>
        <div class="text-center width-100">
          <v-btn class="primary ma-2 white--text" depressed>Votar</v-btn>
          <v-btn color="primary" class="ma-2 text-initial" outlined>Não, obrigado</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CardRatingsComponentClass extends Vue {
  private rating: number = 4.5;
}
</script>

<style scoped>
.primary {
  text-transform: initial;
  border-radius: 5px;
}
.text-initial {
  text-transform: initial;
}
.width-100 {
  width: 100%;
}
</style>