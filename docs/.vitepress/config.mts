import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/', // TODO: check 部署出去的 path 是不是根路径，如果不是需要改为 /path/ 这样的路径
  title: 'unibest',
  description: 'A Beautiful VitePress Site Generator',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: 'unibest',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright (c) 2024 菲鸽',
    },
  },
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],
})
