<template>
    <div class="filter">
        <h1>filter 示例</h1>
        <p>这是全局过滤器 `money` demo： 原值： {{ globalFilter }} , 新值： {{ globalFilter | money }}</p>
        <p>这是局部过滤器 `capitalize` demo： 原值： {{ scopeFilter }} , 新值： {{ scopeFilter | capitalize }}</p>
    </div>
</template>
<script>
    import capitalize from '@/filters/capitalize'

    export default {
        name: 'test-filter',
        filters: {
            capitalize
        },
        computed: {},
        data () {
            return {
                globalFilter: 1000,
                scopeFilter: 'scopeFilter'
            }
        }
    }
</script>
