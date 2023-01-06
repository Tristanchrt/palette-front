<template>
  <a-spin :spinning="store.getters.getLoading" tip="Chargement..." size="large">
    <div id="nav">
      <router-link to="/" />
      <ModalAnt />
      <DrawerAnt />
    </div>
    <router-view name="header" />
    <router-view />
    <router-view name="footer" />
  </a-spin>
</template>

<script lang="ts" setup>
import ModalAnt from "./primary/utils/modal/ModalAnt.vue";
import DrawerAnt from "./primary/utils/modal/DrawerAnt.vue";
import { useStore } from "vuex";

const store = useStore();

</script>
<style></style>
