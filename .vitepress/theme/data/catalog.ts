/**
 * StarsunNotes 的唯一知识目录数据源。
 *
 * 你以后增加笔记，主要修改这个文件。
 * - areas: 知识领域（分类），不限制只能有 C++。
 * - notebooks: 真正存在的专题 / 笔记，link 必须对应已创建的页面。
 *
 * 目前只有 C++ 笔记和 Markdown 整理指南具有真实页面。
 * 其他分类只是可调整的框架，不会伪装成已完成的内容。
 */

export type KnowledgeArea = {
  id: string
  title: string
  en: string
  description: string
  symbol: string
}

export type Notebook = {
  id: string
  area: string
  title: string
  subtitle: string
  description: string
  link: string
  state: '整理中' | '已整理'
}

export const areas: KnowledgeArea[] = [
  {
    id: 'technology',
    title: '编程与技术',
    en: 'Technology',
    description: '语言、计算机原理、工程工具和技术实践。',
    symbol: '01'
  },
  {
    id: 'science',
    title: '数学与科学',
    en: 'Science',
    description: '数学基础、自然科学、模型与推导。',
    symbol: '02'
  },
  {
    id: 'reading',
    title: '阅读与人文',
    en: 'Reading',
    description: '书籍、语言、历史、人文与阅读札记。',
    symbol: '03'
  },
  {
    id: 'design',
    title: '设计与创作',
    en: 'Creation',
    description: '审美、设计、表达和创作方法。',
    symbol: '04'
  },
  {
    id: 'projects',
    title: '项目与实践',
    en: 'Projects',
    description: '实作项目、实验记录与问题复盘。',
    symbol: '05'
  },
  {
    id: 'methods',
    title: '工具与方法',
    en: 'Methods',
    description: '效率工具、知识整理、工作流与学习方法。',
    symbol: '06'
  }
]

export const notebooks: Notebook[] = [
  {
    id: 'cpp',
    area: 'technology',
    title: 'C++ 学习笔记',
    subtitle: 'C++ / PROGRAMMING',
    description: '从基础入门到现代 C++ 与工程实践，持续整理章节内容。',
    link: '/cpp/',
    state: '整理中'
  },
  {
    id: 'markdown',
    area: 'methods',
    title: 'Markdown 与知识整理',
    subtitle: 'DOCUMENTATION / METHOD',
    description: '整理笔记写法、代码示例、图片管理和文档维护方法。',
    link: '/guide/',
    state: '整理中'
  }
]

export const areaById = (id: string) =>
  areas.find((area) => area.id === id)

export const notebooksFor = (areaId: string) =>
  notebooks.filter((note) => note.area === areaId)

export const activeAreaCount =
  areas.filter((area) => notebooksFor(area.id).length > 0).length
