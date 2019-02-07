<template>
    <md-toolbar id="main-menu" md-elevation="1">
        <md-layout md-row>
            <md-layout md-sm-column>
                <router-link :to="{name: 'home'}" style="width:inherit;">
                    <img id="index-logo" class="menu-logo" src="images/logo.jpg" />
                </router-link>
                <md-layout class="md-medium-hide" md-align="left" style="flex-wrap:nowrap;" md-sm-column>
                <router-link v-for="(value,key) in this.$root.dataPage.NavPage" v-bind:key="key" :to="{name: key}" class=" md-button top-menu-button  no-background-on-hover md-hide-xsmall
                                    md-hide-small md-button-nav" active-class="current-page"> {{ value }}</router-link>
                <md-button class="top-menu-button  no-background-on-hover md-hide-xsmall
                                    md-hide-small md-button-nav" style="position: absolute!important;bottom: auto!important; right: 0px!important;" @click="changeLanguage">
                    {{ this.$root.language }}
                </md-button>
                </md-layout>
            </md-layout>
            <div class="md-layout-item show-button-hamburger md-hide-large md-hide-xlarge">
                <md-button class="md-icon-button md-right main-menu-button" @click="toggleRightSidenav">
                    <md-icon>menu</md-icon>
                </md-button>
            </div>
        </md-layout>
    </md-toolbar>            
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
}
</script>