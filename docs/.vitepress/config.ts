import { defineConfig } from 'vitepress'
import { nav, sidebar } from './config/menu'
import { search } from './config/search'
import { i18n } from './config/i18n'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    lang: 'ru-RU',
    title: 'Мои устройства (title)',
    description: 'Мои устройства (description)',
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'Мои устройства',
        search,
        nav,
        sidebar,
        ...i18n
    }
})