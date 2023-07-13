import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        topContacts: {
            countries: [
                {
                    name: 'москва'
                },
                {
                    name: 'ташкент'
                },
            ],
            contactInfo: [
                {
                    info: 'Ежедневно с 9:00 до 18:00',
                    icon: '<i class="fal fa-clock"></i>',
                    url: '/'
                },
                {
                    info: '+7 (800) 700-20-60',
                    icon: '<i class="fal fa-phone-alt"></i>',
                    url: 'tel:+7(800)700-20-60'
                },
                {
                    info: '+7 (495) 725-25-63',
                    icon: '<i class="fal fa-phone-alt"></i>',
                    url: 'tel:+7 (495) 725-25-63'
                },
                {
                    info: 'info@moyka-wave.ru',
                    icon: '<i class="fal fa-envelope"></i>',
                    url: '/'
                }
            ]
        },
        link: {
            name: 'Оборудование',
            url: 'catalog'
        },
        idLinks: [
            {
                name: 'Объекты',
                url: '#'
            },
            {
                name: 'О компании',
                url: '#'
            },
            {
                name: 'Пресса о нас',
                url: '#'
            },
            {
                name: 'Контакты',
                url: '#'
            },
        ],
        
    })
})