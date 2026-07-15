import { PageContainer, ProList } from '@ant-design/pro-components';
import { Avatar, Card, Typography } from 'antd';
import React from 'react';

const CardList: React.FC = () => {
  return (
    <PageContainer>
      <ProList
        rowKey="id"
        headerTitle="卡片列表"
        grid={{ gutter: 16, column: 3 }}
        dataSource={[
          { id: 1, title: 'Alipay', desc: '那是一种内在的东西，他们无法达到' },
          { id: 2, title: 'Angular', desc: '希望是一个好东西，也许是最好的' },
          { id: 3, title: 'Ant Design', desc: '城镇中有那么多的酒馆，她却偏偏走进了我的' },
          { id: 4, title: 'Ant Design Pro', desc: '那时候我只会想自己想要什么' },
          { id: 5, title: 'Bootstrap', desc: '凛冬将至' },
          { id: 6, title: 'React', desc: '生命就像一盒巧克力' },
        ]}
        metas={{
          title: {},
          content: {
            render: (_, row) => (
              <Card hoverable>
                <Card.Meta
                  avatar={<Avatar>{row.title?.[0]}</Avatar>}
                  title={row.title}
                  description={<Typography.Paragraph ellipsis={{ rows: 2 }}>{row.desc}</Typography.Paragraph>}
                />
              </Card>
            ),
          },
        }}
      />
    </PageContainer>
  );
};

export default CardList;
