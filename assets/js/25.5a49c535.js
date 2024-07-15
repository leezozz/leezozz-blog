(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{373:function(t,a,s){t.exports=s.p+"assets/img/broswer-operation.1cde2745.png"},374:function(t,a,s){t.exports=s.p+"assets/img/webkit-remark.25b6f2ed.png"},375:function(t,a,s){t.exports=s.p+"assets/img/webkit-opreate.112d0363.png"},376:function(t,a,s){t.exports=s.p+"assets/img/dom-update.499b8fc9.png"},377:function(t,a,s){t.exports=s.p+"assets/img/dom-tree-nodes.baa49c8c.png"},479:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f2f6816ce3e45cabcfafa76aecd26be~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"webkit"}})]),t._v(" "),a("h2",{attrs:{id:"基础概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念：")]),t._v(" "),a("ul",[a("li",[t._v("虚拟DOM出现之前，最常用的是jQuery直接操作真实DOM")]),t._v(" "),a("li",[t._v("jQuery的主要工作是提供原生DOM操作的统一实现（另外还有对原生js的增强，如ajax、动画等）")]),t._v(" "),a("li",[t._v("那么直接操作真实DOM有什么问题呢？ 这就要从浏览器内核的构成说起了\n"),a("img",{attrs:{src:s(373),alt:"浏览器内核模块"}})])]),t._v(" "),a("p",[t._v("首先来看左侧的深色区域，它是webkit内核的WebCore层。该区域左下角的HTML模块代表HTML引擎，作用是解析HTML文档。当浏览器下载了一个HTML文档后，它负责将该文档解析成DOM树，也就是由一个个标签节点构成的文档树。最终解析出来的DOM树将交由它右侧的DOM模块负责管理，而这个DOM树就是我们平常所说的真实DOM。")]),t._v(" "),a("p",[t._v("在深色区域的右侧紧邻着的是JavaScriptCore，即webkit默认的JavaScript引擎（在Chrome和chromium中它被替换为了V8），它负责执行JavaScript代码。")]),t._v(" "),a("p",[t._v("JavaScript具备操作DOM树的能力。但是从浏览器内核的结构可以看到，DOM树由DOM模块负责管理，在浏览器内核中单独占有一块内存，而这块内存与JavaScript引擎所管理的内存并无直接关系。换句话说，JavaScript引擎不能直接操作真实DOM树。")]),t._v(" "),a("p",[t._v("为了给JavaScript提供操作DOM树的能力，浏览器在全局对象window上为JavaScript封装了一个document对象，然后在该对象上提供了大量的DOM操作接口，这些接口都是用C++实现的。")]),t._v(" "),a("p",[t._v("在浏览器控制台查看document.getElementById，可以看到它的函数体是{ [native code] }，这表示它是一个用C++编写的函数，因此无法查看具体实现。当我们在调用这个函数时，JavaScript引擎并没有直接与DOM模块交互，而是由浏览器来操作DOM模块，随后再把操作结果返回给JavaScript引擎。这种借助父级模块实现两个同级模块交互的通信方式非常常见。")]),t._v(" "),a("p",[t._v("正是由于JavaScript需要借助浏览器提供的DOM接口才能操作真实DOM，所以操作真实DOM的代价往往是比较大的（这其中还涉及C++与JavaScript数据结构的转换问题）。再加上修改DOM经常导致页面重绘，所以一般来说，DOM操作越多，网页的性能就越差。我们以一个简单的图例来理解这个过程：")]),t._v(" "),a("p",[a("img",{attrs:{src:s(374),alt:"webkit内核"}})]),t._v(" "),a("p",[t._v("有人可能会问，既然DOM操作的代价如此之大，为什么不由JavaScript引擎来管理DOM呢？不要忘了，世界上第一款浏览器诞生于1990年，那时候就已经出现了DOM的原始概念，而JavaScript则直到1995年才诞生。换句话说，DOM的出现早于JavaScript。因此，如果要由JavaScript来管理DOM，那就意味着浏览器内核必须重构。而让浏览器开发者为了一个早期被称为“玩具语言”的JavaScript重构浏览器内核显然是不可能的。不过随着JavaScript的发展，由JavaScript引擎直接管理DOM的构想已经被提上了chromium的计划列表（目前只是定为长期计划，要真正实现还需要相当长的时间）。")]),t._v(" "),a("p",[t._v("所以，截止到目前，如何有效地减少对真实DOM的操作，仍然是前端性能优化的一个关键点。虚拟DOM就是目前较为流行的一个解决方案。")]),t._v(" "),a("h2",{attrs:{id:"虚拟dom的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom的作用"}},[t._v("#")]),t._v(" 虚拟DOM的作用")]),t._v(" "),a("p",[t._v("JavaScript无法直接操作DOM是带来上述性能问题的根源之一（其他原因包括，真实DOM树的体积非常庞大，而且操作它会导致页面重绘）。那么能不能在JavaScript内存中，以js对象的形式也描述一棵DOM树呢？当然可以，这就是我们所说的虚拟DOM树。\n"),a("img",{attrs:{src:s(375),alt:"webkit"}})]),t._v(" "),a("p",[t._v("但是虚拟DOM带来了一个重要的优势，那就是我们可以在完全不访问真实DOM的情况下，掌握DOM的结构，这为框架自动优化DOM操作提供了可能。举例来说，如果我们本打算手动进行三次真实DOM操作，而框架在分析了虚拟DOM的结构后，把这三次DOM操作简化成了一次，这不就带来了性能上的提升吗？再甚者，如果连这一次DOM操作都可以由框架自动完成（自动更新的前提是我们要定义视图和数据的绑定关系），而我们只需要负责处理数据，那么虚拟DOM的价值体现得就更明显了。")]),t._v(" "),a("ul",[a("li",[t._v("React就是这么使用虚拟DOM的。 "),a("br"),t._v("\n当我们使用jsx语法定义一个模板时，React会用它生成一个由JavaScript描述的虚拟DOM树，并将其保存在JavaScript内存中。这个虚拟DOM树还保留了我们在模板中定义的数据和视图的绑定关系，这为React自动根据数据变化更新视图提供了可能。随后当数据发生变化时，React重新生成一个虚拟DOM树，通过对比两个虚拟DOM树的差异，React就可以知道该如何高效地更新视图。接着它就会调用原生的DOM接口，去更新真实DOM。过程大致如下：\n"),a("img",{attrs:{src:s(376),alt:"webkit"}})])]),t._v(" "),a("p",[t._v("对于开发者而言，虚拟DOM的实现是透明的，它只是框架自动高效更新DOM的一种内部解决方案。开发者需要按照框架给定的语法定义数据和视图的绑定关系，随后就只需要关心数据变化（即业务逻辑）即可。")]),t._v(" "),a("p",[t._v("当然了，虚拟DOM并不是解决DOM操作性能问题的唯一解决方案，Vue的响应式系统也是一种重要的解决方案。从某种程度上来说，Vue依靠响应式系统可以实现“精确定点更新”，即直接定位到哪个DOM节点需要更新，而不需要经过虚拟DOM的比对，不过“精确定点更新”的内存代价偏大，因此目前Vue采用了响应式系统和虚拟DOM结合的方式，本文暂不详述。")]),t._v(" "),a("p",[t._v("最后我们来看一下Vue中虚拟DOM树的结构，实际上它就是一个js对象而已，我们以下面的模板为例：")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("“item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("items”")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          itemid: {{ item.id }}\n       "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("对应的虚拟DOM：\n"),a("img",{attrs:{src:s(377),alt:"webkit"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结：")]),t._v(" "),a("p",[t._v("要理解为什么需要虚拟DOM，必须弄清楚JavaScript引擎和DOM模块之间的关系，并体会由这种关系导致的DOM操作的性能问题。虚拟DOM设计的核心就是用高效的js操作，来减少低性能的DOM操作，以此来提升网页性能。")]),t._v(" "),a("p",[t._v("从一定程度上来说，是浏览器的架构问题催生了虚拟DOM，而这个架构问题几乎需要重构浏览器内核才能解决，所以目前虚拟DOM仍广为流行。如果未来的某一天，真实DOM被迁移到JavaScript内存中，虚拟DOM的价值实际上也就不存在了")])])}),[],!1,null,null,null);a.default=e.exports}}]);