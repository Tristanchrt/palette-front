<template>
  <div class="modal-template">
    <FormItem :data="props.data" />
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
import FormItem from "./FormItem.vue";

export default defineComponent({
  name: "ModalTemplateItemCreate",
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
    console.log(props.data);
    return { props };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.modal-template {
}
</style>
