<template>
  <div class="item-tab">
    <Spacer level="2" />
    <div class="btn-creation">
      <a-button block type="primary" @click="modalItem(1)">
        Ajouter un article
      </a-button>
    </div>
    <div class="list-item">
      <div v-for="item in items" :key="item.title">
        <OrgItemCardSearch
          :item="item"
          :issearch="false"
          @click="modalItem(2)"
        />
      </div>
    </div>
    <Spacer level="2" />
    <a-pagination
      v-model:current="current"
      show-less-items
      class="pagination-bar"
      :total="totalPage"
    />
    <Spacer level="6" />
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
import OrgItemCardSearch from "../../../../../../components/item/cardSearch/Org-itemCardSearch.vue";
import { useStore } from "vuex";
import ModalTemplateItemAction from "./ModalTemItemAction.vue";
import ModalTemplateItem from "./ModalTempItem.vue";
import logService from "@/.././src/primary/utils/logService";

export default defineComponent({
  name: "CompanyItemTab",
  components: {
    Spacer,
    OrgItemCardSearch,
  },
  setup: () => {
    const store = useStore();

    const obj = {
      company:
        "AToZ Stationery Store Volvo trunk AToZ Stationery Store Volvo trunk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames facilisi ac amet, sapien hac ut. Dui in mi pharetra amet consectetur amet in.Id morbi pellentesque dis netus malesuada",
      id: 1,
      maxPrice: "8.90",
      minPrice: "2.30",
      picture: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      price: ["2,30", "8,90"],
      pricePcs: "1-2000",
      ratingStare: 3,
      ratingTotal: 3989,
      tags: { color: Array(3), size: Array(6) },
      title:
        "1 stylo + 10 encre Kawaii stylo plume calligraphie stylo multifon",
    };

    const state = reactive({
      totalPage: 400,
      current: 1,
    });

    const items = [obj, obj, obj, obj, obj, obj];

    const visible = ref<boolean>(false);

    const modalItem = (index: number) => {
      visible.value = !visible.value;
      if (index == 1) {
        const data = {
          title: "Créer un article",
          size: "60%",
          footer: null,
          update: false,
        };
        store.dispatch("setDataModal", data);
        store.dispatch("setTemplateModal", ModalTemplateItem);
      } else {
        const data = {
          title: "Action article",
          size: "30%",
          footer: null,
        };
        store.dispatch("setDataModal", data);
        store.dispatch("setTemplateModal", ModalTemplateItemAction);
      }
      if (visible.value == true) {
        store.dispatch("setModalOpen", true);
        visible.value = false;
      } else {
        store.dispatch("setModalOpen", false);
        visible.value = true;
      }
    };

    return {
      items,
      modalItem,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.item-tab {
  .list-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: 8.5%;
  }
}
.btn-creation {
  display: flex;
  justify-content: center;
  ::v-deep(.ant-btn) {
    width: 80%;
  }
  // margin-right: 15%;
}
.ant-pagination {
  text-align: center !important;
}

@media screen and (max-width: 850px) {
  .btn-creation {
    justify-content: center !important;
    margin-right: 0% !important;
  }
}
@media screen and (max-width: 1550px) {
  .list-item {
    justify-content: center !important;
    margin-left: 0% !important;
  }
}
</style>
