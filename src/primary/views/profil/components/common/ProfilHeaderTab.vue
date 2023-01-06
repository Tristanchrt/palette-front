<template>
  <div class="header-profil-tab">
    <div class="menu flex space-around strong body">
      <span
        class="btn"
        :class="[active == 2 ? 'border-selected' : '']"
        @click="selectMenu(2)"
      >Commande</span>
      <span
        v-if="props.iscompany == true"
        class="btn"
        :class="[active == 3 ? 'border-selected' : '']"
        @click="selectMenu(3)"
      >Article</span>
      <span
        v-if="props.iscompany == true"
        class="btn"
        :class="[active == 4 ? 'border-selected' : '']"
        @click="selectMenu(4)"
      >Avis</span>
      <span
        v-if="props.iscompany == true"
        class="btn"
        :class="[active == 5 ? 'border-selected' : '']"
        @click="selectMenu(5)"
      >Statistique</span>
      <span
        class="btn"
        :class="[active == 1 ? 'border-selected' : '']"
        @click="selectMenu(1)"
      >Profil</span>
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
  ref,
  defineEmit
} from "vue";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import { context } from "ant-design-vue/lib/vc-image/src/PreviewGroup";
export default defineComponent({
  name: "ProfileHeaderTab",
  components: {
    Spacer
  },
  props: {
    iscompany: {
      type: Boolean
    }
  },
  setup: (props, context) => {
    const state = reactive({
      active: 2
    });

    function selectMenu(index) {
      state.active = index;
      context.emit("selectMenu", state.active);
    }

    return {
      selectMenu,
      ...toRefs(state),
      props
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.header-profil-tab {
  .btn {
    cursor: pointer;
  }
}
.border-selected {
  border-bottom: 4px solid color.$primary_gradient;
}
</style>
