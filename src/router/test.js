/**
 * @author yaimeet
 * @date 2019/3/5
 * @Description
 */
export default [{
    path: '/test',
    name: '测试',
    meta: {
        viewPath: 'test'
    },
    children: [
        {
            path: 'vuex',
            name: 'vuex 示例',
            meta: {
                viewPath: 'test/vuex.vue'
            }
        },
        {
            path: 'component',
            name: 'component 示例',
            meta: {
                viewPath: 'test/component.vue'
            }
        },
        {
            path: 'filter',
            name: 'filter 示例',
            meta: {
                viewPath: 'test/filter.vue'
            }
        },
        {
            path: 'directive',
            name: 'directive 示例',
            meta: {
                viewPath: 'test/directive.vue'
            }
        },
        {
            path: 'http',
            name: 'http 示例',
            meta: {
                viewPath: 'test/http.vue'
            }
        }
    ]
}]
