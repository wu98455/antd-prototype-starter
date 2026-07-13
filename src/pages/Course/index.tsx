import { PlusOutlined } from '@ant-design/icons'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button, message, Modal, Tag } from 'antd'
import { useRef } from 'react'
import { courseList, statusMap, type CourseItem } from '../../mock/data/courses'

export default function CoursePage() {
  const actionRef = useRef<ActionType>(null)

  const columns: ProColumns<CourseItem>[] = [
    {
      title: '课程名称',
      dataIndex: 'name',
      ellipsis: true,
    },
    {
      title: '分类',
      dataIndex: 'category',
      valueType: 'select',
      valueEnum: {
        合规培训: { text: '合规培训' },
        党建学习: { text: '党建学习' },
        入职培训: { text: '入职培训' },
        专业培训: { text: '专业培训' },
        技能提升: { text: '技能提升' },
        管理培训: { text: '管理培训' },
      },
    },
    {
      title: '讲师',
      dataIndex: 'lecturer',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        draft: { text: '草稿', status: 'Default' },
        published: { text: '已发布', status: 'Success' },
        archived: { text: '已归档', status: 'Warning' },
      },
      render: (_, record) => {
        const meta = statusMap[record.status]
        return <Tag color={meta.color}>{meta.text}</Tag>
      },
    },
    {
      title: '学员数',
      dataIndex: 'students',
      hideInSearch: true,
      sorter: (a, b) => a.students - b.students,
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      hideInSearch: true,
      valueType: 'dateTime',
    },
    {
      title: '操作',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="view"
          onClick={() => {
            Modal.info({
              title: record.name,
              content: (
                <div>
                  <p>分类：{record.category}</p>
                  <p>讲师：{record.lecturer}</p>
                  <p>学员数：{record.students}</p>
                </div>
              ),
            })
          }}
        >
          查看
        </a>,
        <a
          key="edit"
          onClick={() => message.success(`演示：编辑「${record.name}」`)}
        >
          编辑
        </a>,
      ],
    },
  ]

  return (
    <ProTable<CourseItem>
      headerTitle="课程管理"
      actionRef={actionRef}
      rowKey="id"
      columns={columns}
      search={{ labelWidth: 'auto' }}
      pagination={{ pageSize: 5 }}
      toolBarRender={() => [
        <Button
          key="add"
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => message.success('演示：打开新建课程表单')}
        >
          新建课程
        </Button>,
      ]}
      request={async (params) => {
        const { current = 1, pageSize = 5, name, category, status } = params
        let data = [...courseList]

        if (name) {
          data = data.filter((item) => item.name.includes(String(name)))
        }
        if (category) {
          data = data.filter((item) => item.category === category)
        }
        if (status) {
          data = data.filter((item) => item.status === status)
        }

        const start = (current - 1) * pageSize
        const pageData = data.slice(start, start + pageSize)

        return {
          data: pageData,
          success: true,
          total: data.length,
        }
      }}
    />
  )
}
