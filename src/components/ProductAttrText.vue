<template>
    <fragment>
        <div class="md-layout md-flex-100 md-align-left text-left" style="border-bottom:1px solid #000;">
            <p style="margin-bottom:0px;margin-top:0px;font-size: 1.2em;">
                <strong>{{ Object.keys(this.$root.dataPage.Products.items[name].attr[index])[0] }}</strong>
            </p>
        </div>
        <div class="md-layout md-flex-100 md-align-left text-left">
            <p style="margin-top:0px">
                <span>
                    {{ this.$root.dataPage.Products.items[name].attr[index][Object.keys(this.$root.dataPage.Products.items[name].attr[index])[0] ] }}
                </span>
            </p>
        </div>
    </fragment>
</template>

<script>

export default {
    name: "ProductAttrText",
    props: ['value', 'name', 'index']
}

</script>
