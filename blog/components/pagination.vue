<template>
    <div class="pagination">
        <ul class="pagination-list"
            @click="paginationClick"
        >
            <li 
                class="pagination-list-item"
                :class="{active: currentPages === 1}"
            >
                1
            </li>
            <li class="pagination-list-item"
                v-if="showPrevMore"
            >
                left
            </li>
            <li 
                class="pagination-list-item"
                v-for="(item, index) in pagers"
                :key="index"
                :class="{active: currentPages === Number(item)}"
            >
                {{item}}
            </li>
            <li 
                class="pagination-list-item"
                v-if="showNextMore"
            
            >
                right
            </li>
            <li 
                class="pagination-list-item"
                :class="{active: currentPages === pageNum}"
            >
                {{pageNum}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        // 总条目数
        total: {
            type: Number,
            default: 100
        },
        // 页码按钮的数量
        pagerCount: {
            type: Number,
            default: 7
        },
        // 每页显示个数
        pageSizes: {
            type: Number,
            default: 10
        },
        // 默认显示第几页
        currentPage: {
            type: Number,
            default: 1
        },
        // 只有一页时是否隐藏
        hideOnSinglePage: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            ellipsis: false,
            currentPages: 1,
            showPrevMore: false,
            showNextMore: false
        };
    },
    filters: {
        pageNum(val, index, count, max, pager) {
            // console.log(val, index, count, max, pager);
            // if (index < 1) {
            //     return val;
            // }
            // if (index === count - 1) {
            //     return max;
            // }
            // if (count === pager + 1 + val) {
            //     return '...';
            // }
            // if (val === index + 1) {
            //     return val;
            // }
        }
    },
    computed: {
        pageNum() {
            let num = Math.ceil(this.total / this.pageSizes);
            if (num <= this.pageCount) {
                return num;
            } else {
                // this.ellipsis = true;
                return num;
            }
        },
        pagers() {
            const pagerCount = this.pagerCount; // 页码数量  7
            const halfPagerCount = Math.ceil(pagerCount / 2);// 中间值  3

            const currentPage = Number(this.currentPages); // 当前页 1
            const pageCount = Number(this.pageNum); // 总页数  10

            let left = false;
            let right = false;
            
            // 总页数 > 页码数量
            if (pageCount > pagerCount) {
                console.log(currentPage, pagerCount, halfPagerCount);
                if (currentPage > pagerCount - halfPagerCount) {
                    left = true;
                }

                if (currentPage < pageCount - halfPagerCount) {
                    right = true;
                }
            }
            const array = [];
            // if (left && !right) {
            //     let start = pageCount - halfPagerCount;
            //     for (let i = start; i < pageCount; i++) {
            //         array.push(i);
            //     }
            // }
            // if (!left && right) {
            //     let start = currentPage  + 1;
            //     let end = pagerCount - 2;
            //     for (let i = start; i <= end; i++) {
            //         array.push(i);
            //     }
            // }
            if (left && !right) {
                const startPage = pageCount - (pagerCount - 2);
                for (let i = startPage; i < pageCount; i++) {
                    array.push(i);
                }
            } else if (!left && right) {
                for (let i = 2; i < pagerCount; i++) {
                    array.push(i);
                }
            } else if (left && right) {
                const offset = Math.floor(pagerCount / 2) - 1;
                for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
                    array.push(i);
                }
            } else {
                for (let i = 2; i < pageCount; i++) {
                    array.push(i);
                }
            }
            
            this.showPrevMore = left;
            this.showNextMore = right;
            console.log(array);
            return array;
            

        }
    },
    methods: {
        paginationClick(e) {
            if (e.target.nodeName === 'LI') {
                console.log(e.target.innerText.trim());
                this.currentPages = Number(e.target.innerText.trim());
            }
        },
        selectPageCount(item, index) {
            this.pagerCountss = index;
            console.log(item, index);
            // this.$emit('update:pagerCount', index);
        }
    }
};
</script>
<style lang="less" scoped>
.active {
    background-color: #409eff;
    color: #fff;
}
.pagination {
    width: 100%;
    height: 60px;
    .pagination-list {
        display: flex;
        align-items: center;
        justify-content: center;
        .pagination-list-item {
            width: 30px;
            height: 30px;
            margin: 0 8px;
            border: 1px solid #ecdfdf;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
        }
    }
}
</style>
