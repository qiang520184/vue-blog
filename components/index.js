import Vue from 'vue';
import navMenu from './navMenu/navMenu.vue';
import input from './input/input.vue';

export const vNavMenu = {
    install(Vue) {
        Vue.component('v-navMenu', navMenu);
    }
}

export const vInput = {
    install(Vue) {
        Vue.component('v-input', input);
    }
}
