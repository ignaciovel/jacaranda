<template>
    <md-sidenav class="md-right main-right-menu show-button-hamburger md-hide-large md-hide-xlarge" ref="rightSidenav">
        <md-toolbar>
            <div class="md-toolbar-container">
                <md-button class="no-background-on-hover" @click="toggleRightSidenav">
                    <md-icon>clear</md-icon>
                </md-button>
            </div>
        </md-toolbar>

        <div class="phone-viewport">
            <md-list>
                <md-list-item v-for="(value,key) in this.$root.dataPage.NavPage" v-bind:key="key" @click.native="$router.push('/'+key)">
                    <span>{{ value }}</span>
                </md-list-item>
                    <md-list-item @click="changeLanguage">
                    <span> {{ this.$root.language }} </span>
                </md-list-item>
            </md-list>
        </div>
    </md-sidenav>

</template>

<script>
export default {
    name: "SideNav"
}
</script>
