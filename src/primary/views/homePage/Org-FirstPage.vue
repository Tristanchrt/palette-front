<template>
  <div class="org-first-page">
    <div class="first-page">
      <div class="strong extra-big title-home-page">Découvre des milliers de produits uniques en France</div>
      <img src="@/assets/styled/image/palette_ferrailleur.png">
      <div class="background-first-page" />
      <div class="background-first-page-2" />

      <div class="background-first-page-3" />
      <div class="background-white-first-page" />
    </div>
  </div>
</template>

<script>
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { defineComponent } from 'vue';

import MolSearchMenu from '../../components/layout/header/mainMenu/Mol-SearchMenu.vue';

export default defineComponent({
  name: 'OrgFirstPage',
  components: {
    Spacer,
    MolSearchMenu
  },
  setup: () => {
    return {};
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;
.org-first-page {
  .first-page {
    height: 1000px;
    width: 100%;
    img {
      position: absolute;
      right: 0;
      width: 632px;
      height: 359px;
      z-index: 2;
      right: 3%;
      top: 350px;
    }
    .title-home-page {
      position: absolute;
      z-index: 2;
      left: 48px;
      top: 128px;
      overflow: auto;
      max-width: 800px;
    }
    .search-bar-input {
      z-index: 2;
      // max-width: 1200px;
      position: absolute;
      left: 13%;
      // box-shadow: color.$primay_shadow;
      top: 440px;
    }
    .background-white-first-page {
      position: absolute;
      width: 632px;
      height: 367px;
      right: 1%;
      top: 376px;
      background: #ffffff;
    }
    .background-first-page {
      position: absolute;
      width: 100%;
      height: 1000px;
      background: linear-gradient(
        180deg,
        rgba(234, 234, 255, 0.082069) 0%,
        rgba(225, 224, 255, 0.51) 45.31%,
        rgba(232, 221, 255, 0.71) 100%
      );
      filter: blur(4px);
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
    .background-first-page-2 {
      position: absolute;
      width: 80%;
      height: 95%;
      right: 0;
      background: linear-gradient(
        180deg,
        rgba(204, 206, 255, 0.082069) 0%,
        rgba(174, 172, 250, 0.51) 45.31%,
        rgba(213, 195, 253, 0.71) 100%
      );
      filter: blur(4px);
      border-radius: 0px 0px 300px 300px;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
    .background-first-page-3 {
      position: absolute;
      width: 75%;
      height: 85%;
      // left: -28px;
      // top: -497.98px;
      z-index: 1;
      background: linear-gradient(180deg, rgba(188, 199, 254, 0) 0%, rgba(152, 149, 255, 0.51) 45.31%, rgba(223, 183, 255, 0.71) 100%);
      filter: blur(4px);
      border-radius: 0px 0px 300px 300px;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
  @media screen and (max-width: 496px) {
    .search-bar-input {
      top: 500px !important;
    }
    img {
      top: 570px !important;
      margin: 0 auto !important;
      left: 0;
    }
    .background-white-first-page {
      top: 580px !important;
    }
  }
}
@media screen and (max-width: 740px) {
  img {
    top: 400px !important;
    margin: 0 auto !important;
    left: 0.1em;
  }
  .background-white-first-page {
    top: 430px !important;
  }
}
@media screen and (max-width: 1100px) {
  .search-bar-input {
    left: 6% !important;
    width: 80% !important;
  }
}
@media screen and (max-width: 980px) {
  .search-bar-input {
    left: 6% !important;
  }
}
@media screen and (max-width: 880px) {
  .search-bar-input {
    left: 8% !important;
    right: 8% !important;
    position: relative !important;
  }
}
@media screen and (max-width: 740px) {
  img {
    top: 520px !important;
    margin: 0 auto !important;
    left: 0;
  }
  .background-white-first-page {
    top: 550px !important;
  }
}
@media screen and (max-height: 900px) {
  .test {
    height: 1000px !important;
  }
}
// @media screen and (max-width: 910px) {
//   .search-bar-input {
//     left: 5% !important;
//   }
// }
// @media screen and (max-width: 800px) {
//   .search-bar-input {
//     left: 1% !important;
//   }
// }
@media screen and (max-width: 800px) {
  .search-bar-input {
    margin-top: 14px !important;
  }
}

</style>
