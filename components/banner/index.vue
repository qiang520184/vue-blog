<template>
    <figure class="figure">
        <div class="swiper">
            <img class="background" v-lazy="background" alt="">
            <div class="mask" slot="mask">
                <div class="focusInfo-top">
                    <a href="/" >
                        <img v-lazy="`${info.cdn}${info.logo}`">
                    </a>
                </div>
                <div class="focusInfo">
                    <div>Live your life with passion! With some drive!</div>
                    <ul class="focusInfo-list"> 
                        <li 
                            v-for="(item, index) in focusInfoIcon" 
                            :key="index" 
                            :class="{'focusInfo-list-item-left': index === 0}"
                            @click="focusInfoList(item)"
                        >      
                            <template v-if="item.type ==='hover'">
                                <img v-lazy="item.img" class="hoverImg" :alt="info.imgAlt">
                                <div class="focusInfo-list-hover-img">
                                    <img v-lazy="item.hoverImg" :alt="info.imgAlt">
                                </div>
                            </template>
                            <template v-else>
                                <img v-lazy="item.img" :alt="info.imgAlt">
                            </template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </figure>
</template>
<script>
import {defaultInfo, FocusInfoIcon} from 'config/index';
export default {
    name: 'banner',
    props: {
        data: {
            type: Array,
            default: []
        },
        direction: {
            type: String,
            default: 'horizontal'
        }
    },
    data() {
        return {
            info: {...defaultInfo},
            num: 1
        };
    },
    computed: {
        focusInfoIcon() {
            let left = {
                img: `${defaultInfo.cdn}/img/other/next-b.svg`
            };
            return FocusInfoIcon;
        },
        background() {
            return `${defaultInfo.cdn}/images/cover/${this.num}.jpg`;
        }
    },
    methods: {
        focusInfoList(item) {
            switch (item.type) {
                case '_blank':
                    window.open(item.path);
                    break;
                case 'left':
                    this.num -= 1;
                    if (this.num < 0) {
                        this.num = this.data.length;
                    }
                    break;
                case 'right':
                    this.num += 1;
                    if (this.num > this.data.length) {
                        this.num = 0;
                    }
                    break;
                default:
                    break;
            }
        }
    }
};
</script>
<style lang='less'>
@keyframes hoverImg {
    from {
        opacity: 0;
    }
    to {
        transform: translateY(-60px);
        opacity: 1;
    }
}
.figure {
    width: 100%;
    height: 100%;
    .swiper {
        position: relative;
        width: 100%;
        height: auto;
        .background {
            display: block;
            width: 100%;
            height: auto;
        }
        .mask {
            position: absolute;
            top: calc(50% - 150px);
            right: 0;
            bottom: 0;
            left: 0;
            margin: 0 auto;
            width: 700px;
            height: 300px;
            .focusInfo-top {
                height: 150px;
                display: flex;
                justify-content: center;
                a {
                    display: flex;
                    width: 120px;
                    height: 120px;
                    img {
                        display: flex;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .focusInfo {
                height: 100px;
                font-size: 16px;
                background: rgba(0, 0, 0, .5);
                border-radius: 25px;
                div {
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-weight: 700;
                    font-family: 'Ubuntu',sans-serif;
                    color: #eaeadf;
                }
                &-list {
                    height: 40px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &-item-left {
                        transform: rotateZ(180deg)
                    }
                    li {
                        position: relative;
                        width: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                            display: flex;
                            width: 30px;
                            height: 30px;
                        }
                        .hoverImg:hover+.focusInfo-list-hover-img {
                            animation: hoverImg 1s;
                            animation-fill-mode: forwards;
                        }
                        .focusInfo-list-hover-img {
                            position: absolute;
                            top: 120px;
                            left: calc(50% - 50px);
                            width: 80px;
                            height: 80px;
                            padding: 10px;
                            background: rgba(0,0,0,.4);
                            border-radius: 10px;
                            opacity: 0;
                            img {
                                display: flex;
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .focusInfo-list-hover-img:after {
                            content: '';
                            position: absolute;
                            top: -30px;
                            left: calc(50% - 15px);
                            border-width: 15px;
                            border-style: solid;
                            border-color: transparent transparent rgba(0,0,0,.4) transparent;
                        }
                    }
                }
            }
        }
        .mask:after {
            content: '\f078';
            position: absolute;
            top: 190%;
            left: 50%;
            width: 30px;
            color: #fff;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: inherit;
            transform: scale(1.5,1);
        }
    }
}
@media only screen and (min-width : 375px) and (max-width: 768px) {
   .figure {
        .swiper {
            position: relative;
            .mask {
                top: calc(50% - 70px);
                width: 80%;
                height: 200px;
                .focusInfo-top {
                    height: 60px;
                    a {
                        display: flex;
                        width: 50px;
                        height: 50px;
                    }
                }
                .focusInfo {
                    height: auto;
                    font-size: 12px;
                    background: rgba(0, 0, 0, .5);
                    border-radius: 16px;
                    div {
                        height: 26px;
                        line-height: 26px;
                        text-align: center;
                        font-weight: 700;
                        font-family: 'Ubuntu',sans-serif;
                        color: #eaeadf;
                    }
                    &-list {
                        height: 30px;
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &-item-left {
                            transform: rotateZ(180deg)
                        }
                        li {
                            position: relative;
                            width: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img {
                                display: flex;
                                width: 20px;
                                height: 20px;
                            }
                            .hoverImg:hover+.focusInfo-list-hover-img {
                                animation: hoverImg 1s;
                                animation-fill-mode: forwards;
                            }
                            .focusInfo-list-hover-img {
                                position: absolute;
                                top: 120px;
                                left: calc(50% - 50px);
                                width: 80px;
                                height: 80px;
                                padding: 10px;
                                background: rgba(0,0,0,.4);
                                border-radius: 10px;
                                opacity: 0;
                                img {
                                    display: flex;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .focusInfo-list-hover-img:after {
                                content: '';
                                position: absolute;
                                top: -30px;
                                left: calc(50% - 15px);
                                border-width: 15px;
                                border-style: solid;
                                border-color: transparent transparent rgba(0,0,0,.4) transparent;
                            }
                        }
                    }
                }
            }
            .mask:after {
                content: '\f078';
                position: absolute;
                top: 190%;
                left: 50%;
                width: 30px;
                color: #fff;
                font: normal normal normal 14px/1 FontAwesome;
                font-size: inherit;
                transform: scale(1.5,1);
            }
        }
    }
}
@media only screen and (min-width : 768px) and (max-width: 1024px) {
    .figure {
        .swiper {
            position: relative;
            .mask {
                top: calc(50% - 100px);
                width: 600px;
                height: 300px;
                .focusInfo-top {
                    height: 100px;
                    a {
                        display: flex;
                        width: 90px;
                        height: 90px;
                    }
                }
                .focusInfo {
                    height: 90px;
                    font-size: 14px;
                    background: rgba(0, 0, 0, .5);
                    border-radius: 20px;
                    div {
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        font-weight: 700;
                        font-family: 'Ubuntu',sans-serif;
                        color: #eaeadf;
                    }
                    &-list {
                        height: 40px;
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &-item-left {
                            transform: rotateZ(180deg)
                        }
                        li {
                            position: relative;
                            width: 50px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img {
                                display: flex;
                                width: 26px;
                                height: 26px;
                            }
                            .hoverImg:hover+.focusInfo-list-hover-img {
                                animation: hoverImg 1s;
                                animation-fill-mode: forwards;
                            }
                            .focusInfo-list-hover-img {
                                position: absolute;
                                top: 120px;
                                left: calc(50% - 50px);
                                width: 80px;
                                height: 80px;
                                padding: 10px;
                                background: rgba(0,0,0,.4);
                                border-radius: 10px;
                                opacity: 0;
                                img {
                                    display: flex;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .focusInfo-list-hover-img:after {
                                content: '';
                                position: absolute;
                                top: -30px;
                                left: calc(50% - 15px);
                                border-width: 15px;
                                border-style: solid;
                                border-color: transparent transparent rgba(0,0,0,.4) transparent;
                            }
                        }
                    }
                }
            }
            .mask:after {
                content: '\f078';
                position: absolute;
                top: 190%;
                left: 50%;
                width: 30px;
                color: #fff;
                font: normal normal normal 14px/1 FontAwesome;
                font-size: inherit;
                transform: scale(1.5,1);
            }
        }
    }
}
@media only screen and (min-width : 1024px) {

}
</style>
