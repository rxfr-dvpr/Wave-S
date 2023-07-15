import { defineStore } from 'pinia'

export const headerStore = defineStore('Header Store', {
    state: () => ({
        title: 'оборудование для моек самообслуживания',
        features: [
            {
                name: 'быстрая окупаемость',
                icon: '<i class="fal fa-ruble-sign"></i>'
            },
            {
                name: 'высокое качество',
                icon: '<i class="far fa-medal"></i>'
            },
            {
                name: 'короткие сроки',
                icon: '<i class="fal fa-history"></i>'
            }
        ]
    })
})