<template>
  <div class="icons-menu">
    <div class="flex space-around menu-icons">
      <Spacer level="3" />
      <a-tooltip placement="bottom">
        <template #title>Profile</template>
        <UserOutlined
          class="icon-menu"
          style="font-size: 28px"
          @click="profilPage"
        />
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>Panier</template>
        <a-badge :count="shopCount">
          <ShoppingCartOutlined style="font-size: 30px" @click="shopBag" />
        </a-badge>
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>Messagerie</template>
        <a-badge :count="messageNotRead">
          <MessageOutlined style="font-size: 28px" @click="messagePage" />
        </a-badge>
      </a-tooltip>
      <Spacer level="1" />
    </div>
    <div class="responsive-menu" @click="openMenu(menuOpened)">
      <Spacer level="4" />
      <i class="fas fa-align-justify" />
      <Spacer level="4" />
    </div>
    <transition name="fade">
      <div v-if="menuOpened" v-click-outside="openMenu" class="optionsMenu">
        <div
          v-for="item in menus"
          :key="item"
          class="body text-option strong point"
        >
          {{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import { useStore } from "vuex";
import { defineComponent, toRefs, reactive, inject, ref } from "vue";
import {
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
  MessageOutlined
} from "@ant-design/icons-vue";
import router from "@/router";
import ShopBagTemp from "../../../../utils/modal/ShopBagTemp.vue";
import {
  antNotification,
  antMessage
} from "@/.././src/primary/utils/notification";
import SignUpModalTemp from "../../../signUpIn/ModalTempSignInUp.vue";

export default defineComponent({
  name: "MolIconsMenu",
  components: {
    Spacer,
    ShoppingCartOutlined,
    UserOutlined,
    MessageOutlined,
    UnorderedListOutlined
  },
  setup: () => {
    const state = reactive({
      menuOpened: false,
      menus: [],
      messageNotRead: 3,
      shopCount: 8
    });

    const store = useStore();

    state.menus = ["Profil", "Messagerie", "Panier"];

    const openMenu = (verif) => {
      if (verif) {
        state.menuOpened = false;
      } else {
        setTimeout(function() {
          state.menuOpened = !state.menuOpened;
        }, 100);
      }
    };

    const profilPage = () => {
      if (store.getters.getToken != null) {
        router.push({ name: "Profil" });
      } else {
        const data = {
          title: "Se connecter à TaPalette",
          size: "50%",
          data: "",
          footer: false
        };
        store.dispatch("setDataModal", data);
        store.dispatch("setTemplateModal", SignUpModalTemp);
        store.dispatch("setModalOpen", true);
      }
    };
    const messagePage = () => {
      // if (store.getters.getToken != null) {
      router.push({ name: "Chat" });
      // } else {
      //   antMessage("Connection nécessaire !", 3)
      //   state.visible = true;
      // }
    };
    const shopBag = () => {
      const data = {
        title: "Panier",
        size: "20%",
        data: store.getters.getBag
      };
      store.dispatch("setDataDrawer", data);
      store.dispatch("setTemplateDrawer", ShopBagTemp);
      store.dispatch("openDrawer");
      console.log("shopBag");
    };

    return {
      openMenu,
      ...toRefs(state),
      shopBag,
      profilPage,
      messagePage
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
.icons-menu {
  display: flex;
  flex: 1;
  justify-content: right;
}
.org-main-menu {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .menu-icons {
    width: 18em;
    ::v-deep(.anticon):hover {
      color: color.$primary_gradient;
    }
    i {
      font-size: 22px;
      cursor: pointer;
      &:hover {
        color: color.$primary_gradient;
      }
    }
  }
  .responsive-menu {
    display: none;
  }
  .optionsMenu {
    display: none;
  }
  .menuIsOpen {
    display: none !important;
  }
}

@media screen and (max-width: 1000px) {
  .menu-icons {
    width: 14em !important;
  }
  //   .responsive-menu {
  //     display: flex !important;
  //     i {
  //       font-size: 26px;
  //       cursor: pointer;
  //       &:hover {
  //         color: color.$primary_gradient;
  //       }
  //     }
  //   }
  //   .optionsMenu {
  //     flex-direction: column;
  //     display: flex !important;
  //     position: absolute;
  //     background-color: color.$secondary_base;
  //     margin-top: 1.46em;
  //     left: 0;
  //     width: 100%;
  //     z-index: 4;
  //     text-align: center;
  //     .text-option {
  //       padding: 6px;
  //       border-top: 0.5px solid color.$grey;
  //       &:hover {
  //         color: color.$primary_gradient;
  //       }
  //     }
  //   }
}
</style>
