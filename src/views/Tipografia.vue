<template>
    <div>
        <v-container>             
          <v-row wrap>
            <v-col cols="12">
                    <div class="display-1 grey--text mb-5">Tipografia</div>
                  <p><strong>Libre Franklin</strong> é a fonte utilizada no Design System do Sesc Departamento Nacional. Esta família de fontes é otimizada para dar legibilidade, clareza e consistência incomparáveis ao texto.</p>
                  <p>Faça o download da família de fontes <a href="https://fonts.google.com/specimen/Libre+Franklin" target="_blank"><strong>Libre Franklin</strong></a> e <a href="https://fonts.google.com/specimen/Libre+Franklin" target="_blank"><strong>Libre Franklin</strong></a> no Google Fonts.</p>
                  <p>Enfatize informações importantes. Use o tamanho, o peso e a cor da fonte para destacar as informações mais importantes do seu sistema. Se possível, use um único tipo de fonte.</p>
                  <p>A mistura de vários tipos diferentes pode fazer com que seu sistema pareça fragmentado e desleixado. Considere o uso de um tipo de fonte e apenas algumas variantes de peso e tamanhos.
                  Use estilos de texto iguais sempre que possível. Os estilos e peso das fontes permitem expressar o conteúdo de maneiras visualmente distintas, mantendo a legibilidade ideal. Esses estilos são baseados nas fontes do sistema e permitem que você aproveite os principais recursos tipográficos, como o Tipo Dinâmico, que ajusta automaticamente o rastreamento e o direcionamento para cada tamanho de fonte. O Design System inclui os seguintes estilos de texto:</p>
            </v-col>
          </v-row>

          <v-row wrap>
            <v-col cols="12" md="6">
              <v-card class="my-5 pa-5 card-dark" outlined>
                    <h1 class="grey--text mb-5">Cabeçalho 1</h1>
                    <h2 class="grey--text mb-5">Cabeçalho 2</h2>
                    <h3 class="grey--text mb-5">Cabeçalho 3</h3>
                    <h4 class="grey--text mb-5">Cabeçalho 4</h4>
                    <h5 class="grey--text mb-5">Cabeçalho 5</h5>
                    <div class="subtitle-2 grey--text mb-5">Subtitle 1</div>
                    <div class="body-2 grey--text mb-5">Body</div>
                    <div class="caption grey--text mb-5">Caption</div>
                    <div class="overline grey--text mb-5">Overline</div>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card class="my-5 pa-5 card-dark" outlined>
                    <div class="font-weight-light grey--text mb-5">Font Weight Light</div>
                    <div class="font-weight-medium grey--text mb-5">Font Weight Medium</div>
                    <div class="font-weight-bold grey--text mb-5">Font Weight Bold</div>
                    <div class="font-weight-black grey--text mb-5">Font Weight Black</div>
                    <div class="font-italic font-weight-light grey--text mb-5">Font Weight Light &amp; Italic</div>
                    <div class="font-italic font-weight-medium grey--text mb-5">Caption</div>
                    <div class="font-italic font-weight-bold grey--text mb-5">Caption</div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

    </div>
    
</template>

<script>
export default {
   data() {
     return {
       team: [
          { name: 'Net Ninja', role: 'Front-End Developer', avatar: '/avatar-1.png' },
          { name: 'Ryu', role: 'UX Designer', avatar: '/avatar-2.png' },
          { name: 'Chun Li', role: 'Back-End Developer', avatar: '/avatar-3.png' },
          { name: 'Gouken', role: 'SCRUM Master', avatar: '/avatar-4.png' },
          { name: 'Yoshi', role: 'Marketing', avatar: '/avatar-5.png' }  
       ],
     }
   } 
}
</script>
