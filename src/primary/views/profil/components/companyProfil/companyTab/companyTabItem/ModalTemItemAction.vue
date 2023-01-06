<template>
  <div class="modal-template-action flex space-around">
    <a-button type="primary" @click="actionItem(1)">Modifier article</a-button>
    <a-button type="primary" @click="actionItem(2)"> Stat article </a-button>
    <a-button type="primary" @click="actionItem(3)"> Avis article </a-button>
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
import { useStore } from "vuex";
import ModalTemplateItem from "./ModalTempItem.vue";
import ModalTempItemReviews from "./ModalTempItemReviews.vue";
import ModalTempItemStat from "./ModalTempItemStat.vue";

export default defineComponent({
  name: "ModalTemplateItemAction",
  components: {
    Spacer,
  },
  props: {
    data: {
      type: Object,
    },
  },
  setup: (props) => {
    const store = useStore();

    const data = {
      title: "",
      size: "60%",
      data: "eola",
      footer: null,
      update: true,
    };

    const actionItem = (index: number) => {
      console.log(index);
      if (index == 1) {
        data.title = "Modifier article";
        store.dispatch("setDataModal", data);
        store.dispatch("setTemplateModal", ModalTemplateItem);
      } else if (index == 2) {
        data.title = "Statistique de l'article";
        store.dispatch("setDataModal", data);
        store.dispatch("setTemplateModal", ModalTempItemStat);
      } else {
        data.title = "Avis de l'article";
        store.dispatch("setDataModal", data);
        store.dispatch("setTemplateModal", ModalTempItemReviews);
      }
    };

    return { props, actionItem };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

</style>
