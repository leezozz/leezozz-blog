(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{506:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[s._v("#")]),s._v(" webpack")]),s._v(" "),a("ol",[a("li",[s._v("本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器（module bundler）")]),s._v(" "),a("li",[s._v("Vue 脚手架工具 vue-cli 使用 webpack 进行打包，开发时可以启动本地开发服务器，实时预览。 因为需要对整个项目文件进行打包，开发服务器启动缓慢。")]),s._v(" "),a("li",[s._v("而对于开发时文件修改后的热更新 HMR 也存在同样的问题。")]),s._v(" "),a("li",[s._v("Webpack的热更新会以当前修改的文件为入口重新 build 打包，所有涉及到的依赖也都会被重新加载一次。")])]),s._v(" "),a("p",[s._v("webpack根据webpack.config.js中的入口文件，在入口文件里识别模块依赖，不管这里的模块依赖是用CommonJS写的，还是ES6 Module规范写的，webpack会自动进行分析，并通过转换、编译代码，打包成最终的文件。最终文件中的模块实现是基于webpack自己实现的webpack_require（es5代码），所以打包后的文件可以跑在浏览器上。")]),s._v(" "),a("p",[s._v("同时以上意味着在webapck环境下，你可以只使用ES6 模块语法书写代码（通常我们都是这么做的），也可以使用CommonJS模块语法，甚至可以两者混合使用。因为"),a("strong",[s._v("从webpack2开始，内置了对ES6、CommonJS、AMD 模块化语句的支持")]),s._v("，webpack会对各种模块进行语法分析，并做转换编译。")]),s._v(" "),a("h3",{attrs:{id:"webpack打包原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包原理"}},[s._v("#")]),s._v(" webpack打包原理")]),s._v(" "),a("p",[s._v("项目中散落着各种代码以及资源文件，这些代码、资源文件都可以看做是项目中的模块，webpack会根据我们的配置找到一个文件，作为入口文件。")]),s._v(" "),a("p",[s._v("一般是main.js文件，顺着这个文件中的代码，代码中出现的import和require之类的语句，解析推断出这个文件所依赖的资源模块，分别解析每个模块的依赖，最后形成每个项目中所有用到的文件之间的依赖关系树。")]),s._v(" "),a("p",[s._v("有了这个依赖关系树后，webpack会遍历，或者更准确地说：递归这个依赖关系树，找到每个节点对应的资源文件，然后根据配置文件中的loader配置，交给加载器去加载这个模块。")]),s._v(" "),a("p",[s._v("最后将加载的结果放入bundle.js，也就是打包结果中，从而实现整个项目的打包。")]),s._v(" "),a("h3",{attrs:{id:"使用loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用loader"}},[s._v("#")]),s._v(" 使用loader")]),s._v(" "),a("ul",[a("li",[s._v("webpack 可以使用 loader 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源。")]),s._v(" "),a("li",[s._v("loader是webpack中一个非常核心的概念, loader有很多种, 不同的内容需要使用不同的loader来加载")]),s._v(" "),a("li",[s._v("首先安装对应的 loader：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loader ts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loader\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("指示 webpack 对每个 "),a("code",[s._v(".css")]),s._v(" 使用 css-loader以及对所有 "),a("code",[s._v(".ts")]),s._v(" 文件使用 ts-loader")]),s._v(" "),a("li",[s._v("将ES6转换成ES5,将scss, less转成css")])]),s._v(" "),a("h3",{attrs:{id:"loader相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader相关配置"}},[s._v("#")]),s._v(" loader相关配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// css-loader: 只负责加载css文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// style-loader: 负责将样式加载到Dom中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在解析css的过程中, 先用到的是css-loader, 然后使用到的是style-loader")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 但loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)，所以use中的顺序是不能改变的")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v(".css$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [style-loader](/loaders/style-loader)")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [css-loader](/loaders/css-loader)")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("modules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [sass-loader](/loaders/sass-loader)")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass-loader'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("p",[s._v("基于构建工具webpack")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("vue create 项目名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("例如：该项目有100多个.vue文件，修改了其中一个，Webpack的热更新会以当前修改的文件为入口重新build打包，其他的页面也会重新更新打包，所有涉及到的依赖也都会被重新加载一次（开发环境下，编译慢）。")]),s._v(" "),a("h2",{attrs:{id:"vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[s._v("#")]),s._v(" vite")]),s._v(" "),a("p",[s._v("是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：")]),s._v(" "),a("ul",[a("li",[s._v("一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）")]),s._v(" "),a("li",[s._v("一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源")])]),s._v(" "),a("h3",{attrs:{id:"vite生产环境为什么选择rollup做构建工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite生产环境为什么选择rollup做构建工具"}},[s._v("#")]),s._v(" Vite生产环境为什么选择Rollup做构建工具")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Rollup是基于"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ES6")]),s._v("的JavaScript打包工具。\n它将小文件打包成一个大文件或者更复杂的库和应用，打包既可用于浏览器和Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js使用。 \nRollup最显著的地方就是能让打包文件体积很小。\n相比其他JavaScript打包工具，Rollup总能打出更小，更快的包。\n因为Rollup基于"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ES6")]),s._v("模块，比Webpack和Browserify使用的CommonJS模块机制更高效。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),a("ul",[a("li",[s._v("因为没有打包工作要做，所以服务器冷启动非常快【快速的冷启动】")]),s._v(" "),a("li",[s._v("代码是按需编译的，因此只有在当前页面上实际导入的代码才会编译，不必等到整个应用程序打包后才开始开发，这对于有几十个页面的应用程序来说是一个很大的不同【真正按需编译】")]),s._v(" "),a("li",[s._v("热模块更新（HMR）的性能与模块总数解耦，这使得无论应用程序有多大，HMR都能保持快速【即时热模块更新】")])]),s._v(" "),a("h3",{attrs:{id:"创建项目-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目-2"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("Vite 需要 Node.js 版本 14.18+，16+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。")])]),a("p",[a("strong",[s._v("默认版本是vue3")])]),s._v(" "),a("p",[s._v("使用npm")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm create vite@latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用yarn")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("yarn create vite@latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用pnpm")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("pnpm create vite@latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);