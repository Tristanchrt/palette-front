<template>
  <div class="baskte-page">
    <div class="body-basketPage">
      <div class="flex column-flex">
        <ItemOrder />
        <Spacer level="6" />
        <div class="block paiment-method">
          <h2 class="semi-strong">Nous acceptons</h2>
          <div class="flex flex-row items-center">
            <a-image
              :width="60"
              src="src/assets/styled/image/visa.png"
              alt="Paypal"
            />
            <Spacer level="4" />
            <a-image
              :width="80"
              src="src/assets/styled/image/paypal.png"
              alt="Paypal"
            />
          </div>
        </div>
        <Spacer level="6" />
      </div>
      <Spacer level="6" />
      <div class="resume-order">
        <div class="block order">
          <div>
            <h2>Total</h2>
            <Spacer level="1" />
            <div class="sub-total small-body">
              <span>Sous total</span>
              <span>120,00 €</span>
            </div>
            <Spacer level="1" />
            <div class="total-price strong xsub-total small-body">
              <span>Total</span>
              <span>120,00 €</span>
            </div>
            <Spacer level="3" />
          </div>
          <a-button type="primary" block @click="order">COMMANDER</a-button>
        </div>
      </div>
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
  ref,
} from "vue";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import { DeleteOutlined } from "@ant-design/icons-vue";
import ItemOrder from "./ItemOrder.vue";
import { useStore } from "vuex";
import ShopBagTemp from "../../utils/modal/ShopBagTemp.vue";
import router from "@/router";
import logService from "@/.././src/primary/utils/logService";

export default defineComponent({
  name: "BasketPage",
  components: {
    Spacer,
    DeleteOutlined,
    ItemOrder,
    Spacer,
  },
  setup: () => {
    const store = useStore();

    store.dispatch("setLoading", false)


    setTimeout(() => {
      if (store.getters.getDrawer === true) store.dispatch("openDrawer");
    }, 100);

    const order = () => {
      logService.log("ROUTER PUSH","Checkout")
      router.push({ name: "Checkout" });
    };

    const deleteItem = (id: any) => {
      console.log("index", id);
    };

    return { order, deleteItem };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.baskte-page {
  .body-basketPage {
    margin-top: 8em;
    margin-right: 8%;
    margin-left: 8%;
    justify-content: space-between;
    display: flex;
  }
}
.resume-order {
  width: 26em;
  min-width: 20em;
}
.sub-total {
  display: flex;
  justify-content: space-between;
}
.block {
  padding: 32px;
  border-radius: 8px;
  background-color: color.$grey;
}
.total-price {
  border-top: 1px solid black;
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 900px) {
  .body-basketPage {
    flex-direction: column !important;
    align-items: center !important;
    margin-left: 10%;
    margin-right: 10%;
  }
  .resume-order {
    width: 100%;
  }
}
</style>
