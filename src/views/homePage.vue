<template>
  <n-space vertical class="h-full">
    <!-- 切换菜单折叠状态 -->
    <n-switch v-model:value="collapsed" />
    <n-layout class="h-100vh">
      <n-layout has-sider class="h-full">
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="siderWidth"
          :collapsed="collapsed"
          :native-scrollbar="false"
          style="max-height: 100vh"
        >
          <div class="h-60px flex justify-center">
            <h2 v-if="!collapsed" class="text-16px ml-10px max-w-140px flex-shrink-0 color-blue">
              管理面板
            </h2>
          </div>
          <n-menu
            v-model:value="activeKey"
            :options="menuOptions"
            :collapsed="collapsed"
            :collapsed-width="64"
          />
        </n-layout-sider>
        <article class="flex flex-col flex-1 overflow-hidden">
          <header class="flex items-center bg-white px-15px" style="height: 60px;">
            <div class="flex items-center">{{ currentItem }}</div>
            <div class="flex ml-auto items-center">
              <n-dialog-provider>
                <personPanel :options="personInfoOptions"></personPanel>
              </n-dialog-provider>
            </div>
          </header>
          <section class="flex-1 overflow-hidden">
            <section
              style="overflow-y: auto;"
              class="w-full h-full flex flex-col bg-[#f5f6fb] p-5px dark:bg-hex-121212 md:p-15px"
            >
              <n-modal-provider>
                <n-message-provider>
                  <Router-view></Router-view>
                </n-message-provider>
              </n-modal-provider>
            </section>
          </section>
        </article>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup>
import { h, ref, watchEffect, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import personPanel from "@/components/personPanel.vue";
import { NTooltip } from 'naive-ui';

const currentItem = ref('仪表盘');
const route = useRoute();
const collapsed = ref(false); // 控制折叠状态
const titleMap = {
  dashboard: '仪表盘',
  knowledge: '使用文档',
  order: '我的订单',
  node: '节点状态',
  profile: '个人中心',
  ticket: '我的日志',
};
const personInfoOptions = [
  { label: '个人中心', key: 'person' },
  { label: '登出', key: 'logout' },
];
const activeKey = ref(null);
const menuOptions = [
  {
    type: 'group',
    label: '导航',
    key: 'group1',
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: { name: "dashboard" },
          },
          { default: () => "仪表盘" }
        ),
        key: "dashboard",
        tooltip: "仪表盘", // 添加 tooltip
      }, 
      {
        label: () => h(
          RouterLink,
          {
            to: { name: "knowledge" },
          },
          { default: () => "使用文档" }
        ),
        key: "knowledge",
      }
    ],
  },
  {
    type: 'group',
    label: '订阅',
    key: 'group2',
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: { name: "node" },
          },
          { default: () => "节点状态" }
        ),
        key: "node",
      },
    ],
  },
  {
    type: 'group',
    label: '管理员',
    key: 'group3',
    children: [
      {
        label: () => h(
          RouterLink,
          {
            to: { name: "profile" },
          },
          { default: () => "个人中心" }
        ),
        key: "profile",
      },
      {
        label: () => h(
          RouterLink,
          {
            to: { name: "ticket" },
          },
          { default: () => "我的日志" }
        ),
        key: "ticket",
      },
    ],
  },
];

// 根据屏幕宽度动态设置侧边栏宽度
const siderWidth = computed(() => {
  return window.innerWidth < 768 ? 130 : 240; 
});

watchEffect(() => {
  currentItem.value = titleMap[route.name];
  activeKey.value = route.name;
});
</script>

<style scoped>
.h-full {
  background-image: url("https://pic.imgdb.cn/item/66cdd7b0d9c307b7e93d0806.webp");
  background-size: cover;
}
</style>
