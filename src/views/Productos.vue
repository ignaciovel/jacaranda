<template>
    <fragment>
        <Jumbotron />
     <md-layout class="page-content container" md-align="center" md-vertical-align="center">
            <!-- <div class="md-flex-25 md-align-center text-justify" style="visibility:hidden;"> </div> -->
            <md-layout md-flex="50" md-flex-xsmall="80" md-flex-small="80" class="text-justify">
                <h1 class="color-ter" style="padding-left:40px;">{{ this.$root.dataPage.Products.title }}</h1>
        </md-layout>
        </md-layout>

        <grid-products />
    </fragment>
</template>


<script>
    import Jumbotron from '@/components/Jumbotron'
    import GridProducts from '@/components/GridProducts'
    export default {
        name: 'Productos',
        props: {
            msg: String
        },
        components: {
            Jumbotron,
            GridProducts
        }
    }
</script>