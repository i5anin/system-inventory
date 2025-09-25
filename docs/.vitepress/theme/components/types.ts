export type Money = number

export type Item = {
    name: string
    model: string
    link: string
    price: Money
    manufacturer: string | null
    purchasedAt: string
    updatedAt: string
}

export type Section = {
    title: string
    items: Item[]
    declaredTotal?: Money | null
}

export type SortKey = 'name' | 'price' | 'purchasedAt' | 'updatedAt'
