<template>
    <Nav/>
    
    <div class="container">
        <a-button type="primary" @click="this.$router.push('/catalog')">back page</a-button>
    </div>
    <Footer/>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Product Page',
    components: {
        Nav,
        Footer
    },
    data() {
        return {

        }
    }
}

</script>

<style lang="scss" scoped>

</style>