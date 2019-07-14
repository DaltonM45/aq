//RUTAS
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import routes from './routes'



//Vue.config.productionTip = false
//Vue.use(VueRouter);

// const router = new VueRouter({
//     routes,
//     mode : 'history'
// })


//require('./bootstrap');

window.Vue = require('vue');




Vue.component('Formulario', require('./components/Formulario.vue').default);
Vue.component('Series', require('./components/Series.vue').default);
Vue.component('Post', require('./components/Post.vue').default);
Vue.component('Error', require('./components/Error.vue').default);
Vue.component('Resultado', require('./components/Resultado.vue').default);
Vue.component('Resultado2', require('./components/Resultado2.vue').default);
Vue.component('Menu', require('./components/Menu.vue').default);








const app = new Vue({
    el: '#app',
    // component : {
    //     'Formulario' : require('./components/Formulario.vue'),
    //     'Series' :  require('./components/Series.vue'),
    // },
   // router : router
});
