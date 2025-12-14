# 如何部署到 GitHub Pages

为了让你的朋友可以通过链接直接访问并使用这个下载器，我们需要把前端页面托管到 GitHub Pages（因为阿里云的默认链接会强制下载）。

## 步骤 1：准备 GitHub 仓库

1.  登录你的 GitHub 账号。
2.  创建一个新的公开仓库（Repository），例如命名为 `reddit-downloader-web`。

## 步骤 2：上传文件

将当前文件夹中的以下文件上传到你的新仓库：

- `index.html` (这是我为你准备好的前端页面，已经连好了你的阿里云后端)

你可以通过 git 命令上传，也可以直接在 GitHub 网页上点击 "Upload files" 并拖入 `index.html`。

## 步骤 3：开启 GitHub Pages

1.  进入你的 GitHub 仓库页面。
2.  点击上方的 **Settings**（设置）。
3.  在左侧菜单找到 **Pages**。
4.  在 **Build and deployment** -> **Branch** 选项下：
    - 选择 `main` (或 `master`) 分支。
    - 文件夹选择 `/ (root)`。
    - 点击 **Save**。

## 步骤 4：获取分享链接

等待几分钟后，刷新 Pages 设置页面，你会看到顶部出现一行字：

> **Your site is live at...**

那个链接（通常是 `https://你的用户名.github.io/reddit-downloader-web/`）就是你可以分享给朋友的链接！

---

## 它是如何工作的？

1.  你的朋友访问 GitHub Pages 的链接，浏览器加载 `index.html` 页面。
2.  他们在页面上点击“下载”。
3.  页面会自动向你的阿里云函数 (`https://easy-reder-http-easy-re-service-wtkjubnzyp.cn-hongkong.fcapp.run`) 发送请求。
4.  阿里云函数执行下载任务并返回结果。

全程不需要你的朋友安装任何软件，也不需要你购买域名。
