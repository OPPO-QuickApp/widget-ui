module.exports = {
  title: 'WidgetUI',
  base: '/widgetui/',
  description: 'WidgetUI是OPPO官方卡片组件库',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'G-GNKRB7QBLL',
      },
    ],
    '@vuepress/back-to-top',
  ],
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '快应用 组件库 官方 卡片 UI组件库 快应用开发',
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    nav: [
      { text: '快应用文档', link: 'https://doc.quickapp.cn' },
      //TODO
      { text: 'GitHub', link: 'https://github.com/quickappcn/qaui' },
    ],
    sidebar: [
      '/',
      {
        title: '基础',
        collapsable: false,
        children: ['/button'],
      },
      {
        title: '布局',
        collapsable: false,
        children: ['/title'],
      },
      {
        title: '反馈',
        collapsable: false,
        children: ['/error-page', '/skeleton'],
      },
    ],
  },
}
