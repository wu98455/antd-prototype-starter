import { BookOutlined, TeamOutlined, TrophyOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Col, Row, Statistic, Typography } from 'antd'

export default function DashboardPage() {
  return (
    <div>
      <Typography.Title level={4} style={{ marginTop: 0 }}>
        首页看板
      </Typography.Title>
      <Typography.Paragraph type="secondary">
        演示环境数据 · 用于客户演示概览
      </Typography.Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="在学人数" value={3886} prefix={<UserOutlined />} suffix="人" />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="课程总数" value={128} prefix={<BookOutlined />} suffix="门" />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="培训专题" value={24} prefix={<TrophyOutlined />} suffix="个" />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="覆盖组织" value={56} prefix={<TeamOutlined />} suffix="家" />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="演示说明">
            <Typography.Paragraph>
              本系统为 Ant Design 可交互原型模板，所有数据均为 Mock 模拟数据，无需后端即可演示。
            </Typography.Paragraph>
            <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
              建议演示路径：首页看板 → 课程管理（搜索 / 分页 / 操作）→ 退出登录
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
