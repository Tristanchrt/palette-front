<template>
  <div class="order-tab">
    <div class="orders">
      <div class="order" v-for="index in 10" :key="index">
        <a-tooltip>
          <template #title>Commande en cours</template>
          <!-- <template #title>Commande terminer</template> -->
          <!-- <a-avatar style="background-color: blue">V</a-avatar> -->
          <a-avatar style="background-color: orange">!</a-avatar>
        </a-tooltip>
        <div class="header flex items-center space-around">
          <div class="flex column-flex">
            <span style="text-align: center" class="strong h3"
              >Porte en bois avec des pommes et des poires et surout des
              oranges</span
            >
          </div>
        </div>
        <div class="header flex items-center space-around">
          <div class="flex column-flex">
            <span class="strong body">En cours...</span>
            <span class="sub-body">09-12-2020</span>
          </div>
          <Spacer level="3" />
          <div>
            <span class="main-price strong body">230 €</span>
          </div>
        </div>
        <div class="body-card flex column-flex">
          <div
            v-for="index in 3"
            :key="index"
            class="point row-item margin-8px flex items-center space-around"
          >
            <div class="flex column-flex">
              <span class="row-title small-body semi-strong"
                >Porte en bofdfdfdfdfdddfis</span
              >
              <span class="sub-body">quantité : 4</span>
            </div>
            <Spacer level="2" />
            <span class="tags">XL</span>
            <Spacer level="1" />
            <span class="tags">XL</span>
            <Spacer level="1" />
            <span class="tags">XL</span>
            <Spacer level="1" />
            <span class="tags">XL</span>
            <Spacer level="2" />
            <span class="row-price semi-strong small-body">230 €</span>
          </div>
        </div>
        <div class="footer flex items-center space-around">
          <div class="flex column-flex" @click="actionOrder(1)">
            <MailOutlined />
            <span class="text">Contacter <br />acheteur</span>
          </div>
          <div class="flex column-flex" @click="actionOrder(2)">
            <EyeOutlined />
            <span class="text">Voir detail</span>
          </div>
          <div class="flex column-flex" @click="actionOrder(3)">
            <FilePdfOutlined />
            <span class="text">Télécharger <br />facture</span>
          </div>
        </div>
      </div>
    </div>
    <Spacer level="6" />
    <a-pagination
      v-model:current="current"
      show-less-items
      class="pagination-bar"
      :total="totalPage"
    />
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
  ref,
} from "vue";
import {
  EyeOutlined,
  MailOutlined,
  FilePdfOutlined,
} from "@ant-design/icons-vue";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import { useStore } from "vuex";
import ModalTemplateComp from "./ModalTempOrder.vue";

export default defineComponent({
  name: "CompanyOrderTab",
  components: {
    Spacer,
    EyeOutlined,
    MailOutlined,
    FilePdfOutlined,
  },
  setup: () => {
    const store = useStore();

    const visible = ref<boolean>(false);

    const state = reactive({
      totalPage: 400,
      current: 1,
    });

    const actionOrder = (index: number) => {
      visible.value = !visible.value;
      if (visible.value == true) {
        const data = {
          title: "Détail de la commande",
          footer: null,
          size: "80%",
          data: "dsdds",
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

    return {
      actionOrder,
      visible,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.order-tab {
  .orders {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: 7%;
    .order {
      ::v-deep(.ant-avatar) {
        height: 50px;
        color: white;
        position: absolute;
        margin-left: 318px;
        margin-top: -18px;
        width: 50px;
      }
      ::v-deep(.ant-avatar-string) {
        margin-top: 8px;
        font-size: 30px;
      }
      margin: 32px;
      width: 350px;
      max-height: 600px;
      background-color: white;
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      .header {
        border-bottom: 1px solid color.$grey;
        padding: 8px;
        .main-price {
          background-color: color.$primary_gradient;
          color: color.$primary_text;
          border-radius: 20px;
          padding: 6px 20px 6px 20px;
        }
      }
    }
  }
  .body-card {
    border-bottom: 1px solid color.$grey;
  }
  .footer {
    margin: 8px;
    .text {
      text-align: center;
      font-size: 12px;
      line-height: 1;
      margin-top: 8px;
    }
    div {
      ::v-deep(.anticon) {
        font-size: 24px;
      }
      &:hover {
        color: color.$primary_gradient;
        cursor: pointer;
      }
    }
  }
}
.row-title {
  color: color.$primary_gradient;
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.row-price {
  background-color: color.$primary_gradient;
  color: color.$primary_text;
  border-radius: 20px;
  padding: 2px 8px 2px 8px;
}

.ant-pagination {
  text-align: center !important;
}

@media screen and (max-width: 500px) {
  .modal-body {
    align-items: center;
    flex-direction: column !important;
  }
}
@media screen and (max-width: 1200px) {
  .orders {
    display: flex;
    flex-wrap: wrap;
    justify-content: center !important;
    margin-left: 0% !important;
  }
}
</style>
