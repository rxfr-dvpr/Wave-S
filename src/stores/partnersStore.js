import { defineStore } from "pinia";

export const partnersStore = defineStore('Partners Store', {
    state: () => ({
        title: 'наши партнеры',
    })
})