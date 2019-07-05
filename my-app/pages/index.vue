<template>
    <div class="home" @contextmenu.prevent="oncontextmenu($event)">
        <div class="banner">
            <v-banner :data="bannerData" />
        </div>
    </div>
</template>

<script>
import vBanner from 'components/banner';
import {Banner} from 'config';
export default {
    data() {
        return {
            bannerData: [...Banner]
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
        }
    }
};
</script>

<style lang="less" scope>
.home {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    .container {
        flex: 1;
        background: #ccc;
    }
    .banner {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
}
</style>
