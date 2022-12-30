
/**
 * curryUri 需要导入的文件路径
 * sideBarInfo 
 *   title 二级标题名称，需要和pages下面的文件名一致
 *   folder 二级标题对应的文件名称
 */
const sideBarConfig = [
  {
    curryUri: '/blog/js',
    sideBarInfo: [
      {
        title: '一、函数式编程范式',
        folder: '一、函数式编程范式',
      },
      {
        title: '二、ECMAScript 新特性',
        folder: '二、ECMAScript 新特性',
      },
    ]
  },
  {
    curryUri: '/blog/vue',
    sideBarInfo: [
      {
        title: '一、基础学习',
        folder: '一、基础',
      },
    ]
  },
  {
    curryUri: '/blog/vue-router',
    sideBarInfo: [
      {
        title: '一、基本使用',
        folder: '一、基本使用',
      },
    ]
  },
]

module.exports = {
  sideBarConfig
}