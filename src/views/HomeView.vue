<template>
  <Nav/>

  <Header/>
</template>

<script>

import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home View',
  components: {
    Nav,
    Header
  }
}

</script>

<style lang="scss" scoped>
div {
  width: 100%;
  min-height: 100vh;
}
</style>
