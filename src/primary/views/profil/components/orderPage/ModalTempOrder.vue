<template>
  <div class="modal-template-order">
    <div class="flex column-flex">
      <div class="modal-header flex space-between">
        <div class="flex column-flex">
          <span>Vendeur : Matt dauzzi de chez AXIANS</span>
          <span>Commande faite le 09-87-2020</span>
          <span>Commande en cours...</span>
        </div>
        <div class="flex column-flex" @click="actionOrder(3)">
          <FilePdfOutlined />
          <span class="text">Télécharger facture</span>
        </div>
      </div>
      <Spacer level="4" />
      <div class="modal-body flex space-between">
        <div class="flex column-flex">
          <div
            v-for="index in 3"
            :key="index"
            class="point row-item margin-8px flex items-center space-center"
          >
            <div class="flex column-flex">
              <span class="row-title small-body semi-strong">Porte en bofdfdfdfdfdddfis</span>
              <span class="sub-body">quantité : 4</span>
            </div>
            <Spacer level="2" />
            <span class="tags">XL</span>
            <Spacer level="2" />
            <span class="row-price semi-strong small-body">230 €</span>
          </div>
        </div>
        <Spacer level="6" />
        <div class="flex column-flex">
          <div class="delivery-address">
            <span class="body semi-strong">Adresse de livraison</span>
            <div class="flex column-flex sub-body">
              <span>dffdgfgfgffdf</span>
              <span>dffdgfgfgffdf</span>
              <span>dffdgfgfgffdf</span>
            </div>
          </div>
          <Spacer level="1" />
          <div class="billing-address">
            <span class="body semi-strong">Adresse de facturation</span>
            <div class="flex column-flex sub-body">
              <span>dffdgfgfgffdf</span>
              <span>dffdgfgfgffdf</span>
              <span>dffdgfgfgffdf</span>
            </div>
          </div>
          <Spacer level="1" />
          <div class="payment-method">
            <span class="body semi-strong">Méthode de paiment</span>
            <div class="flex column-flex sub-body">
              <span>dffdgfgfgffdf</span>
              <span>dffdgfgfgffdf</span>
              <span>dffdgfgfgffdf</span>
            </div>
          </div>
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
  ref
} from "vue";
import { FilePdfOutlined } from "@ant-design/icons-vue";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
export default defineComponent({
  name: "ModalTemplateOrder",
  components: {
    Spacer,
    FilePdfOutlined
  },
  props: {
    data: {
      type: Object
    }
  },
  setup: (props) => {
    console.log(props.data);
    return { props };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.modal-template-order {
}
.row-title {
  color: color.$primary_gradient;
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.row-price {
  background-color: color.$primary_gradient;
  color: color.$primary_text;
  border-radius: 20px;
  padding: 2px 8px 2px 8px;
}

.ant-pagination {
  text-align: center !important;
}

@media screen and (max-width: 1300px) {
  .modal-body {
    align-items: center;
    flex-direction: column !important;
  }
}
@media screen and (max-width: 1200px) {
  .orders {
    display: flex;
    flex-wrap: wrap;
    justify-content: center !important;
    margin-left: 0% !important;
  }
}
</style>
