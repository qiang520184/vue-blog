<template>
    <div id="layout">
        <Pc></Pc>
        <Iphone></Iphone>
    </div> 
</template>
<script>
import Pc from './pc'
import Iphone from './iphone';
export default {
    data() {
        return {
        };
    },
    components: {
        Pc,
        Iphone
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
