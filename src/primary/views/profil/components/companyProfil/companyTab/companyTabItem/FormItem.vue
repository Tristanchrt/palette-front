<template>
  <a-form
    ref="formRef"
    :model="formState"
    :rules="mainRules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item label="Image principles" name="picture">
      <a-upload
        v-model:file-list="formState.picture"
        name="file"
        :multiple="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="uploadMainImage"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          Ajout image
        </a-button>
      </a-upload>
    </a-form-item>
    <a-form-item label="Images secondaire">
      <a-upload
        v-model:file-list="formState.pictures"
        name="file"
        :multiple="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="uploadSecondaireImages"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          Ajout image
        </a-button>
      </a-upload>
    </a-form-item>
    <a-form-item label="Titre" name="title">
      <a-input v-model:value="formState.title" type="text" />
    </a-form-item>
    <a-form-item label="Déscription rapide" name="shortDescription">
      <a-textarea
        v-model:value="formState.shortDescription"
        type="text"
        rows="4"
      />
    </a-form-item>
    <a-form-item label="Prix minimum" name="minPrice">
      <a-input-number :min="0" v-model:value="formState.minPrice" />
    </a-form-item>
    <a-form-item label="Prix maximum" name="maxPrice">
      <a-input-number :min="0" v-model:value="formState.maxPrice" />
    </a-form-item>
    <a-form-item label="Max Pcs " name="maxPcs">
      <a-input-number :min="0" v-model:value="formState.maxPcs" />
    </a-form-item>
    <a-form-item label="Min Pcs " name="minPcs">
      <a-input-number :min="0" v-model:value="formState.minPcs" />
    </a-form-item>
    <a-form-item label="Tag" name="tag">
      <FormItemTag
        :index="index"
        v-for="index in formState.tagsList"
        :key="index"
      />
      <a-button type="dashed" @click="newTag">
        <PlusOutlined />
        Créer un tag
      </a-button>
      <a-button danger @click="deleteTag"> Supprimer tag </a-button>
    </a-form-item>
    <a-form-item label="Déscription complète" name="description">
      <a-textarea v-model:value="formState.description" type="text" rows="8" />
    </a-form-item>
    <a-button
      v-if="props.data.update == false"
      block
      type="primary"
      @click="formItem"
      >Créer article</a-button
    >
    <div v-if="props.data.update == true">
      <a-button block type="primary" @click="updateItem"
        >Modifier article</a-button
      >
      <Spacer level="2" />
      <a-button block danger @click="cancelUpdate"
        >Annuler modification</a-button
      >
      <Spacer level="2" />
      <a-button block type="dashed" danger @click="deleteItem"
        >Supprimer article</a-button
      >
    </div>
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
import { UploadOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { antMessage } from "../../../../../../utils/notification";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import FormItemTag from "./FormItemTag.vue";
import { Modal } from "ant-design-vue";

function uploadFile(info: any, index: number) {
  let resFileList = [...info.fileList];
  if (index < resFileList.length) {
    resFileList = resFileList.slice(-1);
  }

  resFileList = resFileList.map((file) => {
    if (file.response) {
      file.url = file.response.url;
    }
    return file;
  });
  return resFileList;
}

const mainRules = {
  picture: [
    {
      required: true,
      message: "",
    },
  ],
  pictures: [
    {
      required: true,
      message: "",
    },
  ],
  title: [
    {
      required: true,
      message: "",
    },
  ],
  shortDescription: [
    {
      required: true,
      message: "",
    },
  ],
  description: [
    {
      required: true,
      message: "",
    },
  ],
  minPrice: [
    {
      required: true,
      message: "",
    },
  ],
  maxPrice: [
    {
      required: true,
      message: "",
    },
  ],
  maxPcs: [
    {
      required: true,
      message: "",
    },
  ],
  minPcs: [
    {
      required: true,
      message: "",
    },
  ],
};

export default defineComponent({
  name: "FormItem",
  components: {
    UploadOutlined,
    PlusOutlined,
    Spacer,
    FormItemTag,
  },
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    const store = useStore();

    const formRef = ref();

    const formState: any = reactive(store.state.storeProfilPage.form_item);

    console.log(formState);

    const formItem = () => {
      formRef.value
        .validate()
        .then(() => {
          if (formState.picture.length > 0) {
            store.dispatch("createNewItem");
            console.log(store.getters.getFormItem);
          } else {
            Promise.reject("Error no main picture found");
            antMessage("Information manquante", 2);
          }
        })
        .catch((error: ValidateErrorEntity<any>) => {
          antMessage("Information manquante", 2);
          console.log("Error form item: " + error);
        });
    };

    const resetForm = () => {
      formRef.value.resetFields();
    };

    const uploadMainImage = (info: any) => {
      if (info.file.status === "done") {
        formState.picture = uploadFile(info, 0);
        antMessage("Image upload", 1);
        console.log(formState.picture);
      } else if (info.file.status === "error") {
        antMessage("Erreur pendant l'upload", 2);
      }
    };
    const uploadSecondaireImages = (info: any) => {
      if (info.file.status === "done") {
        formState.pictures = uploadFile(info, 4);
        antMessage("Image upload", 1);
        console.log(formState.picture);
      } else if (info.file.status === "error") {
        antMessage("Erreur pendant l'upload", 2);
      }
    };

    const newTag = () => {
      formState.tagsList++;
    };
    const deleteTag = () => {
      if (formState.tagsList > 0) {
        formState.tagsList--;
        store.state.storeProfilPage.form_item.tags.splice(-1);
        console.log(store.state.storeProfilPage.form_item);
      }
    };

    const updateItem = () => {
      console.log("update item");
    };
    const cancelUpdate = () => {
      console.log("cancel item");
    };
    const deleteItem = () => {
      console.log("delete item");
      Modal.confirm({
        title: "Suppression article",
        content: "Voulez-vous confirmer la suppresion ?",
        okText: "SUPPRIMER",
        cancelText: "ANNULER",
        onOk() {
          console.log("Suppression valider");
          store.dispatch("setModalOpen", false);
        },
        onCancel() {
          Modal.destroyAll();
        },
      });
    };

    return {
      formRef,
      labelCol: { style: { width: "200px", marginRight: "20px" } },
      wrapperCol: { span: 14, style: { width: "450px" } },
      other: "",
      formState,
      formItem,
      resetForm,
      uploadMainImage,
      uploadSecondaireImages,
      mainRules,
      newTag,
      deleteTag,
      props,
      cancelUpdate,
      updateItem,
      deleteItem,
    };
  },
});
// [
//   1: { key: 1, values: []}
//   2: { key: 4, values: []}
//   3: { key: 5, values: []}
// ]
</script>


<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
</style>




