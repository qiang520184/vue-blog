import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import {vInput,vNavMenu} from 'components'
require("../utils/console.js");
Vue.use(VueLazyload,
    {
        preLoad: 1.5,
        error: '/404.png',
        loading: '/404.png',
        attempt: 2
    }
);
Vue.use(vInput);
Vue.use(vNavMenu);
