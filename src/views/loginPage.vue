<script setup>
import loginPanel from "@/components/loginPanel.vue";
import forgetPasswordPanel from "@/components/forgetPasswordPanel.vue";
import registerPanel from "@/components/registerPanel.vue";
import { useRoute } from "vue-router";
const routes = useRoute()
</script>
<template>
  <div class="full-screen-image">
    <forgetPasswordPanel v-if="routes.name === 'forgetpassword'"></forgetPasswordPanel>
    <registerPanel v-else-if="routes.name === 'register'"></registerPanel>
    <loginPanel v-else></loginPanel>
  </div>
</template>
<style>
.full-screen-image {
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background-image: url("https://pic.imgdb.cn/item/66fc20b9f21886ccc037f2b8.jpg");
  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
}

a {
  cursor: pointer;
}
</style>