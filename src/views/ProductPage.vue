<template>
    <Nav/>

    <section class="product__section">
        <div class="container">
            <div class="row">

                <div class="product__content">
                    <img :src="productImg" alt="" class="product__content-img">

                    <div class="product__content-descr">
                        <h3 class="product-name all-title">{{ store.product.name }}</h3>

                        <span class="row-line"></span>

                        <p class="all-name">{{ store.product.systemName }}</p>

                        <ul class="all-list">
                            <li class="all-list-item" v-for="(txt, id) in store.product.systemList" 
                            :key="id" v-html="txt.name"></li>
                        </ul>

                        <span class="row-line"></span>

                        <p class="all-name">{{ store.product.infoName }}</p>

                        <ul class="all-list">
                            <li class="all-list-item" v-for="(info, idd) in store.product.infoList" 
                            :key="idd" v-html="info.name"></li>
                        </ul>

                        <span class="row-line"></span>
                        
                        <p class="all-name">{{ store.product.functionsName }}</p>

                        <ul class="all-list">
                            <li class="all-list-item" v-for="(fnc, idx) in store.product.functionsList" 
                            :key="idx" v-html="fnc.name"></li>
                        </ul>

                        <span class="more-functions-btn">показать все функции</span>

                        <span class="row-line"></span>

                        <p class="product-price">цена: <span>{{ splitPrice(store.product.price) }} ₽</span></p>

                        <div class="product-buttons">
                            <button class="product-btn blue-btn" @click="this.$router.push('/')">заказать</button>
                            <button class="product-btn light-btn" @click="this.$router.push('/')">получить консультацию</button>
                        </div>
                    </div>
                </div>

                <span class="row-line"></span>
                
                <NewsSlider/>

            </div>
        </div>
    </section>

    <Footer/>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import productImg from "@/assets/img/product-img.png";
import { productPageStore } from "@/stores/productPageStore.js";
import NewsSlider from '@/components/NewsSlider.vue';

export default {
    name: 'Product Page',
    components: {
        Nav,
        Footer,
        NewsSlider
    },
    data() {
        return {
            productImg,
            store: productPageStore()
        }
    },
    methods: {
        splitPrice(price) {
            price = price.toString().split('');

            if (price.length == 6) {
                price.splice(3, 0, ' ')
            } else if (price.length == 5) {
                price.splice(2, 0, ' ')
            } else if (price.length == 7) {
                price.splice(1, 0, ' ')
                price.splice(5, 0, ' ')
            } else if (price.length == 8) {
                price.splice(2, 0, ' ')
                price.splice(6, 0, ' ')
            } else if (price.length == 9) {
                price.splice(3, 0, ' ')
                price.splice(7, 0, ' ')
            } else {
                price == price
            }

            let editedPrice = price.join('')
            return editedPrice
        }
    }
}

</script>

<style lang="scss" scoped>

.product__section {
    width: 100%;
    background: #fff;
    padding: 25px 0 100px;

    .row {
        flex-direction: column;
        row-gap: 60px;
    }

    .product__content {
        width: 100%;
        display: flex;
        justify-content: space-between;

        &-img {
            max-width: 630px;
            width: 100%;
            mix-blend-mode: multiply;
            filter: contrast(1);
        }

        &-descr {
            max-width: 630px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 15px;
            
            .product {
                &-name {
                    color: var(--main-dark-blue);
                    font-weight: 600;
    
                    &::first-letter {
                        text-transform: uppercase;
                    }
                }

                .all-list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 5px;

                    &-item {
                        font-weight: 500;
                        color: var(--light-blue) !important;
                    }
                }

                &-price {
                    width: 100%;
                    color: var(--main-dark-blue);
                    font-size: 32px;
                    font-weight: 800;
                    text-transform: capitalize;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    span {
                        color: var(--main-dark-blue);
                    }
                }

                &-buttons {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 10px;
                }
            }
        }
    }

    .more-functions-btn {
        color: var(--main-blue);
        border-bottom: 1px solid var(--main-blue);
        cursor: pointer;
        user-select: none;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .all-name {
        color: var(--main-dark-blue);
        font-size: 18px;
        font-weight: 600;
    }

    .row-line {
        width: 100%;
        height: 2px;
        background: rgba(1, 58, 81, .085);
        border-radius: 10px;
    }
}

</style>