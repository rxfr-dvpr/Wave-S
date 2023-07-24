<template>
  <Nav/>

  <Header/>

  <!-- <main class="main">
    <OurAdvantages/>

    <Partners/>

    <Products/>

    <Contact/>
  </main>

  <Footer/> -->
</template>

<script>

import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import OurAdvantages from '@/components/OurAdvantages.vue'
import Partners from '@/components/Partners.vue'
import Products from '@/components/ProductsNews.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home View',
  components: {
    Nav,
    Header,
    OurAdvantages,
    Partners,
    Products,
    Contact,
    Footer
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
