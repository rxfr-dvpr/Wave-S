<template>
    <section class="products__section">
        <div class="container">
            <div class="row">
                <div class="products__top">
                    <h2 class="products__top-title all-title">{{ store.title }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { productsStore } from "@/stores/productsStore.js";

export default {
    name: 'Products',
    data() {
        return {
            store: productsStore()
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

    .products__top {
        &-title {
            color: var(--main-dark-blue);
        }
    }
}

</style>