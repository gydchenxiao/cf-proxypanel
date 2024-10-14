<script setup>
import { ref } from "vue";
import { useLangStore } from "@/stores/lang.js";
const store = useLangStore()
const options = [{ label: '简体中文', value: '简体中文' }, { label: 'English', value: 'English' }]
</script>
<template>
  <div>
    <n-popselect v-model:value="store.langValue" :options="options" trigger="click">
      <a>{{ store.langValue }}</a>
    </n-popselect>
  </div>
</template>