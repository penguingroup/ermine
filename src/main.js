import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router'
import routes from './routers'

Vue.use(ElementUI);
Vue.use(VueRouter);

// 实例化VueRouter
const router = new VueRouter({
    routes
});

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    router
}).$mount('#app');
