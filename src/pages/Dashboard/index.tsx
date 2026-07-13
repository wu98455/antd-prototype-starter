import { Column, Pie } from '@ant-design/charts'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { Card, Col, List, Row, Statistic, Typography } from 'antd'

const monthlyData = [
  { month: '1月', value: 3200 },
  { month: '2月', value: 2800 },
  { month: '3月', value: 3600 },
  { month: '4月', value: 4100 },
  { month: '5月', value: 3900 },
  { month: '6月', value: 4500 },
  { month: '7月', value: 4800 },
  { month: '8月', value: 4200 },
  { month: '9月', value: 5100 },
  { month: '10月', value: 5300 },
  { month: '11月', value: 4900 },
  { month: '12月', value: 5600 },
]

const categoryData = [
  { type: '合规培训', value: 38 },
  { type: '党建学习', value: 22 },
  { type: '技能提升', value: 18 },
  { type: '管理培训', value: 12 },
  { type: '其他', value: 10 },
]

const rankData = [
  { title: '第一分公司', total: 128432 },
  { title: '第二分公司', total: 112856 },
  { title: '第三分公司', total: 98654 },
  { title: '培训中心', total: 87621 },
  { title: '机关本部', total: 76543 },
  { title: '华东区域', total: 65432 },
  { title: '华南区域', total: 54321 },
]

export default function DashboardPage() {
  return (
    <div>
      <Typography.Title level={4} style={{ marginTop: 0 }}>
        分析页
      </Typography.Title>
      <Typography.Paragraph type="secondary">
        演示环境 Mock 数据 · 右侧齿轮可打开「整体风格设置」
      </Typography.Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="总学习人次"
              value={126560}
              prefix="¥"
              suffix=""
              valueStyle={{ fontSize: 24 }}
            />
            <div style={{ marginTop: 8, fontSize: 12, color: '#8c8c8c' }}>
              周同比 <ArrowUpOutlined style={{ color: '#3f8600' }} /> 12%
              <span style={{ marginLeft: 12 }}>
                日同比 <ArrowDownOutlined style={{ color: '#cf1322' }} /> 11%
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="访问量" value={8846} valueStyle={{ fontSize: 24 }} />
            <div style={{ marginTop: 8, fontSize: 12, color: '#8c8c8c' }}>日访问量 1,234</div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="完成课程数" value={6560} valueStyle={{ fontSize: 24 }} />
            <div style={{ marginTop: 8, fontSize: 12, color: '#8c8c8c' }}>转化率 60%</div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic title="培训活动效果" value={78} suffix="%" valueStyle={{ fontSize: 24 }} />
            <div style={{ marginTop: 8, fontSize: 12, color: '#8c8c8c' }}>较上周 +5%</div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} xl={16}>
          <Card title="学习人次趋势">
            <Column
              data={monthlyData}
              xField="month"
              yField="value"
              height={280}
              style={{ fill: '#1677ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card title="组织学习排名">
            <List
              size="small"
              dataSource={rankData}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <span>
                        <span style={{ color: index < 3 ? '#1677ff' : '#8c8c8c', marginRight: 8 }}>
                          {index + 1}
                        </span>
                        {item.title}
                      </span>
                    }
                  />
                  <span>{item.total.toLocaleString()}</span>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={12}>
          <Card title="热门课程搜索">
            <List
              size="small"
              dataSource={[
                { keyword: '安全生产', users: 1234, range: 17 },
                { keyword: '党史学习', users: 986, range: 12 },
                { keyword: '数字化转型', users: 765, range: 8 },
                { keyword: '领导力', users: 543, range: -3 },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <span>{item.keyword}</span>
                  <span style={{ color: '#8c8c8c' }}>
                    {item.users} 人 · {item.range > 0 ? `↑ ${item.range}%` : `↓ ${Math.abs(item.range)}%`}
                  </span>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="课程类别占比">
            <Pie
              data={categoryData}
              angleField="value"
              colorField="type"
              radius={0.8}
              height={260}
              legend={{ position: 'bottom' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
