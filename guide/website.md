# 网站管理与维护

StarsunNotes 使用 Windows、VS Code、Markdown 与 VitePress。你只需要维护源文件，不需要每天手动写 HTML。

## 1. 文件在哪里？

```text:no-line-numbers
StarsunNotes/
├── .vitepress/
│   ├── config.mts          网站配置
│   └── theme/
│       ├── index.ts        主题入口
│       ├── Layout.vue      组件布局
│       └── custom.css      网站样式
├── cpp/
│   ├── index.md            C++ 学习地图
│   ├── 01-basic.md         第一章
│   └── ...
├── guide/                  使用指南
├── journal/                学习日志
├── public/                 网站公开静态资源
├── index.md                网站首页
└── package.json
```

## 2. 启动预览

进入项目根目录（包含 `package.json` 的文件夹）：

```powershell
npx vitepress dev .
```

终端出现 `Local: http://localhost:5173/` 后在浏览器打开它。若端口被占用，以终端实际显示的地址为准。

## 3. 发布前构建检查

```powershell
npx vitepress build .
```

如果退出码为 0 且没有报错，代表当前版本能完成静态站点构建。**这不等于已经把网站发布到互联网。**

## 4. 如何新建一章？

1. 在 `cpp/` 新建 `15-my-topic.md`。
2. 写标题、正文、代码示例。
3. 在 `.vitepress/config.mts` 的 `chapters` 数组里追加名称与文件名。
4. 在 `cpp/index.md` 里增加目录入口。
5. 保存并浏览检查。

## 5. CSS 与主题

`custom.css` 控制颜色、留白、按钮、卡片和代码样式。  
`Layout.vue` 与其中的组件控制阅读进度、面包屑、复制链接等增强功能。

## 6. 保密与备份

开发服务器 `localhost` 默认是本机访问入口，不代表公开部署。

请勿把私人订阅链接、令牌、密码等写入公开的 Markdown 或 `public` 资源。

升级工具会备份已有重要配置。未来最好进一步使用 Git 做版本管理。
