<template>
    <ion-content id="productList">
        <ion-list>
            <ion-list-header class="headline">
                <ion-img class="img" :src="brand.pics"></ion-img>
                <ion-title class="description">
                    {{ brand.name }}
                </ion-title>
            </ion-list-header>
            <ion-items v-show="products !== undefined" v-for="product in products">
                <product :product="product"/>
            </ion-items>
            <ion-card v-show="products === undefined">
                <ion-card-content>
                    Sorry, no products found
                </ion-card-content>
            </ion-card>
        </ion-list>
    </ion-content>
</template>
<script>
  import product from '../components/products'

  export default {
    name: 'productList',
    components: {
      'product': product
    },
    data() {
      return {
        brand: '',
        products: ''
      }
    },
    mounted: function () {
      fetch('https://api-sneakerx.herokuapp.com/api/brands/' + this.$route.params.brand + '/products')
              .then(r => r.json())
              .then(response => {
                this.products = response.error ? undefined : response.products
              })
      fetch('https://api-sneakerx.herokuapp.com/api/brands/' + this.$route.params.brand)
              .then(r => r.json())
              .then(response => {
                this.brand = response.brands
              })
    }
  }
</script>
<style scoped lang="scss">
    .headline {
        top: -2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.5rem;

        .img {
            height: 15vh;
        }
    }
</style>