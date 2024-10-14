<script setup>
// import { ref } from "vue";
// 这是vue3.4的写法，这种写法是第一选择
const isShow = defineModel()
const props = defineProps(['title'])
// 这是原来的写法 记住几个点 对于模态框这种封装，父组件中对子组件直接使用v-model绑定某个值
// 子组件中通过props接收到后直接更新
/* const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const cancel = () => {
  emit('update:modelValue', false)
} */
</script>
<template>
  <n-modal v-model:show="isShow" :mask-closable=false>
    <n-card class="ticketModal" style="width: 600px" :title="props.title" :bordered="false" role="dialog"
      aria-modal="true">
      <div class="flex flex-col gap5px mt20px">
        <slot></slot>
      </div>
      <template #footer>
        <div class="flex justify-end mt-20px">
          <n-button ghost class="mr-10px" @click="isShow = false">取消</n-button>
          <n-button color="#316c72">确认</n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>
<style scoped>
.ticketModal :deep(.n-card__content) {
  border-top: 1px solid rgb(239, 239, 245);
  border-bottom: 1px solid rgb(239, 239, 245)
}
</style>