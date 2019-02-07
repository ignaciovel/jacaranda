<template>
    <md-speed-dial md-open="hover" md-direction="top" class="md-fab-bottom-right bottom-right-button">
            <md-button class="md-fab button-action" md-fab-trigger>
                <md-icon md-icon-morph>code</md-icon>
                <md-icon>add</md-icon>
            </md-button>

            <md-button href="#app" class="md-fab md-primary md-mini md-clean button-action">
                <md-icon>keyboard_arrow_up</md-icon>
                <md-tooltip md-direction="left">{{ this.$root.dataPage.OnTheFlyButton.up }}</md-tooltip>
            </md-button>

            <md-button href="mailto:administracion@puertojacaranda.com" class="md-fab md-primary md-mini md-clean button-action">
                <md-icon>mail</md-icon>
                <md-tooltip md-direction="left">Mail</md-tooltip>
            </md-button>


            <md-button href="tel:02352-451657" target="_blank" class="md-fab md-primary md-mini md-clean button-action">
                <md-icon md-iconset="fas fa-phone" class="dial-icon"></md-icon>
                <md-tooltip md-direction="left">{{ this.$root.dataPage.OnTheFlyButton.phone }}</md-tooltip>
            </md-button>

            <md-button href="http://maps.google.com/?q=Av. Juan D. Perón 630. Chacabuco, Buenos Aires, Argentina" target="_blank" class="md-fab md-primary md-mini md-clean button-action">
                <md-icon md-iconset="fas fa-map-marker-alt" class="dial-icon"></md-icon>
                <md-tooltip md-direction="left">{{ this.$root.dataPage.OnTheFlyButton.location }}</md-tooltip>
            </md-button>

        </md-speed-dial>
</template>

<script>
export default {
    name: "BurgerOptions"
}
</script>

