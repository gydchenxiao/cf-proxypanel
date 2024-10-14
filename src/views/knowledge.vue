<template>
  <div class="container">
    <h3>1. 打开我们制作的蓝波加速器，刚打开会自动更新免费节点，代理节点使用了Cloudflare优选反代IP。</h3>
    <img src="https://pic.imgdb.cn/item/670a3524d29ded1a8ca3bcc3.jpg" style="width: 300px; height: 650px;">
    <h3>2. 测试全部配置真连接，大部分情况下真连接比Tcping更准确，真连接通可以连接外网，因为tcping只发SYN，真连接包括代理的数据。</h3>
    <img src="https://pic.imgdb.cn/item/670a36aad29ded1a8ca5bf9d.jpg" style="width: 300px; height: 650px;">
    <h3>3. 如果Cloudflare反代IP节点不稳定或者失效，可以导入自定义的节点。</h3>
    <img src="https://pic.imgdb.cn/item/670a4a86d29ded1a8cbcc360.jpg" style="width: 300px; height: 650px;">
    <h3>4. 复制下面这段代码，粘贴到自定义列表里会显示代理节点。</h3>
    <div class="text-container">
      <button class="copy-button" @click="copyText(vlessLink)">复制</button>
      <pre>{{ vlessLink }}</pre>
    </div>
    <img src="https://pic.imgdb.cn/item/670a4c18d29ded1a8cbee447.jpg" style="width: 300px; height: 650px;">
    <br>
    <h3>5. 效果展示</h3>
    <img src="https://pic.imgdb.cn/item/670a6218d29ded1a8cd9a999.jpg" style="width: 300px; height: 650px;">
    <br>
    <h3>6. 从后台退出蓝波加速器，关闭代理。</h3>
    <img src="https://pic.imgdb.cn/item/670b6c2fd29ded1a8cc36b08.jpg" style="width: 300px; height: 650px;">
    <br>
    <h3>或者使用第三方代理软件V2rayNG订阅手动导入订阅URL，勾选启用更新，订阅生成代理节点。</h3>
    <div class="text-container1">
      <button class="copy-button" @click="copyText(vlessurl)">复制</button>
      <pre>{{ vlessurl }}</pre>
    </div>
    <div style="display: flex; justify-content: start;">
      <img src="https://pic.imgdb.cn/item/670a5283d29ded1a8cc63039.jpg" style="width: 300px; height: 650px; margin: 5px;">
      <img src="https://pic.imgdb.cn/item/670a52a1d29ded1a8cc64cd8.jpg" style="width: 300px; height: 650px; margin: 5px;">
      <img src="https://pic.imgdb.cn/item/670b6e51d29ded1a8cc54c58.jpg" style="width: 300px; height: 650px; margin: 5px;">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vlessLink: 'vless://5dd31796-6d2e-4708-81c7-6edaa179c5d2@8cc.free.hr:2053?encryption=none&security=tls&sni=do.gudongchenxiao.site&fp=randomized&type=ws&host=do.gudongchenxiao.site&path=%2F%3Fed%3D2048#Cloudflare%20%E4%BC%98%E9%80%89%E5%AE%98%E6%96%B9ip',
      vlessurl: 'https://gu.20031026.xyz/5bda9411-4138-4b2e-9e0a-638aa8ebafd1',
    };
  },
  methods: {
    copyText(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('文本已复制到剪贴板!');
      }).catch(err => {
        console.error('复制失败: ', err);
      });
    }
  }
};
</script>

<style scoped>
.text-container,
.text-container1 {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  background-color: #f9f9f9;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 10px;
}

.copy-button {
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.copy-button:hover {
  background-color: #0056b3;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
}
</style>
