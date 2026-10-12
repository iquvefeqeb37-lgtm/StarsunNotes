# 开始使用

## 写一篇新笔记

在 `docs/notes` 文件夹中新建 Markdown 文件，例如：

```text
docs/notes/math.md
```

文件内容可以这样写：

```markdown
# 数学笔记

## 二次函数

一般形式：$y = ax^2 + bx + c$。
```

## 本地查看网站

在 VS Code 中重新打开终端，然后执行：

```powershell
npm run docs:dev
```

终端会显示本地网址。按住 `Ctrl` 并点击网址，即可在浏览器中打开。

## 添加到侧边栏

新文件创建后，编辑 `docs/.vitepress/config.mts`，在 `sidebar` 中添加标题和链接。

例如 `docs/notes/math.md` 对应的网站链接是 `/notes/math`。

## 构建发布文件

```powershell
npm run docs:build
```

生成的网站位于 `docs/.vitepress/dist`。这些是静态文件，不需要自己运行服务器。
