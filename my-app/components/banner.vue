<template>
    <figure class="figure">
        <template v-if="data && data.length">
            <div slot="swiper" class="swiper">
                <img v-for="(item, index) in data" :src="item.img" :key="index" alt="">
                <img :src="data[0].img" key="img1" alt="">
            </div>
        </template>
        <template>
            <div slot="mask" class="mask">
                <div class="focusInfo">
                    <div class="header-tou">
                        <a href="/">
                            <img v-lazy="`${info.cdn}${info.logo}`">
                        </a>
                    </div>
                    <div class="header-info">
                        <p>Live your life with passion! With some drive!</p>
                        <div class="top-social_v2">
                        <!-- <li id="bg-pre">
                            <img class="flipx" src="https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.3.2/img/other/next-b.svg">
                        </li> -->
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </figure>
</template>
<script>
import {defaultInfo} from 'config/index';
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
            info: {...defaultInfo}
        };
    }
};
</script>
<style lang='less'>
.figure {
    position: relative;
    width: 100%;
    height: 100%;
    .swiper {
        display: flex;
        overflow-x: auto;
        img {
            width: 100%;
            height: 100%;
            display: block;  
        }
    }
    .mask {
        position: absolute;
        top: 300px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0 auto;
        border: 1px solid #f60;
        width: 700px;
        height: 400px;

    }
}
</style>
