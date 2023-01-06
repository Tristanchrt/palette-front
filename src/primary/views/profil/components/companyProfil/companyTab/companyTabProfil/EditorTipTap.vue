
<template>
  <QuillEditor
    v-model:content="modelname"
    content-type="html"
    theme="snow"
    toolbar="full"
    style="height:400px"
  />
</template>
<script>
import {
  defineComponent,
  watch,
  onDeactivated,
  reactive,
  toRefs,
  inject,
  ref
} from "vue";
import { useStore } from "vuex";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default defineComponent({
  components: {
    QuillEditor
  },
  setup() {
    const store = useStore();

    const state = reactive({
      modelname: ""
    });

    watch(
      () => state.modelname,
      (newValMax, oldValMax) => {
        store.dispatch("setEditorTipTap", newValMax);
      }
    );

    watch(
      () => state.modelname,
      (newValMax, oldValMax) => {
        console.log(state.modelname);
      }
    );
    return { ...toRefs(state) };
  }
});
</script>
<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
div {
  ::v-deep(.ql-editor) {
    height: 500px;
  }
}
</style>
