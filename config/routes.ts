/**
 * 母版菜单顺序对齐官方 Pro Demo：
 * 欢迎 → 管理页 → Dashboard → 表单页 → 列表页 → 详情页 → 结果页 → 异常页 → 个人页 → AI 助手
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'home',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
      },
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        component: './dashboard/analysis',
      },
      {
        path: '/dashboard/monitor',
        name: 'monitor',
        component: './dashboard/monitor',
      },
      {
        path: '/dashboard/workplace',
        name: 'workplace',
        component: './dashboard/workplace',
      },
    ],
  },
  {
    path: '/form',
    name: 'form',
    icon: 'form',
    routes: [
      {
        path: '/form',
        redirect: '/form/basic-form',
      },
      {
        path: '/form/basic-form',
        name: 'basic-form',
        component: './form/basic-form',
      },
      {
        path: '/form/step-form',
        name: 'step-form',
        component: './form/step-form',
      },
      {
        path: '/form/advanced-form',
        name: 'advanced-form',
        component: './form/advanced-form',
      },
    ],
  },
  {
    path: '/list',
    name: 'list',
    icon: 'table',
    routes: [
      {
        path: '/list',
        redirect: '/list/table-list',
      },
      {
        path: '/list/table-list',
        name: 'table-list',
        component: './table-list',
      },
      {
        path: '/list/basic-list',
        name: 'basic-list',
        component: './list/basic-list',
      },
      {
        path: '/list/card-list',
        name: 'card-list',
        component: './list/card-list',
      },
    ],
  },
  {
    path: '/profile',
    name: 'profile',
    icon: 'profile',
    routes: [
      {
        path: '/profile',
        redirect: '/profile/basic',
      },
      {
        path: '/profile/basic',
        name: 'basic',
        component: './profile/basic',
      },
      {
        path: '/profile/advanced',
        name: 'advanced',
        component: './profile/advanced',
      },
    ],
  },
  {
    path: '/result',
    name: 'result',
    icon: 'checkCircle',
    routes: [
      {
        path: '/result',
        redirect: '/result/success',
      },
      {
        path: '/result/success',
        name: 'success',
        component: './result/success',
      },
      {
        path: '/result/fail',
        name: 'fail',
        component: './result/fail',
      },
    ],
  },
  {
    path: '/exception',
    name: 'exception',
    icon: 'warning',
    routes: [
      {
        path: '/exception',
        redirect: '/exception/403',
      },
      {
        path: '/exception/403',
        name: '403',
        component: './exception/403',
      },
      {
        path: '/exception/404',
        name: '404',
        component: './exception/404',
      },
      {
        path: '/exception/500',
        name: '500',
        component: './exception/500',
      },
    ],
  },
  {
    path: '/account',
    name: 'account',
    icon: 'user',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        path: '/account/center',
        name: 'center',
        component: './account/center',
      },
      {
        path: '/account/settings',
        name: 'settings',
        component: './account/settings',
      },
    ],
  },
  {
    path: '/chatbot',
    name: 'chatbot',
    icon: 'robot',
    component: './chatbot',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './exception/404',
  },
];
