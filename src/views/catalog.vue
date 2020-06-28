<template>
    <ion-content id="catalog">
        <ion-list>
            <ion-list-header color="dark" class="headline">
                <ion-label>List of brands</ion-label>
            </ion-list-header>
            <ion-items v-for="brand in brands">
                <brand :brand="brand"/>
            </ion-items>
        </ion-list>
    </ion-content>
</template>
<script>
  import brand from '../components/brand'

  export default {
    name: 'catalog',
    components: {
      'brand': brand
    },
    data() {
      return {
        brands: ''
      }
    },
    mounted: function () {
      fetch('https://api-sneakerx.herokuapp.com/api/brands')
              .then(r => r.json())
              .then(response => {
                this.brands = response
              })
    }
  }
</script>
<style scoped lang="scss">
    .headline {
        position: sticky;
        top: -2px;
        z-index: 15;
        display: flex;
        justify-content: center;
        font-size: 1.5rem
    }
</style>