import { LogoutOutlined } from '@ant-design/icons'
import { ProLayout } from '@ant-design/pro-components'
import { Dropdown } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { getCurrentUser, logout } from '../utils/auth'

const menuRoutes = [
  { path: '/dashboard', name: '首页看板' },
  { path: '/courses', name: '课程管理' },
]

export default function BasicLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const username = getCurrentUser()

  return (
    <ProLayout
      title={import.meta.env.VITE_APP_TITLE || '演示系统'}
      logo={false}
      layout="mix"
      fixSiderbar
      location={{ pathname: location.pathname }}
      route={{ routes: menuRoutes }}
      menuItemRender={(item, dom) => (
        <a
          onClick={(e) => {
            e.preventDefault()
            if (item.path) navigate(item.path)
          }}
        >
          {dom}
        </a>
      )}
      avatarProps={{
        title: username,
        render: (_, dom) => (
          <Dropdown
            menu={{
              items: [
                {
                  key: 'logout',
                  icon: <LogoutOutlined />,
                  label: '退出登录',
                  onClick: () => {
                    logout()
                    navigate('/login', { replace: true })
                  },
                },
              ],
            }}
          >
            {dom}
          </Dropdown>
        ),
      }}
      contentStyle={{ padding: 24, minHeight: 'calc(100vh - 56px)' }}
    >
      <Outlet />
    </ProLayout>
  )
}
