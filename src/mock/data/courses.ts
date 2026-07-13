export type CourseItem = {
  id: number
  name: string
  category: string
  lecturer: string
  status: 'draft' | 'published' | 'archived'
  students: number
  updatedAt: string
}

export const courseList: CourseItem[] = [
  {
    id: 1,
    name: '安全生产培训',
    category: '合规培训',
    lecturer: '张建国',
    status: 'published',
    students: 1280,
    updatedAt: '2026-07-01 10:30',
  },
  {
    id: 2,
    name: '党史学习教育',
    category: '党建学习',
    lecturer: '李红梅',
    status: 'published',
    students: 956,
    updatedAt: '2026-06-28 14:20',
  },
  {
    id: 3,
    name: '新员工入职培训',
    category: '入职培训',
    lecturer: '王强',
    status: 'published',
    students: 432,
    updatedAt: '2026-06-25 09:15',
  },
  {
    id: 4,
    name: '财务合规与内控',
    category: '专业培训',
    lecturer: '赵敏',
    status: 'draft',
    students: 0,
    updatedAt: '2026-06-20 16:45',
  },
  {
    id: 5,
    name: '数字化转型基础',
    category: '技能提升',
    lecturer: '陈浩',
    status: 'published',
    students: 678,
    updatedAt: '2026-06-18 11:00',
  },
  {
    id: 6,
    name: '领导力提升研修班',
    category: '管理培训',
    lecturer: '刘芳',
    status: 'archived',
    students: 210,
    updatedAt: '2026-05-30 08:30',
  },
  {
    id: 7,
    name: '网络安全意识培训',
    category: '合规培训',
    lecturer: '周磊',
    status: 'published',
    students: 1540,
    updatedAt: '2026-07-08 13:40',
  },
  {
    id: 8,
    name: '公文写作规范',
    category: '技能提升',
    lecturer: '孙丽',
    status: 'draft',
    students: 0,
    updatedAt: '2026-07-10 09:20',
  },
]

export const statusMap = {
  draft: { text: '草稿', color: 'default' },
  published: { text: '已发布', color: 'success' },
  archived: { text: '已归档', color: 'warning' },
} as const
