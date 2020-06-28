<template>
    <router-link :to="{ name: 'productList', params: { brand: brand.id }}">
        <ion-card>
            <ion-toolbar color="dark">
                <ion-title>
                    BRAND
                </ion-title>
            </ion-toolbar>
            <img :src="brand.pics"/>
            <ion-card-header>
                <ion-card-title>{{ brand.name }}</ion-card-title>
            </ion-card-header>
        </ion-card>
    </router-link>
</template>

<script>
  export default {
    name: "brand",
    props: ['brand']

  }
</script>

<style scoped>

</style>