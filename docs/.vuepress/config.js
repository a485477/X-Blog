module.exports = {
  title: 'Hello VuePress',
  base: '/X-Blog/',
  description: 'Just playing around',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: '博客',
        link: '/blogs/'
      },
      {
        text: '前端随笔',
        link: '/book/'
      }
    ],
    sidebar: {
      '/blogs/': [
        '前端处理文件下载篇',
        '浏览器渲染性能优化篇',
      ],
      '/book/': [{
          title: 'js',
          children: [
            '/book/js/promise',
            '/book/js/webpack基础篇',
            '/book/js/webpack配置小技巧',
          ],
          collapsable: false
        },
        {
          title: 'css',
          children: [
            '/book/css/css基础篇'
          ]
        },
        {
          title: '算法',
          children: [
            '/book/算法/删除排序数组中的重复项',
            '/book/算法/数组中出现次数最多的值',
            '/book/算法/数组合并双指针',
            '/book/算法/最大子序和',
            '/book/算法/有效的括号',
            '/book/算法/股票利润最大计算',
          ],
        },
        {
          title: '使用说明',
          children: [
            '/book/使用说明/npm'
          ]
        }
      ]
    },
    sidebarDepth: 2, // 侧边栏显示2级
  },
}