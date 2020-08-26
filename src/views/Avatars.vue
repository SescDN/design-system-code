<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Avatars</div>
            <p class="text-xs-left">
              Os avatars do Design System podem conter apenas as iniciais do usuário ou imagens. Possuem uma border-radius de 50px, deixando-os totalmente circulares.
              Ao utilizar o Vuetify, basta utilizar a tag
              <strong>v-avatar</strong> para chegar a este design.
              Para ver as propriedades referentes ao componente avatar, clique
              <a
                href="https://vuetifyjs.com/pt-BR/components/avatars"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabAvatars />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Avatars from "@/components/Avatars.vue";
import TabAvatars from "@/components/TabAvatars.vue";

@Component({
  components: {
    Avatars,
    TabAvatars
  }
})
export default class AvatarsClass extends Vue {}
</script>