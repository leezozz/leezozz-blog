const { sideBarConfig }  = require('./src/sideBarData')
const { sideBarFilter }  = require('./src/sideBarFilter')
const { navList }  = require('./src/navList')

// 设置根路径
// const rootPath = '/Users/admin/Documents/work/vue3/leezozz-blog/js'

console.log('侧边栏数据：', sideBarFilter(sideBarConfig))




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
    // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
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
    "nav": navList,
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
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最近更新时间",
    "author": "leezozz",
    // 头像
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2022"
  },
  "markdown": {
    // 是否显示代码块左侧行数
    "lineNumbers": true
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",{
        audios: [
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',
          //   artist: '咖啡少年',
          //   url: '/bgm/1.mp3',
          //   cover: '/bgm/1.jpg'
          // },
          // 网络文件示例
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]  
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'blackCat', 'whiteCat', 'miku',  'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko',  'z16'
        ],
        clean: true,
        // messages: { 
        //   welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        // },
        messageStyle: { right: '60px', bottom: '290px' },
        width: 130,
        height: 200
      }
    ],
  ]
}