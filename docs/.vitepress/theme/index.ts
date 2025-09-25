import DefaultTheme from 'vitepress/theme'
import './styles/inventory.css'
import InventoryRoot from './components/InventoryRoot.vue'
import InventorySection from './components/InventorySection.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('InventoryRoot', InventoryRoot)
        app.component('InventorySection', InventorySection)
    }
}
