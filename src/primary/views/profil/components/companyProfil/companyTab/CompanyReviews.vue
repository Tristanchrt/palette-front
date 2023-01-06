<template>
  <div class="reviews">
    <CommentCpnt v-for="index in 10" :key="index" :data="data" />
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
export default defineComponent({
  name: "CompanyReviews",
  components: {
    Spacer,
    CommentCpnt
  },
  setup: () => {
    const data = {
      name: "eolea",
      datetime: "30-05-2000",
      picture:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      comment:
        "Lorem ipsum dolor sit amet. Rem consequatur possimus aut repudiandae consequuntur ut similique dolorem qui officia exercitationem! Est harum voluptatem non voluptatem non sint omnis qui eaque praesentium. Rem quasi porro qui autem tenetur est asperiores aliquam in officiis explicabo. Ut corrupti consectetur ut totam voluptatem non sunt consequuntur id atque amet vel magni itaque ut cumque modi aut voluptatum dolores."
    };
    return { data };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.reviews {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 8.5%;
}
@media screen and (max-width: 730px) {
  .reviews {
    align-items: center !important;
    justify-content: center !important;
  }
}
</style>
