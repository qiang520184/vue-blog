<template>
    <div class="iphone">
        <div class="iphone-left" v-show="iphoneMenu">
            <div class="iphone-left-content">
                <div class="focusInfo-top">
                    <a href="/">
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
                    <v-navMenu :date="headerDate" direction="column"></v-navMenu>
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
                    <i
                        :class="iphoneMenu ? 'el-icon-close' : 'el-icon-menu'"
                        @click="iphoneShow('iphoneMenu')"
                    ></i>
                    <i
                        class="el-icon-search"
                        v-show="!iphoneSearchInput"
                        @click="iphoneShow('iphoneSearch')"
                    ></i>
                    <v-input
                        v-show="iphoneSearchInput"
                        v-model="input"
                        class="search"
                        placeholder="请输入搜索内容"
                        :clear="true"
                    />
                </div>
                <nuxt class="nuxt"/>
            </div>
            <div class="iphone-right-mask" v-show="iphoneMenu"></div>
        </div>
    </div>
</template>
<script>
import {CARALOG} from '../utils/headerTab';
import {defaultInfo, FocusInfoIcon} from 'config/index';
export default {
    name: 'iphone',
    data() {
        return {
            input: '',
            iphoneMenu: false,
            iphoneSearchInput: false,
            info: {...defaultInfo},
            focusInfoIcon: FocusInfoIcon,
            headerDate: [...CARALOG]
        }
    },
    components: {
        // NavMenu
    },
    created() {
        console.log(FocusInfoIcon, 'FocusInfoIconFocusInfoIcon')
    },
    methods: {
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
</style>