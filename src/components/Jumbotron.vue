<template>
        <div class="main-content page-custom-header" :style="`background: url('pics/${image}.jpg') center center / cover no-repeat; box-shadow: 0px 40px 150px 30px inset;`">
            <nav-bar/>
            <side-nav ref="sidenav"/>
        </div>
</template>
<script>
    import NavBar from '@/components/NavBar'
    import SideNav from '@/components/SideNav'  
export default {
    name: "Jumbotron",
    components: {
        NavBar,
        SideNav
    },
    props: {
        image: {
            default: 'productos',
            type: String
        }
    }
}
//get url from image
</script>

