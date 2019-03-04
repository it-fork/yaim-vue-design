/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */
import Vue from 'vue'

import Http from './plugins/http'
import directives from './directives/global'
import filters from './filters/global'

Vue.use(Http)
Vue.use(directives)
filters.register()
