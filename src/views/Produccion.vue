<template>
  <fragment>
    <Jumbotron image="produccion"/>
     <md-layout class="page-content container" md-align="center" md-vertical-align="center">
            <md-layout md-flex="50" md-flex-xsmall="80" md-flex-small="80" class="text-justify">
                <h1 class="color-ter" style="padding-left:20px;">{{ this.$root.dataPage.Production.title }}</h1>
                <ul class="text-list">
                <li v-for="item in this.$root.dataPage.Production.list" v-bind:key="item" class="first-li"><p>{{ item }}</p></li>
                </ul>
                <div class="md-flex-100 md-align-center text-justify" style="margin-top:1em;margin-bottom:2em;border-bottom:1px solid #000;">
            </div>
            </md-layout>
        </md-layout>
  </fragment>
</template>

<script>
    import Jumbotron from '@/components/Jumbotron'

export default {
  name: 'Produccion',
    components: {
        Jumbotron
    }
}
</script>