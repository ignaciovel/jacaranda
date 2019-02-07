<template>
  <fragment>
    <Jumbotron image="exportacion"/>
     <md-layout class="page-content container" md-align="center" md-vertical-align="center">
            <!-- <div class="md-flex-25 md-align-center text-justify" style="visibility:hidden;"> </div> -->
            <md-layout md-flex="50" md-flex-xsmall="80" md-flex-small="80" class="text-justify">
                <h1 class="color-ter" style="padding-left:40px;">{{ this.$root.dataPage.Export.title }}</h1>
                <ul class="text-list">
                    <li v-for="item in this.$root.dataPage.Export.list" v-bind:key="item" class="first-li">{{ item }}</li>
                </ul>
                <div class="md-flex-100 md-align-center text-justify" style="margin-top:1em;margin-bottom:2em;border-bottom:1px solid #000;">
                    <p style="margin-top:0px;">
                        {{ this.$root.dataPage.Export.countries }}
                    </p>
                </div>

            </md-layout>
            <!-- <div class="md-flex-25 md-align-center text-justify" style="visibility:hidden;"> </div> -->
    </md-layout>

  </fragment>
</template>


<script>
    import Jumbotron from '@/components/Jumbotron'
    export default {
    name: 'Exportacion',
    components: {
        Jumbotron
    }
    }
</script>