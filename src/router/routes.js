/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */
export default [
    {
        path: '/',
        name: '首页',
        // component: () => {
        //     return import('@/views/home/index.vue')
        // },
        meta: {
            viewPath: 'home'
        }
    },
    {
        path: '/about',
        name: '关于',
        meta: {
            viewPath: 'about'
        }
    },
    {
        path: '/test',
        name: '测试',
        meta: {
            viewPath: 'test'
        }
    }
]
