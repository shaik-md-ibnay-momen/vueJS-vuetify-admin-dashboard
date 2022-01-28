<template>
<v-app id="inspire" > 
  <nav-drawer/>
  <appbar/>

</v-app>
</template>

<script>

import navDrawer from './components/navDrawer.vue'
import appbar from './components/appbar.vue'

  export default {
    components: { navDrawer , appbar},
  }
</script>