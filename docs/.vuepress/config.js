module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端基础', link: '/book/' }
    ],
    sidebar: [
      '/',
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
        collapsable: false
      },
      {
        title: '异步',
        children: [
            '/book/异步/promise'
        ]
      },
      {
        title: '使用说明',
        children: [
            '/book/使用说明/npm'
        ]
      }
    ],
    sidebarDepth: 2, // 侧边栏显示2级
  },
}