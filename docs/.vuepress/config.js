const { sideBarConfig }  = require('./src/sideBarData')
const { sideBarFilter }  = require('./src/sideBarFilter')
// 设置根路径
// const rootPath = '/Users/admin/Documents/work/vue3/leezozz-blog/js'

console.log('66666', sideBarFilter(sideBarConfig))




module.exports = {
  "title": "leezozz-blog",
  "base": "/leezozz-blog/",
  "description": "我的博客，日常记录",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "基础",
        "icon": "reco-blog",
        "link": "/blog/base/",
      },
      {
        "text": "工具",
        "icon": "reco-other",
        "link": "/blog/frameSeries/",
      },
      {
        "text": "笔记",
        "icon": "reco-suggestion",
        "link": "/blog/view/",
      },
      {
        "text": "时间轴",
        "icon": "reco-date",
        "link": "/timeline/",
      },
      {
        "text": "GitHub",
        "icon": "reco-message",
        "link": "https://github.com/leezozz/leezozz-blog.git",
      }
    ],
    "sidebar": sideBarFilter(sideBarConfig),
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      // "tag": {
      //   "location": 3,
      //   "text": "Tag"
      // },
      "socialLinks": [     // 信息栏展示社交信息
        { "icon": 'reco-github', "link": 'https://github.com/leezozz/leezozz-blog.git' }
      ]
    },
    "friendLink": [
      {
        "title": "日常记录",
        "desc": "博观而约取，厚积而薄发。",
        "email": "1156743527@qq.com",
        "link": "https://github.com/leezozz/leezozz-blog.git"
      }
    ],
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "leezozz",
    // 头像
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}