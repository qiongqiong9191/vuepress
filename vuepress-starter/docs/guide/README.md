# 快速上手

## 依赖环境

- Node.js v12+
- Yarn v1 classic （可选）
  
::: tip 提示
- 使用 [pnpm](https://pnpm.io/zh/) 时，你需要在 .npmrc 文件中设置 shamefully-hoist=true 。
- 使用 [yarn 2](https://pnpm.io/zh/npmrc#shamefully-hoist) 时，你需要在 .yarnrc.yml 文件中设置 nodeLinker: 'node-modules' 。
:::

## 手动安装
- 步骤1: 创建并进入一个新目录
```sh
mkdir vuepress-starter
cd vuepress-starter
```

- 步骤2: 初始化项目
```sh
git init
yarn init
```

- 步骤3: 将 VuePress 安装为本地依赖
```sh
yarn add -D vuepress@next
```

- 步骤4: 在 package.json 中添加一些 scripts
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- 步骤5: 将默认的临时目录和缓存目录添加到 .gitignore 文件中
```sh
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- 步骤6: 创建你的第一篇文档
```sh
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

- 步骤7: 在本地启动服务器来开发你的文档网站
```sh
yarn docs:dev
```

- 步骤8: 打包编译
```sh
yarn docs:build
```