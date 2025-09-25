<template>
  <div class="inventory-root">
    <div class="controls">
      <span>Сортировка:</span>
      <button class="btn" @click="setSort('name')">по названию</button>
      <button class="btn" @click="setSort('price')">по цене</button>
      <button class="btn" @click="setSort('purchasedAt')">по дате покупки</button>
      <button class="btn" @click="setSort('updatedAt')">по дате изменения</button>
      <span class="dir">{{ sort.state.sortAsc ? '▲' : '▼' }}</span>
      <span><strong>Итог по всем разделам:</strong> {{ nf.format(grandTotal) }}</span>
    </div>

    <InventorySection
        v-for="s in sections"
        :key="s.title"
        :section="s"
        :nf="nf"
        :locale="locale"
        :sort-key="sort.state.sortKey"
        :sort-asc="sort.state.sortAsc"
    />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import InventorySection from './InventorySection.vue'
import type {Section, SortKey} from './types'
import {makeNumberFormatter} from '../utils/currency'
import {useSort} from '../composables/useSort'

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

const locale = props.locale
const nf = computed(() => makeNumberFormatter(locale, props.currency))
const grandTotal = computed(() =>
    props.sections.reduce((a, s) => a + s.items.reduce((x, i) => x + i.price, 0), 0)
)

const sort = useSort(props.initialSort, props.initialAsc)
const setSort = sort.setSort
</script>
