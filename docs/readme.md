[[toc]]

::: tip 说明
基于Vue开发的设计模式
:::

## 使用

```bash
git clone https://github.com/yaimeet/yaim-vue-design.git
cd yaim-vue-design
npm install or yarn install
npm run serve # 开发模式
npm run build # 部署
npm run lint # lint and fix
npm run lint-fix # fix
```

## Eslint

```js
rules: {
        'prefer-promise-reject-errors': ['off'],
        'no-global-assign': ['error'],
        'no-empty-pattern': ['error'],
        'no-empty-function': ['error'],
        'eqeqeq': ['error'], // 必须使用全等于 ===
        'new-cap': ['error', {
            'newIsCap': true // 类首字母必须大写，且必须使用 new 实例化
        }],
        'no-else-return': ['error', { 'allowElseIf': true }], // 如果 if 块中包含了一个 return 语句，else 块就成了多余的了。可以将其内容移至块外。
        'no-lonely-if': ['error'], // 禁止else中出现if 例如：else { if () .. } , 需要写成 else if () ...
        'max-params': ['error', 3], // 函数参数最多不可超过3个，再多改成对象格式
        'no-var': ['error'], // 禁止使用var
        'no-confusing-arrow': ['error'], // 禁止把箭头函数用于表达式中
        'no-class-assign': ['error'], // 禁止修改类声明的变量
        'arrow-parens': ['error', 'always'], // 箭头函数的参数，有没有都要使用圆括号
        'arrow-body-style': ['error', 'always'], // 要求箭头函数体使用大括号
        'vue/script-indent': ['error', 4, { 'baseIndent': 1 }], // *.vue 的文件中的script标签中的js内容必须缩进
        'indent': ['error', 4], // 缩进4个空格，编辑器可设置
        'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
},
overrides: [
    {
        'files': ['*.vue'],
        'rules': {
            'indent': 'off'
        }
    }
]
```

## 入口文件

::: tip 入口文件
**文件路径：[src/main.js](https://github.com/yaimeet/yaim-vue-design/blob/master/src/main.js)，下面高亮的第二行，是全局注册机制入口，注册机制请继续往下看**

<<< @/src/main.js{2}
:::

### 注册机制

::: tip 注册入口
**文件路径：[src/register.js](https://github.com/yaimeet/yaim-vue-design/blob/master/src/register.js)**

<<< @/src/register.js
:::

**这个注册机制，会把所有需要全局注册的内容，引入进来，实施注册行为。**

### 组件

::: tip 全局组件
**组件存放目录：[src/components/global/](https://github.com/yaimeet/yaim-vue-design/tree/master/src/components/global)，这里面写的每一个组件，都要在下面的[index.js](https://github.com/yaimeet/yaim-vue-design/tree/master/src/components/global/index.js)中导出，才能被全局自动注册，组件名称以组件中的[`name`](https://github.com/yaimeet/yaim-vue-design/blob/master/src/components/global/hello.vue)属性为准**

<<< @/src/components/global/index.js
:::

### 过滤器

::: tip 全局过滤器
**过滤器存放目录：[src/filters/global/](https://github.com/yaimeet/yaim-vue-design/tree/master/src/filters/global)，这里面写的每一个过滤器，都要在下面的[index.js](https://github.com/yaimeet/yaim-vue-design/tree/master/src/filters/global/index.js)中导出，才能被全局自动注册，过滤器注册名称，以 下面文件导出的`key`为准**

<<< @/src/filters/global/index.js{9}
:::

### 指令

::: tip 全局指令
**指令存放目录：[src/directives/global/](https://github.com/yaimeet/yaim-vue-design/tree/master/src/directives/global)，这里面写的每一个指令，都要在下面的[index.js](https://github.com/yaimeet/yaim-vue-design/tree/master/src/directives/global/index.js)中导出，才能被全局自动注册，指令注册名称，以 下面文件导出的`key`为准**

<<< @/src/directives/global/index.js{9}
:::
