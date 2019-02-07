<template>
  <fragment>
    <Jumbotron/>
    <single-product :name="$route.params.name"/>
  </fragment>
</template>


<script>
    import Jumbotron from '@/components/Jumbotron'
    import SingleProduct from '@/components/SingleProduct'
    export default {
    name: 'Productos',
    components: {
        Jumbotron,
        SingleProduct
    }
    }
</script>