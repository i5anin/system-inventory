import { reactive } from 'vue'
import type { SortKey } from '../components/types'

export function useSort(initialKey: SortKey, initialAsc: boolean) {
    const state = reactive({
        sortKey: initialKey as SortKey,
        sortAsc: initialAsc as boolean
    })

    function setSort(key: SortKey) {
        if (state.sortKey === key) state.sortAsc = !state.sortAsc
        else {
            state.sortKey = key
            state.sortAsc = true
        }
    }

    return { state, setSort }
}
