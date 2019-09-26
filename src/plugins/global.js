import Log from './log/index'
import Http from './http/index'

export default {
    log: {
        plugin: Log,
        options: () => {
            return true
        }
    },
    http: {
        plugin: Http,
        options: {
            responseInterceptorsReslove: (response) => {
                console.log('response', response)
                return response
            }
        }
    }
}
