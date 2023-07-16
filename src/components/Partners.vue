<template>
    <section class="partners__section">
        <div class="container">
            <div class="row">
                <h2 class="partners-title all-title">{{ store.title }}</h2>

                <div class="partners__cards">
                    <img :src="img" alt="" class="partners__cards-img" 
                    v-for="(img, idx) in partnerImages" :key="idx">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { partnersStore } from "@/stores/partnersStore.js";
import partnerImg1 from '@/assets/img/partnersImg/img-1.svg';
import partnerImg2 from '@/assets/img/partnersImg/img-2.svg';
import partnerImg3 from '@/assets/img/partnersImg/img-3.svg';
import partnerImg4 from '@/assets/img/partnersImg/img-4.svg';
import partnerImg5 from '@/assets/img/partnersImg/img-5.svg';

export default {
    name: 'Partners',
    data() {
        return {
            store: partnersStore(),
            partnerImages: [partnerImg1, partnerImg2, partnerImg3, partnerImg4, partnerImg5]
        }
    }
}

</script>

<style lang="scss" scoped>

.partners__section {
    width: 100%;
    
    .row {
        flex-direction: column;
        row-gap: 30px;
    }

    .partners__cards {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 60px 40px;
        border-radius: 10px;
        background: linear-gradient(180deg, #393939 0%, #2E2E2E 100%);
        border: solid 1px rgba($color: gray, $alpha: .3);
        gap: 20px;

        &-img {
            max-width: max-content;
            width: 100%;
            object-fit: contain;
            user-select: none;
            pointer-events: none;
        }
    }
}

</style>