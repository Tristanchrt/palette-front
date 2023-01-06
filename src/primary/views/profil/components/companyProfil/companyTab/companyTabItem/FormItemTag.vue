<template>
  <div>
    <a-select v-model:value="key" placeholder="Selectionner un tag">
      <a-select-option v-for="index in 10" :key="index" :value="index">
        Key {{ index }}
      </a-select-option>
    </a-select>
    <Spacer level="1" />
    <a-select v-model:value="value" placeholder="Valeur du tag selectionner">
      <a-select-option v-for="index in 10" :key="index" :value="'a' + index">
        Value {{ index }}
      </a-select-option>
    </a-select>
    <Spacer level="1" />
    <a-button block type="primary" @click="addTagValue()">
      Ajouter tag
    </a-button>
    <Spacer level="1" />
    <a-tag v-for="tag in tags" :key="tag" closable @close="closeTag(tag)">
      {{ tag }}
    </a-tag>
    <Spacer level="2" />
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
import { antMessage } from "../../../../../../utils/notification";
import { useStore } from "vuex";

export default defineComponent({
  name: "FormItemTag",
  components: {
    Spacer,
  },
  props: {
    index: {
      type: Number,
    },
  },
  setup: (props) => {
    const store = useStore();

    const state = reactive({
      key: null,
      value: null,
      tags: [],
      objTag: {
        key: null,
        values: [],
      },
    });

    const addTagValue = () => {
      if (state.value != null && state.key != null) {
        if (state.key != state.objTag.key) {
          state.tags = [];
          state.objTag.key = null;
          state.objTag.values = [];
        }
        state.objTag.key = state.key;
        state.objTag.values.push(state.value);
        store.state.storeProfilPage.form_item.tags[props.index] = state.objTag;
        console.log(store.state.storeProfilPage.form_item);
        state.tags.push(state.value);
      } else {
        antMessage("Erreur lors de l'ajout clé et valeur nécessaire", 2);
      }
    };
    const closeTag = (tag: any) => {
      console.log("Close tag");

      var index =
        store.state.storeProfilPage.form_item.tags[props.index].values.indexOf(
          tag
        );
      store.state.storeProfilPage.form_item.tags[props.index].values.splice(
        index,
        1
      );
      console.log(store.state.storeProfilPage.form_item);
    };

    return { props, addTagValue, closeTag, ...toRefs(state) };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.profil {
}
</style>
