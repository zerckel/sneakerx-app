<template>
    <ion-content id="Home">
        <ion-toolbar>
            <ion-searchbar class="searchbar" v-on:keyup.enter="search = $event.target.value"
                           placeholder="Search a product"></ion-searchbar>
        </ion-toolbar>

        <ion-list>
            <ion-list-header color="dark" class="headline">
                <ion-label>Find the 10 Top PRODUCTS</ion-label>
            </ion-list-header>
            <ion-items v-for="product in products">
                <product :product="product"/>
            </ion-items>
            <ion-list-header color="dark" class="headline">
                <ion-label>Find the latest news</ion-label>
            </ion-list-header>
            <ion-items v-for="(actuality, index) in news" v-if="index < 10">
                <news :news="actuality"/>
            </ion-items>
        </ion-list>
    </ion-content>
</template>

<script>
  import product from '@/components/products.vue'
  import news from '@/components/news.vue'

  export default {
    name: 'Home',
    data() {
      return {
        search: '',
        products: '',
        news: ''
      }
    },
    components: {
      'product': product,
      'news': news
    },
    watch: {
      search: function () {
        this.stockResult()
      }
    },
    methods: {
      stockResult: function () {
        this.$router.push({name: 'Result', params: {search: this.search}})
      }
    },
    mounted: function () {

      fetch('https://api-sneakerx.herokuapp.com/api/products?sort=random&max=10')
              .then(r => r.json())
              .then(response => {
                this.products = response.products
              })

      fetch('https://api-sneakerx.herokuapp.com/api/news')
              .then(r => r.json())
              .then(response => {
                this.news = response.news
              })
    }
  }
</script>
<style lang="scss">
    #Home {
        flex-grow: 4;

        .headline {
            position: sticky;
            top: -2px;
            z-index: 15;
            display: flex;
            justify-content: center;
            font-size: 1.5rem
        }

    }
</style>
