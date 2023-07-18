import { defineStore } from "pinia";

export const contactStore = defineStore('Contact Store', {
    state: () => ({
        title: 'оставьте заявку',
        txt: 'мы ответим на все интересующие вопросы',
    })
})