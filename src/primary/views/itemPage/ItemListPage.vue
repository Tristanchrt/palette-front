<template>
  <div class="item-list-page">
     <a-spin :spinning="spinning" size="large">
      <div class="item-list-body">
        <Spacer level="1" />
        <div class="sort-body normal-radius">
          <span class="search-title">
            <text class="">{{ categorieSearch }} : </text>
            <text class="strong input-search"> "{{ inputSearch }}" </text>
          </span>
          <Spacer level="2" />
          <div class="sort-price">
            <span class="title-sort-bloc semi-strong">Prix : </span>
            <a-input-number v-model:value="minPrice" :min="1" :max="100000" />
            <span> - </span>
            <a-input-number v-model:value="maxPrice" :min="1" :max="100000" />
          </div>
          <Spacer level="2" />
          <div class="sort-by">
            <span class="title-sort-bloc semi-strong">Trier par : </span>
            <a-radio-group v-model:value="sorted" size="small">
              <a-radio-button value="pertinence">Pertinence</a-radio-button>
              <a-radio-button value="commandes">Commandes</a-radio-button>
              <a-radio-button value="date">Date</a-radio-button>
              <a-radio-button value="prixCro">Prix croissant</a-radio-button>
              <a-radio-button value="prixDec">Prix decroissant</a-radio-button>
            </a-radio-group>
          </div>
        </div>
        <Spacer level="2" />
        <div class="list-item">
          <div v-for="item in items" :key="item.title">
            <OrgItemCardSearch :item="item" :issearch="true" />
          </div>
        </div>
        <Spacer level="3" />
        <a-pagination v-model:current="current" show-less-items class="pagination-bar" :total="totalPage" />
      </div>
     </a-spin>
    <Spacer level="6" />
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, reactive, watch, toRefs, inject, ref } from 'vue';

import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { StarOutlined } from '@ant-design/icons-vue';
import OrgItemCardSearch from "../../components/item/cardSearch/Org-itemCardSearch.vue";
import router from "../../../router";
import { useRoute } from 'vue-router';
import { RestSearch } from '../../../domain/RestSearch';

export default defineComponent({
  name: 'ItemListPage',
  components: {
    StarOutlined,
    Spacer,
    OrgItemCardSearch
  },
  inject: ['restSearch'],
  setup: () => {
    const route = useRoute();
    const restSearch: RestSearch | undefined = inject('restSearch')!;
    const state = reactive({
      totalPage: 400,
      current: Number(route.query.page),
      sorted: 'pertinence',
      minPrice: 1,
      maxPrice: 100000,
      inputSearch: route.query.input,
      categorieSearch: route.query.categories,
      items: [],
      spinning: false,
    });

    onMounted(() => {
      searching();
    })

    watch(() => route.query.input, (newVal, oldVal) => {
      console.log("route.query.input", route.query.input);
      state.inputSearch = newVal;
      if(state.current == 1){
        searching();
      }else {
        state.current = 1;
      }
    });

    watch(() => route.query.categories, (newVal, oldVal) => {
      state.categorieSearch = newVal;
      if(state.current == 1){
        searching();
      }else {
        state.current = 1;
      }
    });

    watch(() => [state.minPrice, state.maxPrice], ([newValMin, oldValMin], [newValMax, oldValMax]) => {
      searching();
    });

    watch(() => [state.sorted], (newValMax, oldValMax) => {
      searching();
    });

    watch(() => state.current, (newVal, oldVal) => {
      router.push({ name: "ItemList", query: { page: newVal, categories: state.categorieSearch, input: state.inputSearch } });
      searching();
    });

    const searching = () => {
      state.spinning = !state.spinning
      const params = {
        input: state.inputSearch,
        minPrice: state.minPrice,
        maxPrice: state.maxPrice,
        categories: state.categorieSearch,
        page: state.current,
        sorted: state.sorted
      };
      restSearch!.getSearching(params).then((val) => {
        setTimeout(function(){ 
          console.log(val);
          state.items = val;
          state.spinning = !state.spinning
        }, 1000);
      });
    };

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;
.select-sort {
  right: 0px;
}
.ant-pagination {
  text-align: center !important;
}
.item-list-page {
    .item-list-body {
    margin-top: 8em;
    .list-item {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
.sort-body{
  width: 78%;
  background-color: color.$grey;
  margin: 0 auto;
  padding: 16px;
  .input-search{
    color: color.$primary_gradient;
  }
  .title-sort-bloc {
    margin-right: 16px;
  }
}
@media screen and (max-width: 726px) {
.list-item {
      display: flex;
      flex-wrap: wrap;
      justify-content: center !important;
      margin-left: 0% !important;
    }
}
// .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
//     color: color.$primary_gradient !important;
//     border-color: color.$primary_gradient !important;
//     box-shadow: -1px 0 0 0 color.$primary_gradient !important;
// }
// .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
//     z-index: 1;
//     color: color.$primary_gradient !important;
//     background: #fff;
//     border-color: color.$primary_gradient !important;
//     box-shadow: -1px 0 0 0 color.$primary_gradient !important;
// }
// .ant-radio-button-wrapper {
//   &:hover {
//     color: color.$primary_gradient !important;
//   }
// }
</style>
