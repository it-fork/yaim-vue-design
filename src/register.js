/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */
import Vue from 'vue'

// 基于axios封装的HTTP
import Http from './plugins/http'

// 全局组件
import components from './components/global/'

// 全局指令
import directives from './directives/global/'

// 全局过滤器
import filters from './filters/global/'

Vue.use(Http, {
    apiInit: {
        codeSuccessValue: 0,
        proxyPath: process.env.VUE_APP_ROOT_PATH,
        apiErrorCallback: (code, msg) => {
            console.log(`apiErrorCallback 错误码：${code} ，错误消息：${msg}`)
        },
        apiCatchCallback: (code, msg) => {
            console.log(`apiCatchCallback 错误码：${code} ，错误消息：${msg}`)
        }
    }
})

// 自动注册插件
Vue.use({
    install (Vue, options = {}) {
        // 注册全局指令
        Object.keys(directives).forEach((directiveName) => {
            Vue.directive(directiveName, directives[directiveName])
        })
        // 注册全局过滤器
        Object.keys(filters).forEach((filterName) => {
            Vue.filter(filterName, filters[filterName])
        })
        // 注册全局组件
        Object.keys(components).forEach((componentName) => {
            Vue.component(components[componentName].name, components[componentName])
        })
    }
})
