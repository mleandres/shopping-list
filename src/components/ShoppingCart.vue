<template>
  <div class="shopping-cart">
      <p class="title">{{ title }}</p>
      <ul class="cart-list">
          <li v-for="(product, index) in products" :key="index">
              {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
          </li>
      </ul>
      <p class="title">Total: {{ total | currency }}</p>
      <button @click="checkout">Checkout</button>
      <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {
            title: "Shopping Cart"
        }
    },
    computed: {
        ...mapGetters('cart', {
            products: 'cartProducts',
            total: 'cartTotal'
        }),

        ...mapGetters('products', {
            productIsInStock: 'productIsInStock'
        }),

        ...mapState('cart', {
            checkoutStatus: state => state.checkoutStatus
        })
    },
    methods: {
        ...mapActions('cart', {
            checkout: 'checkout'
        })
    }
}
</script>

<style scoped>
.cart-list {
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
}
</style>
