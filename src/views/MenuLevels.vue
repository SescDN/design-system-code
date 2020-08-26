<template>
    <div class="app">
        <v-container>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Menu Levels</div>
            <p>
              O componente
              <strong>v-menu-levels</strong> possui transparência e desfoque e é recomendada a sua utilização
              com fundos e em temas de cor escura. Possui até 4 níveis, podendo ser configurada esta propriedade dentro do componente.
            </p>
            <br>
             <TabMenuTranslucido />
          </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import TabMenuTranslucido from  "./../components/TabMenuTranslucido"

export default {
    components: {
        TabMenuTranslucido
    }
}
</script>