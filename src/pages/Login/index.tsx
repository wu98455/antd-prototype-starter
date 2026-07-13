import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, App, Button, Card, Form, Input, Typography } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { DEMO_PASSWORD, DEMO_USERNAME, login } from '../../utils/auth'

type LoginForm = {
  username: string
  password: string
}

export default function LoginPage() {
  const { message } = App.useApp()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from || '/dashboard'

  const onFinish = (values: LoginForm) => {
    if (login(values.username, values.password)) {
      navigate(from, { replace: true })
      return
    }
    message.error('账号或密码错误')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1677ff 0%, #0958d9 100%)',
        padding: 24,
      }}
    >
      <Card style={{ width: 400, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
        <Typography.Title level={3} style={{ textAlign: 'center', marginBottom: 8 }}>
          {import.meta.env.VITE_APP_TITLE || '演示系统'}
        </Typography.Title>
        <Typography.Paragraph type="secondary" style={{ textAlign: 'center', marginBottom: 24 }}>
          可交互原型 · 演示环境
        </Typography.Paragraph>

        <Alert
          type="info"
          showIcon
          message={`演示账号：${DEMO_USERNAME} / ${DEMO_PASSWORD}`}
          style={{ marginBottom: 24 }}
        />

        <Form<LoginForm>
          layout="vertical"
          initialValues={{ username: DEMO_USERNAME, password: DEMO_PASSWORD }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            label="账号"
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="请输入账号" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
