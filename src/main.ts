import axios, { AxiosInstance } from 'axios';
import jQuery from 'jquery';
import { createApp } from 'vue';
import antd from "_PLGN_/antd";
import "ant-design-vue/dist/antd.css";
import App from './App.vue';
import router from './router';
import RestApiPaletteRepository from './secondary/restApiRepo/RestApi';
import RestSearchRepo from './secondary/restSearch/RestSearchRepo';
import RestItemRepo from './secondary/restItem/RestItemRepo';
import RestChatRepo from './secondary/restChat/RestChatRepo';
import './assets/styles/css/main.css'
import './assets/styles/index.css';
import RestUserRepo from './secondary/restUser/RestUserRepo';
import { store } from './secondary/store/storeRoot';

const BACKEND_URL: string = 'http://localhost:3000/api/';
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
});

const restApiPalette: any = new RestApiPaletteRepository(axiosInstance);
const restSearchRepo: any = new RestSearchRepo(axiosInstance);
const restItemRepo: any = new RestItemRepo(axiosInstance);
const restChatRepo: any = new RestChatRepo(axiosInstance);
const restUserRepo: any = new RestUserRepo(axiosInstance);

const clickOutside = {
  beforeMount: (el: any, binding: any) => {
    el.clickOutsideEvent = (event: any): any => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el: any): any => {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

const $: any = jQuery;
window.$ = $;

let app = createApp(App);
app.directive('click-outside', clickOutside);
app.use(router);
app.use(store);
app = antd(app)
app.provide('restApiPalette', restApiPalette);
app.provide('restSearch', restSearchRepo);
app.provide('restItem', restItemRepo);
app.provide('restChat', restChatRepo);
app.provide('restUser', restUserRepo);
app.mount('#app');
