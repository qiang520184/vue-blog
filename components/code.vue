<template>
    <div v-highlight>
        <pre>
        <code :class="type">{{data}}</code>
    </pre>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'html'
        }
    },
    data() {
        return {

        };
    }
};
</script>

<style lang="less" scope>

</style>

