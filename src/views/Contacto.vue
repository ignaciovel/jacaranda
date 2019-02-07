<template>
    <fragment>
        <Jumbotron image="contacto" />
        <md-layout class="page-content container" md-align="center" md-vertical-align="center">
            <md-layout md-gutter="24" md-flex="60" md-flex-small="80" md-flex-xsmall="80" class="text-justify">
                <div class="md-flex-medium-and-up-70 md-flex-xsmall-100 md-flex-small-100  text-justify" style="margin-top:2em;">
                    <div class="gmap_canvas" style="height:100%"><iframe style="width:100%;height:433px" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Av.%20Juan%20D.%20Per%C3%B3n%20630.%20Chacabuco%2C%20Buenos%20Aires%2C%20Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de"></a></div>
                </div>
                <div class="md-flex-medium-and-up-30 md-flex-xsmall-100 md-flex-small-100 text-justify " style="margin-top:2em;padding-left:2em;">
                    <h2><i class="color-ter fa fa-map-marker-alt" aria-hidden="true"></i></h2>
                    <p style="font-size:1.5em;font-weight:150;margin-top:0px;margin-bottom:2em;"><a href="http://maps.google.com/?q=Av. Juan D. Perón 630. Chacabuco, Buenos Aires, Argentina"
                            target="_blank" class="link">Av. Juan D. Perón 630.<br />
                            Chacabuco,<br />
                            Buenos Aires, Argentina</a></p>
                    <h2><i class="color-ter fas fa-phone" aria-hidden="true"></i></h2>
                    <p style="font-size:1.5em;font-weight:150;margin-top:0px;margin-bottom:2em;"><a href="tel:+54902352451657"
                            class="link no-desktop">+54 9 02352 451657 </a><br />
                        <a href="tel:+5491165395152" class="link no-desktop">+54 9 11 15 6539 5152</a></p>
                    <h2><i class="color-ter fas fa-envelope" aria-hidden="true"></i></h2>
                        <h4 style="margin-bottom:5px;">{{ this.$root.dataPage.Contact.mails[0].title }}</h4>
                        <a :href="`mailto:${this.$root.dataPage.Contact.mails[0].mail}`" class="link">{{ this.$root.dataPage.Contact.mails[0].mail }}</a>
                        <h4 style="margin-bottom:5px;">{{ this.$root.dataPage.Contact.mails[1].title }}</h4>
                        <a :href="`mailto:${this.$root.dataPage.Contact.mails[1].mail}`" class="link">{{ this.$root.dataPage.Contact.mails[1].mail }}</a>
                </div>
            </md-layout>
            <div class="md-flex-60 md-flex-small-80 md-flex-xsmall-80 md-align-center text-justify" style="margin-top:2em;margin-bottom:1em;border-top:1px solid #000;">
            </div>

        </md-layout>
    </fragment>
</template>

<script>
    import Jumbotron from '@/components/Jumbotron'

export default {
  name: 'Contacto',
    components: {
        Jumbotron
    }
}
</script>