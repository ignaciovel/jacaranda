<template>
  <div id="app">
    <router-view/>
    <burger-options/>
  </div>
</template>
<script>

import BurgerOptions from "@/components/BurgerOptions"

export default {
  name: 'app',
  components: {
    BurgerOptions
  }
}
</script>
