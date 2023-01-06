<template>
  <div class="detail-profil">
    <Spacer level="6" />
    <div class="info-company">
      <h2 class="title">Informations entreprise</h2>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas diam
          et sapien magna neque, tempus faucibus. Sit nunc odio nascetur nec et
          lectus accumsan dictumst. Enim consequat metus fames ullamcorper
          ullamcorper at id ultricies. Metus ultrices morbi scelerisque non
          habitasse vitae turpis nulla. Dictum amet consectetur lacus, odio.
          Proin quam lectus natoque fringilla metus, lacus purus.
        </p>
      </div>
    </div>
    <div class="review-user">
      <h2 class="title">Articles</h2>
      <div class="list-item">
        <div v-for="item in items" :key="item.title">
          <a-tooltip>
            <template #title>Voir avis</template>
            <OrgItemCardSearch
              :item="item"
              :issearch="false"
              @click="modalItem(item)"
            />
          </a-tooltip>
        </div>
      </div>
      <!-- <CommentCpnt v-for="comment in comments" :key="comment" :data="comment" /> -->
      -->
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
import { commentUser } from "../../../../../../fixtures/user/UserFXT";
import OrgItemCardSearch from "../../../../../components/item/cardSearch/Org-itemCardSearch.vue";
import { useStore } from "vuex";
import ModalTemplateItem from "./ModalTempItemPublic.vue";

export default defineComponent({
  name: "DetailProfil",
  components: {
    Spacer,
    OrgItemCardSearch
  },
  setup: () => {
    const store = useStore();
    const visible = ref < boolean > (false);

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
        "1 stylo + 10 encre Kawaii stylo plume calligraphie stylo multifon"
    };

    const items = [obj, obj, obj, obj, obj, obj];

    const modalItem = (item: any) => {
      console.log("modalItem");
      visible.value = !visible.value;
      const data = {
        title: "Avis de l'article : "+item.title,
        size: "60%",
        footer: null,
        update: false,
        data: item
      };
      store.dispatch("setDataModal", data);
      store.dispatch("setTemplateModal", ModalTemplateItem);

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
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.detail-profil {
  display: flex;
  justify-content: center;
  .info-company {
  }
  .review-user {
  }
}
.list-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

h2 {
  text-align: center;
}
.description {
  margin-left: 48px;
}

@media screen and (max-width: 1000px) {
  .detail-profil {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 1580px) {
  .list-item {
  }
  .detail-profil  {
    justify-content: space-around !important;
  }
}
</style>
