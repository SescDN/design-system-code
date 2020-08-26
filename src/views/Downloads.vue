<template>
  <div>
    <v-container>
      <v-card flat>
        <v-row wrap>
          <v-col cols="12">
            <div class="display-1 grey--text mb-5">Downloads</div>
            <p>
              Nesta sessão você poderá baixar o PDF completo com as especificações de cada elemento do Design System.
              Isto é muito útil para quem está trabalhando com sistemas que não utilizem o Vue e Vuetify. Também poderá
              baixar o arquivo em Adobe XD para criar visões e interações mais rapidamente (somente para designers).
            </p>
            <div class="text-xs-center">
              <v-row class="text-center" justify-center align-center>
                <a href="https://10.1.0.113/tipografia/design-system/starter-kit.zip">
                  <v-btn depressed class="text-capitalize" color="primary">
                    <v-icon small left>get_app</v-icon>
                    <span>Baixar StarterKit</span>
                  </v-btn>
                </a>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<style>
.styleCode {
  width: 500px;
}
</style>