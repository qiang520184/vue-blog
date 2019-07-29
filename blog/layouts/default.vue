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
        <nuxt class="nuxt"/>
        <footer class="footer">
            <p class="year">© 2018</p>
            <p class="copyright">Theme Sakura  by Mashiro&qiang, Powered by Hexo, Hosted by Coding Pages</p>
        </footer>
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
#__layout {
    width: 100%;
    height: 100%;
}
#layout {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    .nuxt {
        flex: 1;
    }
}
body {
    cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/default.cur),default;
}
a {
    cursor: url(https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/pointer.cur),auto;
}

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9;
    &-left {
        flex: 2;
        min-width: 150px;
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
    &-content {
        flex: 6;
        min-width: 900px;
        height: 100%;
        margin: 0 auto;
    }
    &-right {
        flex: 2;
        flex-shrink: 0;
        min-width: 150px;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &-search {
            padding: 0 40px;
            width: 100%;
            height: 32px;
            display: flex;
            align-items: center;

        }
        &>.el-icon-search:hover {
            color: #E6A23C;
        }
    }
}
.header:hover {
    background: #fff;
}
// .nuxt {
//     min-height: 100%;
// }
.container {
    width: 920px;
    height: 100%;
    padding: 0 40px;
    margin: 70px auto 0;
}
.footer {
    width: 100%;
    height: 140px;
    flex-shrink: 0;
    text-align: center;
    .year {
        line-height: 30px;
        text-align: center;
    }
    .copyright {
        line-height: 50px;
        color: #b9b9b9;
    }
}
</style>
