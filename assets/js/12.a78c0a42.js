(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{345:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"选择器篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器篇"}},[t._v("#")]),t._v(" 选择器篇")]),t._v(" "),a("h2",{attrs:{id:"伪类选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类选择器"}},[t._v("#")]),t._v(" 伪类选择器")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("选择符")]),t._v(" "),a("th",[t._v("示例")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(":not()")]),t._v(" "),a("td",[t._v("ul li:not('.checked')")]),t._v(" "),a("td",[t._v("表示选中ul的除去class为.checked的li子元素")])]),t._v(" "),a("tr",[a("td",[t._v(":first-child")]),t._v(" "),a("td",[t._v("ul li:first-child")]),t._v(" "),a("td",[t._v("表示选中ul的第一个且是li的子元素")])]),t._v(" "),a("tr",[a("td",[t._v(":last-child")]),t._v(" "),a("td",[t._v("ul li:last-child")]),t._v(" "),a("td",[t._v("表示选中ul的最后一个且是li的子元素")])]),t._v(" "),a("tr",[a("td",[t._v(":first-of-type")]),t._v(" "),a("td",[t._v("ul li:first-of-type")]),t._v(" "),a("td",[t._v("表示选中ul的第一个li子元素")])]),t._v(" "),a("tr",[a("td",[t._v(":last-of-type")]),t._v(" "),a("td",[t._v("ul li:last-of-type")]),t._v(" "),a("td",[t._v("表示选中ul的最后一个li子元素")])]),t._v(" "),a("tr",[a("td",[t._v(":nth-child")]),t._v(" "),a("td",[t._v("ul li:nth-child(3)")]),t._v(" "),a("td",[t._v("表示选中ul下的第三个且是li的子元素")])]),t._v(" "),a("tr",[a("td",[t._v(":nth-of-type")]),t._v(" "),a("td",[t._v("ul li:nth-of-type(3)")]),t._v(" "),a("td",[t._v("表示选中ul的第三个类型为li的子元素")])]),t._v(" "),a("tr",[a("td",[t._v(":only-child")]),t._v(" "),a("td",[t._v("ul li:only-child")]),t._v(" "),a("td",[t._v("表示当ul下仅有一个li的时候应用样式")])]),t._v(" "),a("tr",[a("td",[t._v(":only-last-child")]),t._v(" "),a("td",[t._v("ul li:only-last-child(3)")]),t._v(" "),a("td",[t._v("表示当ul下倒数第三个li")])])])]),t._v(" "),a("p",[t._v("nth-child使用小技巧")]),t._v(" "),a("p",[t._v("nth-child(n + 3) 表示选中除去前两项以外的所有子元素\nnth-child(-n + 3) 表示选中前三项元素")]),t._v(" "),a("h2",{attrs:{id:"符号选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#符号选择器"}},[t._v("#")]),t._v(" 符号选择器")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("选择符")]),t._v(" "),a("th",[t._v("示例")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(">")]),t._v(" "),a("td",[t._v("ul>li")]),t._v(" "),a("td",[t._v("表示选中ul的直接后代li元素")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),t._v(" "),a("td",[t._v("h1+h2")]),t._v(" "),a("td",[t._v("表示选中h1后面相邻的兄弟元素h2")])]),t._v(" "),a("tr",[a("td",[t._v("~")]),t._v(" "),a("td",[t._v("h1~p")]),t._v(" "),a("td",[t._v("表示选中h1后面所有的同级兄弟元素P")])])])]),t._v(" "),a("h2",{attrs:{id:"选择器组合妙用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器组合妙用"}},[t._v("#")]),t._v(" 选择器组合妙用")]),t._v(" "),a("blockquote",[a("p",[t._v("需求是列表为1项为白色, 2项时红色，3项时为蓝色.")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 单项 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li:only-child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 2项 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 即是第一个子元素又是倒数第四个，巧妙的匹配了列表仅有四个的时候,再利用~符号选中后面的同级元素*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li:first-child:nth-last-child(2), li:first-child:nth-last-child(2) ~ li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* do soming */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 3项 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 即是第一个子元素又是倒数第四个，巧妙的匹配了列表仅有四个的时候,再利用~符号选中后面的同级元素*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li:first-child:nth-last-child(3), li:first-child:nth-last-child(3) ~ li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* do soming */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("需求是列表在2-6项的时候")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li:first-child:nth-last-child(n+4),\nli:first-child:nth-last-child(n+4) ~ li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当列表至少包含四项时，命中所有列表项 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li:first-child:nth-last-child(-n+4),\nli:first-child:nth-last-child(-n+4) ~ li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当列表最多包含四项时，命中所有列表项 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li:first-child:nth-last-child(n+2):nth-last-child(-n+6),\nli:first-child:nth-last-child(n+2):nth-last-child(-n+6) ~ li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当列表包含2～6项时，命中所有列表项 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"css3的几种新宽度设置方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3的几种新宽度设置方式"}},[t._v("#")]),t._v(" css3的几种新宽度设置方式")]),t._v(" "),a("ol",[a("li",[t._v("fill-available")])]),t._v(" "),a("p",[t._v("width:fill-available比较好理解，比方说，我们在页面中扔一个没有其他样式的div元素，则，此时，该div元素的width表现就是fill-available自动填满剩余的空间。也就是我们平常所说的盒模型的margin,border,padding的尺寸填充。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("min-content")])]),t._v(" "),a("p",[t._v("min-content宽度表示的并不是内部那个宽度小就是那个宽度，而是，采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("man.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("第三方建设大街合肥市大家好福克斯的胡椒粉和"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* min-content的意思是div的宽度由最大的子元素且不会被截断的元素决定 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" min-content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("max-content")])]),t._v(" "),a("p",[t._v("width:max-content表现得好像设置了white-space:nowrap一样，文字一马平川下去，元素的宽度也变成了这些文字一行显示的宽度！")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("fit-content")])]),t._v(" "),a("p",[t._v("width:fit-content也是应该比较好理解的，“shrink-to-fit”表现，换句话说，和CSS2.1中的float, absolute, inline-block的尺寸收缩表现是一样的。且没有副作用.")]),t._v(" "),a("h2",{attrs:{id:"css新的长度单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css新的长度单位"}},[t._v("#")]),t._v(" css新的长度单位")]),t._v(" "),a("p",[t._v("vw, vh, vmin, vmax")]),t._v(" "),a("p",[t._v("当视口宽度小于高度时，1vmin 等于 1vw，否则等于 1vh。  当视口宽度大于高度时，1vmax 等于 1vw，否则等于 1vh。")]),t._v(" "),a("h2",{attrs:{id:"flex小技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex小技巧"}},[t._v("#")]),t._v(" flex小技巧")]),t._v(" "),a("p",[t._v("请注意，当我们使用 Flexbox 时，margin: auto 不仅在水平方向上将元\n素居中，垂直方向上也是如此。")])])}),[],!1,null,null,null);s.default=e.exports}}]);