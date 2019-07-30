<template>
<div class="container archives">
    <div class="time-line">
        <div 
            class="time-line-list"
            v-for="(item, index) in obj"
            :key="index"
        >
            <h3 class="time-line-year">{{item.year}}年</h3>
            <div 
                class="time-line-item"
                v-for="(items, keys, ind) in item.month"
                :key="ind"
            >
                <div class="time-line-month">
                    <span>{{keys}}</span>({{items.length}}篇文章)
                </div>
                <ul class="time-line-wrapper">
                    <li 
                        class="wrapper-item"
                        v-for="(e, i) in items"
                        :key="i"
                    >
                        <div class="circle" @click="show(index, 'month', keys, i, e.flag)"></div>
                        <div class="wrapper-item-hidden" v-show="!e.flag">
                            <span class="time">{{e.date}} {{e.time}} {{e.titme}}</span>
                            <a href="" class="title">{{e.title}}</a>
                        </div>
                        <div class="wrapper-item-show" v-show="e.flag">
                            <h4 class="title">{{e.title}}</h4>
                            <div class="description">
                                {{e.description}}
                            </div>
                            <p class="time">{{item.year}}/{{e.date}} {{e.time}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
    data() {
        return {
            obj: [
                {
                    year: '2019',
                    month: {
                        '1月': [
                            {
                                date: '1/1',
                                time: '11:11',
                                path: '',
                                flag: false,
                                title: '更新 Github 模板',
                                description: '描述、简洁,描述、简洁'
                            },
                            {
                                date: '1/2',
                                time: '11:11',
                                path: '',
                                flag: false,
                                title: 'Github 模板',
                                description: '描述、简洁,描述、简洁'
                            }
                        ],
                        '2月': [
                            {
                                date: '2/1',
                                time: '12:12',
                                path: '',
                                flag: false,
                                title: '更新 Github 模板',
                                description: '描述、简洁,描述、简洁'
                            },
                            {
                                date: '2/2',
                                time: '12:12',
                                path: '',
                                flag: false,
                                title: 'Github 模板',
                                description: '描述、简洁,描述、简洁'
                            },
                            {
                                date: '3/1',
                                time: '12:12',
                                path: '',
                                flag: false,
                                title: '更新 Github 模板',
                                description: '描述、简洁,描述、简洁'
                            },
                            {
                                date: '4/2',
                                time: '12:12',
                                path: '',
                                flag: false,
                                title: 'Github 模板',
                                description: '描述、简洁,描述、简洁'
                            }
                        ]
                    }
                },
                {
                    year: '2018',
                    month: {
                        '11月': [
                            {
                                date: '11/1',
                                time: '11:11',
                                path: '',
                                flag: false,
                                title: '更新 Github 模板',
                                description: '描述、简洁,描述、简洁'
                            },
                            {
                                date: '11/2',
                                time: '11:11',
                                path: '',
                                flag: false,
                                title: 'Github 模板',
                                description: '描述、简洁,描述、简洁'
                            }
                        ],
                        '12月': [
                            {
                                date: '12/1',
                                time: '12:12',
                                path: '',
                                flag: false,
                                title: '更新 Github 模板',
                                description: '描述、简洁,描述、简洁'
                            },
                            {
                                date: '12/2',
                                time: '12:12',
                                path: '',
                                flag: false,
                                title: 'Github 模板',
                                description: '描述、简洁,描述、简洁'
                            }
                        ]
                    }
                }
            ]
        };
    },
    methods: {
        show(index, month, keys, i, flag) {
            this.$set(this.obj[index][month][keys][i], 'flag', !flag);
        }
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
                    width: 400px;
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
