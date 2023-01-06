<template>
  <div class="form-user">
    form
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
import ModalAnt from "../../../../../../utils/modal/ModalAnt.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "FormUser",
  components: {
    Spacer,
    ModalAnt
  },
  setup: () => {
    return { };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.form-user {
}
</style>
