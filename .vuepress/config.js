
let { getSideBar } = require('./src/sidebar')

module.exports = {
  "title": "leezozz-blog",
  "description": "我的博客，日常记录",
  "dest": "public",
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
        "text": "js",
        "icon": "reco-blog",
        "items": [
          {
            "text": "函数式编程",
            "link": "/js/一、函数式编程范式/1. 函数式编程.md"
          },
          {
            "text": "ECMAScript 新特性",
            "link": "/js/二、ECMAScript 新特性/1. xxx.md"
          }
        ]
      },
      {
        "text": "vue",
        "icon": "reco-document",
        "items": [
          {
            "text": "vue",
            "link": "/vue/一、vue-router/"
            // 1. 函数式编程.md
          }
        ]
      },
      {
        "text": "vue-router",
        "icon": "reco-three",
        "items": [
          {
            "text": "vue",
            "link": "/vue-router"
            // 1. 函数式编程.md
          }
        ]
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "GitHub",
        "icon": "reco-message",
        "link": "https://github.com/leezozz/leezozz-blog.git",
      }
    ],
    "sidebar": {
      "/js/一、函数式编程范式/": getSideBar('js', '一、函数式编程范式'),
      "/js/二、ECMAScript 新特性/": getSideBar('js', '二、ECMAScript 新特性')
      // "/js/一、函数式编程范式/": [
      //   '1. 函数式编程',
      //   '2. 高阶函数-函数作为参数、返回值'
      // ]
      
    },
    "type": "blog",
    "blogConfig": {
      // "category": {
      //   "location": 2,
      //   "text": "Category"
      // },
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