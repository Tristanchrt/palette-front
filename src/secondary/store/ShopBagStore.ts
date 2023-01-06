import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { LocalStorage } from "./LocalStorage";

export interface State {
  bag: any;
  drawer: Boolean;
  data_drawer: any;
  template_drawer: any;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const storeShopBag = {
  state: () => ({
    bag: localStorage.getItem('plt_sb') ? LocalStorage.getShopBag() : [],
    drawer: false,
    data_drawer: null,
    template_drawer: null,
  }),
  mutations: {
    SET_BAG(state: State, bag: any) {
      state.bag.push(bag);
      LocalStorage.setShopBag(state.bag);
    },
    REMOVE_BAG(state: State, index: any) {
      state.bag.splice(index, 1)[0]
      LocalStorage.setShopBag(state.bag);
    },
    SET_DRAWER_MODAL(state: any){
      state.drawer = !state.drawer
    },
    SET_DRAWER_MODAL_DATA(state: any, data: any){
      state.data_drawer = data;
    },
    SET_DRAWER_MODAL_TEMPLATE(state: any, template: any){
      state.template_drawer = template;
    }
  },
  getters: {
    getBag(state: any) {
      return state.bag
    },
    getDrawer(state: any) {
      return state.drawer
    },
    getDataDrawer(state: any) {
      return state.data_drawer
    },
    getTemplateDrawer(state: any) {
      return state.template_drawer
    },
  },
  actions: {
    addShopBag(context: any, bag: any) {
      context.commit('SET_BAG', bag);
    },
    removeShopBag(context: any, index: any) {
      context.commit('REMOVE_BAG', index);
    },
    openDrawer(context: any) {
      context.commit('SET_DRAWER_MODAL');
    },
    setDataDrawer(context: any, data: any) {
      context.commit('SET_DRAWER_MODAL_DATA', data);
    },
    setTemplateDrawer(context: any, template: any) {
      context.commit('SET_DRAWER_MODAL_TEMPLATE', template);
    },
  },
};
