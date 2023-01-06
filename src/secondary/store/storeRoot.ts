import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { storeProfilPage } from './StoreProfilPage';
import { mainStore } from './RestStoreRepo'
import { storeShopBag } from "./ShopBagStore"
import { storeOrder } from "./OrderStore"

export const key: InjectionKey<Store<any>> = Symbol();

export const store = createStore({
  modules: {
    storeProfilPage: storeProfilPage,
    main: mainStore,
    storeShopBag: storeShopBag,
    storeOrder: storeOrder
  }
})