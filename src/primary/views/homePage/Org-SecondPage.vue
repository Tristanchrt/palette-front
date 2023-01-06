<template>
  <div class="org-second-page">
    <div class="header">
      <div class="title strong">Articles qui partent à toutes vitesses</div>
      <div class="title">Vraiment très vite</div>
    </div>
    <Spacer level="5" />
    <div class="some-card">
      <OrgItemCard />
      <OrgItemCard />
      <OrgItemCard />
      <OrgItemCard />
    </div>
  </div>
</template>

<script>
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { defineComponent, inject } from 'vue';

import OrgItemCard from '../../components/item/card/Org-itemCard.vue';
import CategoriesCard from '../../components/layout/card/CategoriesCard.vue';

export default defineComponent({
  name: 'OrgSecondPage',
  components: {
    Spacer,
    OrgItemCard,
    CategoriesCard,
  },
  setup: () => {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.org-second-page {
  width: 100%;
  // height: 33em;
  overflow: hidden;
  z-index: 100;
  .row-categorie {
    width: 800px;
  }
  .bloc-categorie {
    display: flex;
    justify-content: space-between;
  }
  .some-card {
    margin: -32px;
  }
  // .some-card {
  //   display: flex;
  //   justify-content: center;
  //   .duo-card {
  //     width: 100%;
  //     display: flex;
  //     justify-content: space-around;
  //   }
  // }
}
@media screen and (max-width: 1010px) {
  .row-categorie {
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
    width: 100% !important;
  }
  .some-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
// @media screen and (max-width: 1570px) {
//   .duo-card {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//   }
// }
</style>
