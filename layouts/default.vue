<template>
    <div id="layout">
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
                        <nav-menu :date="headerDate"></nav-menu>
                    </div>
                    <div class="header-right">
                        <div v-show="!pcSearchInput" class="pc-header-right-icon">
                            <i class="el-icon-search" @click="show('search')"></i>
                        </div>
                        <div v-show="pcSearchInput" class="header-right-search">
                            <v-input
                                v-model="input" 
                                placeholder="请输入搜索内容"
                                :clear="true" />
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
                        <nav-menu v-show="ipadMenu" :date="headerDate"></nav-menu>
                    </div>
                    <div class="header-right">
                        <div v-show="!ipadSearchInput" class="ipad-header-right-icon">
                            <i :class="ipadMenu ? 'el-icon-close' : 'el-icon-menu'" @click="show('ipadMenu')"></i>
                            <i class="el-icon-search" @click="show('ipadSearch')"></i>
                        </div>
                        <div v-show="ipadSearchInput" class="header-right-search">
                            <v-input
                                v-model="input" 
                                placeholder="请输入搜索内容"
                                :clear="true" />
                        </div>
                    </div>
                </header>   
            </div>
            <nuxt class="nuxt"/>
            <footer class="footer">
                <p class="year">© 2018</p>
                <p class="copyright">Theme Sakura  by Mashiro&qiang, Powered by Hexo, Hosted by Coding Pages</p>
            </footer>
        </div>
        <div class="iphone">
            <div class="iphone-left" v-show="iphoneMenu">
                <div class="iphone-left-content">
                    <div class="focusInfo-top">
                        <a href="/" >
                            <img v-lazy="`${info.cdn}${info.logo}`">
                        </a>
                    </div>
                    <div class="logolink">
                        <a href="/">
                            <span v-for="(item, index) in logolink" :key="index">{{item.title}}</span>
                        </a>
                    </div>
                    <ul class="focusInfo-list"> 
                        <li 
                            v-for="(item, index) in focusInfoIcon.filter(item => item.type === '_blank')" 
                            :key="index"
                            class="focusInfo-list-item"
                            @click="focusInfoList(item)"
                        >
                            <img class="focusInfo-list-img" v-lazy="item.img" :alt="info.imgAlt">
                        </li>
                    </ul>
                    <div v-show="iphoneMenu" class="iphone-left-content">
                        <nav-menu :date="headerDate"  direction="column" ></nav-menu>
                    </div>
                    <footer class="footer">
                    <p class="year">© 2018</p>
                    <p class="copyright">熬最晚的夜，喝最贵的枸杞</p>
                </footer>
                </div>
                
            </div>
            <div class="iphone-right">
                <div class="iphone-right-content">
                    <div class="right-top" @mouseleave="leave('iphoneMenu')">
                        <i :class="iphoneMenu ? 'el-icon-close' : 'el-icon-menu'" @click="iphoneShow('iphoneMenu')"></i>
                        <i class="el-icon-search" v-show="!iphoneSearchInput" @click="iphoneShow('iphoneSearch')"></i>
                        <v-input
                            v-show="iphoneSearchInput"
                            v-model="input"
                            class="search"
                            placeholder="请输入搜索内容"
                            :clear="true" />

                    </div>
                    <nuxt class="nuxt"/>
                </div>
                <div class="iphone-right-mask" v-show="iphoneMenu"></div>
            </div>
        </div>
    </div> 
</template>
<script>
import NavMenu from 'components/navMenu';
import vInput from 'components/input';
import {CARALOG} from '../utils/headerTab';
import {Logolink} from 'config/index';
import {defaultInfo, FocusInfoIcon} from 'config/index';
export default {
    data() {
        return {
            input: '',
            pcMenu: false,
            ipadMenu: false,
            iphoneMenu: false,
            pcSearchInput: false,
            ipadSearchInput: false,
            iphoneSearchInput: false,
            info: {...defaultInfo},
            logolink: [...Logolink],
            headerDate: [...CARALOG],
            focusInfoIcon: [...FocusInfoIcon]
        };
    },
    components: {
        NavMenu,
        vInput
    },
    mounted() {
        console.log(this.focusInfoIcon);
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
    overflow: hidden;
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
html {
    font-size: 16px;
}
@media screen and (min-width: 375px) {
    html {
        /* iPhone6的375px尺寸作为16px基准，414px正好18px大小, 600 20px */
        // font-size: calc(100% + 2 * (100vw - 375px) / 39);
        font-size: calc(16px + 2 * (100vw - 375px) / 39);
    }
}
@media screen and (min-width: 414px) {
    html {
        /* 414px-1000px每100像素宽字体增加1px(18px-22px) */
        // font-size: calc(112.5% + 4 * (100vw - 414px) / 586);
        font-size: calc(18px + 4 * (100vw - 414px) / 586);
    }
}
@media screen and (min-width: 600px) {
    html {
        /* 600px-1000px每100像素宽字体增加1px(20px-24px) */
        // font-size: calc(125% + 4 * (100vw - 600px) / 400);
        font-size: calc(20px + 4 * (100vw - 600px) / 400);
    }
}
@media screen and (min-width: 1000px) {
    html {
        /* 1000px往后是每100像素0.5px增加 */
        // font-size: calc(137.5% + 6 * (100vw - 1000px) / 1000);
        font-size: calc(22px + 6 * (100vw - 1000px) / 1000);
    }
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
@media only screen and (min-width : 375px) and (max-width: 768px) {
    #layout {
        width: 100%;
        height: 100%;
    }
    .wrap {
        display: none;
    }
    .iphone {
        width: 100%;
        height: 100%;
        display: flex;
        // overflow: hidden;
        &-left {
            width: 60%;
            height: 100%;
            flex-shrink: 0;
            overflow-y: auto;
            &-content {
                height: auto;
                .focusInfo-top {
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    a {
                        display: flex;
                        width: 90px;
                        height: 90px;
                        img {
                            display: flex;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .logolink {
                    line-height: 40px;
                    text-align: center;
                    color: #333;
                    font-weight: 900;
                    font-family: 'Ubuntu', sans-serif;
                    letter-spacing: 1.5px;
                }
                .focusInfo-list {
                    padding: 20px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &-item {
                        width: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .focusInfo-list-img {
                            display: flex;
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
                .footer {
                    width: 100%;
                    height: 60px;
                    padding-bottom: 10px;
                    text-align: center;
                    .year {
                        line-height: 30px;
                        text-align: center;
                    }
                    .copyright {
                        line-height: 30px;
                        color: #b9b9b9;
                        font-size: 14px;
                    }
                }
            }
        }
        &-right {
            position: relative;
            width: 100%;
            height: 100%;
            flex-shrink: 0;
            overflow-y: auto;
            &-content {
                height: auto;
                overflow-y: auto;
                .right-top {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    z-index: 9;
                    i {
                        font-size: 24px;
                        position: relative;
                        z-index: 99;
                        margin: 0 20px;
                    }
                }
            }
            &-mask {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height:100%;
                background: rgba(0, 0, 0, .5);
            }
        }
    }
}
@media only screen and (min-width : 768px) and (max-width: 1024px) {
    .iphone,
    .pc {
        display: none;
    }
    .header {
        &-left {
            flex: none;
            float: left;
            margin-left: 20px;
        }
        &-content {
            margin: 0 20px;
        }
        &-right {
            flex: none;
            width: auto;
            margin-right: 20px;
            &-search {
                width: 250px;
                padding: 0;
            }
        }
    }
}
@media only screen and (min-width : 1024px) {
    .iphone,
    .ipad {
        display: none;
    }
}
</style>
