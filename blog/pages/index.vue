<template>
    <div class="home" @contextmenu.prevent="oncontextmenu($event)">
        <div class="banner">
            <v-banner :data="bannerData" />
        </div>
        <div class="article">
            <div 
                class="article-list"
                v-for="(item, index) in ArticleData" 
                :key="index"
                @click="to(item.classifyPath)"
            >
                <div class="article-list-left">
                    <img :src="item.img" alt="">
                </div>
                <div class="article-list-right">
                    <div class="article-list-date">
                        {{item.time}}
                    </div>
                    <div class="article-list-title">
                        <a :href="item.path" >{{item.title}}</a>
                    </div>
                    <div class="article-list-classify">
                        <a :href="item.classifyPath" >{{item.typeName}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vBanner from 'components/banner';
import {Banner, ArticleList} from 'config';
export default {
    data() {
        return {
            bannerData: [...Banner],
            ArticleData: [...ArticleList]
        };
    },
    components: {
        vBanner
    },
    methods: {
        change(e) {
            console.log(e.target.value);
        },
        enter() {
            console.log('回车');
        },
        oncontextmenu(e) {
            console.log(e);
        },
        to(path) {
            this.$router.push(path);
        }
    }
};
</script>

<style lang="less">
@keyframes article-list-show {
    from {
        box-shadow: 0 1px 20px -6px rgba(0,0,0,.5);
    }
    to {
        box-shadow: 0 1px 20px 2px rgba(0,0,0,.5);
    }
}
.home {
    width: 100%;
    height: auto;
    position: relative;
    // display: flex;
    // flex-direction: column;
    .container {
        // flex: 1;
        width: 100%;
        height: 100%;
        // background: #ccc;
    }
    .banner {
        width: 100%;
        height: 969px;
        overflow: hidden;
    }
    .article {
        width: auto;
        height: 100%;
        &-list {
            width: 850px;
            height: 225px;
            display: block;
            padding: 20px 50px;
            clear:both;
            margin: 20px auto;
            box-shadow: 0 1px 20px -6px rgba(0, 0, 0, .5);
            border-radius: 10px;
            &-left {
                width: 500px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 400px;
                    height: 225px;
                    display: flex;
                    object-fit: cover;
                }
            }
            &-right {
                width: 350px;
                height: 100%;
                .article-list-date {
                    color: #888;
                    font-size: 12px;
                }
                .article-list-title {
                    height: 50px;
                    line-height: 50px;
                    display: block;
                }
                .article-list-title a:hover,
                .article-list-classify a:hover {
                    color: #ffa500;
                }
                .article-list-classify {
                    color: #888;
                    font-size: 12px;
                    display: block;
                }
            }
        }
        &-list:nth-child(odd) {
            .article-list-left {
                float: left;
                text-align: left;
            }
            .article-list-right {
                float: right;
                text-align: right;
            }
        }
        &-list:nth-child(even) {
            .article-list-left {
                float: right;
                text-align: right;
            }
            .article-list-right {
                float: left;
                text-align: left;
            }
        }
        &-list:hover {
            animation: article-list-show .5s;
            animation-fill-mode: forwards;
        }
    }
}
</style>
