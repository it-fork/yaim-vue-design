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
            requestInterceptorsReslove: (config) => {
                // console.log('requestInterceptorsReslove', config)
                return config
            },
            // 当 HTTP 原始状态码  === 200 时，进入这里
            responseInterceptorsReslove: (response) => {
                // console.log('responseInterceptorsReslove', response)
                return response
            },
            // 当 HTTP 原始状态码  !== 200 时，进入这里
            responseInterceptorsReject: (response) => {
                // console.log('responseInterceptorsReject', response)
                const statusCode = response.response.status
                const statusText = response.response.statusText
                console.warn(`${statusCode} : ${statusText}`)
                // console.log(response.request)
                // console.log(response.config)
                return response
            }
        }
    }
}
