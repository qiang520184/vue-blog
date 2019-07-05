<template>
    <div id="layout">
        <header class="header">
            <div class="header-left">
                <div class="logolink">
                    <a href="/">
                        <span v-for="(item, index) in logolink" :key="index">{{item.title}}</span>
                    </a>
                </div>
            </div>
            <div class="header-content">
                <nav-menu :date="headerDate"></nav-menu>
            </div>
            <div class="header-right">
                <div v-show="searchInput" class="header-right-search">
                    <v-input  v-model="input" 
                              placeholder="请输入搜索内容" 
                              :clear="true" />
                </div>
            </div>
        </header>
        <nuxt-child/>
    </div> 
</template>
<script>
import NavMenu from 'components/navMenu';
import vInput from 'components/input';
import {CARALOG} from '../utils/headerTab';
import {Logolink} from 'config/index';
export default {
    data() {
        return {
            headerDate: [...CARALOG],
            input: '',
            searchInput: true,
            logolink: [...Logolink]
        };
    },
    components: {
        NavMenu,
        vInput
    },
    methods: {
        oncontextmenu() {
            console.log('haha');
        }
    }
};
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: #606266;
}
html,
body,
#__nuxt,
#__layout,
#layout {
    width: 100%;
    height: 100%;
}
body {
    cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur),default;
}
a {
    cursor:url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur),auto
}
.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9;
    .header-left {
        flex: 2;
        min-width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .logolink {
            display: flex;
            span {
                font-size: 24px;
            }
            span:first-child {
                background-color: rgba(255,255,255,.5);
                border-radius: 6px;
                margin-right: 5px;
            }
        }
    }
    .header-content {
        flex: 9;
        min-width: 900px;
        height: 100%;
        margin: 0 auto;
    }
    .header-right {
        flex: 2;
        min-width: 200px;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        .header-right-search {
            width: auto;
            height: 32px;
            display: flex;
            align-items: center;
            position: absolute;
            right: 23px;
        }
        &>.el-icon-search {
            position: absolute;
            right: 30px;
            cursor: pointer;
        }
        &>.el-icon-search:hover {
            color: #E6A23C;
        }
    }
}
.header:hover {
    background: #fff;
}
</style>
