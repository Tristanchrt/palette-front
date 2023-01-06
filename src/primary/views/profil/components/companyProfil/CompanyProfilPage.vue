<template>
  <div class="company-profil">
    <ProfileHeader />
    <Spacer level="6" />
    <div class="header-tab">
      <Spacer level="1" />
      <ProfileHeaderTab :iscompany="true" @selectMenu="selectMenuTab" />
      <Spacer level="4" />
      <CompanyProfilTab v-if="activeTab == 1" />
      <CompanyOrderTab v-if="activeTab == 2" />
      <CompanyItemTab v-if="activeTab == 3" />
      <CompanyReviews v-if="activeTab == 4" />
      <CompanyStatTab v-if="activeTab == 5" />
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
import ProfileHeader from "../common/ProfilHeader.vue";
import ProfileHeaderTab from "../common/ProfilHeaderTab.vue";
import CompanyProfilTab from "./companyTab/companyTabProfil/CompanyProfil.vue";
import CompanyOrderTab from "../orderPage/CompanyOrder.vue";
import CompanyItemTab from "./companyTab/companyTabItem/CompanyItem.vue";
import CompanyStatTab from "./companyTab/companyStat/CompanyStat.vue";
import CompanyReviews from "./companyTab/CompanyReviews.vue";
import {
  EyeOutlined,
  MailOutlined,
  FilePdfOutlined
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "CompanyProfil",
  components: {
    Spacer,
    EyeOutlined,
    MailOutlined,
    FilePdfOutlined,
    CompanyStatTab,
    ProfileHeader,
    ProfileHeaderTab,
    CompanyProfilTab,
    CompanyOrderTab,
    CompanyItemTab,
    CompanyReviews
  },
  setup: () => {
    const state = reactive({
      activeTab: 2
    });

    function selectMenuTab(index) {
      state.activeTab = index;
    }

    return {
      selectMenuTab,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
.header-tab {
  background-color: color.$secondary_base;
}
.company-profil {
  .orders {
    display: flex;
    .order {
      width: 300px;
      height: 300px;
      background-color: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      .header {
        border-bottom: 1px solid color.$grey;
        padding: 8px;
        .main-price {
          background-color: color.$primary_gradient;
          color: color.$primary_text;
          border-radius: 20px;
          padding: 6px 20px 6px 20px;
        }
      }
    }
  }
  .body {
    border-bottom: 1px solid color.$grey;

    .row-title {
      color: color.$primary_gradient;
    }
    .row-price {
      background-color: color.$primary_gradient;
      color: color.$primary_text;
      border-radius: 20px;
      padding: 2px 8px 2px 8px;
    }
  }
  .footer {
    margin: 8px;
    .text {
      text-align: center;
      font-size: 12px;
      line-height: 1;
      margin-top: 8px;
    }
    div {
      ::v-deep(.anticon) {
        font-size: 24px;
      }
      &:hover {
        color: color.$primary_gradient;
        cursor: pointer;
      }
    }
  }
}
</style>
