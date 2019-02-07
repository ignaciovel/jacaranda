<template>
    <md-layout class="productos-grid page-content" md-flex="70" md-align="center" style="padding-top:0px!important;" md-gutter="16">
      <product-in-grid v-for="(value, key) in this.$root.dataPage.Products.items" v-bind:key="key" v-bind:name="key" v-bind:value="value" ></product-in-grid>
</md-layout>
</template>
<script>
    import ProductInGrid from '@/components/ProductInGrid'

export default {
    name:"GridProducts",
    components:{
        ProductInGrid
    }

}
</script>
