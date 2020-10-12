(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{417:function(v,_,p){"use strict";p.r(_);var e=p(25),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("h2",{attrs:{id:"高度计算"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#高度计算"}},[v._v("#")]),v._v(" 高度计算")]),v._v(" "),p("ul",[p("li",[v._v("屏幕高度 = 原生 NavigationBar 高度（含状态栏高度）+ 可使用窗口高度 + 原生 TabBar 高度")]),v._v(" "),p("li",[v._v("windowHeight 不包含 NavigationBar 和 TabBar 的高度")]),v._v(" "),p("li",[v._v("H5 端，windowTop 等于 NavigationBar 高度，windowBottom 等于 TabBar 高度")]),v._v(" "),p("li",[v._v("App 端，windowTop 等于透明状态 NavigationBar 高度，windowBottom 等于透明状态 TabBar 高度")])]),v._v(" "),p("h2",{attrs:{id:"样式单位说明"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#样式单位说明"}},[v._v("#")]),v._v(" 样式单位说明")]),v._v(" "),p("h4",{attrs:{id:"uni-app支持的通用-css-单位包括-px、rpx"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#uni-app支持的通用-css-单位包括-px、rpx"}},[v._v("#")]),v._v(" "),p("code",[v._v("uni-app")]),v._v("支持的通用 css 单位包括 px、rpx")]),v._v(" "),p("ul",[p("li",[p("code",[v._v("px")]),v._v(" 即屏幕像素")]),v._v(" "),p("li",[p("code",[v._v("rpx")]),v._v(" 即响应式 px，一种根据屏幕宽度自适应的动态单位。以 750 宽的屏幕为基准，750rpx 恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大")]),v._v(" "),p("li",[p("code",[v._v("rem")]),v._v(" 默认根字体大小为 屏幕宽度/20（微信小程序、字节跳动小程序、App、H5）")]),v._v(" "),p("li",[p("code",[v._v("vh")]),v._v(" viewpoint height，视窗高度，1vh 等于视窗高度的 1%")]),v._v(" "),p("li",[p("code",[v._v("vw")]),v._v(" viewpoint width，视窗宽度，1vw 等于视窗宽度的 1%")])]),v._v(" "),p("p",[v._v("vue 页面支持普通 H5 单位，但在 nvue 里不支持，nvue 还不支持百分比单位。")]),v._v(" "),p("p",[v._v("App 端，在 pages.json 里的 titleNView 或页面里写的 plus api 中涉及的单位，只支持 px。注意此时不支持 rpx\nnvue 中，uni-app 模式（"),p("a",{attrs:{href:"https://ask.dcloud.net.cn/article/36074",target:"_blank",rel:"noopener noreferrer"}},[v._v("nvue 不同编译模式介绍"),p("OutboundLink")],1),v._v("）可以使用 px 、rpx，表现与 vue 中一致。weex 模式目前遵循 weex 的单位，它的单位比较特殊：")]),v._v(" "),p("ul",[p("li",[p("code",[v._v("px")]),v._v(" 以 750 宽的屏幕为基准动态计算的长度单位，与 vue 页面中的 rpx 理念相同。（一定要注意 weex 模式的 px，和 vue 里的 px 逻辑不一样。）")]),v._v(" "),p("li",[p("code",[v._v("wx")]),v._v(" 与设备屏幕宽度无关的长度单位，与 vue 页面中的 px 理念相同")])]),v._v(" "),p("h4",{attrs:{id:"下面对-rpx-详细说明"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#下面对-rpx-详细说明"}},[v._v("#")]),v._v(" 下面对 rpx 详细说明：")]),v._v(" "),p("p",[v._v("设计师在提供设计图时，一般只提供一个分辨率的图。")]),v._v(" "),p("p",[v._v("严格按设计图标注的 px 做开发，在不同宽度的手机上界面很容易变形。")]),v._v(" "),p("p",[v._v("而且主要是宽度变形。高度一般因为有滚动条，不容易出问题。由此，引发了较强的动态宽度单位需求。")]),v._v(" "),p("p",[v._v("微信小程序设计了"),p("code",[v._v("rpx")]),v._v("解决这个问题，uni-app 在 App 端、H5 端都支持了"),p("code",[v._v("rpx")]),v._v("。")]),v._v(" "),p("p",[p("code",[v._v("rpx")]),v._v("是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。uni-app 规定屏幕基准宽度"),p("code",[v._v("750rpx")]),v._v("。")]),v._v(" "),p("p",[v._v("开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下")]),v._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[v._v("设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx\n")])])]),p("p",[p("strong",[v._v("换言之，页面元素宽度在 uni-app 中的宽度计算公式：")])]),v._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[v._v("750 * 元素在设计稿中的宽度 / 设计稿基准宽度\n")])])]),p("ul",[p("li",[v._v("举例说明\n"),p("ol",[p("li",[v._v("若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在"),p("code",[v._v("uni-app")]),v._v("里面的宽度应该设为："),p("code",[v._v("750 * 100 / 750")]),v._v("，结果为：100rpx。")]),v._v(" "),p("li",[v._v("若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在"),p("code",[v._v("uni-app")]),v._v("里面的宽度应该设为："),p("code",[v._v("750 * 100 / 640")]),v._v("，结果为：117rpx。")]),v._v(" "),p("li",[v._v("若设计稿宽度为 375px，元素 B 在设计稿上的宽度为 200px，那么元素 B 在"),p("code",[v._v("uni-app")]),v._v("里面的宽度应该设为："),p("code",[v._v("750 * 200 / 375")]),v._v("，结果为：400rpx。")])])])]),v._v(" "),p("div",{staticClass:"custom-block tip"},[p("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),p("ul",[p("li",[v._v("注意"),p("code",[v._v("rpx")]),v._v("是和宽度相关的单位，屏幕越宽，该值实际像素越大。"),p("strong",[v._v("如不想根据屏幕宽度缩放，则应该使用"),p("code",[v._v("px")]),v._v("单位。")])]),v._v(" "),p("li",[v._v("如果开发者在字体或高度中也使用了"),p("code",[v._v("rpx")]),v._v("，那么需注意这样的写法意味着随着屏幕变宽，字体会变大、高度会变大。"),p("strong",[v._v("如果你需要固定高度，则应该使用"),p("code",[v._v("px")]),v._v("。")])]),v._v(" "),p("li",[p("code",[v._v("rpx")]),v._v("不支持动态横竖屏切换计算，使用"),p("code",[v._v("rpx")]),v._v("建议锁定屏幕方向。")]),v._v(" "),p("li",[v._v("设计师可以用 iPhone6 作为视觉稿的标准。")]),v._v(" "),p("li",[v._v("如果设计稿不是 750px，HBuilderX 提供了自动换算的"),p("a",{attrs:{href:"https://ask.dcloud.net.cn/article/35445",target:"_blank",rel:"noopener noreferrer"}},[v._v("工具"),p("OutboundLink")],1),v._v("。")]),v._v(" "),p("li",[v._v("App 端，在 pages.json 里的 titleNView 或页面里写的 plus api 中涉及的单位，"),p("strong",[v._v("只支持"),p("code",[v._v("px")]),v._v("，不支持"),p("code",[v._v("rpx")]),v._v("。")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);