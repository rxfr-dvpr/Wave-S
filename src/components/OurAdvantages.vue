<template>
  <section class="advantages__section">
    <div class="container">
        <div class="row">
            <h2 class="advantages-title all-title">{{ store.title }}</h2>

            <div class="advantages__cards">
                <div class="advantages__cards-item" v-for="(card, idx) in store.cards" 
                :key="idx" :class="`card-${idx + 1} card-${card.class} ${card.img !== '' ? 'img-fit' : ''}`">
                    <span class="card-icon" v-if="card.icon != ''" v-html="card.icon"></span>
                    <p class="card-txt" v-if="card.txt != ''" v-html="card.txt"></p>

                    <img src="@/assets/img/card-img.png" v-if="card.img !== ''" alt="" class="card-img">
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { advantagesStore } from "@/stores/advantagesStore";

export default {
    name: 'Our Advantages',
    data() {
        return {
            store: advantagesStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.advantages__section {
    width: 100%;
    
    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 50px;
    }

    .advantages {
        &-title {
            text-align: center;           
        }

        &__cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            column-gap: 30px;
            row-gap: 30px;

            &-item {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-radius: 10px;
                overflow: hidden;
                height: 100%;

                &.card {
                    &-1 { grid-area: 1 / 1 / 2 / 2; }
                    &-2 { grid-area: 1 / 2 / 2 / 3; }
                    &-3 { grid-area: 1 / 3 / 2 / 4; }
                    &-4 { grid-area: 1 / 4 / 2 / 5; }
                    &-5 { grid-area: 2 / 1 / 3 / 3; }
                    &-6 { grid-area: 2 / 3 / 3 / 5; }
                    &-7 { grid-area: 3 / 1 / 4 / 2; }
                    &-8 { grid-area: 3 / 2 / 4 / 3; }
                    &-9 { grid-area: 3 / 3 / 4 / 4; }
                    &-10 { grid-area: 3 / 4 / 4 / 5; }
                    &-11 { grid-area: 4 / 1 / 5 / 3; }
                    &-12 { grid-area: 4 / 3 / 5 / 5; }
                }

                &.card-md {
                    padding: 25px;

                    .card-icon {
                        font-size: 30px;
                        margin-bottom: 50px;
                    }

                    .card-txt {
                        font-size: 20px;
                        display: flex;
                        flex-direction: column;
                        row-gap: 10px;

                        &::first-letter {
                            text-transform: uppercase;
                        }
                    }
                }

                &.card-lg {
                    padding: 55px 25px;

                    .card-txt {
                        font-size: 17px !important;
                        display: flex;
                        flex-direction: column;
                        row-gap: 10px;

                        &::first-letter {
                            text-transform: uppercase;
                        }
                    }
                }

                &.gray {
                    background: linear-gradient(180deg, #393939 0%, #2E2E2E 100%);
                    border: solid 1px rgba($color: rgb(138, 138, 138), $alpha: .3);
                }

                &.blue {
                    border-radius: 10px;
                    background: linear-gradient(180deg, #39A7FF 0%, #008DFF 100%);
                    border: solid 2px rgba($color: #39A7FF, $alpha: .3);
                }

                .card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: cover;
                }

            }
        }
    }
}

</style>