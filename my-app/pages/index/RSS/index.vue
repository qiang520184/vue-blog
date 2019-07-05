<template>
    <div class="container">
        <div class="divInput" contenteditable @change="change" @blur="blur" @focus="focus">
            <span>123</span>
        </div>
    </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
    data() {
        return {
            text: '默认值'
        };
    },
    components: {
        Logo
    },
    methods: {
        input() {
            console.log('触发input');
        },
        change() {
            console.log('触发change');
        },
        blur() {
            console.log('触发blur');
        },
        focus() {
            console.log('触发focus');
        }
    }
};
</script>

<style lang="less" scope>
.divInput {
    width: 100px;
    height: 28px;
    margin: 20px auto;
    outline: 0;
    border: 0;
    line-height: 28px;
    text-indent: 10px;
    font-size: 14px;
    color: #606266;
    border:#999 solid 1px;
    border-radius: 4px;
    background: #fff;
}
</style>