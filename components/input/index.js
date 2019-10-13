import input from './input.vue'
// 这里是重点
const Vinput = {
    install: function(Vue){
        Vue.component('v-input',input)
    }
}
// 导出组件
export default Vinput