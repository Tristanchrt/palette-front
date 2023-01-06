<template>
  <div class="stat-company">
    stat
    <!-- <ChartComp/> -->
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

export default defineComponent({
  name: "CompanyStatTab",
  components: {
    Spacer
  },
  setup: () => {
    const store = useStore();

    return { };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.stat-company {

}
</style>
