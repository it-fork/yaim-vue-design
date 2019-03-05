<template>
    <div class="vuex">
        <h1>store 示例</h1>
        <p>全局msg：{{getMsg}}</p>
        <button @click="updateMsg('update global msg')">更新全局 msg</button>
        <button @click="clearMsg()">清空全局 msg</button>
        <br>
        <hr>
        <br>
        <p>test msg 第1种方式输出：{{this['test/getMsg']}}</p>
        <p>test msg 第2种方式输出：{{testGetMsg}}</p>
        <p>test msg 第3种方式输出：{{testGetMsg2}}</p>
        <button @click="testUpdateMsg('update test msg')">更新test模块 msg</button>
        <button @click="testClearMsg()">清空test模块 msg</button>
    </div>
</template>
<script>
    import {
        mapGetters,
        mapActions,
        createNamespacedHelpers
    } from 'vuex'
    const testMap = createNamespacedHelpers('test')
    export default {
        name: 'test-vuex',
        computed: {
            ...mapGetters([
                'getMsg',
                'test/getMsg' // 局部模块第1种方式
            ]),
            ...mapGetters('test', {
                testGetMsg: 'getMsg' // 局部模块第2种方式
            }),
            ...testMap.mapGetters({
                testGetMsg2: 'getMsg' // 局部模块第3种方式
            })
        },
        created () {
            // console.log(this.testUpdateMsg('update test msg'))
        },
        methods: {
            // 此种方式适合注册全局store
            ...mapActions([
                'updateMsg',
                'clearMsg'
            ]),
            // 注册模块store 第一种方式：通过参数的形式传入模块路径
            ...mapActions('test', {
                testUpdateMsg: 'updateMsg'
            }),
            // 注册模块store 第二种方式：通过vuex的命名空间辅助函数createNamespacedHelpers生成指定命名空间下的各种辅助maps
            ...testMap.mapActions({
                testClearMsg: 'clearMsg'
            })
        }
    }
</script>
