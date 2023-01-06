<template>
  <div class="address-otc">
    <div class="address-bloc-total">
      <div class="address-bloc flex space-around">
        <div class="address-liver">
          <h1>Adresse de livraison</h1>
          <a-form
            ref="formRefAdress"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            :rules="rules"
            :model="formAdress"
          >
            <a-form-item label="Prénom" name="firstName">
              <a-input v-model:value="formAdress.firstName" />
            </a-form-item>
            <a-form-item label="Nom" name="lastName">
              <a-input v-model:value="formAdress.lastName" />
            </a-form-item>
            <a-form-item label="Adresse (numéro et rue)" name="address">
              <a-input v-model:value="formAdress.address" />
            </a-form-item>
            <a-form-item label="Complément d'adresse" name="moreAddress">
              <a-input v-model:value="formAdress.moreAddress" />
            </a-form-item>
            <a-form-item label="Code postal" name="department">
              <a-input v-model:value="formAdress.department" />
            </a-form-item>
            <a-form-item label="Ville" name="city">
              <a-input v-model:value="formAdress.city" />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" @click="saveAddress">
                Enregistrée adresse
              </a-button>
            </a-form-item>
          </a-form>
        </div>
        <div class="address-facturation">
          <div>
            <h1>Adresse de facturation</h1>
            <a-button
              v-if="facturationOrNot == false"
              type="primary"
              @click="facturationOrNot = !facturationOrNot"
            >
              Changer l'adresse
            </a-button>
            <a-button
              v-if="facturationOrNot == true"
              type="primary"
              @click="facturationOrNot = !facturationOrNot"
            >
              Garder l'adresse
            </a-button>
            <Spacer level="2" />
            <p v-if="facturationOrNot == false">
              Identique à l’adresse de livraison
            </p>
          </div>
          <div v-if="facturationOrNot == true">
            <a-form
              ref="formRefAdressFactu"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
              :model="formAdressFactu"
              :rules="rules"
            >
              <a-form-item label="Prénom" name="firstName">
                <a-input v-model:value="formAdressFactu.firstName" />
              </a-form-item>
              <a-form-item label="Nom" name="lastName">
                <a-input v-model:value="formAdressFactu.lastName" />
              </a-form-item>
              <a-form-item label="Adresse (numéro et rue)" name="address">
                <a-input v-model:value="formAdressFactu.address" />
              </a-form-item>
              <a-form-item label="Complément d'adresse" name="moreAddress">
                <a-input v-model:value="formAdressFactu.moreAddress" />
              </a-form-item>
              <a-form-item label="Code postal" name="department">
                <a-input v-model:value="formAdressFactu.department" />
              </a-form-item>
              <a-form-item label="Ville" name="city">
                <a-input v-model:value="formAdressFactu.city" />
              </a-form-item>
              <a-form-item>
                <a-button type="primary" @click="saveAddressFactu">
                  Enregistrée adresse
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
      <Spacer level="2" />
      <div class="more-information">
        <h1>Informations complementaire</h1>
        <a-textarea
          v-model:value="moreInfo"
          placeholder="Informations complementaire..."
          :rows="3"
        />
        <Spacer level="2" />
        <div class="flex">
          <a-button v-if="validateAdress == true" @click="next" type="primary">
            CONTINUER
          </a-button>
          <Spacer level="4" />
          <Spacer level="4" />
          <a-button v-if="validateAdress == false" type="primary" disabled>
            CONTINUER
          </a-button>
          <a-button type="primary" @click="prev"> PRECEDENT </a-button>
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
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { useStore } from "vuex";
import {
  antNotification,
  antMessage,
} from "@/.././src/primary/utils/notification";

export default defineComponent({
  name: "AddressOtc",
  components: {
    Spacer,
  },
  setup: () => {
    const store = useStore();
    const state = reactive({
      currentPosition: 0,
      facturationOrNot: false,
      facturationOrNotText: "Identique à l’adresse de livraison",
      moreInfo: "",
      validateAdress: false,
      validateAdressFactu: false,
    });

    const formAdress = reactive(store.state.storeOrder.order.address);

    const formAdressFactu = reactive(store.state.storeOrder.order.factuAddress);

    state.moreInfo = store.state.storeOrder.order.completInfo;

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
      address: [
        {
          required: true,
          message: "",
        },
      ],
      department: [
        {
          required: true,
          message: "",
        },
      ],
      moreAddress: [
        {
          required: true,
          message: "",
        },
      ],
      city: [
        {
          required: true,
          message: "",
        },
      ],
    };

    const formRefAdress = ref();
    const formRefAdressFactu = ref();

    if (localStorage.getItem("plt_ot")) {
      state.validateAdress = true;
    }

    const saveAddress = () => {
      formRefAdress.value
        .validate()
        .then((val: any) => {
          if (state.facturationOrNot == false) {
            console.log(val);
            store.dispatch("setAddress", val);
            state.validateAdress = true;
            antMessage("Adresse enregistrée", 1);
          } else {
            if (state.validateAdressFactu == true) {
              state.validateAdress = true;
            }
          }
        })
        .catch((error: ValidateErrorEntity<any>) => {
          console.log(error);
          antMessage("Erreur lors de l'enregistrement", 2);
        });
    };

    const saveAddressFactu = () => {
      formRefAdressFactu.value
        .validate()
        .then((val: any) => {
          console.log("saveAddressFactu : " + val);
          store.dispatch("setFactuAddress", val);
          state.facturationOrNot = true;
          state.validateAdressFactu = true;
          antMessage("Adresse de facturation enregistrée", 1);
        })
        .catch((error: ValidateErrorEntity<any>) => {
          antMessage("Erreur lors de l'enregistrement", 2);
        });
      setTimeout(() => {}, 2000);
    };

    const next = () => {
      store.dispatch("nextComponent");
    };
    const prev = () => {
      store.dispatch("prevComponent");
    };

    watch(
      () => state.moreInfo,
      (newVal, oldVal) => {
        store.dispatch("setMoreInfo", newVal);
      }
    );

    return {
      ...toRefs(state),
      formAdress,
      formAdressFactu,
      formRefAdressFactu,
      rules,
      saveAddress,
      saveAddressFactu,
      formRefAdress,
      next,
      prev,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.more-information {
  margin-right: 10%;
  margin-left: 10%;
}

@media screen and (max-width: 900px) {
  .address-bloc {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }
}
</style>
