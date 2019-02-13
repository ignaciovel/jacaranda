<template>
      <md-layout class="productos-grid page-content  md-flex-xsmall-90 md-flex-large-and-up-80 " md-align="center"
            style="padding-top:0px!important;" md-gutter="16">

            <div class="md-layout productos-grid-item md-flex-xsmall-100 md-flex-small-70 md-flex-medium-and-up-33"
                  style="margin-top: 6.5em;">
                  <div class="md-card md-theme-default md-with-hover">
                        <div class="md-layout md-flex-100">
                              <div class="md-layout productos-grid-item-inner md-align-center">
                                    <div class="md-layout md-layout md-flex-xsmall-100 md-flex-medium-90 md-flex-large-50 md-align-center">
                                          <img :src="this.$root.dataPage.Products.items[name].imagen" class="imagen-producto-item">
                                    </div>
                                    <div class="md-layout md-layout md-flex-xsmall-100 md-flex-medium-90 md-flex-large-50 md-align-center"
                                          style="padding: 0em 3em;">
                                          <div class="md-layout md-flex-100 md-align-left" style="margin-bottom:1em">
                                                <h1 class="color-ter" style="text-align:left;">{{
                                                      this.$root.dataPage.Products.items[name].name }}</h1>
                                          </div>
                                          <product-attr-text v-for="(value2, key2) in this.$root.dataPage.Products.items[name].attr"
                                                v-bind:key="key2" v-bind:index="key2" v-bind:name="name" v-bind:value="value2" />
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="md-layout md-flex-xsmall-100" style="padding-top:0px;">
                        <p class="md-flex-100" style="border-top:1px solid #000;margin-top:0.5em;margin-bottom:5px;color:rgb(130,130,130);">
                        </p>

                        <p class="md-flex-50" style="margin-top:0px;color:rgb(130,130,130);">
                              {{ this.$root.dataPage.Products.items[name].GMO || '' }}
                        </p>
                  </div>
            </div>
            <div v-if="this.$root.dataPage.Products.items[name].moreInfo" class="md-layout productos-grid-item columnaText md-flex-xsmall-100 md-flex-small-70 md-flex-medium-and-up-33">
                  <transition name="info-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"
                        :duration="{ enter: 800, leave: 400 }">
                        <div class="md-flex-100" style="text-size:5em;text-align:justify;display:inline-block;    width: 100% !important;
    min-height: 400px!important;
    max-height: 40%;
    margin-bottom: 5px;">
                              <div class="md-layout productos-grid-item-inner">
                                    <div class="md-layout md-layout md-flex-xsmall-100 md-align-center">
                                          <div class="md-layout md-flex-100 md-align-left" style="padding: 0em 3em;">
                                                <div v-html="this.$root.dataPage.Products.items[name].moreInfo" class="md-layout md-flex-100 md-align-left"
                                                      style="margin-top:1em">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </transition>
            </div>
      </md-layout>
</template>
<script>
    import ProductAttrText from "@/components/ProductAttrText" 

export default {
    name: 'SingleProduct',
    components: {
        ProductAttrText
    },
    props: ["name"]
}
</script>

<style>
h1 {
      line-height: 1;
}
</style>

