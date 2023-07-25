# 快应用 4x2 图书阅读模板介绍

### 模板说明

    本模板为4x2的大小规格的图书阅读模板。

### 文件结构

```
├── sign                            # 存储 rpk 包签名模块;
│   ├── debug                       # 调试环境证书/私钥文件
│   └── release                     # 正式环境证书/私钥文件
└── src                             # 项目源码
│   ├── cards                       # 全部卡片目录
│   │   ├── card                    # 单张卡片目录
│   │   │   ├── common              # 公共内容文件
│   │   │   │   ├── mock.js         # 模拟数据
│   │   │   │   └── utils.js        # 公用工具方法
│   │   │   ├── components          # 存放 less/css/sass 等公共样式资源
│   │   │   │   ├── container       # 容器组件
│   │   │   │   │   └── index.ux    # 组件入口文件
│   │   │   │   ├── error-page      # 缺省页组件
│   │   │   │   │   └── index.ux    # 组件入口文件
│   │   │   │   ├── icon            # 图标组件
│   │   │   │   │   ├── icomooon.ttf# 字体文件
│   │   │   │   │   ├── icon.js     # 字符名字映射
│   │   │   │   │   └── index.ux    # 图标组件入口文件
│   │   │   │   └── title           # 标题组件
│   │   │   │       └── index.ux    # 入口文件
│   │   │   ├── images              # 图片资源
│   │   │   │   ├── skeleton.png    # 骨架屏图片
│   │   │   │   ├── skeleton_dark.png# 暗色骨架屏图片
│   │   │   │   └── logo.png        # 应用小logo
│   │   │   ├── card_content.ux     # 内容模块
│   │   │   ├── card_title.ux       # 标题模块
│   │   │   └── index.ux            # 该卡片的入口文件
│   ├── pages                       # 全部页面目录
│   │   └── page                    # 单个页面目录
│   │       └── index.ux            # 该页面的入口文件
│   ├── app.ux                      # 应用程序代码的入口文件
│   ├── manifest.json               # 配置快应用基本信息
│   ├── .gitignore                  # 远程仓库忽略配置文件
│   └── .eslintrc.json              # 代码校验配置文件
└── package.json                    # 定义项目需要的各种模块及配置信息
```

### 如何使用

    安装卡片依赖，刷新预览视图后即可使用。
    其中pages/page中的这张快应用页面，集合了卡片在桌面中不同大小布局时的效果，但仅做模拟。
    卡片为基础模板，只包含了基础元素及常用异常状态。
    开发者可根据自身的需要增加内容或者删减预制内容，保持源码的精简。
