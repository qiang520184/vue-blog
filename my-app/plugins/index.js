import Vue from 'vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import VueLazyload from 'vue-lazyload';
import vueHljs from 'vue-hljs';
import 'highlight.js/styles/github.css';
 
Vue.use(VueLazyload);

Vue.use(Element, {locale});
Vue.use(vueHljs);
Vue.use(VueLazyload,
    {
        preLoad: 1.3,
        error: 'assets/404.png',
        loading: 'assets/loading.gif',
        attempt: 1
    }
);
// vueHljs


