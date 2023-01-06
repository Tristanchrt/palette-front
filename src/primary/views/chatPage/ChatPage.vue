<template>
  <div ref="root" class="chat-page">
    <div class="chat-page-body">
      <button class="btn-devis" type="submit" @click="openDevis">
        VOIR DEVIS
      </button>
      <a-drawer
        title="Basic Drawer"
        placement="right"
        :closable="false"
        v-model:visible="visible"
        :after-visible-change="afterVisibleChange"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-drawer>
      <div class="chat-page-bloc semi-strong">
        <div class="chat-page-title-account h3 semi-strong">
          <a-input-search
            v-model:value="accountList"
            placeholder="Rechercher vos contact..."
            ref="styledAccount"
          />
        </div>
        <AccountList
          v-for="account in filtredAccount"
          :key="account"
          :user="account"
          :idSelected="id_selected"
          @selected="selectedAccount"
        />
      </div>
      <div class="chat-page-message">
        <div id="blocMessage" class="bloc-msg">
          <a-spin :spinning="spinning">
            <div
              :class="
                message.senderId == user_id ? 'msg-right-bloc' : 'msg-left-bloc'
              "
              v-for="message in messages"
              :key="message.id"
            >
              <a-avatar :size="32" v-if="message.senderId != user_id">
                <template #icon><UserOutlined /></template>
              </a-avatar>
              <div
                v-if="message.type != 'image'"
                :class="message.senderId == user_id ? 'msg-right' : 'msg-left'"
              >
                {{ message.message }}
              </div>
              <div
                v-if="message.type == 'image'"
                class="point"
                :class="message.senderId == user_id ? 'msg-right' : 'msg-left'"
              >
                <a-image
                  style="width: 250px"
                  v-if="message.type == 'image'"
                  :src="message.message"
                />
              </div>
            </div>
          </a-spin>
        </div>
        <div class="btn-msg">
          <a-input-search
            v-model:value="message"
            placeholder="input search text"
            size="large"
            @search="sendMessage"
          >
            <template #prefix>
              <a-upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                v-model:file-list="fileList"
                @change="changeUpload"
              >
                <a-button>
                  <upload-outlined></upload-outlined>
                </a-button>
              </a-upload>
            </template>
            <template #enterButton>
              <a-button>ENVOYER</a-button>
            </template>
          </a-input-search>
        </div>
      </div>
    </div>
    <input type="file" id="btn-file" style="display: none" />
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
  defineEmit,
  nextTick,
  computed,
} from "vue";
import Spacer from "@/assets/styled/spacer/Spacer.vue";
import {
  UserOutlined,
  FolderOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import AccountList from "./AccountList.vue";
import { RestChat } from "src/domain/RestChat";

export default defineComponent({
  name: "ItemListPage",
  components: {
    Spacer,
    UserOutlined,
    AccountList,
    FolderOutlined,
    UploadOutlined,
  },
  inject: ["restChat"],
  setup: () => {
    const restChat: RestChat | undefined = inject("restChat")!;
    const root = ref(null);

    function scrollToBottom() {
      // nextTick(() => {
      setTimeout(() => {
        console.log("scroll");
        const container = root.value.querySelector("#blocMessage");
        container.scrollTop = container.scrollHeight;
      }, 200);
      // });
    }

      // if (!this.routesController().isUserAuthenticated()) return this.$router.push({ name: 'SignIn' }).catch(() => {});

    function selectedAccount(receiver_id: any) {
      getMessageRoom(receiver_id);
      state.id_selected = receiver_id;
      state.fileList = [];
      state.message = "";
      scrollToBottom();
    }

    onMounted(() => {
      restChat!.getAccountList("1").then((val) => {
        state.arrayAccount = val;
        nextTick(() => {
          selectedAccount(state.arrayAccount[0].id);
        });
      });
    });

    const state = reactive({
      message: "",
      arrayAccount: [],
      accountList: "",
      messages: [],
      selected: false,
      id_selected: 0,
      user_id: 100,
      spinning: false,
      fileList: [],
      visible: false,
      filtredAccount: computed(() => updatedAccount())
    });

    const getMessageRoom = (receiver_id: any) => {
      state.spinning = true;
      restChat!.getMessages("1", "2").then((val) => {
        state.messages = val;
        console.log(state.messages);
        setTimeout(function () {
          state.spinning = !state.spinning;
        }, 1000);
      });
    };  

    const updatedAccount = (): any => {
      return state.accountList ? state.arrayAccount.filter((account) => account.name.toLowerCase().includes(state.accountList.toLowerCase())) : state.arrayAccount;
    } 

    const openFile = () => {
      console.log("open openFile");
    };

    const sendMessage = () => {
      if (state.message.length > 0) {
        console.log("Send message", state.message);
        const obj = {
          id: 1,
          message: state.message,
          senderId: state.user_id,
          receiverId: state.id_selected,
          type: "text",
        };
        state.message = "";
        state.messages.push(obj);
        scrollToBottom();
      }
    };

    const changeUpload = (info: any) => {
      let resFileList = [...info.fileList];
      resFileList = resFileList.slice(-1);

      resFileList = resFileList.map((file) => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });
      state.fileList = resFileList;
      console.log(state.fileList);
    };

    const openDevis = () => {
      state.visible = true;
    }

    return {
      getMessageRoom,
      ...toRefs(state),
      selectedAccount,
      root,
      openFile,
      sendMessage,
      changeUpload,
      openDevis
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/sass/colors.sass" as color;

.btn-devis {
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  margin-left: 92%;
  text-decoration: none;
  border-radius: 8px;
  padding: 8px;
  margin-top: 76px;
  background-color: color.$primary_base;
  color: white;
  border: solid 1px color.$primary_base;
}

.chat-page {
  display: flex;
  flex-direction: column;

  .chat-page-body {
    margin-top: 4em;
    display: flex;
    justify-content: center;
    max-height: 90vh;
    height: 90vh;
    overflow: auto;
    .chat-page-bloc {
      background-color: color.$secondary_base;
      width: 26em;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      .chat-page-title-account {
        padding: 24px;
        color: color.$primary_base;
        text-align: center;
        margin-top: 16px;
        margin-bottom: 16px;
      }
    }
    .chat-page-message {
      width: 100%;
      // max-height: 60em;
      display: flex;
      flex-direction: column;
      .bloc-msg {
        overflow-y: auto;
        overflow-x: hidden;
        height: 96%;
        margin-top: 24px;
        .msg-left-bloc {
          margin-left: 8px;
          display: flex;
          align-items: center;
          float: left;
          clear: left;
          width: 100%;
        }
        .msg-right-bloc {
          float: right;
          clear: right;
          margin-left: 8px;
        }
        .msg-left {
          margin-left: 8px;
          border-radius: 0px 8px 8px 0px;
          padding: 8px;
          overflow: hidden;
          color: white;
          background-color: color.$primary_base;
          margin-top: 16px;
          margin-bottom: 16px;
          div {
            max-width: 41em !important;
          }
        }
        .msg-right {
          overflow: hidden;
          margin-right: 8px;
          background-color: color.$secondary_base;
          border-radius: 8px 0px 0px 8px;
          padding: 8px;
          text-align: right;
          max-width: 360px;
          margin-top: 16px;
          margin-bottom: 16px;
          div {
            max-width: 41em !important;
          }
        }
      }
      .btn-msg {
        display: flex;
        margin-top: 8px;
        ::v-deep(.anticon) {
          margin-left: 16px;
          margin-right: 16px;
          cursor: pointer;
        }
        ::v-deep(.ant-input-prefix > span) {
          display: flex;
        }
        ::v-deep(.ant-input-prefix > span > .ant-upload-list) {
          max-width: 250px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        // margin-top: 50px;
      }
    }
  }
}
.ant-input-prefix {
}
@media screen and (max-width: 800px) {
  .chat-page-bloc {
    width: 11em !important;
  }
}
@media screen and (min-height: 600px) {
  .chat-page-body {
    max-height: 92vh !important;
    height: 92vh !important;
  }
}
@media screen and (max-width: 400px) {
  .bloc-msg {
    width: 22em !important;
  }
}
</style>
