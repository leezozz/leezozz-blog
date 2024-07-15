(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{485:function(t,v,s){"use strict";s.r(v);var _=s(2),a=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),v("p",[t._v("Nuxt.js是一个建立在Vue.js上的服务器端渲染框架。它抽象出了管理异步数据、中间件和路由所涉及的大部分复杂配置。它还有助于使用行业标准架构来构造Vue.js应用程序，以构建简单或企业级的Vue.js应用程序。")]),t._v(" "),v("h3",{attrs:{id:"用途"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),v("p",[t._v("Nuxt.js允许你创建许多不同类型的应用程序。下面是用Nuxt.js制作的三个最流行的应用程序。"),v("br")]),t._v(" "),v("ol",[v("li",[t._v("静态生成的页面 "),v("br"),t._v("\n这种类型的网站不需要任何外部内容来源–内容已经嵌入HTML中。这类网站的例子包括作品集、演示和教程网站。")]),t._v(" "),v("li",[t._v("单页应用程序（SPA）"),v("br"),t._v("\n这种前端开发方式从外部API获取动态内容并在客户端显示。大多数JavaScript框架，如React.js、Vue.js、Angular和Ember.js都是单页应用框架。\n更重要的是，SPA的路由系统是通过HTML 5历史API或路由的位置哈希实现的，这让开发者有能力在不刷新整个页面的情况下修改网站的URL。")]),t._v(" "),v("li",[t._v("通用应用程序 "),v("br"),t._v("\n“通用应用程序” 是一个术语，描述了使用服务器端渲染的方法，在客户端浏览器上完全渲染页面之前，在服务器上获取客户端数据。\n服务器端渲染（SSR）是Vue.js中的一个众所周知的问题，因为它涉及到繁琐的配置，要把它做好。\nNuxt.js解决了Vue.js中的SSR问题，这对搜索引擎优化（SEO）很有帮助。Nuxt.js甚至可以扩展Universal应用程序，以适应一个成熟的单片机应用程序，其中前端和后端共享一个代码库。")])]),t._v(" "),v("h3",{attrs:{id:"如何工作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何工作"}},[t._v("#")]),t._v(" 如何工作")]),t._v(" "),v("p",[t._v("当用户访问一个网站时，Nuxt.js的工作方式与服务器端框架的工作方式相同。如果启用了服务器端渲染，每次用户请求页面时都会在服务器上进行渲染，因此需要服务器能够在每次请求时提供页面。另外，如果启用了客户端渲染，它使用JavaScript在浏览器中渲染页面的内容。"),v("br"),t._v("\n这些是Nuxt.js中使用的主要动作和方法："),v("br")]),t._v(" "),v("ul",[v("li",[t._v("nuxtServerInit（动作）：这是第一个生命周期钩子，如果启用了Vuex存储，就会在服务器端调用。它是一个Vuex动作，只在服务器端调用，以预先填充商店，最后，它可以用来调度Vuex商店的其他动作。")]),t._v(" "),v("li",[t._v("validate() （函数）：validate方法在渲染页面组件之前被调用。它对于验证页面组件的动态参数很有用。")]),t._v(" "),v("li",[t._v("asyncData()方法用于获取数据并在服务器端渲染数据，而fetch()方法则用于在渲染页面前填充存储。"),v("br"),t._v("\n例如，当Nuxt.js网站收到初始页面访问时，它会呼出 nuxtServerInit 动作来更新Vuex状态（如果在Vuex商店中定义）。否则，如果 nuxtServerInit 没有被定义，它就会转到另一个阶段。")])]),t._v(" "),v("p",[t._v("接下来，它按照这个顺序查找中间件。首先，它检查 nuxt.config.js 文件中是否有任何全局中间件。如果它被定义，它将在检查 layout 页面的中间件之前被执行。最后，它将执行单个页面的中间件，包括页面的子件。")]),t._v(" "),v("p",[t._v("在按顺序执行所有的中间件后，它将检查路由是否是动态的，并执行创建和验证的 validate() 方法。")]),t._v(" "),v("p",[t._v("接下来，它调用页面的 asyncData() 方法，在服务器端获取和渲染数据，然后再调用 fetch() 方法，在客户端填充Vuex商店。")]),t._v(" "),v("p",[t._v("到这一步，页面应该有所有的数据和内容来显示一个合适的网页。然后，该页面由Nuxt.js引擎渲染并显示给访问者，完成了整个过程。")]),t._v(" "),v("h3",{attrs:{id:"nuxt-js优势"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-js优势"}},[t._v("#")]),t._v(" Nuxt.js优势")]),t._v(" "),v("ol",[v("li",[t._v("服务端渲染（SSR）"),v("br"),t._v("\nNuxt.js 内置了服务器端渲染的支持，这意味着你可以在服务器端预渲染页面内容，提供更快的初始加载速度和更好的SEO。这对于需要搜索引擎优化和性能优化的应用非常有帮助。")]),t._v(" "),v("li",[t._v("自动生成路由 "),v("br"),t._v("\nNuxt.js 可以根据项目结构自动为你生成路由配置，这样你不必手动编写每个页面的路由。这极大地简化了项目的维护和扩展。")]),t._v(" "),v("li",[t._v("集成Vuex和Vue Router "),v("br"),t._v("\nNuxt.js 集成了 Vuex（状态管理库）和 Vue Router（路由库），使得在项目中使用这些工具更加方便。")]),t._v(" "),v("li",[t._v("静态站点生成 (SSG) "),v("br"),t._v("\nNuxt.js 支持生成静态站点，将你的应用预渲染成一组静态文件，这对于一些内容较少且不需要实时数据的网站非常有用。")]),t._v(" "),v("li",[t._v("中间件支持 "),v("br"),t._v("\nNuxt.js 支持中间件，使得你可以在路由导航之前运行一些逻辑，例如身份验证、数据加载等。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);