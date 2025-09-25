export function toDate(iso: string): Date {
    const d = new Date(iso)
    return isNaN(d.getTime()) ? new Date(NaN) : d
}

export function formatDate(iso: string, locale: string): string {
    const d = toDate(iso)
    return isNaN(d.getTime()) ? iso : d.toLocaleDateString(locale)
}
