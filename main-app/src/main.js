import { createApp } from "vue";
import App from "./App.vue";
import { registerMicroApps, start, loadMicroApp } from "qiankun";
import router from "./router/index.js";

const app = createApp(App);

app.use(router);

registerMicroApps([
  {
    name: "sub-app",
    entry: "//localhost:7100",
    container: "#sub-container",
    activeRule: "/sub-app",
    props: {
      author: "Mino",
    },
  },
]);

start();

app.mount("#main-app");
