/**
 * @author yaimeet
 * @date 2019/3/4
 * @Description
 */
export default (value) => {
    if (!value) return ''
    value = value.toString()
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}
