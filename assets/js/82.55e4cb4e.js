(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{489:function(t,s,a){"use strict";a.r(s);var v=a(2),e=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-web性能介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-web性能介绍"}},[t._v("#")]),t._v(" 1.Web性能介绍")]),t._v(" "),s("p",[t._v("Web性能是客观的衡量标准，是用户对加载时间和运行时的直观体验。")]),t._v(" "),s("ul",[s("li",[t._v("打开速度")]),t._v(" "),s("li",[t._v("动画效果")]),t._v(" "),s("li",[t._v("表单提交")]),t._v(" "),s("li",[t._v("列表滚动")]),t._v(" "),s("li",[t._v("页面切换\n...")])]),t._v(" "),s("h2",{attrs:{id:"_2-优化方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-优化方案"}},[t._v("#")]),t._v(" 2.优化方案")]),t._v(" "),s("ul",[s("li",[t._v("从发出请求到收到响应的优化，比如DNS查询、HTTP长连接、HTTP2、HTTP压缩、HTTP缓存等")]),t._v(" "),s("li",[t._v("关键渲染路径优化，比如是否存在不必要的重绘和回流")]),t._v(" "),s("li",[t._v("加载过程的优化，比如延迟加载，是否有不需要在首屏展示的非关键信息，占用了页面加载的时间")]),t._v(" "),s("li",[t._v("资源优化，比如图片、视屏等不同的格式类型会有不同的使用场景，在使用的过程中是否恰当")]),t._v(" "),s("li",[t._v("构件优化，比如压缩合并、基于webpack构件优化方案等\n...")])]),t._v(" "),s("h2",{attrs:{id:"使用chrome-devtools测试性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用chrome-devtools测试性能"}},[t._v("#")]),t._v(" 使用Chrome DevTools测试性能")]),t._v(" "),s("p",[s("strong",[t._v("网络请求阻止")])]),t._v(" "),s("ul",[s("li",[t._v("打开方式：ctrl+shift+p -> show networl request blocking")]),t._v(" "),s("li",[t._v("启用网络请求阻止")]),t._v(" "),s("li",[t._v("添加组织规则")])]),t._v(" "),s("p",[s("strong",[t._v("Coverage面板")]),t._v(" "),s("br"),t._v("\n通过Coverage面板监控并统计出网站应用运行过程中代码执行的覆盖率 "),s("br")]),t._v(" "),s("ul",[s("li",[t._v("打开方式：ctrl+shift+p -> 搜索coverage（覆盖） -> 点击start instrumenting coverage and reload page\n统计结果包括：文件的字节大小、执行过程中已覆盖的代码字节数，以及可视化的覆盖率条形图")])]),t._v(" "),s("p",[s("strong",[t._v("Memory面板（内存面板）")])]),t._v(" "),s("ul",[s("li",[t._v("打开方式：ctrl+shift+p -> memory（内存）-> 点击显示内存")])]),t._v(" "),s("p",[s("strong",[t._v("Performance面板（性能面板）")])]),t._v(" "),s("p",[s("strong",[t._v("FPS计数器")]),s("br"),t._v("\n可在页面运行时提供对 FPS 的实时估计。")]),t._v(" "),s("ul",[s("li",[t._v("打开方式：ctrl+shift+p -> FPS")])]),t._v(" "),s("p",[s("strong",[t._v("Performance monitor")]),s("br"),t._v("\n包括：CPU 占用率、JavaScript 内存使用大小、内存中挂的 DOM 节点数、JavaScript 事件监听次数及页面发生重绘与重排的处理时间等信息。")]),t._v(" "),s("h2",{attrs:{id:"前端页面的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端页面的生命周期"}},[t._v("#")]),t._v(" 前端页面的生命周期")]),t._v(" "),s("p",[t._v("问题：在浏览器地址栏输入一个网址到页面渲染出来，中间都经历了什么"),s("br")]),t._v(" "),s("ol",[s("li",[t._v("输入地址（例如： https://www.example.com），浏览器解析URL（浏览器解析输入的URL，将其分为不同的部分，如协议（https）、域名（www.example.com）、路径（/）、查询参数等）")]),t._v(" "),s("li",[t._v("DNS解析（浏览器需要将域名转换为IP地址，这个过程称为DNS解析）")])]),t._v(" "),s("ul",[s("li",[t._v("浏览器缓存：首先，浏览器会检查其缓存中是否有对应的IP地址")]),t._v(" "),s("li",[t._v("操作系统缓存：如果浏览器缓存中没有，浏览器会查询操作系统缓存")]),t._v(" "),s("li",[t._v("本地DNS服务器：如果操作系统缓存中也没有，操作系统会查询配置的本地DNS服务器（通常是ISP提供的）")]),t._v(" "),s("li",[t._v("递归查询：本地DNS服务器如果没有缓存，会进行递归查询，从根DNS 服务器开始，逐级查询顶级域名服务器、权威DNS服务器，直到找到对应的IP地址")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("建议TCP链接：TCP三次握手")])]),t._v(" "),s("ul",[s("li",[t._v("SYN：浏览器发送一个 SYN 包到服务器，表示请求建立连接")]),t._v(" "),s("li",[t._v("SYN-ACK：服务器收到 SYN 包后，返回一个 SYN-ACK 包，表示同意连接")]),t._v(" "),s("li",[t._v("ACK：浏览器收到 SYN-ACK 包后，发送一个 ACK 包，表示连接建立成功")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("SSL/TLS四次握手（只有https才有这一步）")]),t._v(" "),s("li",[t._v("浏览器发送HTTP/HTTPS请求")])]),t._v(" "),s("ul",[s("li",[t._v("建立TCP连接后，浏览器发送HTTP或HTTPS请求到服务器。对于HTTPS，还包括建立TLS/SSL加密连接的步骤：")]),t._v(" "),s("li",[t._v("ClientHello：客户端发送 ClientHello 消息，包含支持的加密算法等信息。")]),t._v(" "),s("li",[t._v("ServerHello：服务器响应 ServerHello 消息，选择加密算法，并发送服务器证书。")]),t._v(" "),s("li",[t._v("证书验证：浏览器验证服务器证书的有效性。")]),t._v(" "),s("li",[t._v("密钥交换：客户端和服务器协商对称密钥，用于后续加密通信。")]),t._v(" "),s("li",[t._v("握手完成：双方确认加密参数，开始加密通信。")])]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("服务器响应请求并返回数据")])]),t._v(" "),s("ul",[s("li",[t._v("路由处理：根据请求路径，确定处理逻辑。")]),t._v(" "),s("li",[t._v("数据库查询：如有需要，查询数据库获取数据。")]),t._v(" "),s("li",[t._v("逻辑处理：根据业务逻辑生成响应内容。")]),t._v(" "),s("li",[t._v("返回响应：服务器生成响应头和响应体，并发送回浏览器。")])]),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[t._v("浏览器接受响应并解析")])]),t._v(" "),s("ul",[s("li",[t._v("解析HTTP响应头：获取状态码、内容类型、缓存控制等信息。")]),t._v(" "),s("li",[t._v("解析HTML：将HTML文本解析为DOM树。")]),t._v(" "),s("li",[t._v("解析CSS：将CSS文本解析为CSSOM树，并应用到DOM树中。")]),t._v(" "),s("li",[t._v("解析JavaScript：解析并执行JavaScript代码，可能会操作DOM树和CSSOM树。")]),t._v(" "),s("li",[t._v("解析图片、字体等资源：根据HTML和CSS内容，发送请求加载外部资源。")])]),t._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[t._v("页面渲染\n浏览器将DOM树和CSSOM树结合起来，构建渲染树。渲染树包含了所有需要显示的节点及其样式信息")])]),t._v(" "),s("h2",{attrs:{id:"dns解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns解析"}},[t._v("#")]),t._v(" DNS解析")]),t._v(" "),s("p",[t._v("DNS解析是将人类容易记忆的域名（如www.example.com）转换为计算机可识别的IP（如192.0.2.1）地址。")]),t._v(" "),s("p",[t._v("DNS-prefetch（DNS预获取）是尝试在请求资源之前解析域名。这可能是后面要加载的文件，也可能是用户尝试打开的链接目标。域名解析和内容载入是串行的网络操作，所以这个方式能减少用户的等待时间，提升用户体验。")]),t._v(" "),s("p",[t._v("dns-prefetch 可帮助开发人员掩盖 DNS 解析延迟。 HTML的"),s("code",[t._v("<Link>")]),t._v("元素通过dns-prefetch的rel属性值提供此功能")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://fonts.googleapis.com/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("注意：")]),t._v(" "),s("ol",[s("li",[t._v("dns-prefetch仅对"),s("strong",[t._v("跨域")]),t._v("域上的DNS查找有效，因此避免使用它来指向您的站点或域。这是因为，到浏览器看到提示时，您站点域背后的IP已经被解析")]),t._v(" "),s("li",[t._v("dns-prefetch需慎用，多页面重复DNS预解析会增加重复DNS查询次数")]),t._v(" "),s("li",[t._v("默认情况下浏览器会对页面中和当前域名（正在浏览网页的域名）不在同一个域的域名进行预获取，并且缓存结果，这就是隐式的 DNS Prefetch。如果想对页面中没有出现的域进行预获取，那么就要使用显示 DNS Prefetch 了。")])]),t._v(" "),s("p",[s("strong",[t._v("更多DNS解析优化")]),t._v(" "),s("br")]),t._v(" "),s("ol",[s("li",[t._v("延长DNS缓存时间")]),t._v(" "),s("li",[t._v("尽可能使用A或AAAA记录代替CNAME")]),t._v(" "),s("li",[t._v("使用CDN加速域名")]),t._v(" "),s("li",[t._v("自己搭建DNS服务")])]),t._v(" "),s("p",[s("strong",[t._v("清除DNS缓存")]),t._v(" "),s("br")]),t._v(" "),s("ol",[s("li",[t._v("清除浏览器DNS缓存")])]),t._v(" "),s("ul",[s("li",[t._v("清除DNS缓存：chrome://net-internals/#dns")]),t._v(" "),s("li",[t._v("有时候也需同时清除套接字缓存池：chrome://net-internals/#sockets")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("清除系统DNS缓存")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在windows中查看DNS缓存记录")]),t._v("\nipconfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("displaydns\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在windows中清除DNS缓存记录")]),t._v("\nipconfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("flushdns\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在macOS中清除DNS缓存记录")]),t._v("\nsudo killall "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HUP")]),t._v(" mDNSResponder\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"http长连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http长连接"}},[t._v("#")]),t._v(" HTTP长连接")]),t._v(" "),s("h3",{attrs:{id:"短连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#短连接"}},[t._v("#")]),t._v(" 短连接")]),t._v(" "),s("p",[t._v("HTTP协议的初始版本中，每进行一次HTTP通信就要断开一次TCP连接。每次的请求都会造成无谓的TCP连接建立和断开，增加通信的开销。")]),t._v(" "),s("p",[t._v("为了解决这个问题，有些浏览器在请求时，用了一个非标准的Connection字段")]),t._v(" "),s("div",{staticClass:"language-HTTP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("keep-alive")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这个字段要求服务器不要关闭TCP连接，以便其他请求复用。服务器同样回应这个字段。")]),t._v(" "),s("div",{staticClass:"language-HTTP line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("keep-alive")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("一个可复用的TCP连接就建立了，直到客户端或服务器主动关闭连接。但是，这不是标准字段，不同实现的行为可能不一致，因此不是根本的解决办法。")]),t._v(" "),s("h3",{attrs:{id:"长连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#长连接"}},[t._v("#")]),t._v(" 长连接")]),t._v(" "),s("p",[t._v("1997年1月，HTTP/1.1版本发布，只比1.0版本晚了半年。它进一步完善了HTTP协议，直到现在还是最流行的版本。 "),s("br"),t._v("\nHTTP 1.1 版的最大变化，就是引入了持久连接（HTTP Persistent Connections），即TCP连接默认不关闭，可以被多个请求复用，不用声明Connection: keep-alive。 "),s("br"),t._v("\n持久连接的好处在于减少了TCP连接的重复建立和断开所造成的额外开销，减轻了服务器端的负载。另外，减少开销的那部分时间，使HTTP请求和响应能够更早的结束，这样Web页面的显示速度也就相应提高了。 "),s("br"),t._v("\n客户端和服务器发现对方一段时间没有活动，就可以主动关闭连接。不过，规范的做法是，客户端在最后一个请求时，发送Connection: close，明确要求服务器关闭TCP连接。 "),s("br"),t._v("\n目前，对于同一个域名，大多浏览器允许同时建立6个持久连接。")]),t._v(" "),s("h2",{attrs:{id:"http2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" HTTP2")]),t._v(" "),s("p",[t._v("HTTP/1.1版的头信息肯定是文本（SACII编码），数据体可以是文本，也可以是二进制。HTTP2/则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为“帧”：头信息帧和数据帧。 "),s("br"),t._v("\nHTTP/2是对HTTP/1.x的改进，旨在提高性能、减少延迟，并提供更高效的传输机制。")]),t._v(" "),s("ol",[s("li",[t._v("多工 "),s("br"),t._v("\nHTTP/2复用TCP连接，"),s("strong",[t._v("在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，而且不用按照顺序一一对应")]),t._v("，这样就避免了“队头堵塞”。 "),s("br"),t._v("\n举例来说，在一个TCP连接里面，服务器同时收到了A请求和B请求，于是先回应A请求，结果发现处理过程非常耗时，于是就发送A请求已经处理好的部分， 接着回应B请求，完成后，再发送A请求剩下的部分。 "),s("br"),t._v("\n这样双向的、实时的通信，就叫做多工。 "),s("br")]),t._v(" "),s("li",[t._v("数据流 "),s("br"),t._v("\n因为HTTP/2的数据包是不按顺序发送的，同一个连接里面连续的数据包，可能属于不同的回应。因此，必须要对数据包做标记，指出它属于哪个回应。 "),s("br"),t._v("\nHTTP/2将每个请求或回应的所有数据包，称为一个数据流（stream）。每个数据流都有一个独一无二的编号。数据包发送的时候，都必须标记数据流ID，用来区分它属于哪个数据流。另外还规定，客户端发出的数据流，ID一律为奇数，服务器发出的，ID为偶数。 "),s("br"),t._v("\n数据流发送到一半的时候，客户端和服务器都可以发送信号（RST_STREAM帧），取消这个数据流。1.1版取消数据流的唯一方法，就是关闭TCP连接。这就是说，HTTP/2可以取消某一次请求，同时保证TCP连接还打开着，可以被其他请求使用。 "),s("br"),t._v("\n客户端还可以指定数据流的优先级。优先级越高，服务器就会越早回应。")]),t._v(" "),s("li",[t._v("头信息压缩 "),s("br"),t._v("\nHTTP 协议不带有状态，每次请求都必须附上所有信息。所以，请求的很多字段都是重复的，比如Cookie和 User Agent，一模一样的内容，每次请求都必须附带，这会浪费很多带宽，也影响速度。 "),s("br"),t._v("\nHTTP/2对这一点做了优化，引入了头信息压缩机制（header compression）。一方面，头信息使用gzip 或compress压缩后再发送；另一方面，客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就提高速度了。")]),t._v(" "),s("li",[t._v("服务器推送 "),s("br"),t._v("\nHTTP/2允许服务器未经请求，主动向客户端发送资源，这叫做服务器推送（server push）。 "),s("br"),t._v("\n常见场景是客户端请求一个网页，这个网页里面包含很多静态资源。正常情况下，客户端必须收到网页后，解析HTML源码，发现有静态资源，再发出静态资源请求。其实，服务器可以预期到客户端请求网页后，很可能会再请求静态资源，所以就主动把这些静态资源随着网页一起发给客户端了。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);