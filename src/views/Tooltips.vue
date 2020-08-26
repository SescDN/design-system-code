<template>
  <div>
    <v-container>
      <v-card flat>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Tooltips</div>
            <p>
              O componente
              <strong>v-tooltip</strong> é útil para transmitir informações quando um usuário paira o mouse sobre um elemento. Você também pode controlar a exibição das tooltips programaticamente utilizando o v-model
            </p>
            <p>
              Veja as propriedades disponíveis
              <a
                href="https://vuetifyjs.com/pt-BR/components/tooltips/"
                target="_blank"
              >
                <strong>aqui</strong>
              </a>.
            </p>
            <TabTooltips />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabTooltips from "@/components/TabTooltips.vue";

@Component({
  components: {
    TabTooltips
  }
})
export default class TooltipsClass extends Vue {}
</script>