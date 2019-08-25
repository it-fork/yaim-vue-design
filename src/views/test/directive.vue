<template>
    <div class="directive">
        <h1>directive 示例</h1>
        <input placeholder="不加全局指令" type="text">
        <br>
        <input placeholder="加全局指令：自动得到焦点" v-autofocus type="text">
        <br><hr><hr><br>
        <input placeholder="不加局部指令的placeholder" type="text">
        <br>
        <input placeholder="加局部指令：会被替换placeholder" v-inputPlaceholder type="text">
    </div>
</template>
<script>
    import inputPlaceholder from '@/directives/inputPlaceholder'

    export default {
        name: 'test-directive',
        directives: {
            inputPlaceholder
        }
    }
</script>
