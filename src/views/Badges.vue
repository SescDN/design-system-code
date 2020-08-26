<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Badges</div>
            <p class="text-xs-left">
              Para se utilizar os badges com o Vuetify, deve-se utilizar a tag
              <strong>v-badge</strong> e depois o ícone.
              Para que o badge fique acima do ícone, deve-se utilizar a propriedade overlap.
              Para posicionar abaixo do ícone, deve-se utilizar também a propriedade bottom.
              <br />
            </p>
            <p>
              Você pode ver as propriedades que o &lt;v-badge&gt; pode receber
              <a
                href="https://vuetifyjs.com/pt-BR/components/badges/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>. Todos os ícones são vetoriais (svg) e fazem parte do
              <a
                href="https://materialdesignicons.com/"
                target="_blank"
              >
                <strong>Material Design</strong>
              </a>.
            </p>
            <TabBadges />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Badges from "@/components/Badges.vue";
import TabBadges from "@/components/TabBadges.vue";

@Component({
  components: {
    Badges,
    TabBadges
  }
})
export default class BadgesClass extends Vue {}
</script>