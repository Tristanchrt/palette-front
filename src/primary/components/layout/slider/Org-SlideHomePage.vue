<template>
  <div
    :style="{ float: float_val, textAlign: text_align_val, borderRadius: position == 'left' ? '0px 64px 64px 0px' : '64px 0px 0px 64px' }"
    class="org-slide-home-page"
  >
    <span class="body strong">{{ title }}</span>
    <Spacer level="2" />
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { defineComponent, reactive, toRefs, inject } from 'vue';

export default defineComponent({
  name: 'OrgSlideHomePage',
  props: {
    position: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
  components: {
    Spacer,
  },
  setup: ({ position }) => {
    let float_val = position;
    let text_align_val = position;
    return { float_val, text_align_val };
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;
.org-slide-home-page {
  margin-top: 64px;
  margin-bottom: 64px;
  width: 60%;
  height: auto;
  padding: 32px;
  background: linear-gradient(180deg, rgba(152, 149, 255, 0.51) 45.31%, rgba(223, 183, 255, 0.71) 100%);
}
</style>
