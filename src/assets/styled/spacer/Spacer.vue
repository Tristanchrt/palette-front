<script>
import { defineComponent, inject, provide, reactive, toRefs, computed, h } from 'vue';

export default defineComponent({
  props: {
    level: {
      default: 1,
      required: true,
    },
    debug: {
      default: false,
      required: false,
    },
  },
  setup({ level, debug }) {
    const state = reactive({
      spacersValue: {},
    });
    state.spacersValue = {
      1: 8,
      2: 16,
      3: 24,
      4: 32,
      5: 48,
      6: 64,
      7: 128,
    };
    let styleSpacer = [`height: ${state.spacersValue[level]}px`, `width: ${state.spacersValue[level]}px`];
    if (debug) return () => h('div', { style: [styleSpacer[0], styleSpacer[1], 'background-color: grey'] }, '');
    return () => h('div', { style: [styleSpacer[0], styleSpacer[1]] }, '');
  },
});
</script>

<style scoped></style>
