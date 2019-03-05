<template>
    <div class="hello">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        props: {
            msg: String,
            default: () => {
                return 'this is global hello component'
            }
        }
    }
</script>

<style scoped lang="scss">
   .hello {
       p{
           color: red;
       }
   }
</style>
