# Single-Spa 实践

## Parent

- 创建 vue 项目（vue-router）
- 安装 single-spa
- 安装并导入 single-config.js：使用 singleSpa 注册 child 打包后的 js 文件，然后启动
  > 避免每次手动写入 js，所以在子项目中生成 manifest.json 文件

## Child

- 创建 vue 项目（vue-router）
- 安装 single-spa-vue
- main.js 导出 bootstrap、mount、unmount 方法
- vue.config.js：生成 library，并绑定到 window 上
- manifest.json
  - npm i stats-webpack-plugin -D (原生也支持生成 manifest 了)

> Css 可以通过 postcss-selector-space 进行隔离；例如在 app 下所有的样式都添加一个 id 前缀
