<template>
  <div class="modal-template-drawer">
    <div class="items flex column-flex">
      <div v-for="index in 5" :key="index" class="item flex">
        <img
          src="https://img01.ztat.net/article/spp-media-p1/b00f17fb96d9484aa2987635ad291071/89a2173222174fc3b6e885d2eb27c38c.jpg?imwidth=1800&filter=packshot"
        >
        <div class="blc-left flex">
          <span class="title small-body semi-strong">
            Une chartreuse Une chartreuse Une chartreuseUne chartreuse
          </span>
          <span class="company small-body strong">Axians</span>
          <span class="price small-body strong">50 €</span>
          <span class="tag" />
          <span class="quantity sub-body">quantité : 2</span>
        </div>
        <Spacer level="2" />
      </div>
      <Spacer level="3" />
    </div>
    <div class="footer">
      <h3 class="strong">Total : 130 €</h3>
      <a-button type="primary" block @click="getBucket"> Voir panier </a-button>
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
import router from "@/router";
import { useStore } from "vuex";

export default defineComponent({
  name: "ShopBagTemp",
  components: {
    Spacer
  },
  props: {
    data: {
      type: Object
    }
  },
  setup: (props) => {
    const store = useStore();

    const getBucket = () => {
      router.push({ name: "Basket" });
    };

    return { props, getBucket };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.modal-template-drawer {
  .items  {
    display: flex;
  }
}
.item {
  margin-bottom: 8px;
  border-bottom: 1px solid rgb(207, 207, 207);
  padding-bottom: 8px;
}
.company {
  color: color.$primary_gradient;
}
.blc-left {
  flex-direction: column;
  margin-left: 16px;
}
img {
  width: 100px;
  height: 100px;
}
h3 {
  text-align: center;
}
</style>
