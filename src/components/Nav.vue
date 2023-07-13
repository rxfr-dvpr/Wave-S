<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <div class="nav__contacts">
                <select class="location__dropdown">
                    <option :value="option.name"  v-for="(option, id) in store.topContacts.countries" :key="id">
                        {{ option.name }}
                    </option>
                </select>

                <div class="nav__contact-links">
                    <a :href="item.url" class="nav__contact-links-item" 
                    v-for="(item, idd) in store.topContacts.contactInfo" :key="idd">
                        <span class="item-icon" v-html="item.icon"></span>
                        {{ item.info }}
                    </a>
                </div>
            </div>

            <span class="nav-line"></span>

            <div class="nav__content">

            </div>
        </div>
    </div>
  </nav>
</template>

<script>

import { navStore } from '@/stores/navStore';

export default {
    name: 'Nav',
    data() {
        return {
            store: navStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    background: var(--bg-color);
    padding-top: 10px;
    box-shadow: 0 10px 10px rgba($color: #000000, $alpha: .1);
    position: sticky;
    top: 0;
    left: 0;

    .row {
        flex-direction: column;
        row-gap: 20px;
    }

    &__contacts {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 35px;
        flex-wrap: wrap;

        .location__dropdown {
            background: transparent;
            border: 0;
            outline: none;
            text-transform: capitalize;
            cursor: pointer;

            option {
                background: var(--bg-color);
                font-size: 14px;

                &:hover {
                    color: red;
                }
            }
        }
    }

    &__contact-links {
        max-width: max-content;
        width: 100%;
        display: flex;
        gap: 25px;
        align-items: center;

        &-item {
            text-transform: capitalize;
            font-size: 15px;
            display: flex;
            align-items: center;
            column-gap: 10px;
            transition: .4s;

            &:hover {
                color: var(--main-blue);
            }
        }
    }

    &-line {
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.29);
    }
}

</style>