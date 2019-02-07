<template>
    <div class="md-layout productos-grid-item md-flex-xsmall-100 md-flex-small-100 md-flex-medium-50 md-flex-large-and-up-33"
            style="margin-top: 2em;">
            <div class="md-card md-theme-default md-with-hover">
                <div class="md-layout md-flex-100">
                        <div class="md-layout productos-grid-item-inner md-align-center">
                            <div class="md-layout md-layout md-flex-xsmall-100 md-flex-medium-90 md-flex-large-and-up-50 md-align-center">
                                    <img :src="value.imagen" class="imagen-producto-item">
                            </div>
                            <div class="md-layout md-layout md-flex-xsmall-100 md-flex-medium-90 md-flex-large-and-up-50 md-align-center"
                                    style="padding: 0em 3em;">
                                    <div class="md-layout md-flex-100 md-align-left" style="margin-bottom:1em">
                                        <h1 class="color-ter" style="text-align:left;">{{ this.$root.dataPage.Products.items[name].name }}</h1>
                                    </div>
                                    <product-attr-text v-for="(value2, key2) in this.$root.dataPage.Products.items[name].attr" v-bind:name="name" v-bind:key="key2" v-bind:index="key2" v-bind:value="value2"/>
                            </div>
                        </div>
                </div>
            </div>
            <div class="md-layout md-flex-xsmall-100" style="padding-top:0px;">
                <p class="md-flex-100" style="border-top:1px solid #000;margin-top:0.5em;margin-bottom:5px;color:rgb(130,130,130);">
                </p>

                <p class="md-flex-50" style="margin-top:0px;color:rgb(130,130,130);">
                        {{ value.GMO || ''  }}
                </p>
                <p class="md-flex-50" style="text-align:right;margin-top:0px;"><router-link v-if="value.moreInfo" class="color-ter" :to="{ name: 'producto', params: { name: name } }" style="margin-top:0px;font-weight:700;font-size:1.2em;margin-bottom:4em;">
                + INFO</router-link></p>
            </div>
    </div>
</template>

<script>

    import ProductAttrText from "@/components/ProductAttrText" 

export default {
    name:'ProductInGrid',
    components: {
        ProductAttrText
    },
    props: ["value", "name"]
}
</script>
