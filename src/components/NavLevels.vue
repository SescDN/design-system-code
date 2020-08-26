<template>
    <div>
        <v-app>
                <input type="checkbox" id="chec">
                <label for="chec">
                    <img src="/assets/avatar.svg">
                </label>
                <nav>
                    <ul>
                        <li><a href="#">Administração</a></li>
                        <li><a href="#">Aprovação</a></li>
                        <li><a href="#">Comunicação</a></li>
                        <li><a href="#">Compras</a>
                            <ul>
                                <li><a href="#">Tabelas</a></li>
                                <li><a href="#">Requisição de Compra - ROM</a></li>
                                <li><a href="#">Consultas</a></li>
                                <li><a href="#">Histórico de Processos</a></li>
                                <li><a href="#">Distribuição de ROMS</a></li>
                                <li><a href="#">Processo de Compra</a></li>
                                <li><a href="#">Despachos</a></li>
                                <li><a href="#">Consulta de Pedidos</a></li>
                                <li><a href="#">Recebimento de Produtos</a></li>
                                <li><a href="#">Relatórios Gerenciais</a>
                                    <ul class="menu-nivel-3">
                                        <li><a href="#">Gestão de Compras</a></li>
                                        <li><a href="#">Relatórios de Auditoria</a></li>
                                        <li><a href="#">Relatórios Diversos</a>
                                            <ul class="menu-nivel-4">
                                                <li><a href="#">Ficha Técnica do Fornecedor</a></li>
                                                <li><a href="#">Financeiro de Agrupamento</a></li>
                                                <li><a href="#">Recebimentos Realizados no Período</a></li>
                                                <li><a href="#">Recebimento de Processos Realizados</a></li>
                                                <li><a href="#">Gastos por Grupo de Afinidades</a></li>
                                                <li><a href="#">Fornecedores Suspensos</a></li>
                                                <li><a href="#">Fornecedores em Atraso na Entrega</a></li>
                                                <li><a href="#">Acompanhamento de Pedidos Realizados e Recebidos</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Cubos de Decisão</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Auditoria CGU</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Almoxarifado</a></li>
                        <li><a href="#">Patrimônio</a></li>
                        <li><a href="#">Fundo Rotativo</a></li>
                        <li><a href="#">Consultas</a></li>
                        <li><a href="#">Ajuda</a></li>
                    </ul>
                </nav>
        </v-app>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
}
#app a {
    text-decoration: none;
    color: white;
    display: block;
    padding: 20px;
}

#app a:hover {
    color: #02B3C5;
    transition: 800ms;
}

#app {
    font-family: 'Libre Franklin', sans-serif;
    background: url(./../assets/background.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

#app h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Franklin', sans-serif; 
}

#app h1 {
    font-size: 30px;
    font-weight: 300;
    color: white;
}

#app h5 {
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
    color: #02B3C5;
}

#app nav {
    position: absolute;
    background-color: rgba(31, 56, 91, .98);
    width: 240px;
    min-height: 100%;
    left: -240px;
    transition: all .5s;
    /* sombra do menu */
    -webkit-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
}

#app nav ul li ul {
    padding: 30px 20px 40px 20px;
    width: 240px;
    left: 240px;
    top: -0px;
    position: fixed;
    background-color: rgba(13, 42, 74, .95);
    /* sombra do menu */
    -webkit-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
}

#app nav ul ul {
    transition: all 0.5s;
    opacity: 0;
    position: relative;
    visibility: hidden;
    min-height: 100%;
    left: 90%;
    z-index: 1;
}

#app nav ul li:hover > ul {
    opacity: 1;
    visibility: visible;
    color: #02B3C5; 
}

#app nav ul ul li a {
    color: white;
}

#app .menu-nivel-3 {
    padding: 30px 20px 40px 20px;
    width: 240px;
    left: 480px;
    top: -0px;
    position: fixed;
    background-color: rgba(7, 29, 52, .98);
    /* sombra do menu */
    -webkit-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
}

#app .menu-nivel-4 {
    padding: 30px 20px 40px 20px;
    width: 240px;
    left: 720px;
    top: -0px;
    position: fixed;
    background-color: rgba(4, 20, 36, .98);
    /* sombra do menu */
    -webkit-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
}

#app input[type="checkbox"]:checked ~ nav {
    transform: translateX(240px);
}

#app ul {
    list-style: none;
    top: 70px;
    position: absolute;
    width: 100%;
}

#app img {
    width: 40px;
}

#app input[type="checkbox"] {
    display: none;
}

#app label {
    padding: 20px;
    cursor: pointer;
    position: absolute;
    z-index: 1;
}

    </style>