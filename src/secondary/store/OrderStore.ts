import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { LocalStorage } from "./LocalStorage";

export interface State {
  order: any;
}
const NAME_LOCAL_STO = 'plt_ot';

export const key: InjectionKey<Store<State>> = Symbol();

export const storeOrder = {
  state: () => ({
    order: {
      currentComponent: localStorage.getItem('plt_id') ? 4 : 0,
      address: localStorage.getItem('plt_ot') ? LocalStorage.getLocalParse(NAME_LOCAL_STO).address : {
        firstName: "",
        lastName: "",
        address: "",
        moreAddress: "",
        department: undefined,
        city: "",
      },
      factuAddress: localStorage.getItem('plt_ot') ? LocalStorage.getLocalParse(NAME_LOCAL_STO).factuAddress : {
        firstName: "",
        lastName: "",
        address: "",
        moreAddress: "",
        department: undefined,
        city: "",
      },
      completInfo: localStorage.getItem('plt_ot') ? LocalStorage.getLocalParse(NAME_LOCAL_STO).completInfo : "",
    },
  }),
  mutations: {
    SET_ORDER(state: any, order: any) {
      state.order = order;
    },
    NEXT_COMP(state: any) {
      state.order.currentComponent <= 4 ? state.order.currentComponent += 1 : state.order.currentComponent
    },
    PREV_COMP(state: any) {
      state.order.currentComponent >= 1 ? state.order.currentComponent -= 1 : state.order.currentComponent
    },
    SET_ADDRESS(state: any, data: any) {
      if (localStorage.getItem(NAME_LOCAL_STO))
        state.order = LocalStorage.getLocalParse(NAME_LOCAL_STO);
      state.order.address = data;
      LocalStorage.setParseLocal(NAME_LOCAL_STO, state.order);
    },
    SET_FACTU_ADDRESS(state: any, data: any) {
      if (localStorage.getItem(NAME_LOCAL_STO))
        state.order = LocalStorage.getLocalParse(NAME_LOCAL_STO);
      state.order.factuAddress = data;
      LocalStorage.setParseLocal(NAME_LOCAL_STO, state.order);
    },
    SET_MORE_INFO(state: any, data: any) {
      if (localStorage.getItem(NAME_LOCAL_STO))
        state.order = LocalStorage.getLocalParse(NAME_LOCAL_STO);
      state.order.completInfo = data;
      LocalStorage.setParseLocal(NAME_LOCAL_STO, state.order);
    },
  },
  getters: {
    getOrder(state: any) {
      return state.order
    },
    getOrderCurrentComponent(state: any) {
      return state.order.currentComponent
    },
  },
  actions: {
    setOrderObj(context: any, order: any) {
      context.commit('SET_ORDER', order);
    },
    nextComponent(context: any) {
      context.commit('NEXT_COMP');
    },
    prevComponent(context: any) {
      context.commit('PREV_COMP');
    },
    setAddress(context: any, data: any) {
      context.commit('SET_ADDRESS', data);
    },
    setFactuAddress(context: any, data: any) {
      context.commit('SET_FACTU_ADDRESS', data);
    },
    setMoreInfo(context: any, data: any) {
      context.commit('SET_MORE_INFO', data);
    }
  },
};
