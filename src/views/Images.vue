<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Imagens</div>
            <p>
              O componente
              <strong>v-img</strong> permite exibir imagens responsivas (se redimensionam conforme a resolução da tela).
            </p>
            <p>
              Você pode ver as propriedades disponíveis
              <a
                href="https://vuetifyjs.com/pt-BR/components/images/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabImages />
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Images from "@/components/Images.vue";
import TabImages from "@/components/TabImages.vue";

@Component({
  components: {
    Images,
    TabImages
  }
})
export default class ImagesClass extends Vue {}
</script>