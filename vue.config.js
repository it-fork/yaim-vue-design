/**
 * @author yaimeet
 * @date 2019/3/2
 * @Description
 */
const path = require('path')
let proxyApi = {}
if (process.env.NODE_ENV === 'development') {
    proxyApi = require('./.env.local')
}
console.log('proxyApi', proxyApi)
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: '8001',
        hot: true,
        proxy: {
            '/proxyApi': {
                target: proxyApi.target || 'https://api.github.com',
                pathRewrite: {
                    '^/proxyApi': ''
                },
                changeOrigin: true
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('src'))
    }
}
