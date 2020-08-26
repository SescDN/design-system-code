<template>
  <div>
    <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text">Menus</div>
            <p>
              O componente v-menu mostra um menu na posição do elemento que está sendo usado para ativá-lo. Pode receber uma lista em formato dropdown.
              Se o menu for composto de links, devem ser utilizados
              <strong>v-btn</strong> com links, junto a uma Barra de Navegação.
            </p>
            <p>
              Você pode ver as propriedades disponíveis
              <a href="https://v15.vuetifyjs.com/pt-BR/components/menus" target="_blank">
                <strong>aqui</strong>
              </a>.
            </p>
            <div class="text-xs-center">
              <TabMenus />
              <br />
              <br />
              <h3 class="grey--text">Menu Azul Sesc:</h3>
              <br />
              <MenuAzulSesc />
              <br />
              <br />
              <h3 class="grey--text">Menu Cinza Sesc:</h3>
              <br />
              <MenuCinzaSesc />
            </div>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menus from "@/components/Menus.vue";
import TabMenus from "@/components/TabMenus.vue";
import MenuAzulSesc from "@/components/MenuAzulSesc.vue";
import MenuCinzaSesc from "@/components/MenuCinzaSesc.vue";

@Component({
  components: {
    Menus,
    TabMenus,
    MenuAzulSesc,
    MenuCinzaSesc
  }
})
export default class MenuClass extends Vue {}
</script>