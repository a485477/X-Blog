# 选择器篇  

## 伪类选择器
选择符|示例|含义
--|--|--
:not()|ul li:not('.checked')|表示选中ul的除去class为.checked的li子元素
:first-child|ul li:first-child|表示选中ul的第一个且是li的子元素
:last-child|ul li:last-child|表示选中ul的最后一个且是li的子元素
:first-of-type|ul li:first-of-type|表示选中ul的第一个li子元素
:last-of-type|ul li:last-of-type|表示选中ul的最后一个li子元素
:nth-child|ul li:nth-child(3)|表示选中ul下的第三个且是li的子元素
:nth-of-type|ul li:nth-of-type(3)|表示选中ul的第三个类型为li的子元素
:only-child|ul li:only-child|表示当ul下仅有一个li的时候应用样式
:only-last-child|ul li:only-last-child(3)|表示当ul下倒数第三个li

nth-child使用小技巧

nth-child(n + 3) 表示选中除去前两项以外的所有子元素
nth-child(-n + 3) 表示选中前三项元素

## 符号选择器
选择符|示例|含义
--|--|--
>|ul>li|表示选中ul的直接后代li元素
+|h1+h2|表示选中h1后面相邻的兄弟元素h2
~|h1~p|表示选中h1后面所有的同级兄弟元素P


## 选择器组合妙用

>需求是列表为1项为白色, 2项时红色，3项时为蓝色.

``` css
/* 单项 */
li:only-child{
    background: white;
}

/* 2项 */
/* 即是第一个子元素又是倒数第四个，巧妙的匹配了列表仅有四个的时候,再利用~符号选中后面的同级元素*/
li:first-child:nth-last-child(2), li:first-child:nth-last-child(2) ~ li{
    /* do soming */
}

/* 3项 */
/* 即是第一个子元素又是倒数第四个，巧妙的匹配了列表仅有四个的时候,再利用~符号选中后面的同级元素*/
li:first-child:nth-last-child(3), li:first-child:nth-last-child(3) ~ li{
    /* do soming */
}
```

> 需求是列表在2-6项的时候

``` css
li:first-child:nth-last-child(n+4),
li:first-child:nth-last-child(n+4) ~ li {
/* 当列表至少包含四项时，命中所有列表项 */
}

li:first-child:nth-last-child(-n+4),
li:first-child:nth-last-child(-n+4) ~ li {
 /* 当列表最多包含四项时，命中所有列表项 */
}

li:first-child:nth-last-child(n+2):nth-last-child(-n+6),
li:first-child:nth-last-child(n+2):nth-last-child(-n+6) ~ li {
 /* 当列表包含2～6项时，命中所有列表项 */
}
```

## css3的几种新宽度设置方式

1. fill-available

width:fill-available比较好理解，比方说，我们在页面中扔一个没有其他样式的div元素，则，此时，该div元素的width表现就是fill-available自动填满剩余的空间。也就是我们平常所说的盒模型的margin,border,padding的尺寸填充。

2. min-content

min-content宽度表示的并不是内部那个宽度小就是那个宽度，而是，采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度。

``` html
<div>
    <img src="man.png" />
    <p>第三方建设大街合肥市大家好福克斯的胡椒粉和</p>
</div>
<style>
    /* min-content的意思是div的宽度由最大的子元素且不会被截断的元素决定 */
    div{
        width: min-content;
        margin:0 auto;
    }
</style>
```

3. max-content

width:max-content表现得好像设置了white-space:nowrap一样，文字一马平川下去，元素的宽度也变成了这些文字一行显示的宽度！

4. fit-content

width:fit-content也是应该比较好理解的，“shrink-to-fit”表现，换句话说，和CSS2.1中的float, absolute, inline-block的尺寸收缩表现是一样的。且没有副作用.

## css新的长度单位

vw, vh, vmin, vmax

当视口宽度小于高度时，1vmin 等于 1vw，否则等于 1vh。  当视口宽度大于高度时，1vmax 等于 1vw，否则等于 1vh。

## flex小技巧

请注意，当我们使用 Flexbox 时，margin: auto 不仅在水平方向上将元
素居中，垂直方向上也是如此。

