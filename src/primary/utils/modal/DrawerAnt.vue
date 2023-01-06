<template>
  <a-drawer
    v-model:visible="visible"
    :title="data ? data.title : null"
    :width="data ? data.size : null"
    placement="right"
    :closable="false"
    @close="close"
  >
    <component :is="template" :data="data" />
  </a-drawer>
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
import { useStore } from "vuex";

export default defineComponent({
  name: "DrawerAnt",
  components: {},
  setup() {
    const visible = ref < boolean > (false);
    const store = useStore();

    const state = reactive({
      template: null,
      data: null
    });

    watch(
      () => store.getters.getDrawer,
      (newVal, oldVal) => {
        if (newVal == true) {
          visible.value = true;
          state.template = store.getters.getTemplateDrawer;
          state.data = store.getters.getDataDrawer;
        } else {
          visible.value = false;
        }
      }
    );
    watch(
      () => store.getters.getDataDrawer,
      (newVal, oldVal) => {
        state.template = store.getters.getTemplateDrawer;
        state.data = store.getters.getDataDrawer;
      }
    );

    const close = () => {
      store.dispatch("openDrawer");
    };

    return {
      visible,
      ...toRefs(state),
      close
    };
  }
});
</script>
