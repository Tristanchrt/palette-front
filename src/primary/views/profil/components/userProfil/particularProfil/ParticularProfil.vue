<template>
  <div class="profil-page">
    <div class="profil-page-header">
      <Profile-Header />
    </div>
    <div class="profil-page-body">
      <Spacer level="1" />
      <ProfileHeaderTab :iscompany="false" @selectMenu="selectMenuTab" />
      <Spacer level="4" />
      <CompanyOrderTab v-if="activeTab == 2" />
      <IndividualPageTab v-if="activeTab == 1" />
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
import ProfileHeader from "../../common/ProfilHeader.vue";
import ProfileHeaderTab from "../../common/ProfilHeaderTab.vue";
import CompanyOrderTab from "../../orderPage/CompanyOrder.vue";
import IndividualPageTab from "./IndividualProfilTab.vue";

export default defineComponent({
  name: "ProfilPage",
  components: {
    Spacer,
    ProfileHeader,
    IndividualPageTab,
    ProfileHeaderTab,
    CompanyOrderTab
  },
  setup: () => {
    const state = reactive({
      activeTab: 2
    });

    function selectMenuTab(index) {
      state.activeTab = index;
      console.log(state.activeTab);
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
.profil-page-body {
  background-color: color.$secondary_base;
}
.profil-page-header {
  margin-top: 8em;
}
.profil-page-body {
  margin-top: 4em;
  height: 100%;
  width: 100%;
}
</style>
