<template>
    <div id="app">
        <ion-header>
            <ion-toolbar color="dark">
                <ion-segment>
                    <ion-segment-button slot="start" v-on:click="$router.back()" v-show="$route.path !== '/'">
                        <ion-label>
                            < back
                        </ion-label>
                    </ion-segment-button>
                    <ion-segment class="logoContainer">
                        <router-link slot="secondary" to="/">
                            <ion-img class="logo" src="/img/logo.png"></ion-img>
                        </router-link>
                    </ion-segment>
                </ion-segment>
            </ion-toolbar>
        </ion-header>
        <router-view></router-view>
        <ion-footer class="ion-no-border">
            <ion-toolbar color="dark" class="footer">
                <router-link to="catalog">
                    <ion-title class="footer-title">
                        CATALOG
                    </ion-title>
                </router-link>
                <router-link to="contact">
                    <ion-title class="footer-title">
                        CONTACT
                    </ion-title>
                </router-link>
            </ion-toolbar>
        </ion-footer>
    </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style lang="scss">
    @font-face {
        font-family: "robotomono";
        src: url('/fonts/RobotoMono-Regular.eot');
        src: url('/fonts/RobotoMono-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/RobotoMono-Regular.woff2') format('woff2'),
        url('/fonts/RobotoMono-Regular.woff') format('woff'),
        url('/fonts/RobotoMono-Regular.svg#RobotoMono-Regular') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "robotomono-light";
        src: url('/fonts/RobotoMono-Light.eot');
        src: url('/fonts/RobotoMono-Light.eot?#iefix') format('embedded-opentype'),
        url('/fonts/RobotoMono-Light.woff2') format('woff2'),
        url('/fonts/RobotoMono-Light.woff') format('woff'),
        url('/fonts/RobotoMono-Light.svg#RobotoMono-Light') format('svg');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "robotomono-Bold";
        src: url('/fonts/RobotoMono-Bold.eot');
        src: url('/fonts/RobotoMono-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/RobotoMono-Bold.woff2') format('woff2'),
        url('/fonts/RobotoMono-Bold.woff') format('woff'),
        url('/fonts/RobotoMono-Bold.svg#RobotoMono-Bold') format('svg');
        font-weight: bold;
        font-style: normal;
    }

    * {
        font-family: 'monospace', sans-serif;
        text-decoration: none;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;

        .logoContainer {
            display: flex;
            align-items: center;

            .logo {
                display: flex;
                align-items: center;
                width: 50vw;
            }
        }

        .footer {
            display: flex;

            .footer-title {
                display: inline-block;
                color: white;
            }
        }

        .searchbar {
            padding-top: 15px;
        }
    }

</style>
