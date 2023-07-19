<template>
  <footer class="footer">
    <div class="container">
        <div class="row">
            
            <div class="footer__top">
                <div class="footer__top-descr">
                    <router-link to="/" class="footer-logo">
                        <img :src="footerLogo" alt="" class="footer-logo-img">
                    </router-link>

                    <p class="footer__top-descr-txt">{{ topStore.descr.txt }}</p>

                    <div class="footer__social-links">
                        <a :href="link.url" target="_blank" class="footer__social-links-item" v-for="(link, idx) in topStore.descr.socialLinks" :key="idx" v-html="link.icon"></a>
                    </div>
                </div>

                <div class="footer__top-technics">
                    <p class="footer__technics-title footer-title">{{ topStore.technics.title }}</p>
                    <div class="footer__technics-list">
                        <p class="footer__technics-list-item" v-for="(item, idd) in topStore.technics.list" :key="idd">
                            {{ item.name }}
                        </p>
                    </div>
                </div>

                <div class="footer__top-contacts">
                    <p class="footer__contacts-title footer-title">{{ topStore.contacts.title }}</p>

                    <div class="footer__contacts-list">
                        <div class="footer__contacts-list-item" v-for="(info, id) in topStore.contacts.list" :key="id">
                            <span class="contact-icon" v-html="info.icon"></span>
                            <p class="contact-txt" v-html="info.txt"></p>
                        </div>
                    </div>
                </div>

                <div class="footer__top-cities">
                    <p class="footer__cities-title footer-title">{{ topStore.cities.title }}</p>
                    <div class="footer__cities-list">
                        <p class="footer__cities-list-item" v-for="(city, idd) in topStore.cities.list" :key="idd">{{ city.name }}</p>
                    </div>
                </div>
            </div>

            <span class="border-line"></span>

            <p class="footer__copyright-txt" v-html="store.copyright"></p>

        </div>
    </div>
  </footer>
</template>

<script>
import { footerStore } from "@/stores/footerStore.js";
import footerLogo from "@/assets/img/logo.svg";

export default {
    name: 'Footer',
    data() {
        return {
            store: footerStore(),
            topStore: footerStore().top,
            footerLogo
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    padding: 25px 0;
    background: #181717;

    .row {
        flex-direction: column;
        row-gap: 25px;
        align-items: center;
    }

    &-title {
        font-size: 14px;
        color: var(--primary-color);
        font-weight: 600;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    &__top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        &-descr {
            max-width: 190px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 10px;

            &-txt {
                font-size: 12px;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .footer__social-links {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 15px;

                &-item {
                    font-size: 30px;
                }
            }
        }

        &-technics {
            max-width: 190px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 15px;

            .footer__technics {
                &-list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;

                    &-item {
                        font-size: 14px;
                        font-weight: 400;
                    }
                }
            }
        }

        &-contacts {
            max-width: max-content;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 15px;

            .footer__contacts {
                &-list {
                    max-width: 250px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 20px;  

                    &-item {
                        max-width: max-content;
                        width: 100%;
                        display: flex;
                        gap: 10px;

                        .contact-icon {
                            font-size: 20px;
                        }

                        .contact-txt {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            font-size: 15px;
                            row-gap: 3px;
                        }
                    }
                }
            } 
        }

        &-cities {
            max-width: 250px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 15px;

            .footer__cities-list {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 45px;
                row-gap: 15px;

                &-item {
                    font-size: 12px;
                }
            }
        }
    }

    .border-line {
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.29);
    }

    &__copyright-txt {
        span {
            text-decoration: underline;
        }
    }
}

</style>