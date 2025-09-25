export type ModuleItem = {
    id: string
    title: string
    progress?: number | null
    href?: string
}

const modules: ModuleItem[] = [
    { id: 'intro', title: 'Вводный модуль', progress: 55 },
    { id: 'html-css', title: 'Модуль HTML, CSS', progress: null },
    { id: 'kb', title: 'Библиотека знаний', progress: null },
    { id: 'js-base', title: 'Модуль 1. База JavaScript', progress: 0 },
    { id: 'git', title: 'Модуль Git', progress: 0 },
    { id: 'fe-2', title: 'Модуль 2. Frontend', progress: 71 },
    { id: 'fe-2-practice', title: 'Модуль 2. Frontend. Практика', progress: null },
    { id: 'diploma', title: 'Дипломный проект', progress: 0 },
    { id: 'positioning', title: 'Модуль личное позиционирование', progress: 0 },
    { id: 'backend-3', title: 'Модуль 3. Backend', progress: 0 },
    { id: 'ts', title: 'Модуль TypeScript', progress: null },
    { id: 'english', title: 'Модуль по английскому языку', progress: 0 },
    { id: 'job', title: 'Модуль по трудоустройству', progress: 0 },
    { id: 'demo-outro', title: 'Демо. Заключение', progress: null }
]

export default modules
