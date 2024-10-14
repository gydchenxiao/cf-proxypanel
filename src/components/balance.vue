<script setup>
const props = defineProps(['title', 'amountDesc'])
console.log(props);
</script>
<template>
  <n-card class="mb-15px" :title="props.title">
    <template #header-extra>
      <slot name="icon"></slot>
    </template>
    <div class="flex flex-col gap-10px">
      <div>
        <span class="text-50px font-400">0.00</span>
        <span class="ml-20px text-#6c757d text-20px">CNY</span>
      </div>
      <div class="text-gray">{{ props.amountDesc }}</div>
      <slot name="button"></slot>
    </div>
  </n-card>
</template>