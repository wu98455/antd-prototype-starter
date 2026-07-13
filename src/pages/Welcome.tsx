import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Card, Typography } from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  const intl = useIntl();

  return (
    <PageContainer>
      <Card>
        <Typography.Title level={3} style={{ marginTop: 0 }}>
          {intl.formatMessage({ id: 'pages.welcome.title', defaultMessage: '欢迎使用 Ant Design Pro' })}
        </Typography.Title>
        <Typography.Paragraph>
          {intl.formatMessage({
            id: 'pages.welcome.description',
            defaultMessage:
              '这是通用演示模板，可用于快速搭建可交互原型。请从左侧菜单进入管理页或查询表格。',
          })}
        </Typography.Paragraph>
        <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
          {intl.formatMessage({
            id: 'pages.welcome.demoAccount',
            defaultMessage: '演示账号：demo / 123456（或 admin / ant.design）',
          })}
        </Typography.Paragraph>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
