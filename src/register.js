/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */
import Vue from 'vue'

// 全局插件
import plugins from './plugins/global'

// 全局组件
import components from './components/global/'

// 全局指令
import directives from './directives/global/'

// 全局过滤器
import filters from './filters/global/'

/**
 * 安装全局插件
 */
Object.keys(plugins).forEach((name) => {
    Vue.use(plugins[name].plugin, plugins[name].options)
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
            // console.log('register filter', filterName, filters[filterName])
            Vue.filter(filterName, filters[filterName])
        })

        // 注册全局组件
        Object.keys(components).forEach((componentName) => {
            Vue.component(components[componentName].name, components[componentName])
        })
    }
})
