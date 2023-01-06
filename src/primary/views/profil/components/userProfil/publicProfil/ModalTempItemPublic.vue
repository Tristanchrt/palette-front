<template>
  <div class="modal-template-public">
    <div class="info-article">
      <p class="star-bloc">
        Note :
        <a-rate disabled :value="props.data.data.ratingStare" />
        {{ props.data.data.ratingTotal }} évaluation(s)
        <star-outlined key="star" />
      </p>
    </div>
    <div class="comments">
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
import { commentUser } from "@/../src/fixtures/user/UserFXT";
import CommentCpnt from "../../common/Comment.vue";

export default defineComponent({
  name: "ModalTemplateItemPublic",
  components: {
    Spacer,
    CommentCpnt
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  setup: (props) => {
    const comment = commentUser();
    const comments = [comment, comment, comment, comment, comment, comment];
    console.log(props.data);
    return { props, comments };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.modal-template-public {
  display: flex;
  flex-direction: column;
  .comments {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
