import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { LocalStorage } from './LocalStorage';

export interface State {
  user: any;
  token: string;
  modalData: any;
  modalTemplate: any;
  modalOpen: boolean;
  loading: boolean;
  editorTipTap: any;
}

export const mainStore = {
  state: {
    user: null,
    token: "",
    modalData: null,
    modalTemplate: null,
    modalOpen: false,
    loading: false,
    editorTipTap: null
  },
  mutations: {
    setUser(state: State, user: any) {
      LocalStorage.setUserValue(user);
      state.user = user;
    },
    setToken(state: State, token: string) {
      LocalStorage.setUserToken(token);
      state.token = token;
    },
    resetToken(state: State) {
      LocalStorage.removeUserToken();
      state.token = "";
    },
    resetUser(state: State) {
      LocalStorage.removeUserValue();
      state.user = null;
    },
    setTemplateModal(state: State, template: any) {
      state.modalTemplate = template;
    },
    setDataModal(state: State, data: any) {
      state.modalData = data;
    },
    setModalOpen(state: State, isOpen: boolean) {
      state.modalOpen = isOpen;
    },
    setModalClose(state: State, isOpen: boolean) {
      state.modalOpen = isOpen;
    },
    setLoading(state: State, load: boolean) {
      state.loading = load;
    },
    setEditorTipTap(state: State, data: boolean) {
      state.editorTipTap = data;
    }
  },
  getters: {
    getToken(state: any) {
      return LocalStorage.getUserToken()
    },
    getUser(state: any) {
      return LocalStorage.getUserValue()
    },
    getDataModal(state: any) {
      return state.modalData
    },
    getTemplateModal(state: any) {
      return state.modalTemplate
    },
    getIsModalOpen(state: any) {
      return state.modalOpen
    },
    getLoading(state: any) {
      return state.loading
    },
    getEditorTipTap(state: any) {
      return state.editorTipTap
    }
  },
  actions: {
    setUser(context: any, user: any) {
      context.commit('setUser', user);
    },
    setToken(context: any, token: string) {
      context.commit('setToken', token);
    },
    resetToken(context: any) {
      context.commit('resetToken');
    },
    resetUser(context: any) {
      context.commit('resetUser');
    },
    resetAll(context: any) {
      context.commit('resetToken');
      context.commit('resetUser');
    },
    setTemplateModal(context: any, template: any) {
      context.commit('setTemplateModal', template);
    },
    setDataModal(context: any, data: any) {
      context.commit('setDataModal', data);
    },
    setModalOpen(context: any, isOpen: any) {
      context.commit('setModalOpen', isOpen);
    },
    setModalClose(context: any) {
      context.commit('setModalOpen', false);
    },
    setLoading(context: any, loading: boolean) {
      context.commit('setLoading', loading);
    },
    setEditorTipTap(context: any, data: any) {
      context.commit('setEditorTipTap', data);
    },
  },
};
