/**
 * @author yaimeet
 * @date 2019/3/4
 * @Description
 */
import money from './global/money'

export default {
    register (Vue, options = {}) {
        // console.log('注册全局过滤器')
        Vue.filter('money', money)
    }
}
