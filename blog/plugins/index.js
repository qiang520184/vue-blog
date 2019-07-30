import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload,
    {
        preLoad: 1.3,
        error: '/404.png',
        loading: '/404.png',
        attempt: 1
    }
);
