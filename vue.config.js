/**
 * @author yaimeet
 * @date 2019/3/2
 * @Description
 */
const path = require('path')
let proxyApi = {}
if (process.env.NODE_ENV === 'development') {
    try{
        proxyApi = require('./proxyTarget')
    }catch (e) {}
}
console.log('proxyApi', proxyApi)
const proxyList = {}
Object.keys(proxyApi).forEach((path) => {
    proxyList[`/${path}`] = {
        target: proxyApi[path],
        pathRewrite: {
            [`^/${path}`]: ''
        },
        changeOrigin: true
    }
})
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    runtimeCompiler: true,
    lintOnSave: true,
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: '8001',
        hot: true,
        proxy: {
            '/githubApi': {
                target: 'https://api.github.com',
                pathRewrite: {
                    '^/githubApi': ''
                },
                changeOrigin: true
            },
            ...proxyList
        },
        overlay: {
            warnings: true,
            errors: true
        },
        before: (app) => {
            console.log('vue.config.js devServer.before', app)
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('src'))
    },
    css: {
        loaderOptions: {}
    }
}
