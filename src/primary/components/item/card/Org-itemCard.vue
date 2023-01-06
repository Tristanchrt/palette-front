<template>
  <div class="org-item-card">
    <div class="header">
      <div class="header-image">
        <img src="@/assets/styled/image/card-image-test.png">
      </div>
      <div class="header-title">
        <div class="header-name body semi-strong">
          {{ item.title }}
        </div>
        <div class="header-sub-title sub-body">{{ item.company }}</div>
      </div>
    </div>
    <div class="body">
      <img src="@/assets/styled/image/card-image-test-body.png">
    </div>
    <div class="footer white">
      <div class="footer-price1 semi-body">{{ item.price1 }}</div>
      <div class="footer-price2 semi-body">{{ item.price2 }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, reactive, toRefs } from 'vue';

import Spacer from '../../../../assets/styled/spacer/Spacer.vue';
import { itemCard } from '../../../../fixtures/item/ItemFXT.js';

export default defineComponent({
  name: 'OrgItemCard',
  components: {
    Spacer
  },
  setup: () => {
    const item = itemCard();
    return { item };
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;
.org-item-card {
  float: left;
  margin: 32px;
  cursor: pointer;
  height: 400px;
  width: 320px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .header {
    display: flex;
    margin: 10px;
    justify-content: space-around;
    .header-name {
      max-width: 208px;
      max-height: 60px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: normal;
      &:hover {
        color: color.$primary_gradient;
      }
    }
    .header-sub-title {
      max-height: 20px;
      max-width: 208px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 2px;
    }
    img {
      width: 70px;
      height: 70px;
    }
  }
  .body {
    img {
      border-radius: 8px;
      width: 100%;
      height: 308px;
    }
  }
  .footer {
    width: 121px;
    height: 53px;
    position: absolute;
    background: linear-gradient(180deg, #0450c2 0%, #7a26bc 100%);
    border-radius: 0px 16px 0px 7px;
    margin-top: -53px;
    div {
      text-align: left;
      max-width: 110px;
      max-height: 26px;
      margin: 2px 6px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
