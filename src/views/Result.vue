<template>
    <ion-content id="result">
        <ion-list>
            <ion-list-header>
                <ion-label>Here the result for : {{search}}</ion-label>
            </ion-list-header>
            <ion-items v-for="product in result">
                {{ product.name }}
            </ion-items>
            <ion-card v-show="result === undefined">
                <ion-card-content>
                    Sorry, no products found
                </ion-card-content>
            </ion-card>

        </ion-list>
    </ion-content>
</template>
<script>

  export default {
    name: 'Search',
    data() {
      return {
        search: '',
        result: ''
      }
    },
    mounted: function () {
      this.search = this.$route.params.search
      fetch('https://api-sneakerx.herokuapp.com/api/products?search=' + this.search)
              .then(r => r.json())
              .then(response => {
                this.result = response.products
              })
    }
  }
</script>
<style>
    #result{
        flex-grow: 4;
    }
</style>