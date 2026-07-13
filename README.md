# Ant Design 可交互原型模板

基于 **Vite + React + TypeScript + Ant Design + ProComponents** 的最小可演示模板，用于快速给客户展示后台原型。

## 功能

- 登录页（演示账号）
- ProLayout 后台布局
- 首页看板（Statistic）
- 课程管理（ProTable + 搜索 + 分页 + Mock 数据）
- 无需后端，纯前端 Mock

## 演示账号

| 账号 | 密码 |
|------|------|
| demo | 123456 |

## 快速开始

```powershell
cd D:\dev\projects\antd-prototype-starter
pnpm install
pnpm dev
```

浏览器打开 http://localhost:5173

## 局域网演示

```powershell
pnpm dev --host 0.0.0.0 --port 5173
ipconfig   # 查看 IPv4 地址
```

同网设备访问：`http://<你的IP>:5173`

## 打包

```powershell
pnpm build
pnpm preview --host 0.0.0.0 --port 8080
```

## 部署 Netlify

1. 推送代码到 GitHub / Gitee
2. Netlify → Add new site → 连接仓库
3. Build: `pnpm run build`，Publish: `dist`
4. 或本地 `pnpm build` 后拖拽 `dist` 到 Netlify

## 复制为新项目

```powershell
xcopy /E /I D:\dev\projects\antd-prototype-starter D:\dev\projects\客户名-原型
cd D:\dev\projects\客户名-原型
# 修改 .env.development 中的 VITE_APP_TITLE
pnpm install
pnpm dev
```

## 相关文档

- [Ant Design](https://ant.design/components/overview-cn/)
- [ProComponents](https://procomponents.ant.design/)
- 工作流说明：`D:\IDE\Cursor\国企优学\Ant-Design可交互原型工作流.md`
- 账号注册清单：`D:\dev\register-accounts-checklist.md`
- 文档书签导入：`D:\dev\antd-prototype-bookmarks.html`
