<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useNotification } from 'naive-ui'
import languageSel from "./languageSel.vue";
const notificationApiInjection = useNotification();
const router = useRouter()
const username = ref('')
const repwd = ref('')
const pwd = ref('')
const invitecode = ref('')
const backToLogin = () => {
  router.push({ name: 'login' })
}
const register = async () => {
  if (username.value && pwd.value && repwd.value) {
    if (pwd.value !== repwd.value) {
      return notificationApiInjection.info({
        content: "两次输入的密码不一致",
        closable: false,
        duration: 2000
      })
    } else {
      const res = await new Promise((resolve) => {
        resolve('注册成功')
      })
      notificationApiInjection.success({
        content: res,
        closable: false,
        duration: 2000
      })
      router.push({ name: 'login' })
    }
  } else {
    notificationApiInjection.info({
      content: "请输入账号密码",
      closable: false,
      duration: 2000
    })
  }
}
</script>

<template>
  <div class="flex justify-center flex-items-center h-full">
    <n-card style="padding: 0;width: 33%;height: 50%;">
      <div class="p-24px">
        <h1 class="m-1 text-center text-36px font-normal">后台管理系统</h1>
        <h5 class="font-400 text-center mb-3 font-size-14px">人生代代无穷已，江月年年望相似。</h5>
      </div>
      <div style="width: 90%;margin: 0 auto;">
        <n-input class="mb-5" v-model:value="username" type="text" placeholder="邮箱" />
        <n-input class="mb-5" show-password-on="click" v-model:value="pwd" type="password" placeholder="密码" />
        <n-input class="mb-5" show-password-on="click" v-model:value="repwd" type="password" placeholder="再次输入密码" />
        <n-input v-model:value="invitecode" type="text" placeholder="邀请码（必填）" />
      </div>
      <div style="width: 90%;margin: 20px auto;">
        <n-button @click="register" style="width: 100%;" color="#316C72FF">
          <!-- <template #icon>
            <n-icon>
              <cash-icon />
            </n-icon>
          </template> -->
          注册
        </n-button>
      </div>
      <div class="bottom-banner">
        <div>
          <a class="mr-4 color-#6c757d" @click="backToLogin">返回登入</a>
        </div>
        <div>
          <languageSel></languageSel>
        </div>
      </div>
    </n-card>
  </div>
</template>
<style>
.n-card__content {
  padding: 0;
}

.n-card>.n-card__content:first-child {
  padding: 0;
}

.bottom-banner {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 25px;
  justify-content: space-between;
  align-items: center;
  height: 59px;
  /* flex-grow: 1; */
  background-color: #fafafc;
  /* background-color: pink; */
}
</style>