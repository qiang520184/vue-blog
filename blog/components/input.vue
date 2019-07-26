<template>
    <div class="my-input">
        <input class="input"
            autocomplete="off"
            :type="type" 
            :placeholder="placeholder"
            v-model="val"
            @keyup.enter="enter"
            @focus="focus"
            @blur="blur">
        <slot>
            <button class="input-button">
                <span v-if="clear" @click="clearVal" class="input-close">
                    <i class="el-icon-close"></i>
                </span>
                <span class="input-search">
                    <i class="el-icon-search"></i>
                </span>
            </button>
        </slot>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'type'
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        clear: {
            type: Boolean,
            default: false
        },
        blur: {
            type: Function,
            default: () => {}
        },
        focus: {
            type: Function,
            default: () => {}
        },
        enter: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            val: this.value
        };
    },
    computed: {

    },
    mounted() {
    },
    methods: {
        clearVal() {
            this.val = '';
        }
    }
};
</script>
<style lang="less">
.my-input {
    width: 100%;
    height: 100%;
    display: flex;
}
.input {
    flex: 1;
    flex-shrink: 0;
    outline: 0;
    border: 0;
    border-radius: 4px 0 0 4px;
    text-indent: 6px;
    border: 1px solid #DCDFE6;
    border-right: 0;
}
.input-button {
    flex-shrink: 0;
    width: auto;
    height: 100%;
    padding: 0 6px;
    display: flex;
    align-items: center;
    outline: 0;
    border: 0;
    border: 1px solid #DCDFE6;
    border-left: 0;
    border-radius: 0 4px 4px 0;
    .input-close {
        width: 20px;
        font-size: 16px;
        opacity: .6;
        cursor: pointer;
    }
    .input-search {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        font-size: 20px;
        opacity: .6;
        cursor: pointer;
    }
    .input-close:hover,
    .input-search:hover {
        opacity: 1;
    }
}
.input::-webkit-input-placeholder {
    color:#C0C4CC;
}
.input:focus {
    border: 1px solid #E6A23C;
    border-right: 0;
}
.input:focus + .input-button {
    border: 1px solid #E6A23C;
    border-left: 0;
}
.small {
    font-size: 28px;
}
</style>
