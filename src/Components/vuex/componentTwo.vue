<template>
  <div class="container">
    <div class="row bg-info mt-5 px-2 py-3">
      <div class="col-6">
        <div v-for="book in saleBooks" :key="book.id">
          <span>{{ book.name }} :</span>
          <span class="text-white">${{ book.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

  computed: {
    books(){
      return this.$store.state.books
    },
    // saleBooks(){
    //   return this.$store.getters.saleBooks
    // }
    ...mapGetters([
      'saleBooks'
    ])

  }


}
</script>

<style scoped>

</style>