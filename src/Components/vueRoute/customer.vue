<template>
 <div class="container">
   <h2>Customer</h2>
   <p>Select a customer</p>

  <router-view></router-view>

 </div>

</template>

<script>
export default {
  beforeRouteEnter(to,from,next){
    next(true)
  },
  beforeRouteLeave(to,from, next){
    next(true)
  }
}
</script>

<style scoped>

</style>