<template>
  <div class="org-item-card-search" @click="goToItem">
    <a-card hoverable class="card" style="width: 300px">
      <template #cover>
        <img alt="example" :src="item.picture">
      </template>
      <p class="title-card" :title="item.title">{{ item.title }}</p>
      <p class="body-card star-bloc"> <a-rate disabled :value="item.ratingStare" /> {{ item.ratingTotal }} vendu(s)  <star-outlined key="star" /> </p>
      <p class="body-card company-title" :title="item.company"> {{ item.company }}</p>
      <template #actions class="ant-card-actions">
        <p style="width:100%">
          <span class="price-card">{{ item.price[0] }} $ - {{ item.price[1] }} $</span>
        </p>
        <div class="">{{ item.pricePcs }} </div>
      </template>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, inject, ref, toRef } from 'vue';
import { StarOutlined } from '@ant-design/icons-vue';
import Spacer from '../../../../assets/styled/spacer/Spacer.vue';
import router from '../../../../router';

export default defineComponent({
  name: 'OrgItemCardSeach',
  components: {
    Spacer,
    StarOutlined
  },
  props: {
    item: {
      required: true,
      type: Object
    },
    issearch: {
      required: true,
      type: Boolean
    }
  },
  setup: ({ item, issearch }) => {
    const goToItem = () => {
      console.log(item.id);
      if (issearch) {
        router.push({ name: "Item", params: { id: item.id } });
      } else {
        // alert("update");
      }
    };
    return { goToItem };
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;
.card {
  margin: 48px;
  cursor: pointer;
  border-radius: 16px;
    // &:hover{
    //   box-shadow: 0px 7px 6px 0px rgba(126, 53, 255, 0.15);
    //   -webkit-box-shadow: 0px 7px 6px 0px rgba(126, 53, 255, 0.15);
    //   -moz-box-shadow: 0px 7px 6px 0px rgba(126, 53, 255, 0.15);
    // }
}
.price{
  font-size: 20px;
  font-weight: bold;
  color: black;
}
.price-card {
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-align: center;
}
.title-card{
  font-size: 16px;
  font-weight: bold;
  max-height: 99px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.company-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.body-card {
  max-height: 14px;
  font-size: 12px;
  overflow: hidden;
}
.star-bloc {
  max-height: 28px;
}
.ant-card-meta-description{
  height: 100px;
}
</style>
