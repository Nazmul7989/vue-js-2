<template>
 <div class="container">
   <h2>Customer Detail</h2>
   <p>Customer Id no {{ $route.params.id }}</p>

<!--   <router-link tag="button" :to=" '/customer/'+$route.params.id+'/edit'" class="btn btn-primary">Edit customer</router-link>-->
   <router-link tag="button" :to="{name: 'customerEdit', params:{id: $route.params.id}, query:{name: 'Hello query param', q: 1212} }" class="btn btn-primary">Edit customer</router-link>

 </div>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>