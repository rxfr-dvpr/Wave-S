import { defineStore } from "pinia";

export const modalStore = defineStore('Modal Store', {
    state: () => ({
        title: 'заполните форму',
        text: 'мы ответим на все интересующие вопросы',
        userName: '',
        userTel: '',
        userMsg: '',
        getBtnValue: 'получить консультацию',
        policyTxt: 'Заполняя форму обратной связи вы соглашаетесь <span>с политикой конфиденциальности</span> ',
        thanksTitle: 'Спасибо!',
        thanksTxt: 'Ваша заявка принята, скоро с вами свяжется наш менеджер',
        backBtnValue: 'Вернуться на главную',
    })
})