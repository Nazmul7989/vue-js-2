<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <ul class="navbar-nav">

          <router-link tag="li" active-class="active" exact class="nav-item nav-link" to="/">Home</router-link>

          <router-link tag="li" active-class="active" exact class="nav-item nav-link" to="/about">About</router-link>

          <router-link tag="li" active-class="active" exact class="nav-item nav-link" to="/contact/1">Contact-1</router-link>

          <router-link tag="li" active-class="active" exact class="nav-item nav-link" to="/contact/2">Contact-2</router-link>

          <router-link tag="li" active-class="active" exact class="nav-item nav-link" to="/customer">Customer</router-link>

      </ul>

  </nav>
</template>

<script>
export default {

}
</script>


<style scoped>
.navbar ul li{
  cursor: pointer;
}
.navbar .active{
  color: tomato !important;
}
</style>