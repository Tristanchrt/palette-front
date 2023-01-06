<template>
  <div :class="[styled ? 'selected' : 'not-selected']" class="chat-page-body-account point not-selected-acount" @click="selected">
    <a-badge count="5">
      <a-avatar :size="48">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-badge>
    <div class="name-last-message">
      <span class="name">{{ props.user.name }}</span>
      <Spacer level="1" />
      <span class="last-message">{{ props.user.lastMessage }}</span>
    </div>
    <span class="time-message sub-body">{{ props.user.time }}</span>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, reactive, watch, toRefs, inject, ref, defineEmit } from 'vue';
import Spacer from '@/assets/styled/spacer/Spacer.vue';
import { UserOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: 'AccountList',
  components: {
    Spacer,
    UserOutlined
  },
  props: {
    user: {
      type: Object,
      default: {}
    },
    idSelected: {
      type: Number,
      default: 0
    }
  },
  setup: (props, context) => {
    const state = reactive({
      styled: false
    });
    function selected() {
      context.emit("selected", props.user.id);
      console.log("EMIT", props.user.id);
    };
    watch(() => props.idSelected, (newVal, oldVal) => {
      if (newVal == props.user.id) {
        console.log('STYLED for', props.user.name);
        state.styled = true;
      } else {
        state.styled = false;
      }
    });
    return { selected, props, ...toRefs(state) };
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/sass/colors.sass' as color;

.chat-page-body-account {
  padding: 8px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .ant-avatar {
    border: 1px solid color.$primary_base;
  }
  .name-last-message {
    display: flex;
    flex-direction: column;
    .last-message {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 130px;
        font-size: 10px
    }
    .name {
      font-size: 14px;
      font-weight: bold;
    }
  }
}

.selected {
  background-color: color.$primary_base;
  color: white;
}
.not-selected {
  color: black;
}

@media screen and (max-width: 800px) {
  .name-last-message {
    display: none !important;
  }
  .time-message {
    display: none !important;
  }
}
</style>
