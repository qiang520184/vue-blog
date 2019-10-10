<template>
<div class="container archives">
    <div class="time-line">
        <div 
            class="time-line-list"
            v-for="(item, index) in timeLineData"
            :key="index"
        >
            <h3 class="time-line-year">{{item.year}}年</h3>
            <div 
                class="time-line-item"
                v-for="(items, ind) in item.data"
                :key="`qwe${ind}`"
            >
                <div class="time-line-month">
                    <span>{{items.month}}月</span>({{items.data.length}}篇文章)
                </div>
                <div class="time-line-wrapper">
                    <div
                        class="wrapper-item"
                        v-for="(e) in items.data"
                        :key="e.date"
                    >
                        <div class="circle"></div>
                        <div class="wrapper-item-hidden">
                            <span class="time">{{e.month}}/{{e.day}}</span>
                            <a :href="`${e.path}/${e.title}`" class="title">{{e.title}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import json from 'config/ArticleList.json';
import {fromateJson} from 'utils/formate';
export default {
    data() {
        return {
            timeLineData: fromateJson(json)
        };
    },
    mounted() {
        // console.log(this.timeLineData);
    },
    methods: {
        // show(index, keys, i, flag) {
        //     console.log(this.timeLineData[index][keys][i]);
        //     // this.$set(this.timeLineData[index][keys][i], 'flag', !flag);
        // }
    }
};
</script>

<style lang="less" scoped>
.time-line {
    height: auto;
    width: 700px;
    margin-top: 50px;

    .time-line-list {
        position: relative;
        left: 180px;
        padding: 10px 0;
        border-left: 4px solid #E4E7ED;
        .time-line-year {
            height: 60px;
            line-height: 60px;
            margin-left: -36px;
            font-size: 24px;
        }
        .time-line-month {
            position: relative;
            display: flex;
            left: -150px;
            & > span {
                width: 36px;
                text-align: right;
            }
        }
        .time-line-wrapper {
            .wrapper-item {
                height: auto;
                position: relative;
                .circle {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    position: absolute;
                    left: -9px;
                    background: #E4E7ED;
                    border: 1px solid #E4E7ED;
                }
                .wrapper-item-hidden {
                    display: flex;
                    margin-top: 5px;
                    .title {
                        padding: 0 5px;
                    }
                    .title:hover {
                        color: #E6A23C;
                    }
                    .time {
                        margin-left: 30px;
                    }
                }
                .wrapper-item-show {
                    // width: 400px;
                    overflow: hidden;
                    margin: 20px 20px 0;
                    padding: 0 20px;
                    border: 1px solid #E4E7ED;
                    border-radius: 6px;
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                    .title {
                        line-height: 40px;
                    }
                    .description {
                        line-height: 22px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .time {
                        line-height: 30px;
                    }
                }
            }
        }
    }

    .time-line-item:before {
        content: '';
        position: absolute;
        top: -8px;
        left: -10px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #E4E7ED;
    }
}
.show {
    display: block;
}
</style>
