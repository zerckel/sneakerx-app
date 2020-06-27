<template>
    <router-link :to="{ name: 'product', params: { id: product.id }}">
        <ion-card>
            <ion-toolbar color="dark">
                <ion-title>
                    PRODUCT
                </ion-title>
            </ion-toolbar>
            <img :src="product.mainpics"/>
            <ion-card-header>
                <ion-card-title>{{ product.name }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <span>
                    COLORS:
                </span>
                <div class="color">
                <span v-for="color in product.colors">
                    {{ color }}
                </span>
                </div>
                <ion-card-subtitle color="primary" class="price">
                    PRICE: {{ product.price }}$
                </ion-card-subtitle>
            </ion-card-content>
        </ion-card>
    </router-link>
</template>

<script>

  export default {
    name: 'Products',
    props: ['product']
  }
</script>

<style scoped lang="scss">
    .color {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        span {
            margin: 0 5px;
        }
    }

    .price {
        font-weight: 800;
        margin-top: 15px;
    }

    .sc-ion-card-md-s img {
        display: inline-block;
        width: 50%;
    }
</style>
