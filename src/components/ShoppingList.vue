<template>
  <div class="shopping-list">
    <p class="title">{{ title }}</p>
    <img
      title="Loading..."
      v-if="loading"
      src="@/assets/loading.gif"
    >
    <ul v-else class="products-list">
      <li v-for="(product, index) in products" :key="index">
        {{ product.title }} - {{ product.price | currency }} - {{ product.inventory }}
        <button 
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'ShoppingList',
  data () {
    return {
      title: "Shopping List",
      loading: false
    }
  },

  computed: {
    // use spread operator to merge mapState with the rest of the existing computed properties
    ...mapState('products', {
      products: state => state.items
    }),

    ...mapGetters('products', {
      productIsInStock: 'productIsInStock'
    })
  },

  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      addProductToCart: 'cart/addProductToCart'
    })
  },

  created() {
    this.loading = true;
    // trigger store action with dispatch method
    this.fetchProducts()
      .then(() => this.loading = false)
  }
}
</script>

<style scoped>
.products-list {
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
}
</style>
