<template>
    <div :class="direction === 'column' ? 'navMenu-column' : 'navMenu'">
        <div class="navMenu-item"  v-for="(item, index) in date" :key="index">       
            <slot name="navMenu-item">
                <div class="navMenu-item-box">
                    <slot name="navMenu-item-icon">
                        <p class="navMenu-item-icon">
                            <i class="el-icon-star-off"></i>
                        </p>    
                    </slot> 
                    <nuxt-link  :to="item.path ? item.path : ''" class="navMenu-item-text">{{item.title}}</nuxt-link>

                </div>
            </slot>
            <slot name="submenu-list">
                <ul class="submenu-list" 
                    v-if="item.children && item.children.length">
                    <li class="submenu-item" v-for="(el, ind) in item.children" :key="ind">
                        <slot name="submenu-icon">
                            <p class="submenu-icon">
                                <i class="el-icon-star-off"></i>
                            </p>   
                        </slot> 
                        <nuxt-link :to="el.path ? el.path : ''" class="submenu-text">{{el.title}}</nuxt-link>
                    </li>
                </ul>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        date: {
            type: Array,
            required: true
        },
        direction: {
            type: String,
            default: 'row'
        }
    }
};
</script>
<style lang="less">
.navMenu-column {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .navMenu-item {
        flex: 1;
        height: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        font-size: 16px;
        color: #606266;
        .navMenu-item-box {
            height: 40px;
            display: flex;
            align-items: center;
            padding-left: 50px;
            .navMenu-item-icon {
                font-size: 16px;
                margin-right: 4px;
            }
        }
        .submenu-list {
            height: 100%;
            padding-left: 50px;
            display: flex;
            flex-direction: column;
            position: relative;
            .submenu-item {
                height: 40px;
                display: flex;
                align-items: center;
                margin-left: 40px;
                .submenu-icon {
                    font-size: 14px;
                    margin-right: 4px;
                    color: #9cacc5;
                }
                & > a,
                & > i {
                    color: #9cacc5;
                    font-size: 14px;
                }
                .submenu-item:hover {
                    .submenu-text,
                    .submenu-icon i {
                        color: #E6A23C;
                    }
                }
            }
        }
    }
}
.navMenu {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    z-index: 999;
    .navMenu-item {
        flex: 1;
        display: flex;
        position: relative;
        font-size: 16px;
        color: #606266;
        .navMenu-item-box {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .navMenu-item-icon {
                font-size: 16px;
                margin-right: 4px;
            }
            // .navMenu-item-text {
            //     flex: 1;
            // }
        }
        .submenu-list {
            display: none;
            width: 100%;
            height: auto;
            position: absolute;
            top: 60px;
            left: 0;
            color: #606266;
            border-radius: 12px;
            box-shadow: 0 1px 40px -10px rgba(0,0,0,.5);
            background: #fff;
            z-index: 999;
            .submenu-item {
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                position: relative;
                z-index: 999;
                .submenu-icon {
                    margin-left: 18px;
                    margin-right: 4px;
                }
            }
            .submenu-item:hover {
                .submenu-text,
                .submenu-icon i {
                    color: #E6A23C;
                }
            }
        }
        .submenu-list:after {
            content: "";
            position: absolute;
            top: -24px;
            left: 50%;
            margin-left: -8px;
            z-index: 999;
            width: 0;
            height: 0;
            border-right: 12px solid transparent;
            border-top: 12px solid transparent;
            border-left: 12px solid transparent;
            border-bottom: 12px solid #fff;
        }
    }
    .navMenu-item:hover {
        .navMenu-item-box {
            .navMenu-item-text,
            .navMenu-item-icon i {
                color: #E6A23C;
            }
        }
        .submenu-list {
            display: block;
        }   
    }
}
</style>
