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
                @click="to(`${item.path}/${item.title}`)"
            >
                <div class="article-list-left">
                    <img v-lazy="item.photos && `${info.cdn}/md-img/${item.photos}.png`" alt="">
                </div>
                <div class="article-list-right">
                    <div class="article-list-date">
                        {{item.date | fromateDate}}
                    </div>
                    <div class="article-list-title">
                        <a :href="`${item.path}/${item.title}`" >{{item.title}}</a>
                    </div>
                    <div class="article-list-classify">
                        <a :href="item.classifyPath" >{{item.categories}}</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- <v-pagination
        ></v-pagination> -->
    </div>
</template>

<script>
import vBanner from 'components/banner/index.vue';
import vPagination from 'components/pagination';
import {Banner, ArticleList, defaultInfo} from 'config';
export default {
    data() {
        return {
            bannerData: [...Banner],
            ArticleData: [],
            // ArticleData: [...ArticleList],
            info: {...defaultInfo},
            // 总条目数
            total: ArticleList.length * 6,
            // 每页显示个数
            pageSizes: 8,
            // 默认显示第几页
            pagerCount: 1,
            // 只有一页时是否隐藏
            hideOnSinglePage: true
        };
    },
    components: {
        vBanner,
        vPagination
    },
    filters: {
        fromateDate(val) {
            return new Date(val).toLocaleString();         
        }
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
    .container {
        width: 100%;
        height: 100%;
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
            padding: 0 30px;
            clear:both;
            margin: 28px auto;
            box-shadow: 0 1px 20px -6px rgba(0, 0, 0, .5);
            border-radius: 10px;
            &-left {
                width: 500px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 325px;
                    height: 200px;
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
                    line-height: 40px;
                }
                .article-list-title {
                    height: 40px;
                    line-height: 40px;
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
@media only screen and (min-width : 375px) and (max-width: 768px) {
   
}
@media only screen and (min-width : 768px) and (max-width: 1024px) {
    
}
@media only screen and (min-width : 1024px) {

}
</style>
