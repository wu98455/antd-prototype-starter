import { Alert, Card, Col, Progress, Row, Statistic, Typography } from 'antd'

export default function MonitorPage() {
  return (
    <div>
      <Typography.Title level={4} style={{ marginTop: 0 }}>
        监控页
      </Typography.Title>
      <Alert
        type="info"
        showIcon
        message="演示占位页"
        description="可按客户场景替换为实时监控、在线人数、系统状态等。"
        style={{ marginBottom: 16 }}
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="当前在线" value={128} suffix="人" />
            <Progress percent={72} status="active" style={{ marginTop: 16 }} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="今日完成培训" value={456} suffix="人次" />
            <Progress percent={85} style={{ marginTop: 16 }} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="系统可用率" value={99.9} suffix="%" precision={1} />
            <Progress percent={99} style={{ marginTop: 16 }} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
