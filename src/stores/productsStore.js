import { defineStore } from "pinia";

export const productsStore = defineStore('Products Store', {
    state: () => ({
        title: 'популярные товары',
        productsList: [
            {
                name: 'Зона доп. услуг для МСО и АЗС',
                type: 'Тип: <span>Готовое решение МСО</span>',
                infoList: [
                    {
                        name: 'Напряжение: <span>220 В</span>'
                    },
                    {
                        name: 'Мощность: <span>2 х 2400 Вт.</span>'
                    },
                    {
                        name: 'Принимает: <span>Монеты/жетоны</span>'
                    },
                    {
                        name: 'Объем бака: <span>2 х 70 л.</span>'
                    }
                ],
                systemName: 'Платежные системы',
                systemList: [
                    {
                        name: 'Монетоприемник: <span>Eu 9</span>'
                    },
                    {
                        name: 'Купюроприемник: <span>(Опция)</span>'
                    },
                    {
                        name: 'Карты лояльности: <span>(Опция)</span>'
                    },
                    {
                        name: 'Фискальный чек: <span>(Опция)</span>'
                    }
                ],
                price: 600000
            },
            {
                name: 'Терминал "Platinum Space Robo" (настенный)',
                type: 'Тип: <span>Терминал</span>',
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
                    }
                ],
                systemName: 'Платежные системы',
                systemList: [
                    {
                        name: 'Купюроприемник: <span>CashCode</span>'
                    },
                    {
                        name: 'Карты лояльности: <span>(в комплекте)</span>'
                    },
                    {
                        name: 'Банковские карты: <span>(в комплекте)</span>'
                    }
                ],
                price: 660000
            },
            {
                name: 'Терминал "Platinum Space"',
                type: 'Тип: <span>Терминал</span>',
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
                systemName: 'Платежные системы',
                systemList: [
                    {
                        name: 'Купюроприемник: <span>CashCode</span>'
                    },
                    {
                        name: 'Монетоприемник: <span>Microcoin SP</span>'
                    },
                    {
                        name: 'Карты лояльности: <span>(в комплекте)</span>'
                    },
                    {
                        name: 'Банковские карты: <span>(в комплекте)</span>'
                    }
                ],
                price: 600000
            },
        ]
    })
})