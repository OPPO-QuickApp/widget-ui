# WidgetUI 组件库项目说明

快应用卡片组件库项目，点击查看[组件库文档](https://github.com/OPPO-QuickApp/widget-ui/blob/dev/docs/button.md)

## 使用方法

考虑卡片样式多样性，目前只支持拷贝组件路径到项目中直接使用

组件库目录

```sh
src/components/
```

组件库使用了 less 来开发，所以你还需要安装对应依赖。

```sh
npm install less less-loader --save-dev
```

## 项目结构

```sh
├── docs  # 组件库文档目录
├── sign  # 组件库sample签名
│   ├── debug
│   └── release
└── src # 组件库项目sample
    ├── common
    ├── components # 组件库具体组件
    │   └── button # 按钮组件
    │   └── container # 容器组件
    │   └── error-page # 缺省页组件
    │   └── icon # icon组件
    │   └── skeleton # 骨架屏组件
    │   └── title # 标题组件
    └── demo # sample页面
    │   ├── button_demo # 按钮demo
    │   └── card_demo # 完整示例demo
    │   └── error_demo # 缺省页demo
    │   └── skeleton_demo # 骨架屏demo
    │   └── title_demo # 标题demo
    └── pages # 快应用页面展示示例
        ├── button # 按钮demo
		...
```

## 特别说明

本组件库的核心组件在：button按钮组件、error-page缺省页组件、skeleton组件、title标题组件。

若有需求，需要适配桌面环境，可使用：container容器组件。

icon组件为辅助组件，不需要可在组件中使用图片代替即可。

## 开发上手

```shell script
npm install # 安装依赖
npm run dev # 启动文档开发
npm run start # 开启sample编译及调试
```
