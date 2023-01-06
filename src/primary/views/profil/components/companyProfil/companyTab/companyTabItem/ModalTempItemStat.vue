<template>
  <div class="modal-template-stat">stat</div>
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
import FormItem from "./FormItem.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ModalTemplateItemStat",
  components: {
    Spacer,
    FormItem
  },
  props: {
    data: {
      type: Object
    }
  },
  setup: (props) => {
    return { props };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.modal-template-stat {
}
</style>
