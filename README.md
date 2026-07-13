# Ant Design Pro v6 原型母版

> **新建客户项目请先阅读 → [原型指南.md](./原型指南.md)**

基于官方 [Ant Design Pro v6](https://github.com/ant-design/ant-design-pro) **simple 精简版**（Umi Max 4 + ProComponents v3），用于快速搭建可交互后台原型并部署 GitHub Pages。

## 功能

- 登录页（演示账号）
- ProLayout + SettingDrawer 整体风格设置
- 欢迎页、管理页、查询表格（ProTable + Mock）
- 内置 mock，无需后端

## 演示账号

| 账号 | 密码 | 说明 |
|------|------|------|
| demo | 123456 | 原型工作流默认账号 |
| admin | ant.design | Pro 官方默认账号 |

## 在线 Demo

**https://wu98455.github.io/antd-prototype-starter/**

推送 `main` 后 Actions 自动部署。首次需在 **Settings → Pages** 选择 **gh-pages** 分支。

## 快速开始

```powershell
cd D:\dev\projects\antd-prototype-starter
pnpm install
pnpm start
```

浏览器打开 http://localhost:8000

## 局域网演示

```powershell
pnpm start -- --host 0.0.0.0
ipconfig
```

同网设备访问：`http://<你的IP>:8000`

## 打包

```powershell
pnpm build
pnpm preview
```

GitHub Pages 子路径构建：

```powershell
pnpm build:pages
```

## 复制为新项目

详见 [原型指南.md](./原型指南.md)。

## 相关文档

- [Ant Design Pro Preview](https://preview.pro.ant.design/)
- [Umi Max](https://umijs.org/docs/max/introduce)
- [ProComponents](https://procomponents.ant.design/)
