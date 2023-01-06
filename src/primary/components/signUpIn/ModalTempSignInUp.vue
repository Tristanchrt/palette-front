<template>
  <div class="modal-template-sign-in-up">
    <div class="body-modal">
      <a-alert
        v-if="isSuccess == 1"
        message="Authentification réussi"
        type="success"
      />
      <a-alert
        v-if="isSuccess == 2"
        message="Error lors de l'authentification"
        type="error"
      />
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Inscription">
          <div class="sign-up-body">
            <SignUp @formSign="formSignUp" />
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Connexion">
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
            <Spacer level="4" />
            <a-button block type="primary" @click="handleOk">
              Envoyer
            </a-button>
            <Spacer level="2" />
            <a-button block danger>Annuler</a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
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
import { RestUser } from "../../../domain/RestUser";
import {
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
  MessageOutlined,
  LockOutlined,
} from "@ant-design/icons-vue";
import SignUp from "./SignUp.vue";

export default defineComponent({
  name: "ModalTemplateItemCreate",
  components: {
    Spacer,
    ShoppingCartOutlined,
    UserOutlined,
    MessageOutlined,
    UnorderedListOutlined,
    LockOutlined,
    SignUp,
  },
  props: {
    data: {
      type: Object,
    },
  },
  inject: ["restUser"],
  setup: (props) => {
    const state = reactive({
      menuOpened: false,
      menus: [],
      messageNotRead: 3,
      shopCount: 8,
      visible: false,
      confirmLoading: false,
      activeKey: "1",
      signin: {},
      isSuccess: 0,
    });

    const store = useStore();

    const restUser: RestUser | undefined = inject("restUser")!;

    const formSignUpState = reactive({
      form: {},
    });

    function formSignUp(form) {
      console.log(form);
      formSignUpState.form = form;
    }

    state.signin.email = "";
    state.signin.password = "";
    state.menus = ["Profil", "Messagerie", "Panier"];

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

    return {
      props,
      formSignUp,
      handleOk,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.modal-template-sign-in-up {
}
</style>
