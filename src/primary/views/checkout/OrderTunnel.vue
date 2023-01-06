<template>
  <div class="order-tunnel">
    <div class="order-header">
      <Spacer level="4" />
      <a-steps :current="currentPosition">
        <a-step title="Se connecter" />
        <a-step title="Adresse" />
        <a-step title="Paiement" />
        <a-step title="Validation" />
        <a-step title="C’est fait !" />
      </a-steps>
    </div>
    <Spacer level="2" />
    <Spacer level="4" />
    <component :is="components[currentPosition]" :data="data" />
    <Spacer level="2" />
    <Spacer level="6" />
  </div>
</template>

<script lang="ts">
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
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
import { useStore } from "vuex";
import AddressOtc from "./orderTunnelComp/AddressOtc.vue";
import ConnectionOtc from "./orderTunnelComp/ConnectionOtc.vue";
import PaimentOtc from "./orderTunnelComp/PaimentOtc.vue";
import ValidationOtc from "./orderTunnelComp/ValidationOtc.vue";
import OrderFinished from "./orderTunnelComp/OrderFinished.vue";

export default defineComponent({
  name: "OrderTunnel",
  components: {
    Spacer
  },
  setup: () => {
    const store = useStore();

    const state = reactive({
      validateAdressFactu: false,
      currentPosition: store.getters.getOrderCurrentComponent,
      components: [
        ConnectionOtc,
        AddressOtc,
        PaimentOtc,
        ValidationOtc,
        OrderFinished
      ]
    });

    watch(
      () => store.getters.getOrderCurrentComponent,
      (newVal, oldVal) => {
        state.currentPosition = newVal;
      }
    );

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.order-tunnel {
  display: flex;
  flex-direction: column;
  .order-header {
    margin-left: 128px;
    margin-right: 128px;
  }
  .order-body {
    margin-left: 64px;
    margin-right: 64px;
    .connection-bloc {
      display: flex;
      justify-content: space-around;
    }
  }
  .continue-paiment {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    background-color: color.$grey;
    padding: 32px;
    border-radius: 8px;
    .card-paiment {
      display: flex;
      flex-direction: column;
    }
    .verif-text {
      width: 150px;
      text-align: center;
    }
  }
  .validation-left {
    flex-direction: column;
  }
  .validation-right {
    flex-direction: column;
  }
}
</style>
