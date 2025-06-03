import { createApp } from "vue";
import App from "./App.vue";
import { registerMicroApps, start, loadMicroApp } from "qiankun";
import router from "./router.js";

const app = createApp(App);

app.use(router);

// 注册子应用
registerMicroApps(
  [
    {
      name: "sub-app",
      entry: "//localhost:7101",
      container: "#sub-container",
      activeRule: "/sub-app",
      props: {
        author: "Mino", // 设置 key 为 name 会被覆盖
      },
    },
  ],
  {
    beforeMount: (app) => {
      // console.log("before mount", app);
    },
  }
);

// 启动 Qiankun
start();

app.mount("#main-app");
