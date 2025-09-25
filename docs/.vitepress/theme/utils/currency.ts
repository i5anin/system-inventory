export function makeNumberFormatter(locale: string, currency: string) {
    return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 2 })
}
