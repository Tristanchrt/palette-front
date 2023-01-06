
<template>
  <div class="comment-component">
    <a-comment>
      <template #author>
        <a>
          <h3>{{ data.name }}</h3></a>
      </template>
      <template #avatar>
        <a-avatar :src="data.picture" alt="Han Solo" />
      </template>
      <template #content>
        <p>
          {{ data.comment }}
        </p>
      </template>
      <template #datetime>
        <span>{{ data.datetime }}</span>
      </template>
    </a-comment>
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
import moment from "moment";
import Spacer from "@/assets/styled/spacer/Spacer.vue";

export default defineComponent({
  name: "CommentCpnt",
  components: {
    Spacer
  },
  props: {
    data: {
      default: {},
      required: true
    }
  },
  setup: ({ data }) => {
    return {
      moment
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
.comment-component {
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 16px;
}
@media screen and (max-width: 1200px) {
  .comment-component {
    max-width: 300px !important;
  }
}
@media screen and (max-width: 730px) {
  .comment-component {
    max-width: 300px !important;
  }
}
</style>
