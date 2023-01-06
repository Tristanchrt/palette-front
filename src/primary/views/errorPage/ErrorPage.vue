<template>
  <div class="error-page">
    <a-result
      status="404"
      title="404"
      sub-title="Désolé, quelque chose s'est mal passé"
    >
      <template #extra>
        <a-button type="primary" @click="backMenu">Retour page principle</a-button>
      </template>
    </a-result>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../../../router";
export default defineComponent({
  name: "ErrorPage",
  components: {},
  setup: () => {
    const backMenu = () => {
      router.push({ name: "Home" });
    };
    return { backMenu };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
</style>
