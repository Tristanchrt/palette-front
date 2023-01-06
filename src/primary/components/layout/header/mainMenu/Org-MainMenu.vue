<template>
  <div class="menu-main">
    <div class="flex space-between items-center org-main-menu">
      <MolLogoMenu class="comp-1" />
      <MolSearchMenu class="comp-2" />
      <MolIconsMenu class="comp-3" />
    </div>
    <MolSearchMenu class="comp-4" />
  </div>
</template>

<script lang="ts">
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import { defineComponent } from "vue";

import MolIconsMenu from "../mainMenu/Mol-IconsMenu.vue";
import MolLogoMenu from "./Mol-LogoMenu.vue";
import MolSearchMenu from "../mainMenu/Mol-SearchMenu.vue";

export default defineComponent({
  name: "OrgMainMenu",
  components: {
    Spacer,
    MolLogoMenu,
    MolIconsMenu,
    MolSearchMenu
  },
  setup: () => {
    return {};
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
.menu-main {
}
.org-main-menu {
  height: 80px;
  background-color: color.$white;
  position: fixed;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 6%);
  width: 100%;
  z-index: 1000;
  left: 0;
  top: 0;
}
.comp-1 {
  display: flex;
  flex: 1;
}
.comp-2 {
  display: flex;
  flex: 2;
}
.comp-4 {
  margin-top: 80px;
  display: none;
}
@media screen and (max-width: 780px) {
  .search-bar {
    padding-left: 32px !important;
    padding-right: 32px !important;
  }
}
@media screen and (max-width: 850px) {
  .comp-2 {
    display: none !important;
  }
  .comp-4 {
    display: flex !important;
    position: fixed;
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>
