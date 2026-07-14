/**
 * GitHub Pages 等静态部署没有 Umi mock 服务。
 * 生产环境用本地 mock，保证登录和列表可演示。
 */
import type { AxiosAdapter, InternalAxiosRequestConfig } from 'axios';

const AUTH_KEY = 'antd-prototype-demo-auth';

const demoUser: API.CurrentUser = {
  name: 'Demo User',
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  userid: '00000001',
  email: 'demo@ant.design',
  signature: '海纳百川，有容乃大',
  title: '交互专家',
  group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  tags: [
    { key: '0', label: '很有想法的' },
    { key: '1', label: '专注设计' },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  access: 'admin',
  geographic: {
    province: { label: '浙江省', key: '330000' },
    city: { label: '杭州市', key: '330100' },
  },
  address: '西湖区工专路 77 号',
  phone: '0752-268888888',
};

const tableData: API.RuleListItem[] = Array.from({ length: 20 }).map(
  (_, index) => ({
    key: index,
    disabled: index % 6 === 0,
    href: 'https://ant.design',
    avatar:
      index % 2 === 0
        ? 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png'
        : 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    name: `TradeCode ${index}`,
    owner: '曲丽丽',
    desc: '这是一段描述',
    callNo: Math.floor(Math.random() * 1000),
    status: Math.floor(Math.random() * 10) % 4,
    updatedAt: new Date().toISOString().slice(0, 10),
    createdAt: new Date().toISOString().slice(0, 10),
    progress: Math.ceil(Math.random() * 100),
  }),
);

function ok(data: unknown, config: InternalAxiosRequestConfig) {
  return Promise.resolve({
    data,
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
  });
}

function parseBody(config: InternalAxiosRequestConfig) {
  const raw = config.data;
  if (!raw) return {};
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
  return raw as Record<string, unknown>;
}

function getUrl(config: InternalAxiosRequestConfig) {
  return `${config.baseURL || ''}${config.url || ''}`;
}

export const demoMockAdapter: AxiosAdapter = (config) => {
  const url = getUrl(config);
  const method = (config.method || 'get').toLowerCase();

  if (url.includes('/api/login/account') && method === 'post') {
    const body = parseBody(config) as API.LoginParams;
    const valid =
      (body.username === 'demo' && body.password === '123456') ||
      (body.username === 'admin' && body.password === 'ant.design') ||
      body.type === 'mobile';

    if (valid) {
      localStorage.setItem(AUTH_KEY, 'admin');
      return ok(
        {
          status: 'ok',
          type: body.type,
          currentAuthority: 'admin',
        },
        config,
      );
    }

    localStorage.removeItem(AUTH_KEY);
    return ok(
      {
        status: 'error',
        type: body.type,
        currentAuthority: 'guest',
      },
      config,
    );
  }

  if (url.includes('/api/login/outLogin') && method === 'post') {
    localStorage.removeItem(AUTH_KEY);
    return ok({ data: {}, success: true }, config);
  }

  if (url.includes('/api/currentUser') && method === 'get') {
    if (!localStorage.getItem(AUTH_KEY)) {
      return Promise.resolve({
        data: {
          data: { isLogin: false },
          errorCode: '401',
          errorMessage: '请先登录！',
          success: true,
        },
        status: 401,
        statusText: 'Unauthorized',
        headers: {},
        config,
      });
    }
    return ok({ success: true, data: demoUser }, config);
  }

  if (url.includes('/api/rule') && method === 'get') {
    const params = config.params || {};
    const current = Number(params.current || 1);
    const pageSize = Number(params.pageSize || 10);
    const start = (current - 1) * pageSize;
    return ok(
      {
        data: tableData.slice(start, start + pageSize),
        total: tableData.length,
        success: true,
        pageSize,
        current,
      },
      config,
    );
  }

  if (url.includes('/api/notices') && method === 'get') {
    return ok({ data: [], total: 0, success: true }, config);
  }

  if (url.includes('/api/login/captcha')) {
    return ok('captcha-demo', config);
  }

  return ok({ success: true, data: {} }, config);
};
