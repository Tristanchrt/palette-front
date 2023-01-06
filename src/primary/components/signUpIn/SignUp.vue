<template>
  <a-form
    ref="formRef"
    :model="formState"
    :rules="mainRules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item label="Type de compte" v-if="props.update == false">
      <a-radio-group v-model:value="formState.status" name="status">
        <a-radio value="1" @blur="formSign">Entreprise</a-radio>
        <a-radio value="2" @blur="formSign">Particulier</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Nom" name="lastName">
      <a-input
        v-model:value="formState.lastName"
        type="text"
        @blur="formSign"
      />
    </a-form-item>
    <a-form-item label="Prénom" name="firstName">
      <a-input
        v-model:value="formState.firstName"
        type="text"
        @blur="formSign"
      />
    </a-form-item>
    <a-form-item label="Adresse mail" name="email">
      <a-input v-model:value="formState.email" type="email" @blur="formSign" />
    </a-form-item>
    <a-form-item label="Numéro de téléphone" name="phone">
      <a-input v-model:value="formState.phone" type="phone" @blur="formSign" />
    </a-form-item>
    <a-form-item label="Mot de passe" name="password">
      <a-input
        v-model:value="formState.password"
        type="password"
        @blur="formSign"
      />
    </a-form-item>
    <a-form-item label="Confirmation de mot de passe" name="confirmPassword">
      <a-input
        v-model:value="formState.confirmPassword"
        type="password"
        @blur="formSign"
      />
    </a-form-item>
    <a-form-item label="Date de naissance" name="age">
      <a-date-picker
        v-model:value="formState.age"
        show-time
        type="date"
        placeholder="Choisir une date..."
        style="width: 100%"
        @blur="formSign"
      />
    </a-form-item>
    <a-form-item
      label="Raison social de l'entreprise"
      v-if="formState.status == 1"
      name="companyName"
    >
      <a-input v-model:value="formState.companyName" @blur="formSign" />
    </a-form-item>
    <a-form-item
      label="Numéro de siret"
      v-if="formState.status == 1"
      name="siretNumber"
    >
      <a-input v-model:value="formState.siretNumber" @blur="formSign" />
    </a-form-item>
    <a-form-item
      label="Adresse de l'entreprise"
      v-if="formState.status == 1"
      name="companyAddress"
    >
      <a-input v-model:value="formState.companyAddress" @blur="formSign" />
    </a-form-item>
    <a-form-item
      label="Département de l'entreprise"
      v-if="formState.status == 1"
      name="companySection"
    >
      <a-input v-model:value="formState.companySection" @blur="formSign" />
    </a-form-item>
    <a-form-item
      label="Catégorie"
      v-if="formState.status == 1"
      name="companyCategory"
    >
      <a-select
        v-model:value="formState.companyCategory"
        placeholder="please select your zone"
        @blur="formSign"
      >
        <a-select-option
          v-for="(item, index) in categories"
          :key="item"
          :value="index"
          >{{ item }}</a-select-option
        >
      </a-select>
    </a-form-item>
    <a-form-item
      label="Status"
      v-if="formState.status == 1"
      name="companyStatus"
    >
      <a-select
        v-model:value="formState.companyStatus"
        placeholder="please select your zone"
        @blur="formSign"
      >
        <a-select-option value="PME">PME</a-select-option>
        <a-select-option value="PMI">PMI</a-select-option>
        <a-select-option value="TPE">TPE</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
      label="Courte description entreprise"
      v-if="formState.status == 1"
      name="companyDescrpt"
    >
      <a-textarea v-model:value="formState.companyDescrpt" @blur="formSign" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 20, offset: 6 }">
      <a-button type="primary" @click="saveConfirm"> Envoyer </a-button>
      <a-button danger>Annuler</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { useStore } from "vuex";
