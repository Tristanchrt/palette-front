<template>
  <div class="validation-otc flex space-around">
    <div class="validation-left flex column-flex">
      <div class="article-resume">
        <h3>Articles commander</h3>
        <div class="block body-articles">
          <ItemOrder :validation="true" />
        </div>
      </div>
      <div class="delivery">
        <h3>Livraison</h3>
        <div class="block body-delivery">delivery</div>
      </div>
      <div class="btn-actions flex column-flex">
        <a-button type="primary" @click="validate"> VALIDER ET PAYER</a-button>
        <Spacer level="2" />
        <a-button type="normal" @click="prev"> PRECEDENT </a-button>
      </div>
    </div>
    <div class="validation-right flex column-flex">
      <div class="adresse-resume">
        <h3>Adresse</h3>
        <div class="block body-address">
          <div class="body-address-delivery flex column-flex">
            <h4 class="strong">Adresse de livraison</h4>
            <span>Some contents...</span>
            <span>Some contents...</span>
            <span>Some contents...</span>
          </div>
          <Spacer level="2" />
          <div class="body-address-facturation flex column-flex">
            <h4 class="strong">Adresse de facturation</h4>
            <span>Some contents...</span>
            <span>Some contents...</span>
            <span>Some contents...</span>
          </div>
        </div>
      </div>
      <div class="paiment-resume">
        <h3>Moyen de paiment</h3>
        <div class="block body-paiment">
          <div class="payment-method-row">
            <a-radio disabled="true" />
            <span>Payé via carte bancaire</span>
            <a-image
              :width="60"
              src="src/assets/styled/image/visa.png"
              alt="Paypal"
            />
          </div>
          <div class="payment-method-row">
            <a-radio checked="true" />
            <span>Payé via carte Paypal</span>
            <a-image
              :width="80"
              src="src/assets/styled/image/paypal.png"
              alt="Paypal"
            />
          </div>
          <div class="payment-method-row">
            <a-radio disabled="false" />
            <span>Autre paiments</span>
          </div>
        </div>
      </div>
      <div class="btn-actions flex column-flex">
        <a-button type="primary" @click="validate"> VALIDER ET PAYER</a-button>
        <Spacer level="2" />
        <a-button type="normal" @click="prev"> PRECEDENT </a-button>
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
  ref
} from "vue";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import { useStore } from "vuex";
import {
  antNotification,
  antMessage
} from "@/.././src/primary/utils/notification";
import ItemOrder from "../ItemOrder.vue";
export default defineComponent({
  name: "PaimentOtc",
  components: {
    Spacer,
    ItemOrder
  },
  setup: () => {
    const store = useStore();
    const prev = () => {
      store.dispatch("prevComponent");
    };
    return { prev };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.block {
  padding: 32px;
  background-color: color.$grey;
  border-radius: 8px;
  margin-bottom: 24px;
}
.payment-method-row {
  display: flex;
  align-items: center;
  > span {
    margin-right: 16px;
    margin-left: 16px;
  }
}
@media screen and (max-width: 1560px) {
  .validation-otc {
    display: flex !important;
    flex-direction: column !important;
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
