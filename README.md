# Vuejs vite E-Commerce
## This is a Vue.js-based e-commerce web application that allows users to browse and purchase products online. It features a responsive design, secure payment processing, and a powerful product catalog with search and filtering capabilities.





```vue
<template>
  <div class="org-third-page"></div>
</template>

<script lang="ts">
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { defineComponent, reactive, toRefs, inject } from 'vue';

export default defineComponent({
  name: 'OrgThirdPage',
  components: {
    Spacer,
  },
  setup: () => {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;
</style>

```

```vue
<template>
  <div class="chat-page">
    <OrgMainMenu homeornot="true" />
    <div class="chat-page-body">
      chat page
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, reactive, watch, toRefs, inject, ref } from 'vue';
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import OrgMainMenu from "../../components/layout/header/mainMenu/Org-MainMenu.vue";

export default defineComponent({
  name: 'ItemListPage',
  components: {
    Spacer,
    OrgMainMenu
  },
  inject: ['restSearch'],
  setup: () => {
    return {
    };
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;

.chat-page{
  display: flex;
  flex-direction: column;
  .chat-page-body {
    margin-top: 10em;
  }
}
</style>

```
## Modal
```js
const openModal = () => {
  visible.value = !visible.value;
  if (visible.value == true) {
    const data = {
      title: "Titre de la modal",
      size: "60%",
      data: "eola"
    };
    store.commit("setDataModal", data);
    store.commit("setTemplateModal", ModalTemplateItem);
    store.commit("setModalOpen", true);
    visible.value = false;
  } else {
    store.commit("setModalOpen", false);
    visible.value = true;
  }
};
```
# New components

```vue
  <script setup lang="ts">
    import MyComp from "./myComp.vue"
    // const color = "green";
    const color = ref("green");
  </script>

  <template>
    <div :class="blah.other">
      Some text
      <my-comp></my-comp>
      <button @click="color = 'red'">
        BUTTON
      </button>
    </div>
  </template>
  <style module="blah">
    .other {
      font-size: 3rem;
      color: v-bind(color);
    }
  </style>
```