import shop from '@/api/shop'

export default {
    namespaced: true,

    state: {
        items: []
    },

    getters: {
        availableProducts(state, getters) {
            return state.items.filter(product => product.inventory > 0)
        },

        productIsInStock () {
            return (product) => {
                return product.inventory > 0
            }
        }
    },

    mutations: {
        setProducts (state, products) {
            // update products
            state.items = products
        },

        decrementProductInventory (state, product) {
            product.inventory--
        }
    },

    actions: {
        fetchProducts ({commit}) { // ES6 object destructuring (only getting method needed from context)
            return new Promise((resolve, reject) => {
                shop.getProducts(products => {
                    // "commit" a mutation
                    commit('setProducts', products)
                    resolve()
                })
            })
        }
    }

}