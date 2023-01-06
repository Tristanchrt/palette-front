<template>
  <div class="item-page">
    <div class="item-page-body">
      <a-spin :spinning="spinning" size="large">
        <div class="item-desc">
          <div class="images">
            <div class="image-main">
              <a-image :width="450" :height="450" :src="item.picture" />
            </div>
            <Spacer level="2" />
            <div class="images-secondary">
              <a-image-preview-group>
                <a-image
                  :width="80"
                  :height="80"
                  :src="itemPicture"
                  v-for="itemPicture in item.pictures"
                  :key="itemPicture"
                  classNames="pomme"
                />
              </a-image-preview-group>
            </div>
          </div>
          <Spacer level="6" />
          <Spacer level="3" />
          <div class="item-descpt">
            <div class="descrpt-title semi-strong h3">
              {{ item.description }}
            </div>
            <Spacer level="1" />
            <div class="eval">
              <p class="star-bloc">
                <a-rate disabled :value="item.ratingStare" />
                {{ item.ratingTotal }} évaluation(s)
                <star-outlined key="star" />
              </p>
            </div>
            <div class="line" />
            <Spacer level="2" />
            <div class="descrpt-body semi-strong">
              {{ item.shortDescription }}
            </div>
            <Spacer level="2" />
            <div class="see-more-descpt semi-strong point">
              voir description complete
            </div>
            <Spacer level="2" />
            <div class="line" />
            <Spacer level="2" />
            <div class="price">
              <span class="strong h3"
                >{{ item.minPrice }} $ - {{ item.maxPrice }} $</span
              >
              <span class="semi-strong h3"
                >{{ item.maxPcs }} pcs - {{ item.maxPcs }} pcs</span
              >
            </div>
            <Spacer level="2" />
            <div class="line" />
            <Spacer level="2" />
            <div class="tags">
              <Spacer level="1" />
              <div class="tag" v-for="(tags, key) in item.tags" :key="key">
                <span class="title-tag semi-strong">{{ key }} :</span>
                <Spacer level="1" />
                <a-radio-group size="small">
                  <a-radio-button
                    @click="selectTag(key, tag)"
                    :value="tag"
                    v-for="tag in tags"
                    :key="tag"
                    >{{ tag }}</a-radio-button
                  >
                </a-radio-group>
                <Spacer level="1" />
              </div>
              <Spacer level="2" />
              <div class="line" />
              <Spacer level="2" />
              <div class="action">
                <button
                  @click="addShopBag"
                  class="btn add-shop-bag strong"
                  type="submit"
                >
                  AJOUTER AU PANIER
                </button>
                <button
                  @click="contactSeller"
                  class="btn contact-seller strong"
                  type="submit"
                >
                  CONTACTEZ VENDEUR
                </button>
              </div>
              <Spacer level="2" />
              <div class="line" />
            </div>
            <Spacer level="3" />
          </div>
        </div>
        <div class="bottom-descpt">
          <div class="bottom-header-1">
            <div class="company-header flex">
              <span class="company-title strong h3"
                >Résumer de l'entreprise</span
              >
              <Spacer level="5" />
              <Spacer level="5" />
              <Spacer level="5" />
              <button class="btn-see-more strong" type="submit">
                VOIR PROFIL COMPLET
              </button>
            </div>
            <div class="company-body">
              <Spacer level="4" />
              <div class="line" />
              <Spacer level="4" />
              <div class="company-body-value">fdfd</div>
            </div>
          </div>
          <Spacer level="6" />
          <div class="bottom-header-2">
            <a-descriptions title="Description technique" bordered>
              <a-descriptions-item label="Product"
                >Cloud Database</a-descriptions-item
              >
              <a-descriptions-item label="Billing Mode"
                >Prepaid</a-descriptions-item
              >
              <a-descriptions-item label="Automatic Renewal"
                >YES</a-descriptions-item
              >
              <a-descriptions-item label="Order time"
                >2018-04-24 18:00:00</a-descriptions-item
              >
              <a-descriptions-item label="Usage Time" :span="2"
                >2019-04-24 18:00:00</a-descriptions-item
              >
              <a-descriptions-item label="Status" :span="3">
                <a-badge status="processing" text="Running" />
              </a-descriptions-item>
              <a-descriptions-item label="Negotiated Amount"
                >$80.00</a-descriptions-item
              >
              <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
              <a-descriptions-item label="Official Receipts"
                >$60.00</a-descriptions-item
              >
              <a-descriptions-item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
                <br />
              </a-descriptions-item>
            </a-descriptions>
          </div>
          <Spacer level="6" />
          <div class="comment-client h3 strong">
            <span class="comment-client-title">AVIS CLIENT</span>
          </div>
          <Spacer level="6" />
          <a-comment>
            <template #actions>
              <span key="comment-basic-like">
                <a-tooltip title="Like">
                  <template v-if="action === 'liked'">
                    <LikeFilled @click="like" />
                  </template>
                  <template v-else>
                    <LikeOutlined @click="like" />
                  </template>
                </a-tooltip>
                <span style="padding-left: 8px; cursor: auto">
                  {{ likes }}
                </span>
              </span>
            </template>
            <template #author><a>Han Solo</a></template>
            <template #avatar>
              <a-avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            </template>
            <template #content>
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            </template>
            <template #datetime>
              <a-tooltip :title="moment().format('YYYY-MM-DD HH:mm:ss')">
                <span>{{ moment().fromNow() }}</span>
              </a-tooltip>
            </template>
          </a-comment>
          <Spacer level="6" />
          <Spacer level="6" />
          <Spacer level="6" />
        </div>
      </a-spin>
    </div>
  </div>
