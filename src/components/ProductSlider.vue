<template>
    <swiper :navigation="{prevEl: '.products__top-btn.prev', nextEl: '.products__top-btn.next'}" :modules="modules" 
    class="product-slider" :slidesPerView="3" :spaceBetween="30">
        <swiper-slide class="product-slider-slide" v-for="(slide, idx) in store.productsList" 
        :key="idx">
            <img :src="productImages[idx]" alt="" class="product-img">

            <p class="product-name">{{ slide.name }}</p>
            <span class="row-line"></span>
            <p class="product-type" v-html="slide.type"></p>
            <span class="row-line"></span>
            <ul class="product__info-list">
                <li class="product__info-list-item" v-for="(info, id) in slide.infoList" 
                :key="id" v-html="info.name"></li>
            </ul>
            <span class="row-line"></span>
            <p class="product-system">{{ slide.systemName }}</p>
            <span class="row-line"></span>
            <ul class="product__system-list">
                <li class="product__system-list-item" v-for="(item, id) in slide.systemList" 
                :key="id" v-html="item.name"></li>
            </ul>

            <div class="product__purchase-side">
                <p class="product-price">{{ splitPrice(slide.price) }} ₽</p>

                <button @click="this.$router.push('/catalog')" class="product-btn">
                    Заказать
                </button>
            </div>
        </swiper-slide>
    </swiper>
    
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from "swiper/modules";
import { productsStore } from "@/stores/productsStore.js";
import pro1Img from '@/assets/img/productSlider/product-1.png'
import pro2Img from '@/assets/img/productSlider/product-2.png'
import pro3Img from '@/assets/img/productSlider/product-3.png'

export default {
    name: 'Product Slider',
    components: {
        Swiper, 
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation],
            store: productsStore(),
            productImages: [pro1Img, pro2Img, pro3Img, pro1Img, pro2Img, pro3Img]
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

.product-slider {
    width: 100%;
    height: 100%;

    &-slide {
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

            &-btn {
                border-radius: 10px;
                background: #0C91FC;
                padding: 15px 30px;
                font-size: 17px;
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

</style>