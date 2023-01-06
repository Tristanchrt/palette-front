import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomePage from './primary/views/homePage/HomePage.vue';
import ItemListPage from './primary/views/itemPage/ItemListPage.vue';
import ItemPage from './primary/views/itemPage/ItemPage.vue';
import ChatPage from './primary/views/chatPage/ChatPage.vue'
import CheckoutPage from './primary/views/checkout/CheckoutPage.vue'
import OrgMainMenu from "./primary/components/layout/header/mainMenu/Org-MainMenu.vue";
import ProfilPage from "./primary/views/profil/components/userProfil/publicProfil/ProfilPage.vue";
import base64 from 'base-64';
import { isCompany } from './primary/components/utils/RouterController';
import CompanyProfil from "./primary/views/profil/components/companyProfil/CompanyProfilPage.vue"
import ParticularProfil from "./primary/views/profil/components/userProfil/particularProfil/ParticularProfil.vue";
import BasketPage from "./primary/views/checkout/BasketPage.vue"
import ErrorPage from "./primary/views/errorPage/ErrorPage.vue";
import Footer from "./primary/components/layout/footer/Footer.vue"

const routes: Array<RouteRecordRaw> = [
  { path: '/:pathMatch(.*)*', component: ErrorPage },
  {
    path: '/',
    name: 'Home',
    components: {
      header: OrgMainMenu,
      default: HomePage,
    },
  },
  {
    path: '/search',
    name: 'ItemList',
    components: {
      header: OrgMainMenu,
      default: ItemListPage,
    },
  },
  {
    path: '/item/:id',
    name: 'Item',
    components: {
      header: OrgMainMenu,
      default: ItemPage,
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
  },
  {
    path: '/basket',
    name: 'Basket',
    components: {
      header: OrgMainMenu,
      default: BasketPage,
      footer: Footer,
    },
  },
  {
    path: '/profil/public-view',
    name: 'Profil',
    components: {
      header: OrgMainMenu,
      default: ProfilPage,
    },
  },
  {
    path: '/profil/profil-individual',
    name: 'ParticularProfil',
    components: {
      header: OrgMainMenu,
      default: ParticularProfil,
    },
  },
  {
    path: '/profil/profil-company',
    name: 'CompanyProfil',
    components: {
      header: OrgMainMenu,
      default: CompanyProfil,
    },
  },
  {
    path: '/chat',
    name: 'Chat',
    components: {
      header: OrgMainMenu,
      default: ChatPage,
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const privatePages = [''];
  const companyPages = [''];
  const individualPages = [''];
  const authRequiredConnected = privatePages.includes(to.path);
  const authRequiredRulesCompany = companyPages.includes(to.path);
  const loggedIn = localStorage.getItem('plt_id');

  if (authRequiredConnected && !loggedIn) {
    next('/');
  } else if (authRequiredRulesCompany && !isCompany()) {
    next('/')
  } else {
    next();
  }

});

export default router;
