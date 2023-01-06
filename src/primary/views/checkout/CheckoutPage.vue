<template>
  <div class="checkout-page">
    <div class="nav-checkout">
      <Spacer level="4" />
      <Spacer level="4" />
      <Spacer level="4" />
      <Spacer level="4" />
      <Spacer level="4" />
      <img
        class="point"
        src="@/assets/styled/image/palette_title.png"
        @click="homePage"
      >
      <Spacer level="3" />
    </div>
    <div class="checkout-body">
      <OrderTunnel />
    </div>
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
import OrderTunnel from "./OrderTunnel.vue";
import router from "../../../router";
export default defineComponent({
  name: "CheckoutPage",
  components: {
    Spacer,
    OrderTunnel
  },
  setup: () => {
    const homePage = () => {
      router.push({ name: "Basket" });
    };
    return {
      homePage
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.checkout-page {
  display: flex;
  flex-direction: column;
  .nav-checkout {
    height: 70px;
    width: 100%;
    background-color: color.$grey;
    display: flex;
    align-items: center;
    img {
      height: 40px;
      width: 200px;
    }
  }
  .checkout-body {
  }
}
</style>
