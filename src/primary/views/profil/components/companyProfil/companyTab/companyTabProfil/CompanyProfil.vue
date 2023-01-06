<template>
  <div class="profil-company flex space-between">
    <div class="user-info">
      <SignUp :profilupdate="true" :update="true" />
    </div>
    <Spacer level="3" />
    <div class="user-company">
      <div class="btn-info">
        <a-button block type="primary" @click="openModal">
          Modifier information entreprise
        </a-button>
      </div>
      <Spacer level="4" />
      <div class="company-text" v-html="companyText" />
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
import ModalAnt from "../../../../../../utils/modal/ModalAnt.vue";
import { useStore } from "vuex";
import ModalTemplateComp from "./ModalTempComp.vue";
import FormUser from "./FormUser.vue";
import SignUp from "../../../../../../components/signUpIn/SignUp.vue";

export default defineComponent({
  name: "CompanyProfilTab",
  components: {
    Spacer,
    ModalAnt,
    FormUser,
    SignUp
  },
  setup: () => {
    const store = useStore();

    const visible = ref < boolean > (false);

    const state = reactive({
      companyText: null
    });

    state.companyText = store.state.main.editorTipTap;

    const openModal = () => {
      visible.value = !visible.value;
      if (visible.value == true) {
        const data = {
          title: "Modification vitrine entreprise",
          footer: null,
          size: "60%",
          data: state.companyText
        };
        store.dispatch("setDataModal", data);
        store.dispatch("setTemplateModal", ModalTemplateComp);
        store.dispatch("setModalOpen", true);
        visible.value = false;
      } else {
        store.dispatch("setModalOpen", false);
        visible.value = true;
      }
    };

    watch(() => store.getters.getEditorTipTap, (newValMax, oldValMax) => {
      state.companyText = store.state.main.editorTipTap;
    });

    return { openModal, ...toRefs(state) };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.profil-company {
  .user-info {
    }
    margin-left: 5%;
  .user-company {
    margin-right:5%;
    align-items: center;
    width: 50%;
  }
}

@media screen and (max-width: 800px) {
  .profil-company {
    flex-direction: column !important;
    align-items: center !important;
  }
  .user-company {
    width: 80% !important;
  }
}
</style>
