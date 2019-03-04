/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */
import Vue from 'vue'

import Http from './plugins/http'
import directives from './directives/global/'
import filters from './filters/global/'

Vue.use(Http)

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
    }
})
