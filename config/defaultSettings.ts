import type { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#1677ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  // 运行时用 PUBLIC_PATH（由 config.define 注入），适配 GitHub Pages 子路径
  logo: `${process.env.PUBLIC_PATH || '/'}logo.svg`.replace(/([^:]\/)\/+/g, '$1'),
  iconfontUrl: '',
  token: {
    // 选中菜单：主题色背景 + 白字（CSS 会用 var(--ant-color-primary) 跟随主题色）
    sider: {
      colorBgMenuItemSelected: '#1677ff',
      colorTextMenuSelected: '#ffffff',
    },
  },
};

export default Settings;
