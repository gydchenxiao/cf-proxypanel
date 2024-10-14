<template>
  <div class="flex justify-center flex-items-center h-full">
    <n-card style="padding: 0;width: 33%;height: 50%;" >
      <div class="p-24px">
        <h1 class="m-1 text-center text-30px font-normal">代理节点使用面板</h1>
        <h5 class="font-400 text-center mb-3 font-size-14px">天若有情天亦老，人间正道是沧桑。</h5>
      </div>
      <div style="width: 90%;margin: 0 auto;">
        <n-input class="mb-5" type="text" placeholder="邮箱" value="admin" />
      </div>
      <div style="width: 90%;margin: 20px auto;">
        <n-button @click="login" style="width: 100%;" color="#87CEEB">
          <!-- <template #icon>
            <n-icon>
              <cash-icon />
            </n-icon>
          </template> -->
          登入
        </n-button>
      </div>
      <!-- <div class="bottom-banner">
        <div>
          <a class="mr-4 color-#6c757d" @click="register">注册</a>
          <a class="color-#6c757d" @click="forgetPassword">忘记密码</a>
        </div>
        <div>
          <languageSel></languageSel>
        </div>
      </div> -->
    </n-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import languageSel from "./languageSel.vue";
import { useNotification } from 'naive-ui'
const notificationApiInjection = useNotification();

const username = ref('')
const pwd = ref('')
const router = useRouter()
const register = () => {
  router.push({ name: 'register' })
}
const forgetPassword = () => {
  router.push({ name: 'forgetpassword' })
}
const login = async () => {

    localStorage.setItem('token', 'admin')
    router.push({ name: 'dashboard' }).then(() => {
      notificationApiInjection.success({
        content: "登录成功",
        closable: false,
        duration: 2000
      })
    })
  }
</script>



<style scoped>

.n-card {
  background-color: rgba(255, 255, 255, 0.272)
}

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
  background-color: #fafafc30;
  /* background-color: pink; */
}
</style>