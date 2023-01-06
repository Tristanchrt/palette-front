<template>
  <div class="temp-comp">
    <Spacer level="1" />
    <Editor :data="props.data.data" />
    <a-button block type="primary" @click="save">
      Sauvegarder modification
    </a-button>
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
import Editor from "./EditorTipTap.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ModalTemplateComp",
  components: {
    Spacer,
    Editor
  },
  props: {
    data: {
      type: Object
    }
  },
  setup: (props) => {
    const store = useStore();
    const save = () => {
      console.log(store.getters.getEditorTipTap);
      store.dispatch('setModalOpen', false);
    };

    return { props, save };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.profil {
}
</style>
