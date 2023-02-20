import { defineUserConfig, defaultTheme, HeadConfig } from 'vuepress'

const head: HeadConfig[] = [['link', { rel: 'icon', href: '/favicon.ico' }]]

const sidebar = {
  '/2023_spring/': [
    {
      text: '课程信息',
      children: [
        { text: '课程介绍', link: '/2023_spring/information/introduction' }
      ]
    },
    {
      text: '前期准备',
      children: [
        {
          text: '加入洛谷「BNU-ICIP」团队',
          link: '/2023_spring/preparation/join_luogu'
        }
      ]
    }
  ]
}

const navbar = [
  {
    text: '2023年春季学期',
    children: [
      { text: '课程信息', link: '/2023_spring/information/introduction' },
      { text: '前期准备', link: '/2023_spring/preparation/join_luogu' }
    ]
  }
]

export default defineUserConfig({
  head,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'Python编程与数据分析',
      description: '北京师范大学本科生通识教育课程'
    }
  },
  theme: defaultTheme({
    repo: 'https://github.com/frederick-wang/www.bnupython.com',
    docsDir: 'docs',
    locales: {
      '/': {
        notFound: ['你似乎来到了没有知识存在的荒原...'],
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        backToHome: '返回首页',
        navbar,
        sidebar
      }
    }
  })
})
