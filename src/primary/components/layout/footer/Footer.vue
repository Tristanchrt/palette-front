<template>
  <div class="footer flex column-flex">
    <Spacer level="6" />
    <div class="row-one flex space-around items-center">
      <div class="logo">
        <a-image
          :width="200"
          src="/src/assets/styled/image/logo_tapalette_2.png"
          alt="logo"
        />
      </div>
      <div class="news-letter">
        <h3>INSCRIVEZ-VOUS À NOTRE NEWSLETTER</h3>
        <div class="flex">
          <a-input v-model:value="value" placeholder="Email..." />
          <a-button type="primary" @click="newsLetter">S'inscrive</a-button>
        </div>
      </div>
    </div>
    <Spacer level="6" />
    <Spacer level="6" />
    <div class="row-two flex space-around">
      <div class="category-product flex column-flex">
        <span class="strong">CATEGORIE DE PRODUITS</span>
        <Spacer level="2" />
        <span v-for="c in categories" :key="c">{{ c }}</span>
      </div>
      <div class="info flex column-flex">
        <span class="strong">Acces direct</span>
        <Spacer level="2" />
        <span>Vendre un produit</span>
        <span>Mentions légales </span>
        <span>Gestion des cookies</span>
        <span>Qui sommes nous ?</span>
        <span>Comment ça marche ?</span>
        <span>Vous êtes grossiste ?</span>
        <span>Acheter un produit</span>
        <span>CGVU</span>
        <span>Contact</span>
      </div>
      <div class="more-info strong">TaPalette</div>
    </div>
    <Spacer level="6" />
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
import logService from "@/.././src/primary/utils/logService";

export default defineComponent({
  name: "Footer",
  components: {
    Spacer
  },
  setup: () => {
    const value = ref < string > ("");
    const state = reactive({
      categories: []
    });

    state.categories = [
      "Toutes nos catégories",
      "Vêtements, Textiles et Accessoires",
      "Loisir, Activité en pleine air et sports",
      "Auto & Transport",
      "Electronique et Multimédia",
      "Bricolage, équipement industrie et outils",
      "Maison, animaux et électroménager",
      "Beauté, santé"
    ];
    const newsLetter = () => {
      logService.debug("BTN NEWS LETTER", "PRESS");
    };
    return { newsLetter, value, ...toRefs(state) };
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
.footer {
  margin-top: 10em;
  background-color: color.$primary_gradient;
  height: 500px;
}
</style>
