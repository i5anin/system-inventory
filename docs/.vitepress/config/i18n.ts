// .vitepress/config/i18n.ts
import type { DefaultTheme } from 'vitepress'

export const i18n: Partial<DefaultTheme.Config> = {
    lastUpdated: {
        text: 'Обновлено',
        formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },
    docFooter: {
        prev: 'Предыдущая страница',
        next: 'Следующая страница'
    },
    // VitePress v1.x — объектная форма
    outline: {
        label: 'На этой странице',
        level: [2, 3]
    },
    returnToTopLabel: 'Вверх',
    darkModeSwitchLabel: 'Тема',
    sidebarMenuLabel: 'Меню',
    langMenuLabel: 'Язык'
}