</template>

<script lang="ts" >
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import { RestItem } from "src/domain/RestItem";
import { defineComponent, reactive, toRefs, inject, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import {
  LikeFilled,
  LikeOutlined,
  DislikeFilled,
  DislikeOutlined,
} from "@ant-design/icons-vue";
import moment from "moment";
import { useStore } from "vuex";

export default defineComponent({
  name: "ItemPage",
  components: {
    Spacer,
    Spacer,
    LikeFilled,
    LikeOutlined,
    DislikeFilled,
    DislikeOutlined,
  },
  inject: ["restItem"],
  setup: () => {
    const restItem: RestItem | undefined = inject("restItem")!;
    const route = useRoute();
    const state = reactive({
      item: {},
      spinning: false,
    });

    const store = useStore();

    restItem
      .getItem(route.params.id as string)
      .then((item) => {
        state.spinning = !state.spinning;
        setTimeout(function () {
          state.item = item;
          console.log(state.item);
          state.spinning = !state.spinning;
        }, 500);
      })
      .catch((err) => {
        alert("Something went wrong");
        // TODO ERROR PAGE
      });

    const contactSeller = () => {
      // console.log("contactSeller");
      console.log("TEST STORE", store.getters.getBag);
    };

    const addShopBag = () => {
      console.log("addShopBag", store.getters.getDrawer);
    };
    // 2 times called don't know why
    const selectTag = (key, tag) => {
      console.log("selectTag =>", tag, key);
    };

    const likes = ref<number>(0);
    const dislikes = ref<number>(0);
    const action = ref<string>();

    const like = () => {
      likes.value = 1;
      dislikes.value = 0;
      action.value = "liked";
    };

    const dislike = () => {
      likes.value = 0;
      dislikes.value = 1;
      action.value = "disliked";
    };

    return {
      ...toRefs(state),
      addShopBag,
      contactSeller,
      selectTag,
      likes,
      dislikes,
      action,
      like,
      dislike,
      moment,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.item-page {
  .item-page-body {
    margin-top: 10em;
    .bottom-descpt {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      ::v-deep(.ant-comment) {
        max-width: 500px !important;
      }
      .bottom-header-1 {
        background-color: color.$secondary_base;
        padding: 32px;
        .company-header {
          align-items: center;
          .company-title {
          }
          .btn-see-more {
            color: white;
            background-color: color.$primary_base;
            cursor: pointer;
            padding: 16px;
            border: solid 1px color.$primary_base;
            border-radius: 8px;
          }
        }
      }
    }
    .item-desc {
      display: flex;
      justify-content: center;
      margin-left: 128px;
      margin-right: 128px;
      .images {
        display: flex;
        flex-direction: row-reverse;
        justify-content: left;
        .image-main {
          cursor: pointer;
        }
        .images-secondary {
          display: flex;
          flex-direction: column;
          ::v-deep(.ant-image) {
            cursor: pointer;
            margin-bottom: 36px !important;
          }
        }
      }
      .item-descpt {
        display: flex;
        // width: 600px;
        // max-width: 600px;
        // justify-content: right;
        margin-left: 32px;
        margin-right: 32px;
        flex-direction: column;
        .descrpt-body {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .eval {
          .star-bloc {
            ::v-deep(.ant-rate) {
              margin-right: 32px !important;
            }
          }
        }
      }
      .see-more-descpt {
        color: color.$primary_gradient;
      }
      .price {
        display: flex;
        flex-direction: column;
        background-color: color.$secondary_base;
        padding: 16px;
        border-radius: 8px;
        span {
          text-align: left;
          &:hover {
            color: color.$primary_base;
          }
        }
      }
      .tags {
        .tag {
          .title-tag {
            margin-right: 16px;
          }
        }
      }
      .action {
        display: flex;
        justify-content: space-around;
        .add-shop-bag {
          background-color: color.$primary_base;
          color: white;
          &:hover {
          }
        }
        .contact-seller {
          color: black;
          background-color: white;
        }
        .btn {
          padding: 16px;
          border-radius: 8px;
          cursor: pointer;
          border: 1px solid color.$primary_base;
        }
      }
    }
  }
}
.line {
  border: 1px solid #dbdbdb;
  height: 1px;
}

@media screen and (max-width: 930px) {
  .item-desc {
    flex-direction: column !important;
    align-items: center;
  }
}
</style>
