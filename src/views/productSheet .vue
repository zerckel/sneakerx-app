<template>
    <ion-content id="product">
        <ion-card>
            <div class="slider">
                <div class="img-container" v-for="pic in article.secondarypics">
                    <ion-img class="img" :src="pic"></ion-img>
                </div>
            </div>
            <ion-card-header>
                <ion-card-subtitle>{{ article.created_at }}</ion-card-subtitle>
                <ion-card-title>{{ article.name }}</ion-card-title>
                <ion-card-subtitle>
                    <span v-for="color in article.colors">
                        {{ color }}
                    </span>
                </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
                {{ article.description }}
            </ion-card-content>
            <ion-button color="primary">
                See this on our website
            </ion-button>
        </ion-card>
    </ion-content>
</template>
<style lang="scss" scoped>
    #product {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .slider {
            display: flex;
            width: 100%;
            overflow: auto;

            .img-container {
                padding: 0 20vw;

                .img {
                    width: 60vw;
                }
            }
        }
    }
</style>
<script>
  export default {
    name: 'product',
    data() {
      return {
        article: ''
      }
    },
    created: function () {

      fetch('https://api-sneakerx.herokuapp.com/api/products/' + this.$route.params.id)
              .then(r => r.json())
              .then(response => {
                this.article = response.products
              })
    }
  }
</script>
