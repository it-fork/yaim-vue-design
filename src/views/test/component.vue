<template>
    <div class="component">
        <h1>组件 示例</h1>
        <h2>这是全局组件Hello组件</h2>
        <hello :msg="'示例组件引入的全局hello组件'"></hello>
        <h2>这是手动引入的组件HelloWord组件</h2>
        <hello-word :msg="'示例组件手动引入的hello-word组件'"></hello-word>
    </div>
</template>
<script>
    import HelloWord from '@/components/hello-world'
    export default {
        name: 'test-component',
        components: {
            HelloWord
        },
        computed: {},
        created () {
            // console.log(this.testUpdateMsg('update test msg'))
        },
        methods: {}
    }
</script>
