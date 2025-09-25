import type { Item, SortKey } from '../components/types'

export function sortItems(items: Item[], key: SortKey, asc: boolean): Item[] {
    const dir = asc ? 1 : -1
    return [...items].sort((a, b) => {
        if (key === 'price') return (a.price - b.price) * dir
        if (key === 'purchasedAt' || key === 'updatedAt') {
            const ta = new Date(a[key]).getTime()
            const tb = new Date(b[key]).getTime()
            if (Number.isNaN(ta) && Number.isNaN(tb)) return 0
            if (Number.isNaN(ta)) return 1
            if (Number.isNaN(tb)) return -1
            return (ta - tb) * dir
        }
        return a.name.localeCompare(b.name) * dir
    })
}
