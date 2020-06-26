<template>
    <ion-card>
        <ion-toolbar color="primary">
            <ion-title>
                NEWS
            </ion-title>
        </ion-toolbar>
        <ion-card-header>
            <ion-card-title>{{ news.title }}</ion-card-title>
            <ion-card-subtitle>{{ news.created_at }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            {{ news.resume }}
        </ion-card-content>
    </ion-card>
</template>

<script>
  export default {
    name: "news",
    props: ['news']

  }
</script>

<style scoped>

</style>