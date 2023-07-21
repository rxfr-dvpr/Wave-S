import { defineStore } from "pinia";

export const productPageStore = defineStore('Product Page Store', {
    state: () => ({
        product: {
            name: 'терминал Platinum Space',
            systemName: 'Платежные системы',
            systemList: [
                {
                    name: 'Купюроприемник: <span>CashCode</span>'
                },
                {
                    name: 'Монетоприемник: <span>Microcoin SP</span>'
                },
                {
                    name: 'Карты лояльности: <span class="main-blue">(в комплекте)</span>'
                },
                {
                    name: 'Банковские карты: <span class="main-blue">(в комплекте)</span>'
                }
            ],
            infoName: 'Основные характеристики',
            infoList: [
                {
                    name: 'Корпус: <span>Нерж. сталь</span>'
                },
                {
                    name: 'Монтируется: <span>На стену</span>'
                },
                {
                    name: 'Экран: <span>Touch 43 дюйма (яркий)</span>'
                },
                {
                    name: 'Кнопки: <span>Сенсорные</span>'
                },
                {
                    name: 'Масса (кг): <span>90</span>'
                },
                {
                    name: 'Подсветка: <span>"Ambilight" В комплекте</span>'
                },
            ],
            functionsName: 'Функционал',
            functionsList: [
                {
                    name: 'Вода под давлением: <span>Мощная струя воды (до 200 бар)</span>'
                },
                {
                    name: 'Пена: <span>Густая шапка пены</span>'
                },
                {
                    name: 'Воск: <span>Блеск и водоотталкивание</span>'
                },
                {
                    name: 'Умная пауза: <span>Настраиваемая (платная/бесплатная)</span>'
                },
                {
                    name: 'Турбо-давление: <span>Возможность увеличить давление струи (опция)</span>'
                }
            ],
            price: 587000
        }
    })
})