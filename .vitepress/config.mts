import { defineConfig } from 'vitepress'

// StarsunNotes - 以文档阅读为中心的知识库配置。
// 注意：如果原项目 config.mts 里有你自己添加的设置，请让 Codex 合并，而不是直接丢弃。
const chapters = [
  ['01-basic', '1 基础入门'],
  ['02-data', '2 数据与类型'],
  ['03-compound-types', '3 复合类型'],
  ['04-control-flow', '4 流程控制'],
  ['05-functions', '5 函数'],
  ['06-multifile-and-classes', '6 多文件与类基础'],
  ['07-operators-and-friends', '7 运算符重载与友元'],
  ['08-inheritance', '8 继承与多态'],
  ['09-special-members', '9 类的特殊函数'],
  ['10-exceptions', '10 异常处理'],
  ['11-smart-pointers', '11 智能指针与 RAII'],
  ['12-stl', '12 STL 与算法'],
  ['13-streams-and-files', '13 流与文件'],
  ['14-next-steps', '14 下一步怎么学']
] as const

export default defineConfig({
  base: process.env.STARSUN_BASE || '/',
  srcDir: '.',
  lang: 'zh-CN',
  title: 'StarsunNotes',
  description: '把知识真正学懂 · 个人学习知识库',
  cleanUrls: true,
  lastUpdated: false,

  head: [
    ['meta', { name: 'theme-color', content: '#0d1421' }],
    ['link', { rel: 'icon', type: 'image/png', href: `${process.env.STARSUN_BASE || '/'}celestial-emblem.png` }]
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    siteTitle: 'StarsunNotes',

    nav: [
      { text: '首页', link: '/' },
      { text: '知识总览', link: '/library/' },
      { text: '学习日志', link: '/journal/' },
      { text: '学习指南', link: '/guide/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/cpp/': [
        {
          text: 'C++ 学习',
          collapsed: false,
          items: [
            { text: '学习地图', link: '/cpp/' },
            ...chapters.map(([slug, title]) => ({
              text: title,
              link: `/cpp/${slug}`
            }))
          ]
        },
        {
          text: '附录',
          collapsed: false,
          items: [
            { text: '提问与排错', link: '/cpp/appendix-questions' },
            { text: '调试工具箱', link: '/cpp/appendix-debugging' }
          ]
        }
      ],

      '/guide/': [
        {
          text: '使用指南',
          collapsed: false,
          items: [
            { text: '指南首页', link: '/guide/' },
            { text: 'Markdown 写作', link: '/guide/markdown' },
            { text: '管理与维护网站', link: '/guide/website' }
          ]
        }
      ],

      '/journal/': [
        {
          text: '学习日志',
          items: [
            { text: '迭代记录', link: '/journal/' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: '本页大纲'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索笔记'
              },
              modal: {
                displayDetails: '查看详情',
                resetButtonTitle: '清空搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关笔记',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    navMenuLabel: '主导航',
    externalLinkIcon: true,

    footer: {
      message: '星辰可循，知识可积。',
      copyright: 'StarsunNotes · 自主学习与持续整理'
    }
  }
})

