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
                    info: '+998 (99) 817-30-66',
                    icon: '<i class="fal fa-phone-alt"></i>',
                    url: 'tel:+998998173066'
                },
                {
                    info: '+7 (777) 717-77-77',
                    icon: '<i class="fal fa-phone-alt"></i>',
                    url: 'tel:+77777177777'
                },
                {
                    info: 'saidaliyev.avazbek14@gmail.com',
                    icon: '<i class="fal fa-envelope"></i>',
                    url: 'mailto:saidaliyev.avazbek14@gmail.com'
                }
            ]
        },
        link: {
            name: 'Оборудование',
            url: '/catalog'
        },
        idLinks: [
            {
                name: 'Объекты',
                url: '#products'
            },
            {
                name: 'О компании',
                url: '#advantages'
            },
            {
                name: 'Пресса о нас',
                url: '#'
            },
            {
                name: 'Контакты',
                url: '#contact'
            },
        ],
        
    })
})