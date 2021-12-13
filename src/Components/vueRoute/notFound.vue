<template>
  <div class="container text-center my-5">
    <h2 class="text-danger">Oops! 404 Not Found</h2>


    <button @click="goHome" class="btn btn-success ml-4 mt-4">Go to Home</button>

  </div>
</template>

<script>
export default {
  methods: {
    goHome(){
      // this.$router.push('/')
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style scoped>

</style>