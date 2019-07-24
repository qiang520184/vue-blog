<template>
<div class="markdown">
    <h1>markdown</h1>
    <header class="pattern-header single-header">
        <h1 class="entry-title">js中全等和等于</h1>
        <p class="entry-census">
            <span>
        </span>
            <span>
        <a >強い</a>
        </span>
            <span class="bull">·</span> 2019-6-17
            <span class="bull">·</span>
            <span id="busuanzi_value_page_pv">5</span>次阅读
        </p>
    </header>
    <!-- <Code type="vue" :data="code"/> -->
    <Code type="html" :data="code" />
    <Code type="hljs-comment" :data="html" />
    <Code type="css" :data="css" />
</div>
</template>

<script>
import Code from 'components/code';
export default {
    head() {
        return {
            meta: [{
                name: 'keywords',
                content: '最强王者,今晚吃鸡'
            }]
        };
    },
    data() {
        return {
            code: `
<slot name="submenu-list">
    <ul class="submenu-list" 
        v-if="item.children && item.children.length">
        <li class="submenu-item" v-for="(el, ind) in item.children" :key="ind">
            <slot name="submenu-icon">
                <p class="submenu-icon">
                    <i class="el-icon-star-off"></i>
                </p>   
            </slot> 
            <nuxt-link :to="el.path ? el.path : ''" class="submenu-text">{{el.title}}</nuxt-link>
        </li>
    </ul>
</slot>`,
            html: `
for (const Component of Components) {
    const componentOrPromise = Component()
    if (componentOrPromise instanceof Promise) {
        componentOrPromise.catch(() => {})
    }
    Component.__prefetched = true
}`,
            css: `
    #nuxt-loading {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        animation: nuxtLoadingIn 10s ease;
        -webkit-animation: nuxtLoadingIn 10s ease;
        animation-fill-mode: forwards;
        overflow: hidden;
    }`
        };
    },
    components: {
        Code
    },
    mounted() {},
    methods: {}
};
</script>

<style lang="less" scope>
.markdown {
    position: relative;
    top: 75px;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
