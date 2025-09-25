import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {text: 'Главная', link: '/'},
    {
        text: 'Документы',
        items: [
            {text: 'Марафон «От Junior до Middle за 1 собеседование»', link: '/junior/'},
            {text: 'Профессия Мидл Frontend-разработчик', link: '/middle/'},
            {text: 'Марафон «От Junior до Middle за 1 собеседование»', link: '/marathon/'},
        ]
    }
]

export const sidebar: DefaultTheme.Sidebar = [
    {
        text: 'Профессия Джуниор Frontend-разработчик',
        link: '/junior/',
        items: [
            {
                text: 'Модуль 2. Frontend. Практика',
                link: '/junior/frontend-practice/',
                items: [{
                    text: 'Введение',
                    link: '/junior/frontend-practice/Введение/',
                }, {
                    text: '1. Начало работ',
                    link: '/junior/frontend-practice/1. Начало работ/',
                },]
            },
        ]
    },
]