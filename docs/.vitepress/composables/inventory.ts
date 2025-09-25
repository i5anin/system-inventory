// --- Типы, заменяющие импорт ---
export type TableItem = {
    name: string
    model: string
    price: number
    manufacturer: string | null
    link: string
    purchasedAt: string
    updatedAt: string
}

export type Section = {
    title: string
    declaredTotal?: number | null
    items: TableItem[]
}

// --- Исходные типы ---
export type RawItem = {
    name: string
    model: string
    price: number
    manufacturer: string | null
    link?: string
    purchasedAt: string
    updatedAt: string
}

export type RawSection = {
    title: string
    declaredTotal?: number
    items: RawItem[]
}

export type RawData = {
    systemUnit: RawSection
    peripherals?: Omit<RawSection, 'declaredTotal'>
    devices?: Omit<RawSection, 'declaredTotal'>
}

// --- Логика ---

const purchasedDefault = ''

const isHttpUrl = (v?: string) => {
    if (!v) return false
    try {
        const u = new URL(v)
        return u.protocol === 'http:' || u.protocol === 'https:'
    } catch {
        return false
    }
}

const normalizeItem = (i: RawItem): TableItem => {
    const purchased = i.purchasedAt === 'purchasedDefault' ? purchasedDefault : i.purchasedAt
    const updated = i.updatedAt === 'purchasedDefault' ? purchased : i.updatedAt
    return {
        name: i.name,
        model: i.model,
        price: i.price,
        manufacturer: i.manufacturer ?? null,
        link: isHttpUrl(i.link) ? i.link! : '',
        purchasedAt: purchased,
        updatedAt: updated
    }
}

export const buildSections = (raw: RawData) => {
    const systemUnit: Section = {
        title: raw.systemUnit.title,
        declaredTotal: typeof raw.systemUnit.declaredTotal === 'number' ? raw.systemUnit.declaredTotal : null,
        items: raw.systemUnit.items.map(normalizeItem)
    }

    const peripherals: Section | null = raw.peripherals
        ? { title: raw.peripherals.title, declaredTotal: null, items: raw.peripherals.items.map(normalizeItem) }
        : null

    const devices: Section | null = raw.devices
        ? { title: raw.devices.title, declaredTotal: null, items: raw.devices.items.map(normalizeItem) }
        : null

    return { systemUnit, peripherals, devices }
}
