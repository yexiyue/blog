(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{607:function(t,a,s){"use strict";s.r(a);var n=s(9),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("小程序学习笔记")])]),t._v(" "),s("h2",{attrs:{id:"_1-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件"}},[t._v("#")]),t._v(" 1.事件")]),t._v(" "),s("p",[t._v("事件是渲染层到逻辑层的通讯方式。通过事件可以将用户在渲染层产生的行为,反馈到逻辑层进行业务的处理。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/09/Ax4lkW2KQbORw6V.png",alt:"image-20220609211925252"}})]),t._v(" "),s("p",[s("strong",[t._v("2.小程序中常用的事件")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/09/gLZIptDwFY6KzHq.png",alt:"image-20220609212000007"}})]),t._v(" "),s("p",[s("strong",[t._v("3.事件对象的属性列表")])]),t._v(" "),s("p",[t._v("当事件回调触发的时候，会收到一个事件对象event,它的详细属性如下表所示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/09/LNiRk8vnjGZdgwD.png",alt:"image-20220609212245392"}})]),t._v(" "),s("p",[s("strong",[t._v("4.target和currentTarget的区别")])]),t._v(" "),s("p",[t._v("target是触发该事件的"),s("strong",[t._v("源头组件")]),t._v(",而currentTarget则是"),s("strong",[t._v("当前事件所绑定的组件")]),t._v("。举例如下:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/09/D4Se6pW3drGgzjM.png",alt:"image-20220609212737146"}})]),t._v(" "),s("p",[t._v("点击内部的按钮时，点击事件以冒泡的方式向外扩散，也会触发外层view的tap事件处理函数。")]),t._v(" "),s("p",[t._v("此时，对于外层的view来说:")]),t._v(" "),s("ul",[s("li",[t._v("e.target指向的是触发事件的源头组件，因此，e.target 是内部的按钮组件")]),t._v(" "),s("li",[t._v("e.currentTarget 指向的是当前正在触发事件的那个组件，因此，e.currentTarget 是当前的view组件")])]),t._v(" "),s("p",[s("strong",[t._v("5. bindtap的语法格式")])]),t._v(" "),s("p",[t._v("在小程序中，不存在HTML中的onclick鼠标点击事件，而是通过tap事件来响应用户的触摸行为。")]),t._v(" "),s("p",[t._v("①通过bindtap,可以为组件绑定tap触摸事件，语法如下:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("plain")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btnhandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("主要按钮"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("②在页面的js文件中定义对应的事件处理函数，事件参数通过形参event (- 般简写成e)来接收:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注意名字跟bindtap的一样 跟data同级")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btnhandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[s("strong",[t._v("6.在事件处理函数中为data中的数据赋值")])]),t._v(" "),s("p",[t._v("通过调用this.setData(dataObject)方法,可以给页面data中的数据重新赋值，示例如下:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("btnhandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            info"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            math"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("math"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[s("strong",[t._v("7.事件传参")])]),t._v(" "),s("p",[t._v("小程序中的事件传参比较特殊，不能在绑定事件的同时为事件处理函数传递参数。例如，下 面的代码将不能正常工作:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pr imary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("btnHandler(123)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("事件传参"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("因为小程序会把bindtap的属性值,统一当作事件 名称来处理，相当于要调用一个名称为btnHandler(123)的事件处理函数。")]),t._v(" "),s("p",[t._v("可以为组件提供data-"),s("em",[t._v("自定义属性传参,其中")]),t._v("代表的是参数的名字，示例代码如下:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btnHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-info")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{2}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("事件传参"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("最终:")]),t._v(" "),s("ul",[s("li",[t._v("info 会被解析为参数的名字")]),t._v(" "),s("li",[t._v("数值2会被解析为 参数的值")])]),t._v(" "),s("p",[t._v("在事件处理函数中，通过"),s("strong",[t._v("event.target.dataset.参数名")]),t._v("即可获取到具体参数的值，示例代码如下:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warnHandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            info"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("warnmsg\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("warn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("plain")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-warnmsg")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("你不要不识好歹"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("warnHandle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("警告按钮"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("8.bindinput的语法格式")])]),t._v(" "),s("p",[t._v("在小程序中，通过input事件来响应文本框的输入事件,语法格式如下:")]),t._v(" "),s("p",[t._v("①通过bindinput, 可以为文本框绑定输入事件:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v('bindinput-"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v('inputHandler"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("< input>\n")])])]),s("p",[t._v("②在页面的js文件中定义事件处理函数:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inputhandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            info"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-rpx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-rpx"}},[t._v("#")]),t._v(" 2.rpx")]),t._v(" "),s("p",[s("strong",[t._v("rpx (responsive pixel)是微信小程序独有的，用来解决屏适配的尺寸单位。")])]),t._v(" "),s("p",[s("strong",[t._v("2.rpx的实现原理")])]),t._v(" "),s("p",[s("strong",[t._v("rpx的实现原理非常简单:鉴于不同设备屏幕的大小不同,为了实现屏幕的自动适配，rpx 把所有设备的屏幕,在宽度上等分为750份(即:当前屏幕的总宽度为750rpx)。")])]),t._v(" "),s("ul",[s("li",[t._v("在较小的设备 上, 1rpx 所代表的宽度较小")]),t._v(" "),s("li",[t._v("在较大的设备上， 1rp>x 所代表的宽度较大")])]),t._v(" "),s("p",[t._v("小程序在不同设备上运行的时候，会自动把rpx的样式单位换算成对应的像素单位来渲染,从而实现屏幕适配。")]),t._v(" "),s("h2",{attrs:{id:"_3-全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-全局配置"}},[t._v("#")]),t._v(" 3.全局配置")]),t._v(" "),s("p",[t._v("1.全局配置文件及常用的配置项.")]),t._v(" "),s("p",[t._v("小程序根目录下的"),s("strong",[t._v("app.json文件")]),t._v("是小程序的"),s("strong",[t._v("全局配置文件")]),t._v("。常用的配置项如下:")]),t._v(" "),s("p",[t._v("①pages")]),t._v(" "),s("ul",[s("li",[t._v("记录当前小程序所有页面的存放路径")])]),t._v(" "),s("p",[s("strong",[t._v("②window")])]),t._v(" "),s("ul",[s("li",[t._v("全局设置小程序窗口的外观")])]),t._v(" "),s("p",[s("strong",[t._v("③tabBar")])]),t._v(" "),s("ul",[s("li",[t._v("设置小程序 底部的tabBar 效果")])]),t._v(" "),s("p",[t._v("④style")]),t._v(" "),s("ul",[s("li",[t._v("是否启用新版的组件样式")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/10/tRnzI6FbxhVZL4k.png",alt:"image-20220610095412505"}})]),t._v(" "),s("p",[s("strong",[t._v("2.了解window节点常用的配置项")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/10/R3Ls7Uj2TMPSEX4.png",alt:"image-20220610095535695"}})]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/block/block"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/text/text"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/list/list"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/index/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/logs/logs"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"window"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarBackgroundColor"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#2b4b6b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarTitleText"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"红尘散仙"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarTextStyle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"white"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enablePullDownRefresh"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"backgroundTextStyle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dark"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"backgroundColor"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#efefef"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"onReachBottomDistance"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"style"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sitemapLocation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemap.json"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-tabbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-tabbar"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2.tabBar")])]),t._v(" "),s("p",[s("strong",[t._v("1.什么是tabBar")])]),t._v(" "),s("p",[t._v("tabBar是移动端应用常见的页面效果，用于实现多页面的快速切换。小程序中通常将其分为:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("底部tabBar")])]),t._v(" "),s("li",[s("strong",[t._v("顶部tabBar")])])]),t._v(" "),s("p",[t._v("注意:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("tabBar中只能配置最少2个、最多5个tab页签")])]),t._v(" "),s("li",[s("strong",[t._v("当渲染顶部tabBar 时，不显示icon,只显示文本")])])]),t._v(" "),s("p",[s("strong",[t._v("tabBar的6个组成部分")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/10/fklDVvGZ5NnJbI4.png",alt:"image-20220610101945564"}})]),t._v(" "),s("p",[s("strong",[t._v("①backgroundColor: tabBar 的背景色")])]),t._v(" "),s("p",[s("strong",[t._v("②selectedlconPath: 选中时的图片路径")])]),t._v(" "),s("p",[s("strong",[t._v("③borderStyle: tabBar. 上边框的颜色")])]),t._v(" "),s("p",[s("strong",[t._v("④iconPath: 未选中时的图片路径")])]),t._v(" "),s("p",[s("strong",[t._v("⑤selectedColor: tab. 上的文字选中时的颜色")])]),t._v(" "),s("p",[s("strong",[t._v("⑥color: tab. 上文字的默认(未选中)颜色")])]),t._v(" "),s("p",[s("strong",[t._v("3.tabBar节点的配置项")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/10/NfYtWBCAes26uyT.png",alt:"image-20220610102607694"}})]),t._v(" "),s("p",[s("strong",[t._v("4.每个tab项的配置选项")])]),t._v(" "),s("img",{attrs:{src:"https://s2.loli.net/2022/06/10/ucEp1CQ8xRfvtDT.png",alt:"image-20220610102802027"}}),t._v(" "),s("h2",{attrs:{id:"_4-页面配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-页面配置"}},[t._v("#")]),t._v(" 4.页面配置")]),t._v(" "),s("p",[s("strong",[t._v("2.页面配置和全局配置的关系.")])]),t._v(" "),s("p",[t._v("小程序中，app.json 中的window节点，可以全局配置小程序中每个页面的窗口表现。")]),t._v(" "),s("p",[t._v("如果某些小程序页面想要拥有特殊的窗口表现，此时，“页 面级别的.json 配置文件”就可以实现这种需求。")]),t._v(" "),s("p",[s("strong",[t._v("注意:当页面配置与全局配置冲突时,根据就近原则，最终的效果以页面配置为准。")])]),t._v(" "),s("p",[s("strong",[t._v("3.页面配置中常用的配置项")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/10/LDVGA12ZjrESOka.png",alt:"image-20220610105212847"}})]),t._v(" "),s("h2",{attrs:{id:"_5-网络数据请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-网络数据请求"}},[t._v("#")]),t._v(" 5.网络数据请求")]),t._v(" "),s("p",[s("strong",[t._v("1.小程序中网络数据请求的限制")])]),t._v(" "),s("p",[t._v("出于安全性方面的考虑,小程序官方对数据接口的请求做出了如下")]),t._v(" "),s("p",[t._v("两个限制:")]),t._v(" "),s("p",[t._v("①只能请求HTTPS类型的接口")]),t._v(" "),s("p",[t._v("②必须将接口的域名添加到信任列表中")]),t._v(" "),s("p",[s("strong",[t._v("2.配置request合法域名")])]),t._v(" "),s("p",[t._v("需求描述:假设在自己的微信小程序中，希望请求https://www.escook.cn/域名下的接口")]),t._v(" "),s("p",[t._v("配置步骤:登录微信小程序管理后台->开发->开发设置->服务器域名->修改request合法域名")]),t._v(" "),s("p",[s("strong",[t._v("注意事项:")])]),t._v(" "),s("p",[t._v("①域名只支持https协议")]),t._v(" "),s("p",[t._v("②域名不能使用IP地址或localhost")]),t._v(" "),s("p",[t._v("③域名必须经过ICP备案")]),t._v(" "),s("p",[t._v("④服务器域名一个月内最多可申请5次修改")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:7001'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yeshifu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("3.在页面刚加载时请求数据")])]),t._v(" "),s("p",[t._v("在很多情况下，我们需要在页面刚加载的时候，自动请求- -些初始化的数据。此时需要在页面的onLoad事件中调用获取数据的函数，示例代码如下:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 生命周期函数--监听页面加载\n*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[s("strong",[t._v("4.关于跨域和Ajax的说明")])]),t._v(" "),s("p",[s("strong",[t._v("跨域问题只存在于基于浏览器的Web开发中。由于小程序的宿主环境不是浏览器，而是微信客户端，所以小程序中不存在跨域的问题。")])]),t._v(" "),s("p",[s("strong",[t._v('Ajax技术的核心是依赖于浏览器中的XMLHttpRequest这个对象，由于小程序的宿主环境是微信客户端，所以小程序中不能叫做"发起Ajax请求”，而是叫做“发起网络数据请求”')])])])}),[],!1,null,null,null);a.default=p.exports}}]);