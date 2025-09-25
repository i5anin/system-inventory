<template>
  <div class="section">
    <h2>{{ section.title }}</h2>

    <div class="section-meta">
      <div><strong>Сумма раздела:</strong> {{ nf.format(total) }}</div>
      <div v-if="section.declaredTotal != null">
        <strong>Заявлено:</strong> {{ nf.format(section.declaredTotal) }}
        <span class="badge" :class="badgeClass">{{ badgeText }}</span>
      </div>
    </div>

    <table class="tbl">
      <thead>
      <tr>
        <th>Позиция</th>
        <th>Модель</th>
        <th class="num">Цена</th>
        <th>Куплено</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in itemsSorted" :key="section.title + i.name + i.model">
        <td>{{ i.name }}</td>
        <td><a :href="i.link">{{ i.model }}</a></td>
        <td class="num">{{ nf.format(i.price) }}</td>
        <td>{{ format(i.purchasedAt) }}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="2"><strong>Итог раздела</strong></td>
        <td class="num"><strong>{{ nf.format(total) }}</strong></td>
        <td></td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Section, SortKey } from './types'
import { formatDate } from '../utils/dates'
import { sortItems } from '../utils/sort'

const props = defineProps<{
  section: Section
  nf: Intl.NumberFormat
  locale: string
  sortKey: SortKey
  sortAsc: boolean
}>()

const total = computed(() => props.section.items.reduce((a, i) => a + i.price, 0))
const itemsSorted = computed(() => sortItems(props.section.items, props.sortKey, props.sortAsc))
const badgeOk = computed(() => props.section.declaredTotal === total.value)
const badgeClass = computed(() => (badgeOk.value ? 'ok' : 'warn'))
const badgeText = computed(() => (badgeOk.value ? 'совпадает' : 'расхождение'))

function format(iso: string) {
  return formatDate(iso, props.locale)
}
</script>
