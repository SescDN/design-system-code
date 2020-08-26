  <template>
  <div class="text-center">
    <v-btn color="primary" class="text-initial" depressed dark @click="sheet = !sheet">Abrir a Sheet</v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <div
          class="py-3 text-xs-center"
        >Esta é uma Bottom Sheet com um texto. Mas você pode colocar qualquer tipo de elemento aqui dentro.</div>
        <div class="text-xs-center">
          <v-btn
            class="mt-6 text-xs-center text-initial"
            depressed
            color="primary"
            @click="sheet = !sheet"
          >Fechar</v-btn>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<style scoped>
.text-initial {
  text-transform: initial;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BottomSheetsComponentClass extends Vue {
  private sheet: boolean = false;
}
</script>