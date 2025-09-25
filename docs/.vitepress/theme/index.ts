
import DefaultTheme from 'vitepress/theme'
import InventoryTable from './components/InventoryTable.vue'
import type { Theme } from 'vitepress'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('InventoryTable', InventoryTable)
    }
} satisfies Theme
