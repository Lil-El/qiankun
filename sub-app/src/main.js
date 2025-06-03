import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper";

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = createApp(App);
  instance.use(router);
  instance.mount(container || "#app");
}

// 独立运行时直接渲染
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
} else {
  renderWithQiankun({
    mount(props) { // 动态接收 props，例如 baseURL，可以修改子应用的 router 的 history.base
      render(props);
    },
    bootstrap() {
    },
    update(props) {
    },
    unmount() {
      instance?.unmount();
    },
  });
}