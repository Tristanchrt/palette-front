<template>
  <div class="baskte-page">
    <div class="resume-item">
      <h2 class="text-2xl">Mon panier (1 article)</h2>
      <div class="item flex">
        <a-image
          :width="150"
          src="https://media.istockphoto.com/photos/red-apple-fruit-with-green-leaf-isolated-on-white-picture-id925389178?k=20&m=925389178&s=612x612&w=0&h=6TUJn0mknsO7gPO0j_OKMBhs1ng0LbBKq5OiN_fhVBQ="
        />
        <div class="info-item flex column-flex">
          <span class="title">
            Scotch - 6-1975C3 - Caddy Un Paquet de 3 Rubans Crystal, 19 mm x
            Scotch - 6-1975C3 - Caddy Un Paquet de 3 Rubans Crystal, 19 mm x
            Scotch - 6-1975C3 - Caddy Un Paquet de 3 Rubans Crystal, 19 mm x 7,5
            m</span
          >
          <Spacer level="1" />
          <span class="company semi-strong"
            >Vendu par : <span>Axians</span></span
          >
          <Spacer level="1" />
          <span class="tags small-body semi-strong"
            >Color :
            <a-tag v-for="index in 6" :key="index">Tag {{ index }}</a-tag></span
          >
          <span class="tag small-body semi-strong"
            >TAILLE :
            <a-tag v-for="index in 3" :key="index">Tag {{ index }}</a-tag></span
          >
          <Spacer level="2" />
          <div class="footer-block flex items-center">
            <span
              v-if="props.validation == false"
              @click="deleteItem(1)"
              class="delete-item sub-body"
              >Supprimer <DeleteOutlined
            /></span>
            <div
              v-if="props.validation == false"
              class="price-quantite responsive-price-quantite strong flex"
            >
              <a-input-number v-model:value="quantity" :min="1" :max="10" />
              <Spacer level="4" />
              <span class="price body">120,00 €</span>
            </div>
          </div>
          <div v-if="props.validation == true" class="validation-bloc flex">
            <div class="validation-quantiy">
              <span class="semi-strong">Quantitées :</span>
              <span class="body strong"> 6 </span>
            </div>
            <Spacer level="4" />
            <div class="price-quantiy">
              <span class="semi-strong">Prix :</span>
              <span class="body strong"> 120,00 € </span>
            </div>
          </div>
        </div>
        <div
          v-if="props.validation == false"
          class="
            not-responsive-price-quantite
            price-quantite
            strong
            flex
            column-flex
          "
        >
          <a-input-number v-model:value="quantity" :min="1" :max="10" />
          <Spacer level="4" />
          <span class="price body">120,00 €</span>
        </div>
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
import { DeleteOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "ItemOrder",
  components: {
    Spacer,
    DeleteOutlined,
  },
  props: {
    data: {
      type: Object,
    },
    validation: {
      type: Boolean,
    },
  },
  setup: (props) => {
    // store.dispatch("openDrawer");
    const quantity: number = 1;

    const deleteItem = (id: any) => {
      console.log("index", id);
    };

    return { props, quantity, deleteItem };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.baskte-page {
  display: flex;
  flex-direction: column;
}
.item {
  border-top: 1px solid grey;
  padding-top: 32px;
}
.title {
  max-width: 750px;
  font-size: 16px;
}
.price-quantite {
  justify-content: center;
}
.info-item {
  margin-left: 32px;
  margin-right: 32px;
}
.company > span {
  color: color.$primary_gradient;
  font-weight: 700;
  font-size: 18px;
}
.company {
  font-size: 14px;
}
.delete-item {
  cursor: pointer;
  font-weight: 700;
  color: #999999;
  margin-right: 32px
}
.responsive-price-quantite {
  display: none;
}
@media screen and (max-width: 1100px) {
  .responsive-price-quantite {
    display: block;
    display: flex;
  }
  .not-responsive-price-quantite {
    display: none;
  }
}
</style>
