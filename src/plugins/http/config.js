/*
 * @Author: yaimeet
 * @Date: 2019-09-26 20:56:15
 * @Last Modified by: yaimeet
 * @Last Modified time: 2019-09-26 22:20:06
 */
import axios from 'axios'

export default class Config {
    axios = null
    config = {
        codeField: '',
        msgField: '',
        dataField: '',
        successCodeValue: '',
        errorCodeValue: '',
        proxyPath: '',
        networkErrorCallback: () => {
            console.warn('networkErrorCallback')
        },
        apiErrorCallback: () => {
            console.warn('apiErrorCallback')
        }
    }

    /**
     * 拦截器管理
     */
    interceptors = {
        request: null,
        response: null
    }

    /**
     * 初始化
     */
    constructor ({ axiosConfig, httpConfig, requestInterceptorsReslove, requestInterceptorsReject, responseInterceptorsReslove, responseInterceptorsReject } = {}) {
        if (axiosConfig && axiosConfig.constructor === Object) {
            this.setAxios(axiosConfig)
        } else {
            this.initAxios()
        }
        if (httpConfig && httpConfig.constructor === Object) {
            this.setHttp(httpConfig)
        } else {
            this.initHttp()
        }
        this.configInterceptors({ requestInterceptorsReslove, requestInterceptorsReject, responseInterceptorsReslove, responseInterceptorsReject })
    }

    /**
     * 检测是否自定义配置
     */
    get isConfig () {
        if (this.codeField && this.msgField && this.successCodeValue && this.errorCodeValue) {
            return true
        }
        return false
    }

    /**
     * 请求拦截器函数
     */
    get requestInterceptorsReslove () {
        if (this.interceptors && this.interceptors.requestReslove && typeof this.interceptors.requestReslove === 'function') {
            return this.interceptors.requestReslove
        }
        return function (response) {
            // console.warn('requestInterceptors')
            return response
        }
    }
    /**
     * 请求拦截器函数
     */
    get requestInterceptorsReject () {
        if (this.interceptors && this.interceptors.requestReject && typeof this.interceptors.requestReject === 'function') {
            return this.interceptors.requestReject
        }
        return function (response) {
            // console.warn('requestInterceptors')
            return response
        }
    }
    /**
     * 响应拦截器函数
     */
    get responseInterceptorsReslove () {
        if (this.interceptors && this.interceptors.responseReslove && typeof this.interceptors.responseReslove === 'function') {
            return this.interceptors.responseReslove
        }
        return (config) => {
            // console.warn('responseInterceptors')
            return config
        }
    }
    /**
     * 响应拦截器函数
     */
    get responseInterceptorsReject () {
        if (this.interceptors && this.interceptors.responseReject && typeof this.interceptors.responseReject === 'function') {
            return this.interceptors.responseReject
        }
        return () => {
            // console.warn('responseInterceptors')
        }
    }

    /**
     * 配置请求和响应拦截器
     * @param {function} requestInterceptors
     * @param {function} responseInterceptors
     */
    configInterceptors ({ requestInterceptorsReslove, requestInterceptorsReject, responseInterceptorsReslove, responseInterceptorsReject } = {}) {
        this.interceptors.requestReslove = requestInterceptorsReslove
        this.interceptors.requestReject = requestInterceptorsReject
        this.interceptors.responseReslove = responseInterceptorsReslove
        this.interceptors.responseReject = responseInterceptorsReject
        this.setInterceptors()
        return this
    }

    /**
     * 设置请求和响应拦截器
     */
    setInterceptors () {
        if (this.axios) {
            // console.log('setInterceptors', this.responseInterceptors)
            this.axios.interceptors.request.use(this.requestInterceptorsReslove, this.interceptors.requestReject)
            this.axios.interceptors.response.use(this.interceptors.responseReslove, this.interceptors.responseReject)
        }
        return this
    }

    /**
     * 初始化 axios 配置
     */
    initAxios () {
        this.axios = axios.create()
        return this
    }

    /**
     * 自定义 axios 配置
     * @param {object} config
     */
    setAxios (config = {}) {
        this.axios = axios.create(config)
        return this
    }

    /**
     * 初始化 插件 配置
     */
    initHttp () {
        this.config = {
            codeField: '',
            msgField: '',
            dataField: '',
            successCodeValue: '',
            errorCodeValue: '',
            proxyPath: '',
            networkErrorCallback: () => {
                console.warn('networkErrorCallback')
            },
            apiErrorCallback: () => {
                console.warn('apiErrorCallback')
            }
        }
        return this
    }

    /**
     * 自定义 插件 配置
     * @param {object} config required
     */
    setHttp (config) {
        Object.keys(config).forEach((key) => {
            this.config[key] = config[key]
        })
        return this
    }
}
