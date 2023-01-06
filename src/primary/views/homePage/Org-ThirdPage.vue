<template>
  <div class="org-third-page">
    <Spacer level="5" />
    <div class="title strong">Les catégories qui ont la côte</div>
    <div class="title">Sacrément populaire</div>
    <Spacer level="5" />
    <div class="bloc-categorie">
      <div class="left-categorie">
        <div class="row-categorie">
          <CategoriesCard
            :name="'Industrie Textile'"
            :height="'250px'"
            :width="'350px'"
            :image="'src/assets/styled/image/card-categorie1.png'"
          />
          <Spacer level="4" />
          <CategoriesCard
            :name="'Tuyau et conduit'"
            :height="'250px'"
            :width="'350px'"
            :image="'src/assets/styled/image/card-categorie2.png'"
          />
        </div>
        <Spacer level="4" />
        <div class="row-categorie">
          <CategoriesCard
            :name="'Industrie Textile'"
            :height="'250px'"
            :width="'350px'"
            :image="'src/assets/styled/image/card-categorie1.png'"
          />
          <Spacer level="4" />
          <CategoriesCard
            :name="'Tuyau et conduit'"
            :height="'250px'"
            :width="'350px'"
            :image="'src/assets/styled/image/card-categorie2.png'"
          />
        </div>
      </div>
      <div class="right-categorie">
        <CategoriesCard
          :name="'Tuyau et conduit'"
          :height="'532px'"
          :width="'620px'"
          :image="'src/assets/styled/image/card-categorie2.png'"
        />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { defineComponent, reactive, toRefs, inject } from 'vue';

import CategoriesCard from '../../components/layout/card/CategoriesCard.vue';

export default defineComponent({
  name: 'OrgThirdPage',
  components: {
    Spacer,
    CategoriesCard,
  },
  setup: () => {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;
.org-third-page {
  .header {
    margin: 6em;
  }
  .some-card {
    display: flex;
    justify-content: space-between;
  }
  .row-categorie {
    width: 800px;
    display: flex;
    justify-content: space-between;
  }
  .bloc-categorie {
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: 1700px) {
  .bloc-categorie {
    flex-direction: column;
  }
  .right-categorie {
    margin-top: 48px;
    display: flex;
    justify-content: left;
    align-items: left;
  }
}
@media screen and (max-width: 980px) {
  .row-categorie {
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
    width: 100% !important;
  }
  .right-categorie {
    justify-content: center;
    align-items: center;
  }
}
</style>
