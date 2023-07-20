## 使用方法

考虑卡片样式多样性，目前只支持拷贝组件路径到项目中直接使用

组件库目录

```sh
src/components/
```

组件库使用了 less 来开发，所以你还需要安装对应依赖。

```shell script
npm install less less-loader --save-dev
```

## 特别说明

本组件库的核心组件在：button 按钮组件、error-page 缺省页组件、skeleton 组件、title 标题组件。

若有需求，需要适配桌面环境，可使用：container 容器组件。

icon 组件为辅助组件，不需要可在组件中使用图片代替即可。

## 开发上手

```shell script
npm install # 安装依赖
npm run dev # 启动文档开发
npm run start # 开启sample编译及调试
```

### 温馨提示

> 组件库默认使用的 designWidth 为 360px,设计稿需严格按照 360px 来设计，否则会布局异常

### 反馈交流

你在使用卡片组件库的过程中遇到任何问题，欢迎在`github`上给我们提 issue。
