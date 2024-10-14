<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useNotification } from 'naive-ui'
import languageSel from "./languageSel.vue";

const notificationApiInjection = useNotification();
const router = useRouter()
const isValidEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isValidEmail = regExp.test(email)
  if (!isValidEmail) return notificationApiInjection.info({
    content: "邮箱地址有误，请重新输入",
    closable: false,
    duration: 2000
  })
  else return true
}
const backToLogin = () => {
  router.push({ name: 'login' })
}
const resetPwd = () => {

}
const username = ref('')
const authcode = ref('')
const repwd = ref('')
const pwd = ref('')
const isSent = ref(false)
const nextTime = ref(60)
const sendAuthcode = async () => {
  if (username.value.trim() !== '') {
    if (isValidEmail(username.value) === true) {
      const res = await new Promise((resolve, reject) => {
        resolve('发送成功')
      })
      if (res) {
        isSent.value = true
        let interval = setInterval(() => {
          nextTime.value -= 1
          if (nextTime.value === 0) clearInterval(interval)
        }, 1000)
        setTimeout(() => {
          isSent.value = false
          nextTime.value = 60
        }, 60000)
      }
    }
  } else {
    notificationApiInjection.info({
      content: "请输入邮箱地址",
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
        <n-input-group class="mb-5">
          <n-input v-model:value="authcode" placeholder="邮箱验证码" />
          <n-button :disabled="isSent" @click="sendAuthcode" color="#316c72" type="primary">
            {{ isSent ? nextTime + 'S' : '发送' }}
          </n-button>
        </n-input-group>
        <n-input class="mb-5" show-password-on="click" v-model:value="pwd" type="password" placeholder="密码" />
        <n-input v-model:value="repwd" show-password-on="click" type="password" placeholder="再次输入密码" />
      </div>
      <div style="width: 90%;margin: 20px auto;">
        <n-button @click="resetPwd" style="width: 100%;" color="#316C72FF">
          <!-- <template #icon>
            <n-icon>
              <cash-icon />
            </n-icon>
          </template> -->
          重置密码
        </n-button>
      </div>
      <div class="bottom-banner">
        <div>
          <a class="mr-4 color-#6c757d" @click="backToLogin">返回登录</a>
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