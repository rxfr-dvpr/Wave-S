import { defineStore } from "pinia";

export const modalStore = defineStore('Modal Store', {
    state: () => ({
        title: 'заполните форму',
        text: 'мы ответим на все интересующие вопросы',
        userName: '',
        userTel: '',
        userMsg: '',
        nameVal: 'Введите ваше имя',
        telVal: 'Введите ваш телефон',
        msgVal: 'Комментарий',
        getBtnValue: 'Получить консультацию',
        policyTxt: 'заполняя форму обратной связи вы соглашаетесь <span>с политикой конфиденциальности</span> ',
        thanksTitle: 'Спасибо!',
        thanksTxt: 'Ваша заявка принята, скоро с вами свяжется наш менеджер',
        backBtnValue: 'Вернуться на главную',
        btnValue: "заказать звонок",
        modalVisible: false,
        finalVisible: false
    })
})