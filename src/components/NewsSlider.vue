<template>

    <div class="news__top">
        <h2 class="news__top-title all-title">{{ nStore.title }}</h2>

        <span @click="this.$router.push('/catalog')" class="news__top-link">посмотреть все новости</span>

        <div class="news__top-controllers">
            <button class="news__top-btn prev"><i class="far fa-chevron-left"></i></button>
            <button class="news__top-btn next"><i class="far fa-chevron-right"></i></button>
        </div>
    </div>

    <swiper :navigation="{prevEl: '.news__top-btn.prev', nextEl: '.news__top-btn.next'}" :modules="modules" 
      class="news-slider" :slidesPerView="3" :spaceBetween="30">
        <swiper-slide class="news-slider-slide" v-for="(slide, idx) in store.newsList" 
          :key="idx">
            <img :src="newsImg" alt="" class="news-img">

            <p class="news-name">{{ slide.name }}</p>
            <p class="news-txt">{{ slide.txt }}</p>

            <div class="news__bottom">
                <p class="news__bottom-link">
                    Читать далее
                    <button @click="this.$router.push('/catalog')" class="news-btn"><i class="fal fa-arrow-up"></i></button>
                </p>

                <p class="news__bottom-date">
                    {{ date() }}
                </p>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from "swiper/modules";
import { newsStore } from "@/stores/newsStore.js";
import newsImg from "@/assets/img/news-img.png";

export default {
    name: 'Product Slider',
    components: {
        Swiper, 
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation],
            store: newsStore(),
            newsImg,
            nStore: newsStore()
        }
    },
    methods: {
        date() {
            let day = new Date().getDate(),
            month = new Date().getMonth(),
            year = new Date().getFullYear()

            if (day <= 9 || month <= 9) {
                if (day <= 9 && month <= 9) {
                    return `0${day}.0${month}.${year}`
                } else if (month <= 9) {
                    return `${day}.0${month}.${year}`
                } else {
                    return `0${day}.${month}.${year}`
                }
            } else {
                return `${day}.${month}.${year}`
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.news__top {
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

.news-slider {
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
        row-gap: 15px;
        height: auto;

        .news {
            
            &-img {
                width: 100%;
                border-radius: 10px;
                overflow: hidden;
                mix-blend-mode: multiply;
                filter: contrast(1);
            }

            &-name {
                color: var(--main-dark-blue);
                font-size: 22px;
                font-weight: 600;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-txt {
                font-size: 15px;
                font-weight: 500;
                color: var(--main-dark-blue);

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-btn {
                border-radius: 10px;
                background: #0C91FC;
                padding: 10px 15px;
                font-size: 20px;

                i {
                    transform: rotate(45deg);
                }
            }

            &__bottom {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                flex-wrap: wrap;

                &-link {
                    font-size: 15px;
                    color: var(--main-dark-blue);
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }

                &-date {
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--main-dark-blue);
                }
            }
        }
    }
}


</style>