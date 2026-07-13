import {
  DashboardOutlined,
  ReadOutlined,
  TableOutlined,
} from '@ant-design/icons'
import type { ProLayoutProps } from '@ant-design/pro-components'

export const layoutRoutes: ProLayoutProps['route'] = {
  path: '/',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <DashboardOutlined />,
      routes: [
        { path: '/dashboard', name: '分析页' },
        { path: '/dashboard/monitor', name: '监控页' },
      ],
    },
    {
      path: '/courses',
      name: '列表页',
      icon: <TableOutlined />,
      routes: [{ path: '/courses', name: '课程管理' }],
    },
    {
      path: '/dashboard',
      name: '演示说明',
      icon: <ReadOutlined />,
    },
  ],
}
