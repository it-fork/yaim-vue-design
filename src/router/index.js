import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Login from '@/views/login'
Vue.use(Router)

const getViewPath = (path) => {
    // console.log(path.indexOf('.vue'), path.length)
    const newPath = path.indexOf('.vue') === -1 ? `${path}/index.vue` : `${path}`
    // console.log('newPath', newPath)
    return () => {
        return import(`@/views/${newPath}`)
    }
}

/**
 * 组装安装路由组件
 */
routes.forEach((route) => {
    // 一级路由
    route.component = getViewPath(route.meta.viewPath)
    // 二级路由
    if (route.children) {
        route.children.forEach((twoRoute) => {
            twoRoute.component = getViewPath(twoRoute.meta.viewPath)
            // 三级路由
            if (twoRoute.children) {
                twoRoute.children.forEach((threeRoute) => {
                    threeRoute.component = getViewPath(threeRoute.meta.viewPath)
                })
            }
        })
    }
})

const vueRouter = new Router({
    routes: [
        {
            path: '/',
            name: '根',
            redirect: '/test'
        },
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
