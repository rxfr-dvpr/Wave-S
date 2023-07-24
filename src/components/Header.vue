<template>

  <header class="header">
    <div class="container">
        <div class="row">
            <div class="header__descr">
                <h1 class="header__descr-title all-title">{{ store.title }}</h1>

                <ul class="header__descr-features">
                    <li class="header__descr-features-item" 
                    v-for="(item, idx) in store.features" :key="idx">
                        <span :class="`features-icon item-${idx + 1}`" v-html="item.icon"></span>
                        {{ item.name }}
                    </li>
                </ul>

                <OrderBtn/>
            </div>

            <div class="header__img-box">
                <img src="@/assets/img/header-img.png" alt="" class="header-img">
                <img src="@/assets/img/header-img-bg.svg" alt="" class="header-img-bg">
            </div>
        </div>
    </div>
  </header>

</template>

<script>
import { headerStore } from "@/stores/headerStore.js";
import { modalStore } from "@/stores/modalStore.js";
import OrderBtn from './OrderBtnModal.vue';

export default {
    name: 'Header',
    components: {
        OrderBtn
    },
    data() {
        return {
            store: headerStore(),
            mdlStore: modalStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 60px 0;

    .row {
        justify-content: space-between;
        align-items: center;
        row-gap: 40px;
    }

    &__descr {
        max-width: 625px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 40px;

        &-title {
            &::first-letter {
                text-transform: uppercase;
            }
        }

        &-features {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;

            &-item {
                max-width: 180px;
                width: 100%;
                display: flex;
                align-items: center;
                gap: 15px;
                text-transform: capitalize;
                user-select: none;

                .features-icon {
                    padding: 25px;
                    border-radius: 23px;
                    backdrop-filter: blur(12px);
                    display: grid;
                    place-items: center;
                    font-size: 20px;

                    &.item-1 {
                        background: radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20)0%, #0C91FC 100%);
                        box-shadow: 5px 2px  20px #0C91FC;
                    }

                    &.item-2 {
                        background: radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, #864491 100%);
                        box-shadow: 5px 2px  20px #864491;
                    }

                    &.item-3 {
                        background: radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, #917244 100%);
                        box-shadow: 5px 2px  20px #917244;
                    }
                }
            }
        }
    }

    &__img-box {
        max-width: 600px;
        width: 100%;
        position: relative;
        user-select: none;
        pointer-events: none;

        .header-img {
            max-width: 500px;
            width: 100%;
            display: block;
            margin: 0 auto;
            object-fit: contain;
            user-select: none;
        }

        .header-img-bg {
            width: 100%;
            position: absolute;
            top: -10%;
            left: 55%;
            transform: translateX(-50%);
            display: block;
            z-index: -1;
            object-fit: contain;
        }
    }
}

@media (max-width: 1260px) {
    .header {

        &__descr {
            max-width: 500px;
        }

        &__img-box {
            max-width: 500px;
        }
    }
}

@media (max-width: 1050px) {
    .header {

        &__descr {
            max-width: 450px;
        }

        &__img-box {
            max-width: 450px;
        }
    }
}

@media (max-width: 992px) {
    .row {
        flex-direction: column;
    }
}



</style>