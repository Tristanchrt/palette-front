<template>
  <div class="individual-page-tab flex space-around">
    <div class="update-info flex">
      <h2 class="title">
        Informations profil
      </h2>
      <Spacer level="3" />
      <SignUp :profilupdate="false" :update="true" />
    </div>
    <div class="reviews">
      <h2 class="title">Avis</h2>
      <CommentCpnt v-for="comment in comments" :key="comment" :data="comment" />
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
import CommentCpnt from "../../common/Comment.vue";
import { commentUser } from "../../../../../../fixtures/user/UserFXT";
import SignUp from "../../../../../components/signUpIn/SignUp.vue";
export default defineComponent({
  name: "IndividualPageTab",
  components: {
    Spacer,
    CommentCpnt,
    SignUp
  },
  setup: () => {
    const comment = commentUser();
    const comments = [comment, comment, comment, comment, comment, comment];
    return {
      comments
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
.individual-page-tab {
  .update-info {
    flex-direction: column;
    align-items: center;
  }
}
</style>
