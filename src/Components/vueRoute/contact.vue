<template>
  <div>
    <h2>Contact</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi nemo nostrum omnis quae rerum sit ullam ut! Reiciendis, soluta?</p>
    <p>{{ lodedId }}</p>
    <button @click="goHome" class="btn btn-success ml-4">Go to Home</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      lodedId : this.$route.params.id
    }
  },
  watch : {
    $route(to){
      this.lodedId = to.params.id
    }
  },
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