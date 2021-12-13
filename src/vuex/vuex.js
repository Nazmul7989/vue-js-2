import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        books: [
            {name: 'Harry Porter', price: 100},
            {name: 'Gitangoli', price: 200},
            {name: 'Dhankhet', price: 300},
            {name: 'Meghnathboth kabbo', price: 200},
        ]
    },
    getters: {
        saleBooks(state){
            let saleBooks = state.books.map((book)=>{
                return {
                    name: book.name,
                    price : book.price/2
                }
            })
            return saleBooks
        }
    },
    mutations: {
        reducePrice(state){
            state.books.forEach((book)=>{
                book.price -= 1
            })
        }
    },
    actions: {
        consizePrice(context){
            setTimeout(()=>{
                context.commit('reducePrice')
            })
        }
    }
})