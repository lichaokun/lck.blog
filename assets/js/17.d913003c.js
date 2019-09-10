(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{143:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"_1-认识typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-认识typescript","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 认识TypeScript")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TypeScript和JavaScript的区别")]),a("ol",[a("li",[t._v("TypeScript是一个应用程序级的JavaScript开发语言。（更适合开发大型应用）")]),a("li",[t._v("TypeScript是JavaScript的超集，可以编译成纯JavaScript。")]),a("li",[t._v("TypeScript跨浏览器、跨操作系统、跨主机、且开源。")]),a("li",[t._v("TypeScript遵循JavaScript的语法和语义，所以对于我们前端来说，学习起来并没有太大的难度。")]),a("li",[t._v("TypeScript可以重用JavaScript代码，调用流行的JavaScript库。")]),a("li",[t._v("TypeScript提供了类、模块和接口，更易于构建组件和维护。")])])]),a("h2",{attrs:{id:"_2-开发环境安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开发环境安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 开发环境安装")]),a("ol",[a("li",[t._v("安装node")]),a("li",[t._v("安装typescript包")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" typescript -g\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看ts版本")]),t._v("\ntsc --version \n")])])]),a("h2",{attrs:{id:"_3-helloworld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-helloworld","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. helloWorld")]),a("ol",[a("li",[t._v("初始化项目")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("根目录创建配置文件，可以通过读取它来设置TypeScript编译器的编译参数,与.babelrc和.eslintrc差不多")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建配置文件")]),t._v("\ntsc --init\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("安装@types/node,这个主要是解决模块的声明文件问题")])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @types/node --D\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("创建helloWorld.ts")])]),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" helloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helloWorld"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("使用vscode中任务/运行任务,然后选择tsc：构建-tsconfig.json，生成helloWorld.js")]),a("li",[t._v("在终端中输入node helloWorld.js即可")])])])}],!1,null,null,null);s.default=r.exports}}]);