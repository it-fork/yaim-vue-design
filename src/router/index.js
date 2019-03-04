import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Login from '@/views/login'
Vue.use(Router)

/**
 * 组装安装路由组件
 */
routes.forEach((route) => {
    // 一级路由
    route.component = () => {
        return import(`@/views/${route.meta.viewPath}/index.vue`)
    }
    // 二级路由
    if (route.children) {
        route.children.forEach((twoRoute) => {
            twoRoute.component = () => {
                return import(`@/views/${twoRoute.meta.viewPath}/index.vue`)
            }
            // 三级路由
            if (twoRoute.children) {
                twoRoute.children.forEach((threeRoute) => {
                    threeRoute.component = () => {
                        return import(`@/views/${threeRoute.meta.viewPath}/index.vue`)
                    }
                })
            }
        })
    }
})

const vueRouter = new Router({
    routes: [
        {
            path: '/login',
            name: '登录',
            component: Login
        },
        ...routes
    ]
})

vueRouter.beforeEach((to, from, next) => {
    next()
})

export default vueRouter
