<template>
    <div class="wrap">
        <div class="pc">
            <header class="header" @mouseleave="leave('pcMenu')">
                <div class="header-left" v-show="!pcMenu">
                    <div class="logolink">
                        <a href="/">
                            <span v-for="(item, index) in logolink" :key="index">{{item.title}}</span>
                        </a>
                    </div>
                </div>
                <div class="header-content">
                    <v-navMenu :date="headerDate"></v-navMenu>
                </div>
                <div class="header-right">
                    <div v-show="!pcSearchInput" class="pc-header-right-icon">
                        <i class="el-icon-search" @click="show('search')"></i>
                    </div>
                    <div v-show="pcSearchInput" class="header-right-search">
                        <v-input v-model="input" placeholder="请输入搜索内容" :clear="true"/>
                    </div>
                </div>
            </header>
        </div>
        <div class="ipad">
            <header class="header" @mouseleave="leave('ipadMenu')">
                <div class="header-left" v-show="!ipadMenu">
                    <div class="logolink">
                        <a href="/">
                            <span v-for="(item, index) in logolink" :key="index">{{item.title}}</span>
                        </a>
                    </div>
                </div>
                <div class="header-content">
                    <v-navMenu v-show="ipadMenu" :date="headerDate"></v-navMenu>
                </div>
                <div class="header-right">
                    <div v-show="!ipadSearchInput" class="ipad-header-right-icon">
                        <i
                            :class="ipadMenu ? 'el-icon-close' : 'el-icon-menu'"
                            @click="show('ipadMenu')"
                        ></i>
                        <i class="el-icon-search" @click="show('ipadSearch')"></i>
                    </div>
                    <div v-show="ipadSearchInput" class="header-right-search">
                        <v-input v-model="input" placeholder="请输入搜索内容" :clear="true"/>
                    </div>
                </div>
            </header>
        </div>
        <nuxt class="nuxt"/>
        <!-- <footer class="footer">
            <p class="year">© 2018</p>
            <p
                class="copyright"
            >Theme Sakura by Mashiro&qiang, Powered by Hexo, Hosted by Coding Pages</p>
        </footer> -->
    </div>
</template>
<script>
import {CARALOG} from '../utils/headerTab';
import {Logolink} from 'config/index';

export default {
    name: 'pc',
    data() {
        return {
            input: '',
            pcMenu: false,
            pcSearchInput: false,
            ipadMenu: false,
            ipadSearchInput: false,
            headerDate: [...CARALOG],
            logolink: [...Logolink],
            param: {
                aaa: {
                    name: '张三',
                    age: 18,
                    userId: '1q2w3e'
                },
                bbb: 12,
                ccc: [123,'123',123,12,3],
                ddd: '',
                eee: '123',
            }
        }
    },
    created() {
        // this.$http.get('/api/get?id=123&user=qiang').then(res => console.log(res))

        // this.$http.post({
        //     url: '/api/post/haha/ol',
        //     data: this.param
        // }).then(res => console.log(res))

        // this.$http.post({
        //     url: '/api/post/haha/ol12',
        //     data: this.param,
        //     formData: true,
        // }).then(res => console.log(res))



    },
    methods: {
        oncontextmenu() {
            console.log('haha');
        },
        show(type) {
            if (type === 'ipadMenu') {
                this.ipadMenu = !this.ipadMenu;
            } else {
                this.pcSearchInput = !this.pcSearchInput;
                if (this.pcSearchInput) {
                    this.ipadMenu = false;
                }
            }
        },
        iphoneShow(type) {
            console.log(type, this.iphoneMenu);
            if (type === 'iphoneSearch' && !this.iphoneMenu) {
                this.iphoneSearchInput = !this.iphoneSearchInput;
            } else {
                if (type === 'iphoneMenu' && !this.iphoneMenu) {
                    this.iphoneMenu = !this.iphoneMenu;
                    this.iphoneSearchInput = false;
                } else if (type === 'iphoneMenu' && this.iphoneMenu) {
                    this.iphoneMenu = false;
                }
            }
        },
        leave(item) {
            if (item === 'ipadMenu') {
                this.ipadSearchInput = false;
                this.ipadMenu = false;
            } else if (item === 'iphoneMenu') {
                this.iphoneSearchInput = false;
            } else {
                this.pcSearchInput = false;
            }
        },
        focusInfoList(item) {
            window.open(item.path);
        }
    }
}
</script>
<style lang="less">
.wrap {
    flex: 1;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9;
    // background: #E6A23C;
    &-left {
        flex: 2;
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
                background-color: rgba(255, 255, 255, .5);
                border-radius: 6px;
                margin-right: 5px;
            }
        }
    }
    &-content {
        flex: 6;
        height: 100%;
        margin: 0 auto;
    }
    &-right {
        flex: 2;
        flex-shrink: 0;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .pc-header-right-icon {
            margin-right: 20px;
        }
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
</style>