import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';


export interface State {
  form_user: any;
  form_item: any;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const storeProfilPage = {
  state: () => ({
    form_user: null,
    form_item: {
      picture: [],
      pictures: "",
      title: "",
      shortDescription: "",
      description: "",
      minPrice: null,
      maxPrice: null,
      maxPcs: null,
      minPcs: null,
      tags: [],
      tagsList: []
    }
  }),
  mutations: {
    SET_FORM_USER(state: State, form_user: any) {
      state.form_user = form_user;
    },
    SET_FORM_ITEM(state: State, form_item: any) {
      state.form_item = form_item;
    },
  },
  getters: {
    getFormUser(state: any) {
      return state.form_user
    },
    getFormItem(state: any) {
      return state.form_item
    },
  },
  actions: {
    setFormUser(context: any, form_user: any) {
      context.commit('SET_FORM_USER', form_user);
    },
    setFormItem(context: any, form_item: any) {
      context.commit('SET_FORM_ITEM', form_item);
    },
    createNewItem(context: any){
      console.log("new item");
    },
    updateUserAPI(context: any) {
      console.log('UPDATE_USER eola');
    }
  },
};
