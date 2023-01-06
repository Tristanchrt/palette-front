<template>
  <div class="header-profil">
    <div class="info-user flex">
      <div class="info-user-left">
        <img src="@/assets/styled/image/man.jpg">
      </div>
      <Spacer level="4" />
      <div class="info-user-right">
        <span class="info-user-name semi-strong h2">Matt dauzi</span>
        <span class="info-user-title strong h3">Responsable commercial</span>
        <span class="info-user-company h3 strong">Axians</span>
        <span class="info-user-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          massa, felis, aliquet nulla ac risus, sit massa aliquam. Euismod
          bibendum nisl volutpat non. Scelerisque commodo augue vestibulum
          blandit feugiat enim dolor euismod non. Gravida posuere sit in eu,
          eget etiam adipiscing at. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Turpis massa, felis, aliquet nulla ac risus, sit
          posuere sit in eu, eget etiam adipiscing at.
        </span>
      </div>
    </div>
    <div class="stat-reponsive">
      <div class="list-stat semi-strong h3">
        <span> 450 avis </span>
        <span> 450 articles </span>
        <span> 450 commandes </span>
      </div>
    </div>
    <div class="map-strat">
      <div class="map point">
        <a-tooltip placement="bottom">
          <template #title>Rhône</template>
          <img src="@/assets/styled/image/rhone.png">
        </a-tooltip>
      </div>
      <!-- <Spacer level="6" /> -->
      <div class="stat">
        <div class="stat-child stat-advice semi-strong h3">450 avis</div>
        <Spacer level="2" />
        <div class="stat-child stat-items semi-strong h3">450 articles</div>
        <Spacer level="2" />
        <div class="stat-child stat-order semi-strong h3">450 commandes</div>
      </div>
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

export default defineComponent({
  name: "ProfileHeader",
  components: {
    Spacer
  },
  setup: () => {
    return {};
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.header-profil {
  margin-top: 120px;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  .info-user {
    display: flex;
    .info-user-left {
      img {
        width: 250px;
        height: 250px;
        border-radius: 32px;
      }
    }
    .info-user-right {
      margin-left: 16px;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      .info-user-company {
        color: color.$primary_gradient;
      }
      .info-user-description {
        overflow: hidden;
      }
    }
  }
  .map {
    img {
      width: 200px;
      height: 200px;
    }
  }
  .stat {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 400px;
    .stat-child {
      border-radius: 32px 0px 0px 32px;
      line-height: 64px;
      height: 64px;
      text-align: center;
      background: linear-gradient(
        180deg,
        rgba(152, 149, 255, 0.255) 45.31%,
        rgba(223, 183, 255, 0.355) 100%
      );
    }
    .stat-advice {
      width: 50%;
    }
    .stat-items {
      width: 70%;
    }
    .stat-order {
      width: 88%;
    }
  }
}
.stat-reponsive {
  border-radius: 32px;
  line-height: 64px;
  height: 64px;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(152, 149, 255, 0.255) 45.31%,
    rgba(223, 183, 255, 0.355) 100%
  );
}
.list-stat{
  display: flex;
  justify-content: space-around;
}
.map-strat {
  display: flex;
}
@media screen and (max-width: 1200px) {
  .map {
    display: none !important;
  }
}
@media screen and (max-width: 1000px) {
  .map-strat {
    display: none !important;
  }
  .header-profil {
    flex-direction: column !important;
  }
  .info-user {
    margin-bottom: 16px;
  }
}
@media screen and (max-width: 500px) {
  .info-user {
    flex-direction: column;
    align-items: center;
  }
  .list-stat {
    flex-direction: column !important;
  }
  .stat-reponsive{
    height: 200px !important;
  }
}
@media screen and (min-width: 1000px) {
  .stat-reponsive {
    display: none !important;
  }
}
</style>
