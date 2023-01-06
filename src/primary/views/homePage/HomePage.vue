<template>
  <div class="home-page">
    <OrgFirstPage />
    <div class="body">
      <OrgSecondPage />
      <OrgThirdPage />
    </div>
    <OrgFourthPage />
  </div>
</template>

<script lang="ts">
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { defineComponent } from 'vue';
import OrgFirstPage from '../homePage/Org-FirstPage.vue';
import OrgFourthPage from '../homePage/Org-FourthPage.vue';
import OrgSecondPage from '../homePage/Org-SecondPage.vue';
import OrgThirdPage from '../homePage/Org-ThirdPage.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Spacer,
    OrgFirstPage,
    OrgThirdPage,
    OrgSecondPage,
    OrgFourthPage
  },
  setup: () => {
    return {
    };
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;
.home-page {
  display: flex;
  flex-direction: column;
  .body {
    margin: 6em;
  }
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
    // justify-content: center;
  }
}
@media screen and (max-width: 600px) {
  .body {
    margin: 5em !important;
  }
}
@media screen and (max-width: 520px) {
  .body {
    margin: 4.5em !important;
  }
}
@media screen and (max-width: 470px) {
  .body {
    margin: 4em !important;
  }
}
</style>
