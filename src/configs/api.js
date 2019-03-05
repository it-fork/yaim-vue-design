/**
 * @author yaimeet
 * @date 2019/3/3
 * @Description
 */

/**
 *  接口返回的消息字段名
 * @type {string}
 */
export const msgField = 'msg'

/**
 * 接口返回的状态字段名
 * @type {string}
 */
export const codeField = 'code'

/**
 * 反向代理接口的虚拟路径
 * @type {string}
 */
export const proxyPath = '/proxyApi'

/**
 * 接口返回的状态成功值
 * @type {number}
 */
export const codeSuccessValue = 200

/**
 * 接口返回的状态失败值
 * @type {number}
 */
export const codeErrorValue = 1

/**
 * 接口请求成功，但返回不等于成功时的回调
 * @param code 错误码
 * @param msg  错误消息
 */
export const apiErrorCallback = (code, msg) => {
    console.error(msg)
}

/**
 * 接口请求异常回调 意思是 HTTP 请求不是200时的回调
 * @param status HTTP状态码
 * @param statusText HTTP状态消息
 */
export const apiCatchCallback = (status, statusText) => {
    console.error(`${status} : ${statusText}`, '服务器异常')
}
