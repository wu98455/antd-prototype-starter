import { LogoutOutlined } from '@ant-design/icons'
import { ProLayout, SettingDrawer } from '@ant-design/pro-components'
import type { ProSettings } from '@ant-design/pro-components'
import { Dropdown } from 'antd'
import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { loadSettings, saveSettings } from '../config/defaultSettings'
import { layoutRoutes } from '../config/layoutRoutes'
import { getCurrentUser, logout } from '../utils/auth'

export default function BasicLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const username = getCurrentUser()
  const [settings, setSettings] = useState<Partial<ProSettings>>(loadSettings)

  const appTitle = import.meta.env.VITE_APP_TITLE || '演示系统'

  return (
    <>
      <ProLayout
        {...settings}
        title={appTitle}
        logo={false}
        location={{ pathname: location.pathname }}
        route={layoutRoutes}
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

      <SettingDrawer
        pathname={location.pathname}
        enableDarkTheme
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSettings(changeSetting)
          saveSettings(changeSetting)
        }}
        hideHintAlert
      />
    </>
  )
}