import {
  defineComponent,
  reactive,
  ref,
  toRaw,
  toRefs,
  UnwrapRef,
  watch,
} from "vue";
import { Modal } from "ant-design-vue";
export default defineComponent({
  name: "SignUp",
  components: {},
  props: {
    update: {
      type: Boolean,
    },
    profilupdate: {
      type: Boolean,
    },
    data: {
      type: Object,
    },
  },
  setup(props, context) {
    const store = useStore();
    let validatePass1 = async (rule: any, value: string) => {
      if (value === "") {
        return Promise.reject("");
      } else if (
        !value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      ) {
        return Promise.reject("");
      } else {
        return Promise.resolve();
      }
    };
    let validatePass2 = async (rule: any, value: string) => {
      if (value === "") {
        return Promise.reject("");
      } else if (value !== formState.password) {
        return Promise.reject("");
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      firstName: [
        {
          required: true,
          message: "",
        },
      ],
      lastName: [
        {
          required: true,
          message: "",
        },
      ],
      email: [
        {
          required: true,
          message: "",
        },
      ],
      phone: [
        {
          required: true,
          message: "",
        },
      ],
      password: [
        {
          required: true,
          message:
            "Le mot de passe doit contenir au moins 8 caracteres, une majuscule et un chiffre",
          validator: validatePass1,
          trigger: "change",
        },
      ],
      confirmPassword: [
        {
          required: true,
          message: "Les deux mot de passe doivent être identique",
          validator: validatePass2,
          trigger: "change",
        },
      ],
      age: [
        {
          required: true,
          message: "",
        },
      ],
      status: [
        {
          required: true,
          message: "",
        },
      ],
    };

    const rules2 = {
      firstName: [
        {
          required: true,
          message: "",
        },
      ],
      lastName: [
        {
          required: true,
          message: "",
        },
      ],
      email: [
        {
          required: true,
          message: "",
        },
      ],
      phone: [
        {
          required: true,
          message: "",
        },
      ],
      password: [
        {
          required: true,
          message:
            "Le mot de passe doit contenir au moins 8 caracteres, une majuscule et un chiffre",
          validator: validatePass1,
          trigger: "change",
        },
      ],
      confirmPassword: [
        {
          required: true,
          message: "Les deux mot de passe doivent être identique",
          validator: validatePass2,
          trigger: "change",
        },
      ],
      age: [
        {
          required: true,
          message: "",
        },
      ],
      status: [
        {
          required: true,
          message: "",
        },
      ],
      companyName: [
        {
          required: true,
          message: "",
        },
      ],
      siretNumber: [
        {
          required: true,
          message: "",
        },
      ],
      companyAddress: [
        {
          required: true,
          message: "",
        },
      ],
      companySection: [
        {
          required: true,
          message: "",
        },
      ],
      companyCategory: [
        {
          required: true,
          message: "",
        },
      ],
      companyStatus: [
        {
          required: true,
          message: "",
        },
      ],
      companyDescrpt: [
        {
          required: true,
          message: "",
        },
      ],
    };

    const formRef = ref();

    const formState: any = reactive({
      status: "2",
      firstName: "",
      lastName: "",
      email: "",
      phone: null,
      password: "",
      confirmPassword: "",
      age: "",
      picture: "",
      siretNumber: "",
      companyAddress: "",
      companyName: "",
      companySection: null,
      companyCategory: "",
      companyStatus: "",
      companyDescrpt: "",
      isCompany: false,
    });

    if (props.profilupdate){
      formState.status = "1";
    } else {
      formState.status = "2";
    }

    const state: any = reactive({
      categories: [],
    });

    state.categories = [
      "Toutes nos catégories",
      "Vêtements, Textiles et Accessoires",
      "Loisir, Activité en pleine air et sports",
      "Auto & Transport",
      "Electronique et Multimédia",
      "Bricolage, équipement industrie et outils",
      "Maison, animaux et électroménager",
      "Beauté, santé",
    ];

    var mainRules: any = rules2;
    watch(
      () => formState.status,
      (newVal, oldVal) => {
        if (formState.status == "1") {
          mainRules = rules;
          formState.isCompany = true;
        } else {
          mainRules = rules2;
          formState.isCompany = false;
        }
      }
    );

    const formSign = () => {
      formRef.value
        .validate()
        .then(() => {
          if (formState.password != formState.confirmPassword)
            Promise.reject(
              "error" + formState.password + formState.confirmPassword
            );
          if (props.update) {
            store.dispatch("setFormUser", formState);
          } else {
            context.emit("formSign", formState);
          }
        })
        .catch((error: ValidateErrorEntity<any>) => {
          if (props.update) {
          } else {
            context.emit("formSign", "error");
          }
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };


    const saveConfirm = () => {
      Modal.confirm({
        content: () => "Sauvegarder modification",
        onOk() {
          context.emit("updateUser")
        },
        cancelText: () => "Annuler modfication",
        onCancel() {
          Modal.destroyAll();
        },
      });
    };

    return {
      formRef,
      labelCol: { style: { width: "250px", marginRight: "20px" } },
      wrapperCol: { span: 14, style: { width: "450px" } },
      other: "",
      formState,
      mainRules,
      formSign,
      resetForm,
      props,
      saveConfirm,
      ...toRefs(state),
    };
  },
});
</script>



