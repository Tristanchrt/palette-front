<template>
  <div class="point categories-card normal-radius" :style="{ height: height, width: width }">
    <img class="normal-radius" :src="image">
    <div class="name strong body">
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script>
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { defineComponent, reactive, toRefs, inject } from 'vue';

export default defineComponent({
  name: 'CategoriesCard',
  components: {
    Spacer
  },
  props: {
    height: {
      required: true,
      type: String
    },
    width: {
      required: false,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    image: {
      required: true,
      type: String
    }
  },
  setup: () => {
    return {};
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;

.categories-card {
  box-shadow: color.$primay_shadow;
  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
  }
  img {
    height: 80%;
    width: 100%;
  }
}
</style>
