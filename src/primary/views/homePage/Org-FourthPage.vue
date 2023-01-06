<template>
  <div class="org-fourth-page">
    <div class="row">
      <OrgSlideHomePage
        :title="'Répondre à vos demandes spécifiques'"
        :text="'À la recherche de produits ou d’une demande particulière ? Soyez mise en relation directement avec les artisans, fabriquants, fournisseurs français répondant à vos besoins.'"
        :position="'left'"
      />
      <OrgSlideHomePage
        :title="'Une transparence totale'"
        :text="'Nous avons mis en place un système clair et transparent avec une commission unique: 4 % Tout est détaillé pour vous aider à faire le bon choix.'"
        :position="'right'"
      />
      <OrgSlideHomePage
        :title="'Le commerce Français'"
        :text="'Parce qu’en France nous possédons tous les moyens de répondre à vos demandes. Pourquoi ne pas contribuer au développement du commerce nationale.'"
        :position="'left'"
      />
    </div>
    <Spacer level="7" />
  </div>
</template>

<script>
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { defineComponent, reactive, toRefs, inject } from 'vue';

import OrgSlideHomePage from '../../components/layout/slider/Org-SlideHomePage.vue';

export default defineComponent({
  name: 'OrgFourthPage',
  components: {
    Spacer,
    OrgSlideHomePage,
  },
  setup: () => {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;
.org-fourth-page {
  .row {
  }
}
</style>
