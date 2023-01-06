<template>
  <div class="home-logo">
    <Spacer level="2" />
    <img
      class="point"
      src="@/assets/styled/image/logo_tapalette.jpg"
      @click="goHome"
    >
    <Spacer level="3" />
  </div>
</template>

<script lang="ts">
import {
  onMounted,
  defineComponent,
  reactive,
  watch,
  toRefs,
  inject,
  ref
} from "vue";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import router from "../../../../../router";
import { useStore } from "vuex";

export default defineComponent({
  name: "MolLogoMenu",
  components: {
    Spacer
  },
  setup: () => {
    const goHome = () => {
      router.push({ name: "Home" });
      setTimeout(() => {
        location.reload();
      }, 1);
    };

    return { goHome };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
.home-logo {
  display: flex;
}
img {
  height: 40px;
  width: 15 0px;
}
</style>
