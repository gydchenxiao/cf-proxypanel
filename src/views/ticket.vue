<script setup>
import { ref } from "vue";
import normalModal from "@/components/normalModal.vue";
const columns = [
  {
    title: '主题',
    key: 'title',
  },
  {
    title: '日志级别',
    key: 'level',
  },
  {
    title: '日志状态',
    key: 'status',
  },
  {
    title: '创建时间',
    key: 'create',
  },
  {
    title: '操作',
    key: 'operate',
  },
]
const ticketLevel = [
  {
    label: '低',
    value: 'low'
  },
  {
    label: '中',
    value: 'medium'
  },
  {
    label: '高',
    value: 'high'
  },
]

const isShow = ref(false)

</script>
<template>
  <n-card title="日志历史">
    <template #header-extra>
      <n-button color="#316c72" @click="isShow = true" round>新的日志</n-button>
    </template>
    <n-data-table :columns="columns">
    </n-data-table>
  </n-card>
  <normalModal title="新的日志" v-model="isShow">
    <div>
      <div class="mb-5px">主题</div>
      <n-input placeholder="请输入日志主题"></n-input>
    </div>
    <div>
      <div class="mb-5px">日志级别</div>
      <n-select placeholder="请选择" :options="ticketLevel"></n-select>
    </div>
    <div>
      <div class="mb-5px">消息</div>
      <n-input placeholder="请记录具体信息" type="textarea"></n-input>
    </div>
  </normalModal>
</template>
