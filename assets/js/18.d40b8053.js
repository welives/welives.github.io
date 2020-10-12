(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{385:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"基础用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// router.js")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/admin/:id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// controller")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取路由get传值参数（路由:id）")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取url中 ? 后面的部分Query String")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"详细说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详细说明"}},[t._v("#")]),t._v(" 详细说明")]),t._v(" "),a("h4",{attrs:{id:"_4-种配置方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-种配置方法"}},[t._v("#")]),t._v(" 4 种配置方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path-match'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'router-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path-match'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个参数可以给name")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path-match'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" middleware1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" middlewareN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'router-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path-match'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" middleware1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" middlewareN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"路由完整定义主要包括-5-个主要部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由完整定义主要包括-5-个主要部分"}},[t._v("#")]),t._v(" 路由完整定义主要包括 5 个主要部分")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("verb - 用户触发动作，支持 get，post 等所有 HTTP 方法，后面会通过示例详细说明。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("router.head")]),t._v(" - HEAD")]),t._v(" "),a("li",[a("code",[t._v("router.options")]),t._v(" - OPTIONS")]),t._v(" "),a("li",[a("code",[t._v("router.get")]),t._v(" - GET")]),t._v(" "),a("li",[a("code",[t._v("router.put")]),t._v(" - PUT")]),t._v(" "),a("li",[a("code",[t._v("router.post")]),t._v(" - POST")]),t._v(" "),a("li",[a("code",[t._v("router.patch")]),t._v(" - PATCH")]),t._v(" "),a("li",[a("code",[t._v("router.delete")]),t._v(" - DELETE")]),t._v(" "),a("li",[a("code",[t._v("router.del")]),t._v(" - 由于 delete 是一个保留字，所以提供了一个 delete 方法的别名。")]),t._v(" "),a("li",[a("code",[t._v("router.redirect")]),t._v(" - 可以对 URL 进行重定向处理，比如我们最经常使用的可以把用户访问的根目录路由到某个主页。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("router-name")]),t._v(" 给路由设定一个别名，可以通过 Helper 提供的辅助函数"),a("code",[t._v("pathFor")]),t._v("和"),a("code",[t._v("urlFor")]),t._v("来生成 URL。(可选)")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("path-match")]),t._v(" - 路由 URL 路径。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("middleware1")]),t._v(" - 在 Router 里面可以配置多个 Middleware。(可选)")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("controller")]),t._v(" - 指定路由映射到的具体的 controller 上，controller 可以有两种写法：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("app.controller.user.fetch")]),t._v(" - 直接指定一个具体的 controller")]),t._v(" "),a("li",[a("code",[t._v("'user.fetch'")]),t._v(" - 可以简写为字符串形式")])])])]),t._v(" "),a("h2",{attrs:{id:"资源路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源路由"}},[t._v("#")]),t._v(" 资源路由")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/router.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'posts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/posts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'users'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/v1/users'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/controller/v1/users.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面代码就在"),a("code",[t._v("/posts")]),t._v("路径上部署了一组 CRUD 路径结构，对应的 Controller 为"),a("code",[t._v("app/controller/posts.js")]),t._v("接下来，你只需要在"),a("code",[t._v("posts.js")]),t._v("里面实现对应的函数就可以了。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Path")]),t._v(" "),a("th",[t._v("Route Name")]),t._v(" "),a("th",[t._v("Controller.Action")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[t._v("/posts")]),t._v(" "),a("td",[t._v("posts")]),t._v(" "),a("td",[t._v("app.controllers.posts.index")])]),t._v(" "),a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[t._v("/posts/new")]),t._v(" "),a("td",[t._v("new_post")]),t._v(" "),a("td",[t._v("app.controllers.posts.new")])]),t._v(" "),a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[t._v("/posts/:id")]),t._v(" "),a("td",[t._v("post")]),t._v(" "),a("td",[t._v("app.controllers.posts.show")])]),t._v(" "),a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[t._v("/posts/:id/edit")]),t._v(" "),a("td",[t._v("edit_post")]),t._v(" "),a("td",[t._v("app.controllers.posts.edit")])]),t._v(" "),a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[t._v("/posts")]),t._v(" "),a("td",[t._v("posts")]),t._v(" "),a("td",[t._v("app.controllers.posts.create")])]),t._v(" "),a("tr",[a("td",[t._v("PUT")]),t._v(" "),a("td",[t._v("/posts/:id")]),t._v(" "),a("td",[t._v("post")]),t._v(" "),a("td",[t._v("app.controllers.posts.update")])]),t._v(" "),a("tr",[a("td",[t._v("DELETE")]),t._v(" "),a("td",[t._v("/posts/:id")]),t._v(" "),a("td",[t._v("post")]),t._v(" "),a("td",[t._v("app.controllers.posts.destroy")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/controller/posts.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 列表页")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("index")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新增表单页")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新增逻辑")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 详情页")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("show")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编辑表单页")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("edit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新逻辑")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除逻辑")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("destroy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"路由分组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由分组"}},[t._v("#")]),t._v(" 路由分组")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/router.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./router/news'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./router/admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/router/news.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/news/list'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("news"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/news/detail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("news"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/router/admin.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/admin/user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/admin/log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"路由重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由重定向"}},[t._v("#")]),t._v(" 路由重定向")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/router.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);