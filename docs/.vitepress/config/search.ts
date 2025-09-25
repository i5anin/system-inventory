import type { DefaultTheme } from 'vitepress'

export const search = {
    provider: 'local',
    options: {
        locales: {
            root: {
                translations: {
                    button: {
                        buttonText: 'Поиск',
                        buttonAriaLabel: 'Открыть поиск'
                    },
                    modal: {
                        displayDetails: 'Показать подробности',
                        resetButtonTitle: 'Очистить',
                        backButtonTitle: 'Назад',
                        noResultsText: 'Ничего не найдено',
                        footer: {
                            selectText: 'выбрать',
                            navigateText: 'навигация',
                            closeText: 'закрыть'
                        }
                    }
                }
            }
        }
    }
} as const satisfies NonNullable<DefaultTheme.Config['search']>
