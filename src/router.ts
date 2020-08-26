import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from './views/Home.vue';
import Versoes from './views/Versoes.vue';
import Downloads from './views/Downloads.vue';

import Cores from './views/Cores.vue';
import Tipografia from './views/Tipografia.vue';
import Icones from './views/Icones.vue';
import Grid from './views/Grid.vue';
import Acordeao from './views/Acordeao.vue';
import Alertas from './views/Alertas.vue';
import Avatars from './views/Avatars.vue';
import Badges from './views/Badges.vue';
import BarraProgresso from './views/BarraProgresso.vue';
import Botoes from './views/Botoes.vue';
import BottomSheets from './views/BottomSheets.vue';
import Breadcrumbs from './views/Breadcrumbs.vue';
import CaixaDialogos from './views/CaixaDialogos.vue';
import CardsChips from './views/CardsChips.vue';
import Inputs from './views/Inputs.vue';
import Images from './views/Images.vue';
import Menus from './views/Menus.vue';
import MenuGaveta from './views/MenuGaveta.vue';
import Graficos from './views/Graficos.vue';
import Listas from './views/Listas.vue';
import Paginacao from './views/Paginacao.vue';
import Tabs from './views/Tabs.vue';
import Tabelas from './views/Tabelas.vue';
import TabelaExpansiva from './views/TabelaExpansiva.vue';
import Tooltips from './views/Tooltips.vue';
import Treeview from './views/Treeview.vue';
import Ratings from './views/Ratings.vue';
import Snackbars from './views/Snackbars.vue';
import Steppers from './views/Steppers.vue';
import MenuLevels from './views/MenuLevels.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '*/',
        name: 'home',
        component: Home,
    },
    {
        path: '/versoes',
        name: 'versoes',
        component: Versoes,
    },
    {
        path: '/downloads',
        name: 'downloads',
        component: Downloads,
    },
    {
        path: '/cores',
        name: 'cores',
        component: Cores,
    },
    {
        path: '/tipografia',
        name: 'tipografia',
        component: Tipografia,
    },
    {
        path: '/icones',
        name: 'icones',
        component: Icones,
    },
    {
        path: '/grid',
        name: 'grid',
        component: Grid,
    },
    {
        path: '/acordeao',
        name: 'acordeao',
        component: Acordeao,
    },
    {
        path: '/alertas',
        name: 'alertas',
        component: Alertas,
    },
    {
        path: '/avatars',
        name: 'avatars',
        component: Avatars,
    },
    {
        path: '/badges',
        name: 'badges',
        component: Badges,
    },
    {
        path: '/barraprogresso',
        name: 'barraprogresso',
        component: BarraProgresso,
    },
    {
        path: '/botoes',
        name: 'botoes',
        component: Botoes,
    },
    {
        path: '/bottomsheets',
        name: 'bottomsheets',
        component: BottomSheets,
    },
    {
        path: '/breadcrumbs',
        name: 'breadcrumbs',
        component: Breadcrumbs,
    },
    {
        path: '/caixadialogos',
        name: 'caixadialogos',
        component: CaixaDialogos,
    },
    {
        path: '/cardschips',
        name: 'cardschips',
        component: CardsChips,
    },
    {
        path: '/inputs',
        name: 'inputs',
        component: Inputs,
    },
    {
        path: '/images',
        name: 'Images',
        component: Images,
    },
    {
        path: '/menus',
        name: 'menus',
        component: Menus,
    },
    {
        path: '/menugaveta',
        name: 'menugaveta',
        component: MenuGaveta,
    },
    {
        path: '/graficos',
        name: 'graficos',
        component: Graficos,
    },
    {
        path: '/listas',
        name: 'listas',
        component: Listas,
    },
    {
        path: '/paginacao',
        name: 'paginacao',
        component: Paginacao,
    },
    {
        path: '/tabs',
        name: 'tabs',
        component: Tabs,
    },
    {
        path: '/tabelas',
        name: 'tabelas',
        component: Tabelas,
    },
    {
        path: '/tabelaexpansiva',
        name: 'tabelaexpansiva',
        component: TabelaExpansiva,
    },
    {
        path: '/tooltips',
        name: 'tooltips',
        component: Tooltips,
    },
    {
        path: '/treeview',
        name: 'treeview',
        component: Treeview,
    },
    {
        path: '/ratings',
        name: 'ratings',
        component: Ratings,
    },
    {
        path: '/snackbars',
        name: 'snackbars',
        component: Snackbars,
    },
    {
        path: '/steppers',
        name: 'steppers',
        component: Steppers,
    },
    {
        path: '/navlevels',
        name: 'menulevels', 
        component: MenuLevels,
      },
];

const router = new VueRouter({
    mode: 'history',
    base: "/design-system/",
    routes,
});

export default router;
