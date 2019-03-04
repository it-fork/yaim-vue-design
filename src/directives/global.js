/**
 * @author yaimeet
 * @date 2019/3/4
 * @Description
 */
import autofocus from './global/autofocus'

export default {
    install (Vue, options = {}) {
        // console.log('注册全局指令')
        Vue.directive('autofocus', autofocus)
    }
}
