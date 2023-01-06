<template>
  <div class="connecton-otc">
    <div class="btn-connection">
      <a-button type="primary" size="large" @click="signIn">
        CONNECTION
      </a-button>
      <Spacer level="6" />
      <Spacer level="6" />
      <a-button class="signUp" size="large" @click="signUp">
        INSCRIPTION
      </a-button>
    </div>
    <Spacer level="6" />
    <div class="bloc-comp">
      <component :is="template[index]" @formSign="formSignUp" />
      <div class="sign-in-body" v-if="index == 1">
        <Spacer level="1" />
        <a-input v-model:value="signin.email" placeholder="Email">
          <template #prefix
            ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
          /></template>
        </a-input>
        <Spacer level="3" />
        <a-input
          v-model:value="signin.password"
          type="password"
          placeholder="Mot de passe"
        >
          <template #prefix
            ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
          /></template>
        </a-input>
        <Spacer level="3" />
        <a-button type="primary" block size="small" @click="handleOk">
          CONNECTION
        </a-button>
      </div>
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
  ref,
} from "vue";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import { useStore } from "vuex";
import {
  antNotification,
  antMessage,
} from "@/.././src/primary/utils/notification";
import SignUp from "../../../components/signUpIn/SignUp.vue";
import SignIn from "../../../components/signUpIn/SignIn.vue";
import { RestUser } from "../../../../domain/RestUser";

export default defineComponent({
  name: "ConnectonOtc",
  components: {
    Spacer,
    SignIn,
    SignUp,
  },
  setup: () => {
    const restUser: RestUser | undefined = inject("restUser")!;

    const store = useStore();
    const state = reactive({
      template: [SignUp],
      index: 2,
      data: null,
      signin: {},
      activeKey: "1",
    });

    const signIn = () => {
      console.log("signIn");
      state.index = 1;
    };
    const signUp = () => {
      console.log("signUp");
      state.index = 0;
    };

    const formSignUpState = reactive({
      form: {},
    });

    function formSignUp(form) {
      console.log(form);
      formSignUpState.form = form;
    }

    state.signin.email = "";
    state.signin.password = "";

    const handleOk = () => {
      if (state.index == 0) {
        console.log("Inscription");
        console.log(formSignUpState.form);
        restUser!
          .signUp(formSignUpState.form)
          .then((val: any) => {
            console.log("REPO SIGN UP", val);
            store.dispatch("setUser", val);
            store.dispatch("setToken", val.token);
          })
          .catch((err) => {});
        setTimeout(() => {
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
          })
          .catch((err) => {});
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    };

    return { signIn, signUp, ...toRefs(state), handleOk, formSignUp };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.btn-connection {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
.connecton-otc {
  display: flex;
  flex-direction: column;
}
.bloc-comp {
  display: flex;
  justify-content: center;
}
</style>
