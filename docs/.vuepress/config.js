module.exports = {
  lang: "zh-CN",
  title: "接口文档", //网站的标题;默认主题下,将应用在导航栏上
  description: "vuePress搭建的接口文档",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      "link",
      {
        rel: "icon",
        href: "https://vuejs.org/images/logo.png", //网页页签图标
      },
    ],
  ],
  base: "/vuepress", // 写你的仓库名称,默认值是 /,base 属性的值总是以 / 开始并以 /结束
  // dest: "", // VuePress 默认将文件打包在 .vuepress/dist目录下,可以通过 dest属性修改文件输出目录
  // repo: "", // 添加 github 链接
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png", //左侧图标
    navbar: [
      { text: "首页", link: "/" },
      { text: "快速上手", link: "/guide/" },
      { text: "规范文档", link: "/frontend/standard/" },
      { text: "框架", link: "/frontend/framework/" },
      { text: "组件库", link: "/frontend/library/" },
    ],
    // 为不同的页面组来显示不同的侧边栏
    sidebar: {
      "/guide/": [""],
      "/frontend/standard/": [""],
      "/frontend/framework/": [""],
      "/frontend/library/": [""],
    },
  },
  // sidebar: "auto", // 侧边栏配置
  sidebarDepth: 2,
};
