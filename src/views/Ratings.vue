<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Ratings</div>

            <p>
              O componente
              <strong>v-rating</strong> é usado para que o usuário possa dar feedback para alguma aplicação ou serviço.
            </p>
            <p>
              Veja as propriedades
              <a href="https://vuetifyjs.com/pt-BR/components/ratings/" target="_blank">
                <strong>aqui</strong>
              </a>.
            </p>
            <TabRatings />
            <br><br>
            <TabCardRatings />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabRatings from "@/components/TabRatings.vue";
import TabCardRatings from "@/components/TabCardRatings.vue";

@Component({
  components: {
    TabRatings,
    TabCardRatings
  }
})
export default class RatingsClass extends Vue {}
</script>

