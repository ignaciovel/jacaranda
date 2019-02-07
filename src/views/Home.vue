<template>

        <md-layout class="video-background-main">
            <nav-bar/>
            <side-nav ref="sidenav"/>
            <md-layout class="video-background-content-container">
                <div class="video-background-content">
                    <h1 class="title-index" style="letter-spacing: 0.3em;">{{ this.$root.dataPage.Home.title }}</h1>
                    <p class="main-text">{{ this.$root.dataPage.Home.description }}</p>
                    <md-layout md-row md-align="center">
                        <md-layout md-xsmall-hide>
                        </md-layout>
                
                        <md-layout v-for="(product, key) in this.$root.dataPage.Products.items" v-bind:key="key" :name="key" :product="product" v-if="product.inHome" class="button-home-container" md-flex-xsmall="100">
                            <router-link :to="{ name: 'producto', params: { name: key } }" class="md-button md-raised md-primary margin-center home-button-index">
                                {{product.name}}
                            </router-link>
                        </md-layout>
                        <md-layout md-xsmall-hide>
                        </md-layout>

                    </md-layout>
                </div>

            </md-layout>

            <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  -->
            <img id="video-background" src="pics/index.jpg">
        </md-layout></template>

<script>
    import NavBar from '@/components/NavBar'
    import SideNav from '@/components/SideNav'

    export default {
    name: 'Home',
    props: {
        msg: String
    },
    components: {
        NavBar,
        SideNav
    }
    }
</script>
