<template>

  <header class="header">
    <div class="container">
        <div class="row">
            <div class="header__descr">
                <h1 class="header__descr-title">{{ store.title }}</h1>

                <ul class="header__descr-features">
                    <li class="header__descr-features-item" 
                    v-for="(item, idx) in store.features" :key="idx">
                        <span :class="`features-icon item-${idx + 1}`" v-html="item.icon"></span>
                        {{ item.name }}
                    </li>
                </ul>

                <OrderBtn/>
            </div>
        </div>
    </div>
  </header>

</template>

<script>
import { headerStore } from "@/stores/headerStore.js";
import { modalStore } from "@/stores/modalStore.js";
import OrderBtn from './OrderBtn.vue';



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
    }

    &__descr {
        max-width: 625px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 40px;

        &-title {
            font-size: calc(24px + 24 * (100vw / 1920));

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
                    min-width: 70px;
                    max-width: 70px;
                    width: 100%;
                    height: 70px;
                    border-radius: 23px;
                    backdrop-filter: blur(12px);
                    display: grid;
                    place-items: center;
                    font-size: 30px;

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
}

@media (min-width: 1920px) {
    .header__descr {
        &-title {
            font-size: 48px !important;
        }
    }
}

</style>