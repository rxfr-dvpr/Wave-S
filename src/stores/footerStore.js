import { defineStore } from "pinia";

export const footerStore = defineStore('Footer Store', {
    state: () => ({
        top: {
            descr: {
                txt: 'отличный выбор оборудования для автомоек самообслуживания',
                socialLinks: [
                    {
                        icon: '<i class="fab fa-instagram"></i>',
                        url: 'https://www.instagram.com/redfox_4ever/'
                    },
                    {
                        icon: '<i class="fab fa-telegram"></i>',
                        url: 'https://t.me/redfox4ever'
                    }
                ]
            },
            technics: {
                title: 'Оборудование',
                list: [
                    {
                        name: 'О компании'
                    },
                    {
                        name: 'Аксессуары для АВД'
                    },
                    {
                        name: 'Пылесосы самообслуживания'
                    },
                    {
                        name: 'Разменные аппараты'
                    },
                    {
                        name: 'Рукомойник для мойки самообслуживания'
                    }
                ]
            },
            contacts: {
                title: 'контакты',
                list: [
                    {
                        icon: '<i class="fal fa-clock"></i>',
                        txt: '<span>Время работы</span> Ежедневно с 9:00 до 18:00'
                    },
                    {
                        icon: '<i class="fas fa-phone-volume"></i>',
                        txt: '<span>Телефон:</span> +7(800)700-20-60, +7(495)725-25-63'
                    },
                    {
                        icon: '<i class="fal fa-envelope"></i>',
                        txt: '<span>Почта:</span> Info@moyka-wave.ru'
                    }
                ]
            },
            cities: {
                title: 'мы представлены в городах',
                list: [
                    {
                        name: 'самара'
                    },
                    {
                        name: 'с.-Петербург'
                    },
                    {
                        name: 'омск'
                    },
                    {
                        name: 'казань'
                    },
                    {
                        name: 'ростов-на-Дону'
                    },
                    {
                        name: 'челябинск'
                    },
                    {
                        name: 'волгоград'
                    },
                    {
                        name: 'н.-Новгород'
                    },
                    {
                        name: 'новосибирск'
                    },                
                ]
            }
        },
        copyright: '© 2014-2023 «Wave-S». Мойки самообслуживания | <span>Карта сайта</span> | <span>Контакты в регионах</span> | <span>Этапы строительства</span>'
    })
})