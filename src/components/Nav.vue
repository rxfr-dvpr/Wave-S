<template>
  <nav :class="`nav ${wdWidth < 992 ? 'mb-nav' : ''}`">
    <div class="container">
        <div class="row">
            <div class="nav__contacts" v-show="wdWidth > 992">
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

            <span class="nav-line" v-show="wdWidth > 992"></span>

            <div class="nav__content">

                <router-link to="/" class="nav-logo">
                    <img :src="logo" alt="" class="nav-logo-img">
                </router-link>
                
                <router-link :to="store.link.url" class="nav__content-link">
                    {{ store.link.name }}
                </router-link>

                <div :class="`nav__content-collapse ${mbNavOpened ? 'opened' : ''}`" v-if="this.$route.name == 'home'">
                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="(link, idx) in store.idLinks" :key="idx">
                            <a :href="link.url" class="nav__list-link nav__content-link">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>

                <router-link to="/catalog" v-if="this.$route.name == 'catalog product page'" class="back-link nav__content-link">
                    назад
                </router-link>

                <a-button type="primary" @click="mbNavOpened = !mbNavOpened" v-if="wdWidth < 992 && this.$route.name == 'home'">{{ mbNavOpened ? 'Закрыть' : 'Открыть' }}</a-button>
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
            logo: navLogo,
            wdWidth: window.innerWidth,
            mbNavOpened: false
        }
    },
    mounted() {
        window.addEventListener('resize', () => this.wdWidth = window.innerWidth)
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
        gap: 20px;
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
            font-size: calc(13px + 2 * (100vw / 1920));
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
            font-size: calc(13px + 2 * (100vw / 1920));
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

                &-link {
                    margin-left: 0 !important;
                }
            }
        }

        .back-link {
            margin-left: 0 !important;

            &.router-link-exact-active {
                pointer-events: none;
            }
        }
    }
}

@media (min-width: 1920px) {
    .nav {
        &__contact-links-item, .nav__content-link {
            font-size: 15px !important;
        }
    }
}

@media (max-width: 1024px) {
    .nav {
        &__contact-links-item, .nav__content-link {
            font-size: calc(13px + (2 + 2 * 0.7) * ((100vw - 320px)/ 1920));
        }
    }
}

@media (max-width: 992px) {
    .nav.mb-nav {
        .nav__content-collapse {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            padding: 20px;
            background: var(--bg-color);
            box-shadow: 20px 0 20px rgba($color: #000000, $alpha: .5);
            display: flex;
            justify-content: center;
            align-items: center;
            translate: -120% 0;
            
            &.opened {
                translate: 0;
            }

            .nav__list {
                max-width: max-content;
                flex-direction: column;
                row-gap: 50px;
            }
        }
    }
}

@media (min-width: 992px) {
    .nav__list {
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

</style>