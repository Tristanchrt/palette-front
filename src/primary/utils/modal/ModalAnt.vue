/* eslint-disable vue/attribute-hyphenation */
<template>
  <div class="modal">
    <a-modal
      v-model:visible="visible"
      :title="data ? data.title : null"
      :after-close="handleOk"
      :width="data ? data.size : null"
      :footer="data ? data.footer : null"
      @ok="handleOk"
    >
      <component :is="template" :data="data" />
    </a-modal>
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
import { useStore } from "vuex";

export default defineComponent({
  name: "ModalAnt",
  components: {
    Spacer
  },
  setup: () => {
    const store = useStore();
    const visible = ref < boolean > (false);

    const state = reactive({
      template: null,
      data: null
    });

    const handleOk = () => {
      store.dispatch("setModalOpen", false);
    };

    watch(
      () => store.getters.getIsModalOpen,
      (newVal, oldVal) => {
        if (newVal == true) {
          visible.value = true;
          state.template = store.getters.getTemplateModal;
          state.data = store.getters.getDataModal;
        } else {
          visible.value = false;
          state.template = null;
          state.data = null;
        }
      }
    );
    watch(
      () => store.getters.getDataModal,
      (newVal, oldVal) => {
        state.template = store.getters.getTemplateModal;
        state.data = store.getters.getDataModal;
      }
    );
    return { handleOk, visible, ...toRefs(state) };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
