<template>
  <div>
<!--    <app-header></app-header>-->
<!--    <app-footer></app-footer>-->
<!--    <appHeader></appHeader>-->
<!--    <appFooter></appFooter>-->



<!--Props -->

<!--    <prop :names="name" :surname="surname" @updateSurname = "surname = $event "></prop>-->
<!--    <p>{{ address}}</p>-->
<!--    <p>{{ name}}</p>-->

<!--    <demoSlot>-->
<!--      <ul slot="listItem">-->
<!--        <li v-for="skill in skills" :key="skill">-->
<!--          {{ skill }}-->
<!--        </li>-->
<!--      </ul>-->
<!--      <p slot="para">This is another component</p>-->
<!--    </demoSlot>-->

<!--    <formData></formData>-->



<!--    dynamic component-->
<!--    <button @click="componentToRender='home' ">Home</button>-->

<!--    <button @click="componentToRender='about' ">About</button>-->
<!--    <button @click="componentToRender='contact' ">Contact</button>-->
<!--    <keep-alive>-->
<!--      <component :is="componentToRender"></component>-->
<!--    </keep-alive>-->


<!--    Custom directive -->
<!--    <p v-customDirectiveGlobal ></p>-->
<!--    <p v-customDirectiveGlobal=" 'Hello global custom directive binding' " ></p>-->
<!--    <hr>-->
<!--    <p v-customDirectiveLocal></p>-->
<!--    <p v-customDirectiveLocal=" 'Hello local custom directive binding' "></p>-->

<!--    Transition -->
<!--    <demoTransition></demoTransition>-->

    <!--    Filter -->
<!--    <demoFilter></demoFilter>-->

    <!--    Mixin -->
<!--    <demoAdmin></demoAdmin>-->
<!--    <demoUser></demoUser>-->

<!--    Http Request Handle -->
<!--    <httpRequest></httpRequest>-->

<!--    View Router -->
<!--    <navbar></navbar>-->
<!--    <router-view></router-view>-->

<!--    Vuex -->
    <componentOne></componentOne>
    <componentTwo></componentTwo>
    <button @click="decreasePrice" class="btn btn-success ml-5">Reduce Price</button>


  </div>
</template>



<script>
// import appHeader from './Components/partial/header';
// import appFooter from './Components/partial/footer';
// import prop from './Components/partial/props';
// import demoSlot from './Components/partial/demoSlot';
// import formData from './Components/partial/fornHandle';

//Dynamic component
// import home from './Components/dynamicComponent/home';
// import about from './Components/dynamicComponent/about';
// import contact from './Components/dynamicComponent/contact';

//Transition
// import demoTransition from './Components/transition/transition';

//Fiter
// import demoFilter from './Components/filter/filter';

//Mixin
// import demoAdmin from './Components/mixin/admin';
// import demoUser from './Components/mixin/user';

//Http Request Handle
// import httpRequest from "@/Components/vueResource/httpRequest";

//Vue Router
// import navbar from "@/Components/vueRoute/navbar";

//Vuex
import componentOne from "@/Components/vuex/componentOne";
import componentTwo from "@/Components/vuex/componentTwo";


  export default {
    data(){
      return{
        name: ['Nazmul','Hasan','Sonia','Razib'],
        address: 'Narayankandi',
        surname : 'Nazmul',
        skills: ['HTML','CSS','JAVASCRIPT'],

        //dynamic component
        componentToRender : 'home'

      }
    },
    components: {
      // 'app-header': appHeader,
      // 'app-footer': appFooter

      // appHeader,
      // appFooter,
      // prop,
      // demoSlot,
      // formData,
      // home,
      // about,
      // contact,
      // demoTransition,
      // demoFilter,
      // demoAdmin,
      // demoUser,
      // httpRequest,
      // navbar,
      componentOne,
      componentTwo
    },
    methods: {
      decreasePrice(){
        //For using mutations
          // this.$store.commit('reducePrice')

        //For using mutations
        this.$store.dispatch('consizePrice')
      }

    }
    // directives: {
    //   'customDirectiveLocal': {
    //     bind(el,binding){
    //       // el.innerHTML = 'Hello custom directive local'
    //       el.innerHTML = binding.value
    //     }
    //   }
    // }
  }

</script>

<style>

div{
  color: black;
}

</style>
