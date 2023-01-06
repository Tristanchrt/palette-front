<template>
  <div class="paiment-otc">
    <div class="moyen-paiment">
      <h1>Moyen de paiement</h1>
      <Spacer level="2" />
      <div class="form-payment">
        <a-form
          ref="formRefPaiment"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          layout="vertical"
          :rules="rulesPaiment"
          :model="formPaiment"
        >
          <a-form-item label="Nom sur la carte" name="nameCard">
            <a-input v-model:value="formPaiment.nameCard" />
          </a-form-item>
          <a-form-item label="Numéro sur la carte" name="numCard">
            <a-input v-model:value="formPaiment.numCard" />
          </a-form-item>
          <a-form-item label="Date de validité" name="valitedDate">
            <a-month-picker
              v-model:value="formPaiment.valitedDate"
              :size="size"
              placeholder="MM/YY"
            />
          </a-form-item>
          <a-form-item label="Cryptogramme visuel" name="cryptoCard">
            <a-input-number v-model:value="formPaiment.cryptoCard" />
          </a-form-item>
          <a-form-item label="">
            <a-checkbox-group v-model:value="formPaiment.savePaiment">
              <a-checkbox value="1" name="savePaiment">
                Se souvenir du moyen de paiement
              </a-checkbox>
            </a-checkbox-group>
          </a-form-item>
        </a-form>
        <div class="flex">
          <a-button v-if="verifPaiment == true" @click="next" type="primary">
            CONTINUER
          </a-button>
          <a-button v-if="verifPaiment == false" type="primary" disabled>
            CONTINUER
          </a-button>
          <Spacer level="4" />
          <Spacer level="4" />
          <a-button type="primary" @click="prev"> PRECEDENT </a-button>
        </div>
      </div>
    </div>
    <div class="continue-paiment">
      <div class="card-paiment">
        <div class="flex space-between">
          <div class="strong body">Total</div>
          <div class="strong body">65,76 €</div>
        </div>
        <Spacer level="2" />
        <a-button
          v-if="verifPaiment == true"
          type="primary"
          @click="paimentVerif"
        >
          CONTINUER
        </a-button>
        <a-button
          v-if="verifPaiment == false"
          type="primary"
          @click="paimentVerif"
          disabled
        >
          CONTINUER
        </a-button>
        <Spacer level="2" />
        <p class="verif-text sub-body">
          Vous pourrez vérifier et confirmer votre commande à la prochaine
          étape.
        </p>
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
import { ValidateErrorEntity } from "ant-design-vue/lib/form/interface";

export default defineComponent({
  name: "PaimentOtc",
  components: {
    Spacer,
  },
  setup: () => {
    const store = useStore();

    const state = reactive({
      verifPaiment: false,
    });

    const formPaiment = reactive({
      nameCard: "",
      numCard: "",
      valitedDate: "",
      cryptoCard: undefined,
      savePaiment: "0",
    });

    const formRefPaiment = ref();

    const rulesPaiment = {
      nameCard: [
        {
          required: true,
          message: "",
        },
      ],
      numCard: [
        {
          required: true,
          message: "",
        },
      ],
      valitedDate: [
        {
          required: true,
          message: "",
          type: "object",
        },
      ],
      cryptoCard: [
        {
          required: true,
          message: "",
          type: "number",
        },
      ],
      savePaiment: [
        {
          message: "",
        },
      ],
    };

    const paimentVerif = () => {
      formRefPaiment.value
        .validate()
        .then((val: any) => {
          console.log(val);
        })
        .catch((error: ValidateErrorEntity<any>) => {});
      setTimeout(() => {}, 2000);
    };
    return { rulesPaiment, paimentVerif, formPaiment, ...toRefs(state) };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;
.paiment-otc {
  display: flex;
  justify-content: space-around;
}
.continue-paiment {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: color.$grey;
  padding: 32px;
  border-radius: 8px;
  .card-paiment {
    display: flex;
    flex-direction: column;
  }
  .verif-text {
    width: 150px;
    text-align: center;
  }
}
</style>
