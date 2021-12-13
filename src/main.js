import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from "@/Components/vueRoute/routes";
import {store} from "@/vuex/vuex";

const router = new VueRouter({
  // routes: routes,
  routes,
  mode: 'history',
  scrollBehavior(){
    return{
      x: 0,
      y: 0
      // y: 300

    }
  }
})

//Global registration of component
// import appHeader from './Components/partial/header'
// Vue.component('appHeader', appHeader)

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false


new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  // store: store
  store
}).$mount('#app')



//custom directive
// Vue.directive('customDirectiveGlobal',{
//   bind(el,binding){
//     // el.innerText = 'Hello global custom directive';
//     el.innerText = binding.value;
//     el.style.color = 'blue';
//
//   }
// })

Vue.directive('demoDirective',{
  bind(el){
    el.innerText = 'Hello global custom directive'
  }
})

//Global filter
// Vue.filter('removeTxt',(value)=>{
//   return value.slice(1)
// })

