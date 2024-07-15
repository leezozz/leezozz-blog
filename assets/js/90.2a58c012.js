(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{497:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),s("p",[t._v("vue-router是前端路由，在路由切换的时候，在浏览器端判断当前路由，并加载对应的组件。 "),s("br"),t._v("\nvue-router实现原理【vue2 + vue-router3】参考github仓库："),s("a",{attrs:{href:"https://github.com/leezozz/vue-router-project",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/leezozz/vue-router-project"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"hash模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash模式"}},[t._v("#")]),t._v(" Hash模式")]),t._v(" "),s("ul",[s("li",[t._v("URL中#后面的内容作为路径地址【如果只是#后面的地址改变，不会向服务器发送请求，但是会把这个地址记录在浏览器的历史记录中】")]),t._v(" "),s("li",[t._v("监听hashchange事件")]),t._v(" "),s("li",[t._v("根据当前路由地址找到对应组件重新渲染")]),t._v(" "),s("li",[t._v("它在内部传递的实际 URL 之前使用了一个哈希字符（#）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。不过，它在 SEO 中确实有不好的影响。如果你担心这个问题，可以使用 HTML5（History） 模式。")])]),t._v(" "),s("h3",{attrs:{id:"history模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history模式"}},[t._v("#")]),t._v(" History模式")]),t._v(" "),s("ul",[s("li",[t._v("通过history.pushState()方法改变地址栏")]),t._v(" "),s("li",[t._v("监听popstate事件")]),t._v(" "),s("li",[t._v("根据当前路由地址找到对应组件重新渲染")])]),t._v(" "),s("h3",{attrs:{id:"vue的active-class和exact-active-class的作用和区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的active-class和exact-active-class的作用和区别"}},[t._v("#")]),t._v(" vue的active-class和exact-active-class的作用和区别")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("active-class: 设置 链接激活时使用的 CSS 类名")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("exact-active-class: 配置当链接被精确匹配的时候应该激活的 class")])])]),t._v(" "),s("li",[t._v("区别：router-link 默认情况下的路由是模糊匹配，例如当前路径是 /article/1 那么也会激活。所以当设置 exact-active-class 以后，这个 router-link 只有在当前路由被全包含匹配时才会被激活 exact-active-class 中的 class")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/article"')]),t._v(" active"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"router-active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n当用户访问 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 时会被激活为：\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#/article"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"router-active"')]),t._v(" rel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nofollow"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/article"')]),t._v(" exact"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"router-active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("link"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n当用户访问 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("article"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 时，不会激活这个 link 的 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("：\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#/article"')]),t._v(" rel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nofollow"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("strong",[t._v("History 模式和 Hash 模式都是客户端修改 URL，所以性能相差不大")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Hash 模式，调用 push 方法会先判断当前浏览器是否支持 window.history.pushState 如果直接调用 pushState 改变地址栏，否则的话通过 window.location 改变地址栏")])]),t._v(" "),s("li",[s("p",[t._v("可以通过 this.$router 对象获取到当前路由对象中信息，例如：path、parmas、query 等。 this.$router 中有一个 currentRoute 属性可以用来获取当前路由信息")])]),t._v(" "),s("li",[s("p",[t._v("基于historyAPI的路由无法从url地址栏直接访问指定页面，这个很容易理解，因为url地址栏里输入后回车相当于发送了一次GET请求，那么不带#的路由路径就和普通的API接口是一样的，既然服务端并没有定义这样的接口，那直接访问时出现404页面就很正常了。")])]),t._v(" "),s("li",[s("p",[t._v("单页应用程序中，在history模式下浏览器会向服务器请求这个页面，但是服务器端并不存在这个页面于是就返回404。所以这个时候就需要给服务器端进行配置：除了静态资源以外都需要返回单页应用的index.html。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);