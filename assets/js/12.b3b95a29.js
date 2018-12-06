(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(t,s,n){"use strict";n.r(s);var a=n(0),c=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("周末空闲弄了个域名，准备搭配github撸个bolg玩玩，刚好在微博看到尤大大弄了个vuepress写文档，\n这是一个基于Vue SSR的静态站生成器，本来是写文档的，但是我发现用来撸博客也行,于是我偷懒用的vuepress的源码来撸。")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),n("p",[t._v("把源码的pageage.json中一些必要的字段复制到自己的pageage.json中,然后复制其他文件夹进来。")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),n("p",[t._v("配置.vuepress/config.js,然后自己写对应的文章，每个md就是一个文章，同样再sidebar中设置对应的md即可")]),t._m(11),n("p",[t._v("更详细的配置可在"),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress官网"),n("OutboundLink")],1),t._v("查看")]),t._m(12),t._m(13),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"用vuepress撸blog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用vuepress撸blog","aria-hidden":"true"}},[this._v("#")]),this._v(" 用vuepress撸blog")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-clone-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-vuepress","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. clone vuepress")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/vuejs/vuepress.git\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-创建文件夹并初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建文件夹并初始化","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 创建文件夹并初始化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" blog "),s("span",{attrs:{class:"token operator"}},[this._v("&&")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" init \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-拷贝文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-拷贝文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 拷贝文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),s("ul",[s("li",[this._v("保持自己的node.js版本>=8")]),s("li",[this._v("可以修改json中字段，比如repository.url可以修改成自己的github源")]),s("li",[this._v("其他文件自行修改或删除")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-安装依赖并运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装依赖并运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 安装依赖并运行")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-编辑docs文件和配置config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-编辑docs文件和配置config-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 编辑docs文件和配置config.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("# docs的目录结构：")]),this._v("\n├─lib // 页面源码\n├─.vuepress\n│  ├─components // 一些组件\n│  ├─public //  存放图片等静态资源\n│  │ └─icons // 图标\n│  └─config.js // 页面配置文件\n├─config // 英文文档的配置参考内容\n├─default-theme-config //英文文档的默认主题配置内容\n├─guide // 英文文档的指南内容\n└─zh // 中文文档目录\n│  ├─config // 中文文档配置\n│  ├─default-theme-config // 中文文档默认主题\n│  └─guide // 中文文档指南\n└─README.md // 首页配置文件\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 设置输出目录")]),t._v("\n    dest"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vuepress'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 语言，如果需要默认中文的替换zh的，然后下面themeConfig中不用localles，用nav和sidebar配置即可")]),t._v("\n    locales"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            lang"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'en-US'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'VuePress'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            description"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Vue-powered Static Site Generator'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'/zh/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            lang"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'zh-CN'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'VuePress'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            description"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Vue 驱动的静态网站生成器'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 一个pwa和页面图标")]),t._v("\n    head"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'link'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'icon'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`/logo.png`")])]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'link'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'manifest'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/manifest.json'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'meta'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'theme-color'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'#3eaf7c'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'meta'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'apple-mobile-web-app-capable'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'yes'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'meta'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'apple-mobile-web-app-status-bar-style'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'black'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'link'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'apple-touch-icon'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`/icons/apple-touch-icon-152x152.png`")])]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'link'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'mask-icon'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/icons/safari-pinned-tab.svg'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'#3eaf7c'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'meta'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'msapplication-TileImage'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/icons/msapplication-icon-144x144.png'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'meta'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'msapplication-TileColor'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'#000000'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    theme"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 配置默认config")]),t._v("\n    themeConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// github导航链接,可以设置成自己的")]),t._v("\n        repo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'vuejs/vuepress'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        editLinks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        docsDir"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'docs'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        locales"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 默认进入根目录是英文，对应根目录三个文件夹中的md")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                label"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'English'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                selectText"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Languages'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                editLinkText"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Edit this page on GitHub'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                lastUpdated"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Last Updated'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                nav"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Guide'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/guide/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Config Reference'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/config/'")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Default Theme Config'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/default-theme-config/'")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Changelog'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                sidebar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{attrs:{class:"token string"}},[t._v("'/guide/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("genSidebarConfig")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Guide'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 中文对应zh文件夹下面的三个文档下面的md")]),t._v("\n            "),n("span",{attrs:{class:"token string"}},[t._v("'/zh/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                label"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'简体中文'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                selectText"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'选择语言'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                editLinkText"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'在 GitHub 上编辑此页'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                lastUpdated"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'上次更新'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                nav"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'指南'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/zh/guide/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'配置'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/zh/config/'")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'默认主题'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/zh/default-theme-config/'")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Changelog'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'")]),t._v("\n                    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                sidebar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{attrs:{class:"token string"}},[t._v("'/zh/guide/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("genSidebarConfig")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'指南'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 导出文件里面对应的md")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("genSidebarConfig")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            collapsable"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            children"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{attrs:{class:"token string"}},[t._v("''")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token string"}},[t._v("'getting-started'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token string"}},[t._v("'basic-config'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token string"}},[t._v("'assets'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token string"}},[t._v("'markdown'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token string"}},[t._v("'using-vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token string"}},[t._v("'custom-themes'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token string"}},[t._v("'i18n'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_6-构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-构建","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 构建")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),s("p",[this._v("记得注释源码中 lib/default-theme/sidebar.vue 中的广告哦！")])])}],!1,null,null,null);c.options.__file="README.md";s.default=c.exports}}]);