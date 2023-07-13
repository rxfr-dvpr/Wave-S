import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
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
        topContacts: {
            countries: [
                {
                    name: 'москва'
                },
                {
                    name: 'ташкент'
                },
            ]
        }
    })
})