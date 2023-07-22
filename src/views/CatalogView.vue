<template>
    <Nav/>
    
    <section class="catalog__section">
        <div class="container">
            <div class="row">
                <div class="catalog__product" v-for="(item, idx) in store.catalogList" :key="idx">
                    <img :src="productImages[idx]" alt="" class="product-img">

                    <p class="product-name">{{ item.name }}</p>

                    <span class="row-line"></span>

                    <p class="product-type" v-html="item.type"></p>

                    <span class="row-line"></span>

                    <ul class="product__info-list">
                        <li class="product__info-list-item" v-for="(info, id) in item.infoList" 
                        :key="id" v-html="info.name"></li>
                    </ul>

                    <span class="row-line"></span>

                    <p class="product-system">{{ item.systemName }}</p>

                    <span class="row-line"></span>

                    <ul class="product__system-list">
                        <li class="product__system-list-item" v-for="(txt, id) in item.systemList" 
                        :key="id" v-html="txt.name"></li>
                    </ul>

                    <div class="product__purchase-side">
                        <p class="product-price">{{ splitPrice(item.price) }} ₽</p>

                        <button @click="this.$router.push(`/catalog/${idx + 1}`)" class="product-btn blue-btn">
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="news__section">
        <div class="container">
            <div class="row">
                <NewsSlider/>
            </div>
        </div>
    </section> 

    <Footer/>

</template>

<script>
import Nav from '@/components/Nav.vue'
import { catalogStore } from "@/stores/catalogStore.js";
import pro1Img from '@/assets/img/productSlider/product-1.png'
import pro2Img from '@/assets/img/productSlider/product-2.png'
import pro3Img from '@/assets/img/productSlider/product-3.png'
import Footer from '@/components/Footer.vue';
import NewsSlider from '@/components/NewsSlider.vue';

export default {
    name: 'Catalog View',
    components: {
        Nav,
        NewsSlider,
        Footer
    },
    data() {
        return {
            store: catalogStore(),
            productImages: [pro1Img, pro2Img, pro3Img, pro1Img, pro2Img, pro3Img, pro1Img, pro2Img, pro3Img, pro1Img, pro2Img, pro3Img]
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

body {
    background: #fff !important;
}

.catalog__section {
    width: 100%;
    background: #fff;
    padding: 30px 0 80px;

    .row {
        gap: 30px;
    }

    .catalog__product {
        max-width: 410px;
        width: 100%;
        padding: 15px 20px 20px;
        border-radius: 10px;
        border: 1px solid #E0E7EA;
        background: #FFF;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;
        height: auto;

        .product {
            
            &-img {
                width: 100%;
                border-radius: 10px;
                overflow: hidden;
                mix-blend-mode: multiply;
                filter: contrast(1);
            }

            &-name {
                color: var(--main-dark-blue);
                font-size: 24px;
                font-weight: 500;
                min-height: 60px;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-type {
                display: flex;
                flex-direction: column;
                row-gap: 2px;
                color: var(--light-blue);
                font-weight: 500;
                text-transform: capitalize;
            }
    
            &__info-list {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 5px;

                &-item {
                    font-weight: 500;
                    color: var(--light-blue);
                }
            }

            &-system {
                color: var(--main-dark-blue);
                font-size: 18px;
                font-weight: 500;
            }

            &__system-list {
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 5px;
                
                &-item {
                    font-weight: 500;
                    color: var(--light-blue);
                }
            }

            &__purchase-side {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 40px;
                margin-top: auto;
            }

            &-price {
                font-size: 24px;
                font-weight: 600;
                color: var(--main-dark-blue);
            }
        }

        .row-line {
            width: 100%;
            height: 2px;
            background: rgba(1, 58, 81, .085);
            border-radius: 10px;
        }
    }
}

.news__section {
    width: 100%;
    background: #fff;
    padding: 80px 0;
    
    .row {
        flex-direction: column;
        row-gap: 30px;
    }
}

</style>