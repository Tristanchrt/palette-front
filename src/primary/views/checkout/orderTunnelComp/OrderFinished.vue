<template>
  <div class="order-finished">
    <div class="order-finished-bloc1">
      <a-result
        status="success"
        title="Commandes effectuée !"
        sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      >
        <template #extra>
          <a-button type="primary" @click="order">VOIR COMMANDES</a-button>
        </template>
      </a-result>
    </div>
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
import {
  antNotification,
  antMessage
} from "@/.././src/primary/utils/notification";
export default defineComponent({
  name: "PaimentOtc",
  components: {
    Spacer
  },
  setup: () => {
    const store = useStore();

    const order = () => {
      console.log("order done !");
    };

    return { order };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.order-finished {
}
</style>
