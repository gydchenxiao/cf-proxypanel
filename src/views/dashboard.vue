<template>
  <n-card class="mt-20px" title="My request">
    <div class="cursor-pointer text-center">
      <div class="text-gray"></div>
    </div>
  </n-card>
  
  <n-card class="mt-20px pd0" title="捷径">
    <div>
      <n-list hoverable clickable>
        <n-list-item @click="clickFeature(item)" v-for="(item, index) in shortcuts" :key="index">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-16px">{{ item.title }}</div>
              <div class="text-14px text-gray">{{ item.desc }}</div>
            </div>
            <div></div>
          </div>
        </n-list-item>
      </n-list>
    </div>
  </n-card>
  
  <!-- 订阅链接模态框 -->
  <n-modal v-model:show="showModal" transform-origin="center">
    <n-card class="w-300px pd0 footer0" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <n-list hoverable clickable>
        <n-list-item @click="copySubscriptionLink">
          <div class="flex cursor-pointer items-center pb-10px pl-20px pr-20px pt-10px">
            <div>复制订阅地址</div>
          </div>
        </n-list-item>
        <n-list-item @click="showQRCode">
          <div class="flex cursor-pointer items-center pb-10px pl-20px pr-20px pt-10px">
            <div>扫描二维码订阅(图片模态框需要加载)</div>
          </div>
        </n-list-item>
        <div class="n-list-item__divider"></div>
      </n-list>
      <template #footer>
        <div class="p10px">
          <n-button @click="viewTutorial" class="w100% h-40px" color="#316c72">不会使用，查看使用教程</n-button>
        </div>
      </template>
    </n-card>
  </n-modal>

  <!-- 二维码模态框 -->
  <n-modal v-model:show="showQRCodeModal" transform-origin="center">
    <n-card class="w-300px pd0 footer0" :bordered="false" size="huge">
      <div class="flex justify-center">
        <img :src="qrCodeImage" alt="二维码" />
      </div>
    </n-card>
  </n-modal>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showModal = ref(false);
const showQRCodeModal = ref(false);
const shortcuts = [
  {
    title: '查看教程',
    desc: '学习如何使用',
  },
  {
    title: '一键订阅',
    desc: '快速将节点导入客户端进行使用',
  },
];

const subscriptionLink = 'https://gu.20031026.xyz/5bda9411-4138-4b2e-9e0a-638aa8ebafd1'; // 订阅链接
const qrCodeImage = 'https://s2.loli.net/2024/10/12/mVMDoE1iUz58w3l.jpg'; // 订阅二维码图片链接

const clickFeature = (item) => {
  if (item.title === '查看教程') {
    router.push({ name: 'knowledge' });
  } else if (item.title === '一键订阅') {
    showModal.value = true; // 显示订阅链接模态框
  } else {
    router.push({ name: 'ticket' });
  }
};

const copySubscriptionLink = () => {
  navigator.clipboard.writeText(subscriptionLink).then(() => {
    alert('订阅地址已复制到剪贴板!');
  }).catch(err => {
    console.error('复制失败: ', err);
  });
};

const showQRCode = () => {
  showQRCodeModal.value = true; // 打开二维码模态框
};

const viewTutorial = () => {
  router.push({ name: 'knowledge' });
};
</script>

<style>
.pd0 > .n-card__content {
  padding: 0;
}

.footer0 > .n-card__footer {
  padding: 0;
}

.footer0 > .n-card__content:first-child {
  padding-top: 0;
}

img {
  width: 100%; /* 适应容器的宽度 */
  height: auto; /* 高度自适应 */
}
</style>
