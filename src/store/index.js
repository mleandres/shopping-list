import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        products
    },
    
    // 5 options: State, mutations, getters, actions, and modules
    state: { // data
        
    },

    getters: { // computed properties
        
    },

    actions,

    mutations: { // single state changes
        
    }

})

/* 
Difference between actions and mutations:
    - Actions decide when mutations should fire.
    - Mutations are responsible for all state changes.
*/