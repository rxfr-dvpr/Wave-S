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

                <router-link to="/" class="nav-logo">
                    <img :src="logo" alt="" class="nav-logo-img">
                </router-link>
                
                <router-link :to="store.link.url" class="nav__content-link">
                    {{ store.link.name }}
                </router-link>

                <div class="nav__content-collapse">
                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="(link, idx) in store.idLinks" :key="idx">
                            <a :href="link.url" class="nav__list-link nav__content-link">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  </nav>
</template>

<script>

import { navStore } from '@/stores/navStore';
import navLogo from '@/assets/img/logo.svg';


export default {
    name: 'Nav',
    data() {
        return {
            store: navStore(),
            logo: navLogo
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    background: var(--bg-color);
    padding: 10px 0 20px;
    box-shadow: 0 10px 10px rgba($color: #000000, $alpha: .1);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 200;
    
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

    &__content {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 30px;

        .nav-logo {
            max-width: 190px;
            width: 100%;

            img {
                width: 100%;
                display: block;
                pointer-events: none;
            }
        }

        &-link {
            font-size: 15px;
            transition: .4s;
            text-transform: capitalize;
            margin-left: auto;

            &:hover {
                color: var(--main-blue);
            }

            &.router-link-exact-active {
                color: var(--main-blue);
            }
        }

        &-collapse {
            max-width: max-content;
            width: 100%;

            .nav__list {
                width: 100%;
                display: flex;
                align-content: center;
                gap: 30px;

                &:hover li {
                    filter: blur(5px);
                    -webkit-filter: blur(5px);
                }

                &-item:hover {
                    filter: blur(0px) !important;
                    -webkit-filter: blur(0px) !important;
                }
            }
        }

    }
}

</style>