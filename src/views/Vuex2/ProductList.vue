<template>
  <div id="Index">
    <AppHeader></AppHeader>
    <h1 v-if="!productListData.length">讀取中</h1>
    <div class="product" v-for="product in productListData" :key="product.id">
      <img class="product-img" src="@/assets/logo.png">
      <div class="product-name">{{ product.name }}</div>
      <div class="product-price">{{ product.price }}</div>
      <div class="product-add" @click="addToCart(product)">加入購物車</div>
    </div>
  </div>
</template>

<script>
// import shopAPI from '@/api/shop'
import AppHeader from '@/components/week5/AppHeader'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ProductList',
  components: {
    AppHeader
  },
  data() {
    return {
      productList: []
    }
  },
  computed: {
    ...mapGetters('shop', ['productListData'])
  },
  created() {
    this.getProductListData()
    // shopAPI.getProductData().then(res => {
    //   this.productList = res
    // })
  },
  methods: {
    ...mapActions('shop', ['addCartItem', 'getProductListData']),
    addToCart(product) {
      this.addCartItem(product)
      // this.$store.commit('shop/ADD_CART_ITEM', product)
      // this.$store.dispatch('shop/addCartItem', product)
    }
  }
}
</script>

<style lang="scss" scoped>
#Index {
  text-align: center;
  .product {
    display: inline-block;
    margin: 10px;
    padding: 10px 30px;
    border: solid 1px #ebebeb;
    border-radius: 5px;
    text-align: center;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    &-name {
      margin-top: 10px;
      padding: 3px;
      font-size: 20px;
    }
    &-price {
      margin-bottom: 10px;
      padding: 3px;
      font-size: 20px;
      &::before {
        content: '$ ';
      }
      &::after {
        content: ' 元';
      }
    }
    &-add {
      padding: 10px 20px;
      border-radius: 20px;
      background-color: #41b883;
      color: #fff;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: lighten(#41b883, 5%);
      }
    }
  }
}
</style>
