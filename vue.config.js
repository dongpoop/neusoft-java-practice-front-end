module.exports = {
    devServer: {
        proxy: {
            '/api': {    //所有发送给后台的请求，设置url的前缀为/api
                    target: 'http://localhost:8888',   //指定后台服务的访问地址
                    changeOrigin: true,  //允许修改请求头
                    pathRewrite: {      //路径重写，去掉前缀api
                         '^/api': ''
                    }   
            }
        }
      }
}