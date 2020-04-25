# webpack配置小技巧

## 合理利用缓存

编译的时候应该将那些常用的第三方包与manifest文件单独打包出来，但是就算打包完成，因为出口设置了filename为hash值，每次编译因为顺序变换的原因导致hash值会改变，导致webpack的服务器不能合理的利用缓存来获取那些不会更改的资源。

这种情况下，可以使用 `NamedModulesPlugin`这个包将用模块路径替换标识符，还一种方法就是使用`HashedModuleIdsPlugin`, 该插件会根据模块的相对路径生成一个四位数的hash作为模块id.

## html-webpack-plugin@next

`title`:

用于生成的HTML文档的标题

`template`:

webpack模板的相对或绝对路径。默认情况下，它将使用（src/index.ejs如果存在）。

`templateParameters`:

允许覆盖模板中使用的参数, 其实就是ejs模板语法，传入变量，ejs里面使用。

## copy-webpack-plugin

`from`: 

原地址目录

`to`:

目标目录

## preload-webpack-plugin

和html-webpack-plugin配合使用，用于将打包出来的js与css, 预加载或者懒加载

`rel`:

设定链接方式，preload预加载，prefetch懒加载

`include`:

指定作用于什么类型的模块，allChunks, 所有类型的模块，initial, 初始模块，

``` js
plugins: [
  new HtmlWebpackPlugin(),
  new PreloadWebpackPlugin({
    rel: 'preload',
    include: ['home'] //指定chunk的名字
  })
]
```

`fileBlacklist`:

过滤块， 传入数组

`fileWhitelist`:

只作用某些块