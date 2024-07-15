
/**
 * curryUri 需要导入的文件路径
 * sideBarInfo 
 *   title 二级标题名称，需要和pages下面的文件名一致
 *   folder 二级标题对应的文件名称
 */
const sideBarConfig = [
  {
    curryUri: '/blog/base',
    sideBarInfo: [
      {
        title: 'HTML',
        folder: 'html',
      },
      {
        title: 'CSS',
        folder: 'css',
      },
      {
        title: 'JS',
        folder: 'js',
      },
      {
        title: 'HTTP',
        folder: 'HTTP',
      },
      {
        title: 'TS',
        folder: 'TypeScript',
      },
      {
        title: '虚拟dom',
        folder: 'virtualDOM',
      },
      {
        title: 'linux',
        folder: 'linux',
      }
    ]
  },
  {
    curryUri: '/blog/frameSeries',
    sideBarInfo: [
      {
        title: 'vue',
        folder: 'vue',
      },
      {
        title: 'vue-router',
        folder: 'vue-router',
      },
      {
        title: 'react',
        folder: 'react',
      },
      {
        title: 'echarts',
        folder: 'echarts',
      },
      {
        title: 'vuex',
        folder: 'vuex',
      },
      {
        title: 'Nuxt',
        folder: 'Nuxt',
      },
      {
        title: '性能优化',
        folder: 'performance',
      },
    ]
  },
  {
    curryUri: '/blog/view',
    sideBarInfo: [
      {
        title: '笔记',
        folder: 'note',
      },
    ]
  },
]

module.exports = {
  sideBarConfig
}