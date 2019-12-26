const Timestamp = new Date().getTime();
module.exports = {
    baseUrl: "./",
    productionSourceMap:false,
    outputDir: 'dist',  //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    filenameHashing: true,
    devServer: {
      open: false, //是否自动弹出浏览器页面
      //浏览器查看报错消息
      hot:true,
      //浏览器查看报错消息
      clientLogLevel: 'warning',
      inline:false,
      host: "0.0.0.0", 
      port: '8080', 
      https: false,  //是否使用https协议
      hotOnly: false, //是否开启热更新
      proxy: {
        '/apis':{                                 //http://api.canbite.cn/api/market/info
          target:'http://api.canbite.cn',  //API服务器的地址  192.168.199.203:8005
          ws: true, //代理websockets
          changeOrigin: true, // 虚拟的站点需要更管origin
          secure: false, // 将安全设置为false,才能访问https开头的
          pathRewrite: { '^/apis':'/'}
        }
      },
    },
    //webpack配置
    // configureWebpack: {
    //   output: { //输出重构，打包编译后的文件名称【模块名称.版本号.时间戳】
    //     filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
    //     chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    //   }
    // }
}

