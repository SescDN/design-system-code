<template>
    <div id="menu">
        <div style="width: 200px;">
        <input type="checkbox" id="chec">
        
                <label for="chec">
                    <span class="mdi mdi-account-circle" style="font-size: 40px; color: white">
                    <span class="usuario" style="font-size: 14px;">&nbsp; Usuário</span></span>
                </label>
        </div>

                <nav class="mt-15">
                    <ul class="mt-15">
                        <li>
                             <div class="pesquisar">
                             <p style="margin-bottom: 0px"><em>Pesquisar</em></p>
                            <img src="filtro.png">
                    </div>
                        </li>
                        <li><a href="#">Painel de Scheduler <img style="margin-left: 40px" src="seta.png" /></a></li>
                        <li><a href="#">Isenção de<br>Cargos <img style="margin-left: 60px" src="seta.png" /></a></li>
                        <li><a href="#">Usuários <img style="margin-left: 50px" src="seta.png" /></a></li>
                            <!-- Descomentar para submenus <ul>
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
                        <li><a href="#">Ajuda</a></li> -->
                    </ul>
                    <!--<span class="logo-iad text-center">
                        <img src="@/assets/img/logotipo-iad.png" width="76" height="25">
                    </span>-->
                </nav>
    </div>
</template>

<style scoped>
/* Menu */
#menu {
    font-family: 'Libre Franklin', sans-serif;
    font-size: 14px;
    position: relative;
    /*left: 0;*/
    height: 100%;
    margin-top: 0px;
    z-index: 10;
}

#menu nav {
    background-color: rgba(31, 56, 91, 0.8);
    backdrop-filter: blur(10px);
    width: 170px;
    min-height: 100%;
    transition: all .5s;
    /* sombra do menu */
    -webkit-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
}

#menu nav ul li ul {
    padding: 30px 20px 40px 20px;
    width: 215px;
    left: 215px;
    top: -0px;
    position: fixed;
    background-color: rgba(13, 42, 74, .95);
    /* sombra do menu */
    -webkit-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
}

#menu nav ul ul {
    transition: all 0.5s;
    opacity: 0;
    position: relative;
    visibility: hidden;
    min-height: 100%;
    left: 90%;
    z-index: 1;
}

#menu nav ul li:hover > ul {
    opacity: 1;
    visibility: visible;
    color: #02B3C5; 
}

#menu nav ul ul li a {
    color: white;
}

#menu .menu-nivel-3 {
    padding: 30px 20px 40px 20px;
    width: 215px;
    left: 430px;
    top: -0px;
    position: fixed;
    background-color: rgba(7, 29, 52, .98);
    /* sombra do menu */
    -webkit-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
}

#menu .menu-nivel-4 {
    padding: 30px 20px 40px 20px;
    width: 215px;
    left: 640px;
    top: -0px;
    position: fixed;
    background-color: rgba(4, 20, 36, .98);
    /* sombra do menu */
    -webkit-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
    box-shadow: 10px 10px 36px -19px rgba(0,0,0,1);
}

#menu ul {
    list-style: none;
    top: 170px;
    position: absolute;
    width: 100%;
    padding-left: 10px !important;
}

#menu input[type="checkbox"] {
    display: none;
}

#menu label {
    padding: 20px 10px;
    cursor: pointer;
    position: absolute;
    z-index: 1;
}

#menu a {
    text-decoration: none;
    color: white;
    display: block;
    padding: 20px;
}

#menu a:hover {
    color: #02B3C5;
    transition: 800ms;
}

#menu .pesquisar {
    display: flex;
    align-items: center;
    margin: 0 15px 20px;
    border-bottom: 1px solid #02B3C5;
}

#menu .pesquisar img {
    margin-left: auto;
    width: 13px;
    height: 12px;
}


p, em, a, tr, tr span, span {
    font-family: "Libre Franklin";
    font-weight: 400;
    font-size: 14px;
    color: #E1E1E1;
}

em {
    color: #02B3C5;
}

.logo-iad {
	position: absolute;
    bottom: 0;
    width:100%;
    padding: 20px;
}
</style>