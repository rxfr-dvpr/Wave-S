<template>
  <Nav/>

  <Header/>

  <main class="main">
    <OurAdvantages/>
  </main>

</template>

<script>

import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import OurAdvantages from '@/components/OurAdvantages.vue'

export default {
  name: 'Home View',
  components: {
    Nav,
    Header,
    OurAdvantages
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  row-gap: 80px;
}

</style>
