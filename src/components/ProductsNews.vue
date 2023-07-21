<template>
    <section class="products__section" id="products">
        <div class="container">
            <div class="row">
                <div class="products__top">
                    <h2 class="products__top-title all-title">{{ store.title }}</h2>

                    <span @click="this.$router.push('/catalog')" class="products__top-link">посмотреть все товары</span>

                    <div class="products__top-controllers">
                        <button class="products__top-btn prev"><i class="far fa-chevron-left"></i></button>
                        <button class="products__top-btn next"><i class="far fa-chevron-right"></i></button>
                    </div>
                </div>

                <ProductSlider/>

                <div class="news__top">
                    <h2 class="news__top-title all-title">{{ nStore.title }}</h2>

                    <span @click="this.$router.push('/catalog')" class="news__top-link">посмотреть все новости</span>

                    <div class="news__top-controllers">
                        <button class="news__top-btn prev"><i class="far fa-chevron-left"></i></button>
                        <button class="news__top-btn next"><i class="far fa-chevron-right"></i></button>
                    </div>
                </div>

                <NewsSlider/>
            </div>
        </div>
    </section>
</template>

<script>
import { productsStore } from "@/stores/productsStore.js";
import ProductSlider from './ProductSlider.vue';
import { newsStore } from "@/stores/newsStore.js";
import NewsSlider from './NewsSlider.vue';

export default {
    name: 'Products',
    components: {
        ProductSlider,
        NewsSlider
    },
    data() {
        return {
            store: productsStore(),
            nStore: newsStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.products__section {
    width: 100%;
    background: #fff;
    padding: 70px 0;

    .row {
        flex-direction: column;
        row-gap: 50px;
    }

    .products__top, .news__top {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;

        &-title {
            color: var(--main-dark-blue);
        }

        &-link {
            margin-left: auto;
            color: var(--main-blue);
            font-size: 20px;
            cursor: pointer;
            &::first-letter {
                text-transform: uppercase;
            }
        }

        &-controllers {
            display: flex;
            gap: 10px;
        }

        &-btn {
            min-width: 55px;
            max-width: 55px;
            width: 100%;
            height: 55px;
            background: rgba(12, 145, 252, 1);
            border-radius: 50%;
            font-size: 20px;

            &.swiper-button-disabled {
                background: rgba(244, 244, 245, 1);
                i {
                    color: rgba(188, 188, 188, 1);
                }
            }
        }
    }

    .news__top {
        margin-top: 30px;
    }
}

</style>