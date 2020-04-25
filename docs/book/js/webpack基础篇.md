# webpack 常用的配置详解

## `context(string)`

>webpack配置上下文路径，默认是cmd的脚本路径，设置了以后就是独立于程序的路径.
___
## `node(object)`

>提供给其他环境的一个全局属性。暂时用不太到。
___
## `output(object)`

>定义webpack输出内容

`path（string）`：

对应一个绝对路径, 定义成果物输出的地方.

`output.filename（string|function）`：

指定每一个bundle的名称，这些bundle将会写入到output.path指定的目录下，写法有很多种。

    '[name].js' 与入口名称的name对应
    '[hash].js' 每次构建生成的hash值
    '[id].js' 使用内部的chunk id
    '[chunkhash].js'  基于每个chunk的hash值

虽然说是指定文件名，但还是可以传入'js/[hash].js'这样的格式.

此选项也不会影响那些按需加载chunk的名字，对于这些文件，可以配置chunkFilename

`chunkFilename（string）`：

此选项决定了非入口(non-entry) chunk 文件的名称。比如那些按需加载的。

chunkFilename的模板参数和filename一样，默认使用'[id].js'这样的格式。所以打包出来的总是0.js。

`publicPath（string）`：

一般用来指定那些按需加载的模块的基本路径，因为打包出来的文件大多会放在cdn服务上，会配置其他的域名。

``` js
publicPath: "https://cdn.example.com/assets/", // CDN（总是 HTTPS 协议）
publicPath: "//cdn.example.com/assets/", // CDN (协议相同)
publicPath: "/assets/", // 相对于服务(server-relative)
publicPath: "assets/", // 相对于 HTML 页面
publicPath: "../assets/", // 相对于 HTML 页面
publicPath: "", // 相对于 HTML 页面（目录相同）
```
---
## `resolve(object)`

>配置模块如何解析。例如，当在 ES2015 中调用 import "lodash"，resolve 选项能够对 webpack 查找 "lodash" 的方式去做修改。

`resolve.alias`:

一般用于常见模块的的路径映射，典型的例子如下：
``` js
// webpack.config.js
resolve: {
    alias: {
        // 一般vue的脚手架都会这么配置一个@变量
        "@": path.resolve(__dirname, 'src/'),
    }
}

// index.js
// 快捷导入
import compass from '@/component/compass'
```

还可以后面加$表示精准匹配，和正则差不多

``` js
alias: {
  xyz$: path.resolve(__dirname, 'path/to/file.js')
}

// index.js
import Test1 from 'xyz'; // 精确匹配，所以 path/to/file.js 被解析和导入
import Test2 from 'xyz/file.js'; // 非精确匹配，触发普通解析
```

`resolve.extensions`: 

自动解析确定的扩展。默认值为：
``` js
extensions: [".js", ".json"]

// import 的时候就不用写后缀了
import Test2 from 'xyz/file';
```

这里有个优化点，应该尽量将常见的放在数组前面，以快速遍历解析。

`resolve.modules`:

告诉 webpack 解析模块时应该搜索的目录。

绝对路径和相对路径都能使用，但是要知道它们之间有一点差异。

如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索：

``` js
modules: [path.resolve(__dirname, "src"), "node_modules"]
``` 
___

## `entry(string|array|object)`

简单规则：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。

``` js
// 普通的单入口，只打包出一个相关包
entry: 'src/index.js'

// 数组的格式会，将数组的文件打包到一个文件里
entry: ['src/index/js', 'src/app.js']

// 以对象的形式，就是打包成多个包
entry: {
    main: 'src/main.js',
    verdor: ['jquery', 'loash']
}
// 还可以传入函数，动态入口

entry: () => './demo'
```
---
## `optimization(object)`

> 定义编译过程chunk的分割逻辑，以前是commonschunkplugin,现在以声名式表现

`optimization.minimize`: 

默认为true，效果就是压缩js代码。

`optimization.minimizer`: 

使用第三方插件压缩代码，与plugins传入方式一样，官方的解决方案是TerserWebpack.

`optimization.splitChunks`: 

webpack将根据以下条件自动分割块：

1. 可以共享新块，或者模块来自node_modules文件夹
2. 新的块将大于30kb（在min + gz之前）
3. 按需加载块时并行请求的最大数量将小于或等于6
4. 初始页面加载时并行请求的最大数量将小于或等于4
当试图满足最后两个条件时，最好使用较大的块。

``` js
// 默认配置
splitChunks: {
    /**
     * 有效值为all，async和initial, 意义就是根据不同的策略打包模块
     * async 表示 只分割异步加载的模块。
     * all 同时分割同步与异步加载的模块, 同步代码不会自动分开打包，可以再cacheGroups里指定。
     * inifial 也会同时打包同步和异步，但是异步内部的引入不再考虑，直接打包在一起.
    */
    chunks: 'async',
    // 生成块的最小大小（以字节为单位）。
    minSize: 30000,
    minRemainingSize: 0,
    maxSize: 0,
    // 最小公用模块次数，默认为1
    minChunks: 1,
    // 按需加载时候最大的并行请求数
    maxAsyncRequests: 6,
    // 一个入口最大的并行请求数
    maxInitialRequests: 4,
    automaticNameDelimiter: '~',
    automaticNameMaxLength: 30,
    // 缓存策略，默认设置了分割node_modules和公用模块。内部的参数可以和覆盖外部的参数。
    cacheGroups: {
        defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
        },
        default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
        }
    }
}

// 例子
cacheGroup:{
    a: {
        test: /a\.js/,//匹配规则
        minChunks:2,//重写公用chunks的次数
        chunks: "all",
        name: "a",//重写文件名称
        enforce: true //强制生成
    }
}
```