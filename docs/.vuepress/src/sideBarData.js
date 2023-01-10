
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
        title: 'html',
        folder: 'html',
      },
      {
        title: 'css',
        folder: 'css',
      },
      {
        title: 'js',
        folder: 'js',
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