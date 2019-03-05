import Vue from 'vue'
import './register'
import App from './App.vue'
import router from './router/'
import store from './store/'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => {
        return h(App)
    },
    methods: {
        log (msg, logType = 'log', tip = '') {
            if (process && process.env && process.env.NODE_ENV === 'development') {
                tip && console.log(`${tip} ------ start`)
                console[logType] && console[logType](msg)
                tip && console.log(`${tip} ------ end`)
            }
        }
    }
}).$mount('#app')
