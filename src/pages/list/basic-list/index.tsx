import { PageContainer, ProList } from '@ant-design/pro-components';
import { Progress, Tag } from 'antd';
import React from 'react';

const BasicList: React.FC = () => {
  return (
    <PageContainer>
      <ProList<{ title: string; status: string; percent: number }>
        rowKey="title"
        headerTitle="标准列表"
        dataSource={[
          { title: 'Ant Design Title 1', status: 'active', percent: 60 },
          { title: 'Ant Design Title 2', status: 'exception', percent: 30 },
          { title: 'Ant Design Title 3', status: 'normal', percent: 90 },
        ]}
        metas={{
          title: {},
          subTitle: {
            render: (_, row) =>
              row.status === 'exception' ? (
                <Tag color="error">异常</Tag>
              ) : (
                <Tag color="processing">进行中</Tag>
              ),
          },
          description: {
            render: (_, row) => <Progress percent={row.percent} size="small" />,
          },
        }}
      />
    </PageContainer>
  );
};

export default BasicList;
