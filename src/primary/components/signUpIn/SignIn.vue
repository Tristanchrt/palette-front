<template>
  <div class="sign-in-body">
    <Spacer level="1" />
    <a-input v-model:value="signin.email" placeholder="Email">
      <template #prefix>
        <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
      </template>
    </a-input>
    <Spacer level="3" />
    <a-input
      v-model:value="signin.password"
      type="password"
      placeholder="Mot de passe"
    >
      <template #prefix>
        <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
      </template>
    </a-input>
    <Spacer level="1" />
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
} from "vue";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import { useStore } from "vuex";
import {
  antNotification,
  antMessage,
} from "@/.././src/primary/utils/notification";
import {
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
  MessageOutlined,
  LockOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "ConnectonOtc",
  components: {
    Spacer,
    LockOutlined,
    UserOutlined,
  },
  setup: () => {
    const store = useStore();
    const state = reactive({
      signin: {},
    });

    const handleOk = () => {
      if (state.activeKey == "1") {
        console.log("Inscription");
        console.log(formSignUpState.form);
        restUser!
          .signUp(formSignUpState.form)
          .then((val: any) => {
            console.log("REPO SIGN UP", val);
            store.dispatch("setUser", val);
            store.dispatch("setToken", val.token);
            state.isSuccess = 1;
          })
          .catch((err) => {
            state.isSuccess = 2;
          });
        setTimeout(() => {
          state.isSuccess = 0;
          location.reload();
        }, 1000);
      } else {
        console.log("Connexion");
        restUser!
          .signIn(state.signin.email, state.signin.password)
          .then((val: any) => {
            console.log("REPO SIGN IN", val);
            store.dispatch("setUser", val);
            store.dispatch("setToken", val.token);
            state.isSuccess = 1;
          })
          .catch((err) => {
            state.isSuccess = 2;
          });
        setTimeout(() => {
          state.isSuccess = 0;
          location.reload();
        }, 1000);
      }
    };

    state.signin.email = "";
    state.signin.password = "";

    return { ...toRefs(state) };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
</style>
