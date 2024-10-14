<template>
  <h3>个人中心</h3>
  <div class="card">
    <div class="left-section">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub"
        class="github-icon">
      <img src="https://pic.imgdb.cn/item/66d1f3f9d9c307b7e9217fb2.jpg" alt="Profile" class="profile-image">
    </div>
    <div class="right-section">
      <h3>GitHub</h3>
      <a href="https://github.com/gydchenxiao" target="_blank">我的Github</a>
    </div>
  </div>

  <br>
  <div class="card1">
    <div class="left-section">
      <img src="https://pic.imgdb.cn/item/670a4820d29ded1a8cb9de14.jpg" alt="Telegram" class="telegram-icon">
      <img src="https://pic.imgdb.cn/item/66d1f3f9d9c307b7e9217fb2.jpg" alt="Profile" class="profile-image">
    </div>
    <div class="right-section">
      <h3>Telegram</h3>
      <a href="https://t.me/gudongchenxiao" target="_blank">咕咚</a>
    </div>
  </div>

  <br>
  <div class="card2">
    <div class="left-section">
      <img src="https://www.bilibili.com/favicon.ico" alt="Bilibili" class="bilibili-icon">
      <img src="https://pic.imgdb.cn/item/66d1f3f9d9c307b7e9217fb2.jpg" alt="Profile" class="profile-image">
    </div>
    <div class="right-section">
      <h3>Bilibili</h3>
      <a href= "https://space.bilibili.com/1760318943/favlist" target="_blank">小顾东</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.left-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
}

.github-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.right-section {
  margin-left: 90px;
}

.right-section h3 {
  margin: 0;
  font-size: 18px;
}

.right-section a {
  color: #0366d6;
  text-decoration: none;
}

.right-section a:hover {
  text-decoration: underline;
}


.card1 {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.left-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
}

.telegram-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.right-section {
  margin-left: 90px;
  /* 调整这个值来移动右侧内容 */
}

.right-section h3 {
  margin: 0;
  font-size: 18px;
}

.right-section a {
  color: #0366d6;
  text-decoration: none;
}

.right-section a:hover {
  text-decoration: underline;
}

.card2 {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.left-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
}

.telegram-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.right-section {
  margin-left: 90px;
  /* 调整这个值来移动右侧内容 */
}

.right-section h3 {
  margin: 0;
  font-size: 18px;
}

.right-section a {
  color: #0366d6;
  text-decoration: none;
}

.right-section a:hover {
  text-decoration: underline;
}
</style>




<script>

</script>
