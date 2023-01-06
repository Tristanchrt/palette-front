<template>
  <div class="profil-page">
    <div class="profil-page-header">
      <ProfileHeader />
    </div>
    <div class="profil-page-body">
      <DetailProfil />
      <a-button type="primary" @click="deconnexion">Deconnexion</a-button>
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
import { useStore } from "vuex";
import ProfileHeader from "../../common/ProfilHeader.vue";
import DetailProfil from "./DetailProfil.vue";

export default defineComponent({
  name: "ProfilPage",
  components: {
    Spacer,
    ProfileHeader,
    DetailProfil
  },
  setup: () => {
    const store = useStore();
    const deconnexion = () => {
      store.dispatch("resetUser");
      store.dispatch("resetToken");
      location.reload();
    };

    return {
      deconnexion
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.profil-page-header {
  margin-top: 8em;
}
.profil-page-body {
  margin-top: 4em;
  height: 100%;
  width: 100%;
}
</style>
