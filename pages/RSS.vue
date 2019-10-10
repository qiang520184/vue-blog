<template>
<div class="container">
    <h1>ssr</h1>
    <!-- <div class="divInput">
            <div class="tagInput" contenteditable @change="change" @blur="blur" @focus="focus">
                <dir> </dir>
            </div> 
        </div>
        <input class="input" type="text"> -->
    <!-- <ul class="ul">
            <li class="li">
                <p class="p">
                    <span class="span">
                        12345678901234567890
                    </span>
                </p>
                <p class="p">
                    <span class="span">
                        aaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </span>
                </p>
            </li>
            <li class="li">
                <p class="p">
                    <span class="span">
                        12345678901234567890
                    </span>
                </p>
                <p class="p">
                    <span class="span">
                        看起来这跟渲染一个字符串模板非常类似嘻
                    </span>
                </p>
            </li>
            <li class="li">
                <p class="p">
                    <span class="span">
                        但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被建立了关联
                    </span>
                </p>
                <p class="p">
                    <span class="span">
                        所有东西都是响应式的。我们要怎么确认呢？打开你的浏览器的 JavaScript 控制台 
                    </span>
                </p>
            </li> 
            <li class="li">
                <p class="p">
                    <span class="span">
                        (就在这个页面打开)，并修改 app.message 的值，你将看到上例相应地更新。除了文本插值
                    </span>
                </p>
                <p class="p">
                    <span class="span">
                        除了文本插值，我们还可以像这样来绑定元素特性：
                    </span>
                </p>
            </li>
            <li class="li">
                <p class="p">
                    <span class="span">
                        这里我们遇到了一点新东西。你看到的 v-bind 特性被称为指令。指令带有前缀 v-，以表示它们是 Vue 提供的特殊特性
                    </span>
                </p>
                <p class="p">
                    <span class="span">
                        可能你已经猜到了，它们会在渲染的 DOM 上应用特殊的响应式行为。在这里，该指令的意思是：“将这个元素节点的 title 特性和 Vue 实例的 message 属性保持一致
                    </span>
                </p>
            </li>
        </ul> -->
    <!-- <div class="wrap">
        <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos labore sit vel itaque delectus atquequos magnam assumenda quod architecto perspiciatis animi.
        </div>
    </div> -->
</div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
    data() {
        return {
            text: '默认值',
            data: [{
                    text: '我们已经成功创建了第一个 Vue 应用！哈'
                },
                {
                    text: '看起来这跟渲染一个字符串模板非常类似嘻'
                }
            ]
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
        blur(e) {
            console.log('触发blur', e);
        },
        focus(e) {
            console.log('触发focus', e);
        }
    }
};
</script>

<style lang="less" scoped>

.wrap .text {
    float: right;
    margin-left: -5px;
    width: 100%;
    word-break: break-all;
}

.wrap:before {
    float: left;
    width: 5px;
    content: '';
    height: 40px;
}

.wrap:after {
    float: right;
    content: "...";
    height: 20px;
    line-height: 20px;
    text-align: right;
    /* 为三个省略号的宽度 */
    width: 3em;
    /* 使盒子不占位置 */
    margin-left: -3em;
    /* 移动省略号位置 */
    position: relative;
    left: 100%;
    top: -20px;
    padding-right: 5px; //   background: red;
}

// .home .container {
//     background: #fff;
// }

.input {
    width: 500px;
    height: 34px;
    margin: 60px auto;
    border: 0;
    outline: none;
    border: 1px solid #fff;
}

.divInput {
    width: 500px;
    height: 34px;
    margin: 0 auto;
    border: 1px solid #fff;
}

.tagInput {
    width: 100%;
    height: 100%;
    margin: 10px auto;
    outline: 0;
    border: 0;
    line-height: 28px;
    text-indent: 12px;
    font-size: 14px;
    color: #606266;
    border: #999 solid 1px;
    border-radius: 4px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    div {
        width: auto;
        height: 20px;
        padding: 0 4px;
        margin-left: 8px;
        border: 1px solid red;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-indent: 0;
    }
}
</style>