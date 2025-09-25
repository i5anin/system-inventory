<script setup lang="ts">
import { computed, reactive } from 'vue'

type Money = number

export type Item = {
  name: string
  model: string
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

type SortKey = 'name' | 'price' | 'purchasedAt' | 'updatedAt'

const props = withDefaults(defineProps<{
  sections: Section[]
  currency?: string
  locale?: string
  initialSort?: SortKey
  initialAsc?: boolean
}>(), {
  currency: 'RUB',
  locale: 'ru-RU',
  initialSort: 'name',
  initialAsc: true
})

const state = reactive({
  sortKey: props.initialSort as SortKey,
  sortAsc: props.initialAsc as boolean,
  activeSectionIndex: 0
})

const nf = computed(() => new Intl.NumberFormat(
    props.locale,
    { style: 'currency', currency: props.currency, maximumFractionDigits: 2 }
))

const sectionTotal = (s: Section) => s.items.reduce((a, i) => a + i.price, 0)
const grandTotal = computed(() => props.sections.reduce((a, s) => a + sectionTotal(s), 0))

const formatDate = (iso: string) => {
  const d = new Date(iso)
  return isNaN(d.getTime()) ? iso : d.toLocaleDateString(props.locale)
}

const isChanged = (i: Item) => i.updatedAt !== i.purchasedAt

function sortedItems(s: Section) {
  const items = [...s.items]
  const key = state.sortKey
  const dir = state.sortAsc ? 1 : -1
  items.sort((a, b) => {
    if (key === 'price') return (a.price - b.price) * dir
    if (key === 'purchasedAt' || key === 'updatedAt') return a[key].localeCompare(b[key]) * dir
    return a.name.localeCompare(b.name) * dir
  })
  return items
}

function setSort(key: SortKey) {
  if (state.sortKey === key) state.sortAsc = !state.sortAsc
  else { state.sortKey = key; state.sortAsc = true }
}
</script>

<template>
  <div class="inventory-root">
    <div class="totals">
      <div class="grand"><strong>Итог по всем разделам:</strong> {{ nf.format(grandTotal) }}</div>
    </div>

    <div v-for="(section, si) in sections" :key="section.title" class="section">
      <h2>{{ section.title }}</h2>

      <div class="section-meta">
        <div><strong>Сумма раздела:</strong> {{ nf.format(sectionTotal(section)) }}</div>
        <div v-if="section.declaredTotal != null">
          <strong>Заявлено:</strong> {{ nf.format(section.declaredTotal) }}
          <span
              class="badge"
              :class="{'ok': section.declaredTotal === sectionTotal(section), 'warn': section.declaredTotal !== sectionTotal(section)}"
          >
            {{ section.declaredTotal === sectionTotal(section) ? 'совпадает' : 'расхождение' }}
          </span>
        </div>
      </div>

      <div class="controls">
        <span>Сортировка:</span>
        <button class="btn" @click="setSort('name')">по названию</button>
        <button class="btn" @click="setSort('price')">по цене</button>
        <button class="btn" @click="setSort('purchasedAt')">по дате покупки</button>
        <button class="btn" @click="setSort('updatedAt')">по дате изменения</button>
        <span class="dir">{{ state.sortAsc ? '▲' : '▼' }}</span>
      </div>

      <table class="tbl">
        <thead>
        <tr>
          <th>Позиция</th>
          <th>Модель</th>
<!--          <th>Производитель</th>-->
          <th class="num">Цена</th>
<!--          <th>Куплено</th>-->
          <th>Изменено</th>
<!--          <th>Статус</th>-->
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in sortedItems(section)" :key="section.title + i.name + i.model">
          <td>{{ i.name }}</td>
          <td>{{ i.model }}</td>
<!--          <td>{{ i.manufacturer ?? '—' }}</td>-->
          <td class="num">{{ nf.format(i.price) }}</td>
<!--          <td>{{ formatDate(i.purchasedAt) }}</td>-->
          <td>{{ formatDate(i.updatedAt) }}</td>
<!--          <td>-->
<!--              <span class="badge" :class="isChanged(i) ? 'changed' : 'unchanged'">-->
<!--                {{ isChanged(i) ? 'Изменено' : 'Без изменений' }}-->
<!--              </span>-->
<!--          </td>-->
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="2"><strong>Итог раздела</strong></td>
          <td class="num"><strong>{{ nf.format(sectionTotal(section)) }}</strong></td>
          <td colspan="2"></td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style scoped>
.inventory-root { display: grid; gap: 24px }
.totals { display: grid; gap: 6px }
.section { border-top: 1px solid var(--vp-c-divider); padding-top: 16px }
.section-meta { display: flex; gap: 24px; margin: 8px 0 12px; flex-wrap: wrap }
.controls { display: flex; align-items: center; gap: 8px; margin: 8px 0 16px; flex-wrap: wrap }
.btn { padding: 6px 10px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-alt); border-radius: 6px; cursor: pointer }
.btn:hover { background: var(--vp-c-bg-soft) }
.dir { opacity: .7 }
.tbl { width: 100%; border-collapse: collapse; font-size: 14px }
.tbl th, .tbl td { border: 1px solid var(--vp-c-divider); padding: 8px }
.tbl th { background: var(--vp-c-bg-alt) }
.num { text-align: right }
.badge { padding: 2px 8px; border-radius: 999px; font-size: 12px; border: 1px solid transparent }
.badge.changed { background: #fff2cc; color: #8a6d3b; border-color: #ffe58f }
.badge.unchanged { background: #e8f5e9; color: #2e7d32; border-color: #c8e6c9 }
.badge.ok { background: #e8f5e9; color: #2e7d32; border-color: #c8e6c9 }
.badge.warn { background: #fff2cc; color: #8a6d3b; border-color: #ffe58f }
</style>
