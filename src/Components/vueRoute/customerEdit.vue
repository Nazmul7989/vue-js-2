<template>
 <div class="container">
   <h2>Cudtomer Edit</h2>
   <p>Cudtomer Edit Id: {{ $route.params.id }}</p>
   <h2 class="text-danger">Cudtomer Query parameter: {{ $route.query.name }} and {{ $route.query.q }}</h2>

 </div>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>