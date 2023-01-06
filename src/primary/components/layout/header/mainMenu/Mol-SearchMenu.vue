<template>
  <div class="input-test">
    <a-select
      ref="select"
      v-model:value="selected"
      size="large"
      placeholder="Catégorie"
      @change="handleChange"
    >
      <a-select-option v-for="item in categories" :key=item :value=item>{{ item }}</a-select-option>
    </a-select>
    <a-auto-complete
      class="global-search-wrapper"
      v-model:value="search"
      size="large"
      style="width:100%"
      @search="handleSearch"
      @select="handleSelect"
    >
      <template #dataSource>
        <a-select-option v-for="email in result" :key="email">
          {{ email }}
        </a-select-option>
      </template>
       <a-input-search size="large" placeholder="Que cherchez-vous ?" enterButton></a-input-search>
    </a-auto-complete>
  </div>
</template>

<script lang="ts">
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { defineComponent, watch, onDeactivated, reactive, toRefs, inject, ref } from 'vue';
import { SearchOutlined, StarTwoTone } from '@ant-design/icons-vue';
import { RestSearch } from '../../../../../domain/RestSearch';
import router from "@/router";
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'MolSearchMenu',
  components: {
    Spacer,
    SearchOutlined
  },
  inject: ['restSearch'],
  setup: () => {
    const route = useRoute();
    const state = reactive({
      categories: [],
      selected: route.query.categories ? route.query.categories : 'Toutes nos categories',
      search: route.query.input ? route.query.input : '',
    });

    state.categories = [
      'Toutes nos catégories',
      'Vêtements, Textiles et Accessoires',
      'Loisir, Activité en pleine air et sports',
      'Auto & Transport',
      'Electronique et Multimédia',
      'Bricolage, équipement industrie et outils',
      'Maison, animaux et électroménager',
      'Beauté, santé'
    ]

    const restSearch: RestSearch | undefined = inject('restSearch')!;
    
    const value = ref('');
    const result = ref<string[]>([]);

    const handleChange = (value: string) => {
      if(state.search!.length > 0){
        router.push({ name: "ItemList" , query: { page: '1', categories: state.selected, input: state.search} });
      }
    };

    const handleSelect = (intputText: string) => {
      router.push({ name: "ItemList" , query: { page: '1', categories: state.selected, input: intputText} });
    }

    const handleSearch = (inputText: string) => {
      let res: string[];
      if (!inputText || inputText.indexOf('@') >= 0) {
        res = [];
      } else {
        res = ['gmail.com', '163.com', 'qq.com'].map(domain => `${inputText}@${domain}`);
      }
      restSearch!.getAutoComplete(inputText, state.selected).then((text) => {
        console.log(text);
      });
      console.log("eola", res);
      console.log(inputText, state.selected);
      result.value = res;
    };


    return { 
      value,
      result,
      handleSelect,
      handleSearch,  
      handleChange,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;

.search-icon { 
  font-size: 24px;
  background-color: #EEEEF2;
  padding: 4px 8px 4px 8px;
  cursor: pointer;
  border-radius: 0px 4px 4px 0px;
}
.input-test {
  display: flex;
  align-items: center;
}
</style>
