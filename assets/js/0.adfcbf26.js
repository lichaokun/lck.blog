(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),n("p",[t._v('简单理解是将组件或页面通过服务器生成html字符串，再发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。')]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),n("p",[t._v("实际项目中还需要考虑到路由，数据，组件化等等，所以服务端渲染不是只用一个vue-server-renderer就能解决问题，所以这里需要官方构建图。\n"),n("img",{attrs:{src:t.$withBase("/images/vue/vue-ssr.png")}}),t._v("\n从上图中可以看出，是通过webpack将source源码打包成两份配置：")]),t._m(7)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"学习vue服务端渲染-ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习vue服务端渲染-ssr","aria-hidden":"true"}},[this._v("#")]),this._v(" 学习Vue服务端渲染(SSR)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-什么是ssr服务端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是ssr服务端渲染","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 什么是ssr服务端渲染")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("优缺点")]),s("ul",[s("li",[this._v("优点: 与传统SPA相比，更好的 SEO，减少页面首屏加载时间")]),s("li",[this._v("缺点: 服务端渲染对服务器的压力比较大，需要通过node去渲染页面然后传递给客户端，浏览器特定的代码只能在某些生命周期钩子函数中使用")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-跑一个最简单的demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-跑一个最简单的demo","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 跑一个最简单的demo")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("1. 创建一个ssr-demo文件夹并且初始化\n"),n("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ssr-demo "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" init\n\n2. 安装依赖\n"),n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" vue express vue-server-renderer -D\n\n3. 新建一个index.js，如下写完后在终端运行node index.js,，然后打开localhost:8080即可\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Vue "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'express'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderer "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'vue-server-renderer'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createRenderer")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'*'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("writeHead")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("200")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'text/html;charset=utf-8'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      url"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" req"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    template"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`<div>访问的 URL 是： {{ url }}</div>`")])]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  renderer"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("renderToString")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("status")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("500")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Internal Server Error'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("end")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`\n      <!DOCTYPE html>\n      <html>\n        <head><title>Hello</title></head>\n        <body>")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("html"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("</body>\n      </html>\n    `")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("8080")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-官方构建图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-官方构建图","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 官方构建图")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Server Bundle：给服务端用的，服务端通过 bundleRenderer 将 bundle 生成 html 给浏览器用")]),s("li",[this._v("Client Bundle：给浏览器用的，通过 Client Bundle 来进行与后期的浏览器数据交互等工作")])])}],!1,null,null,null);s.default=e.exports}}]);