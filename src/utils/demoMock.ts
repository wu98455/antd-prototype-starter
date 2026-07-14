/**
 * GitHub Pages 等静态部署没有 Umi mock 服务。
 * 生产包直接用这套本地函数，保证登录和列表可演示。
 */

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

/** 生产静态包走本地 mock；开发仍用 Umi mock */
export const useClientDemoMock = process.env.NODE_ENV === 'production';

export async function demoLogin(body: API.LoginParams): Promise<API.LoginResult> {
  await new Promise((r) => setTimeout(r, 200));
  const valid =
    (body.username === 'demo' && body.password === '123456') ||
    (body.username === 'admin' && body.password === 'ant.design') ||
    body.type === 'mobile';

  if (valid) {
    localStorage.setItem(AUTH_KEY, 'admin');
    return {
      status: 'ok',
      type: body.type,
      currentAuthority: 'admin',
    };
  }

  localStorage.removeItem(AUTH_KEY);
  return {
    status: 'error',
    type: body.type,
    currentAuthority: 'guest',
  };
}

export async function demoCurrentUser(): Promise<{ data: API.CurrentUser }> {
  if (!localStorage.getItem(AUTH_KEY)) {
    const error: any = new Error('请先登录！');
    error.name = 'BizError';
    error.info = {
      success: false,
      data: { isLogin: false },
      errorCode: '401',
      errorMessage: '请先登录！',
    };
    error.response = { status: 401 };
    throw error;
  }
  return { data: demoUser };
}

export async function demoOutLogin() {
  localStorage.removeItem(AUTH_KEY);
  return { data: {}, success: true };
}

export async function demoRule(params: {
  current?: number;
  pageSize?: number;
}): Promise<API.RuleList> {
  const current = Number(params.current || 1);
  const pageSize = Number(params.pageSize || 10);
  const start = (current - 1) * pageSize;
  return {
    data: tableData.slice(start, start + pageSize),
    total: tableData.length,
    success: true,
    pageSize,
    current,
  };
}

export async function demoNotices(): Promise<API.NoticeIconList> {
  return { data: [], total: 0, success: true };
}

export async function demoCaptcha() {
  return 'captcha-demo';
}
