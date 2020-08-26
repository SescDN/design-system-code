<template>
  <div class="projects">
    <v-container>
      <div class="display-1 dark mb-5">Histórico de evolução do produto</div>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <v-card flat class="mb-5 dark">
            <h3><span class="mdi mdi-code-braces"></span> Versão 1.2</h3>
            <br>
            <ul>
                <li>Compatibilidade com a versão 2.3.6 do Vuetify e também compatível com a versão do Vue CLI 3.0.</li>
                <li>Adição de nova paleta de cores e componentes novos: Menu Horizontal com Níveis, Tabela Expansiva e Modal.</li>
                <li>Possibilidade de tema escuro.</li>
            </ul>
            <br>
            <a href="/starter-kit.zip">
              <v-btn depressed class="text-capitalize ml-2" color="primary">DS v1.2</v-btn>
            </a>
          </v-card>
        </v-col>

        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <v-card flat class="mb-5 dark">
            <h3><span class="mdi mdi-code-braces"></span> Versão 1.1</h3>
            <br>
            <ul>
                <li>Corrigidos problemas nos componentes: Barra de Navegação e foi adicionada a Barra de Navegação Mini.</li>
                <li>Adição e suporte ao TypeScript.</li>
                <li>Atualização dos Gráficos baseados no Google Charts.</li>
                <li>Atualização do Vuetify 2.0.</li>
            </ul>
            <br>
            <a href="/starter-kit.zip">
              <v-btn depressed class="text-capitalize ml-2" color="primary">DS v1.1</v-btn>
            </a>
          </v-card>
        </v-col>

        <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <v-card flat class="mb-5 dark">
            <h3><span class="mdi mdi-code-braces"></span> Versão 1.0</h3>
            <br>
            <ul>
                <li>Versão embrionária do Design System.</li>
                <li>Possui componentes básicos como menus, botões, acordeões, tabelas, alertas, inputs, formulários e caixas
              de diálogos.</li>
                <li>Somente suportável se utilizado na versão 1.5 do Vuetify e do Vue CLI 2.0.</li>
            </ul>
            <br>
            <a href="/starter-kit.zip">
              <v-btn depressed class="text-capitalize ml-2" color="primary">DS v1.0</v-btn>
            </a>
          </v-card>
        </v-col>
      </v-row>

      <div class="display-1 dark mb-5">StarterKit</div>
      <v-row>
          <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <v-card flat class="mb-5 dark">
            <h3><span class="mdi mdi-ungroup"></span> Versão 1.1</h3>
            <p>
              Foram adicionados templates disponíveis com o tema escuro, menu horizontal com níveis, tabela expansiva e modal.
              <br>
              <br>A versão 1.1 possui:
              <ul>
                  <li>Login</li>
                  <li>Menu de navegação horizontal em níveis</li>
                  <li>Tabela expansiva</li>
                  <li>Modal</li>
              </ul>
            </p>
            <a href="/starter-kit.zip">
              <v-btn depressed class="text-capitalize ml-2" color="primary">StarterKit v1.1</v-btn>
            </a>
          </v-card>
        </v-col>
          <v-col cols="12" lg="4" md="4" sm="12" xs="12">
          <v-card flat class="mb-5 dark">
            <h3><span class="mdi mdi-ungroup"></span> Versão 1.0</h3>
            <p>
              Esta versão contempla uma série de templates prontos para serem utilizados <em>on-demand</em>.
              <br>
              <br>A versão 1.0 possui:
              <ul>
                  <li>Login</li>
                  <li>Menu de navegação expansivo</li>
                  <li>Tabelas com filtro por data e pesquisa</li>
                  <li>Formulário para cadastros</li>
              </ul>
            </p>
            <a href="/starter-kit.zip">
              <v-btn depressed class="text-capitalize ml-2" color="primary">StarterKit v1.0</v-btn>
            </a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
