import shop from '@/api/shop'

export default {
    namespaced: true,

    state: {
        // {id, quantity}
        items: [],
        checkoutStatus: null
    },

    getters: {
        cartProducts (state, getters, rootState, rootGetters) {
            return state.items.map(cartItem => {
                const product = rootState.products.items.find(product => product.id === cartItem.id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },

        cartTotal (state, getters) {
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        }
    },

    mutations: {
         // better to use an object to pass more parameters
         pushProductToCart (state, productId) {
            state.items.push({
                id: productId,
                quantity: 1 
            })
        },
        
        incrementItemQuantity (state, cartItem) {
            cartItem.quantity++
        },

        setCheckoutStatus (state, status) {
            state.checkoutStatus = status
        },

        emptyCart (state) {
            state.items = []
        }
    },
    actions: {
        addProductToCart ({state, getters, commit, rootState, rootGetters}, product) {
            if (rootGetters['products/productIsInStock'](product)) {
                const cartItem = state.items.find(item => item.id === product.id)
                // find cartItem
                if (!cartItem) {
                    commit('pushProductToCart', product.id)
                } else {
                    commit('incrementItemQuantity', cartItem)
                }
                // decrement temp product inventory so user cant buy more products than what exists
                commit('products/decrementProductInventory', product, {root: true})
            }
        },

        checkout({state, commit}) {
            shop.buyProducts(
                state.items,
                () => {
                    commit('emptyCart')
                    commit('setCheckoutStatus', 'success')
                },
                () => {
                    commit('setCheckoutStatus', 'failed')
                }
            )
        }
    }
}