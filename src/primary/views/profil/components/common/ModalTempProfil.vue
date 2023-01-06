<template>
  <div class="test">je suis un sub component et {{ props.data }}</div>
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

export default defineComponent({
  name: "ModalTemplateProfil",
  components: {
    Spacer
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

.profil {
}
</style>
