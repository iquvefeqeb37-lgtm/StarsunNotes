# StarsunNotes

用于学习和整理个人笔记的知识库，主要记录个人学习过程、理解和实践，仅供个人使用与交流参考。内容持续整理中，可能存在尚未完善的章节。

网站：https://iquvefeqeb37-lgtm.github.io/StarsunNotes/

网站使用 VitePress，并由 GitHub Pages 免费托管。访问者无需启动本地项目，作者电脑关闭后网站仍可访问。

## 本地预览

桌面 StarsunNotes 文件夹中的「StarsunNotes 启动器.exe」提供启动、访问与关闭按钮。

在本目录也可以执行：

```powershell
npm run docs:dev
```

## 更新公开网站

修改并保存 Markdown 后，在本目录执行：

```powershell
npx vitepress build .
git add .
git commit -m "更新学习笔记"
git push
```

GitHub Actions 成功后，公开网站自动更新。仅保存本机文件不会改变线上版本。不要提交密码、令牌或其他私人资料。
