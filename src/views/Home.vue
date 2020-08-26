<template>
    <div class="projects">
        <v-container>
            <div class="display-1 dark mb-5">Starter Kit</div>
            <v-card flat class="mb-5 dark">
                <v-row wrap>
                    <v-col cols="12">
                        <p>
                            O Starter Kit contém visões prontas que você pode integrar diretamente ao seu projeto e ao
                            seu BackEnd. Baixe a versão 1.0 clicando no botão abaixo.
                        </p>
                        <v-row class="text-center" justify-center align-center>
                            <a href="https://homolog-net.sesc.com.br/tipografia/design-system/downloads/SK-1.1.zip">
                            <v-btn depressed class="text-capitalize ml-2" color="primary">Starter Kit 1.1</v-btn>
                            </a>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
            <div class="display-1 grey--text mb-5">O que é um Design System?</div>
            <v-img src="/img-design-system.jpg" />
                <v-row wrap>
                    <v-col cols="12">
                        <p>
                            É documento vivo com todos os componentes e propriedades de um produto ou serviço para
                            facilitar a comunicação do time. Beneficia tanto o software como a comunicação, as pessoas,
                            os negócios e traz agilidade no longo prazo. Ele pode conter itens básicos como cores,
                            tipografia, marca e até mesmo pedaços de códigos. Além disso, em produtos digitais temos
                            incorporados outros elementos como o Motion Design, que explica como esses elementos devem
                            se comportar quando são animados na interface. Este é o Design System do Sesc -
                            Administração Nacional.
                        </p>
                    </v-col>
                </v-row>
                <v-row wrap>
                    <v-col cols="12">
                        <div class="display-1 grey--text mb-5">Componentes</div>
                        <v-img src="img-componentes.jpg" class="mb-5" />
                        <p>
                            Os componentes do Design System são baseados em VueJS, um framework em JavaScript
                            Progressivo, aliado ao plugin Vuetify (especificamente a versão 1.5.18), que é baseado no
                            Material Design. Foram feitas algumas adaptações estéticas e visuais na anatomia dos
                            componentes para que se enquadrem à necessidade do Sesc - Administração Nacional.
                        </p>
                        <p>Utilize a barra de navegação ao lado para acessar o componente desejado.</p>
                        <p>
                            Você pode ler mais sobre
                            <a href="https://br.vuejs.org/index.html" target="_blank"><strong>Vue</strong></a> e
                            <a href="https://v15.vuetifyjs.com/pt-BR/getting-started/quick-start" target="_blank"
                                ><strong>Vuetify</strong></a
                            >.
                        </p>
                    </v-col>
                </v-row>
        </v-container>
    </div>
</template>
