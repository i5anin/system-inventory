---
title: "ПК и периферия"
updated: "2025-09-25"
---

<script setup lang="ts">
import { computed, ref } from 'vue'

type Money = number

type Item = {
  name: string
  model: string
  price: Money
  manufacturer: string | null
  purchasedAt: string
  updatedAt: string
}

type Section = {
  title: string
  items: Item[]
  declaredTotal?: Money | null
}

const RUB = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 2 })

const purchasedDefault = '2023-05-12'

const systemUnit: Section = {
  title: 'Системный блок',
  declaredTotal: 139328,
  items: [
    { name: 'Процессор', model: 'Intel Core i5-12400F (42→4)', price: 13499, manufacturer: 'Intel', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Видеокарта', model: 'NVIDIA GeForce RTX 3070 Ti', price: 56999, manufacturer: 'GameRock', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Материнская плата', model: 'MAG B660M Bazooka DDR4', price: 14000, manufacturer: 'MSI', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Память', model: 'T-Force 8+8+8=24 GB DDR4-3200(DDR4-3333)', price: 9485, manufacturer: 'XFORCE', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Накопители', model: '256 DEXP L3 + 256 INTEL + 2 Tb BaseTech A400', price: 17597, manufacturer: 'DEXP+Intel', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'HDD', model: '1TB + 4TB', price: 12500, manufacturer: 'WD+Toshiba', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Охлаждение', model: '2x140 3x120 Aigo', price: 3250, manufacturer: 'Aigo', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Блок питания', model: 'DEEPCOOL DQ750', price: 7999, manufacturer: 'DEEPCOOL', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Корпус', model: 'ZET GAMING Rare L2 WG белый', price: 3999, manufacturer: 'ZET', purchasedAt: purchasedDefault, updatedAt: purchasedDefault }
  ]
}

const devices: Section = {
  title: 'Девайсы',
  items: [
    { name: 'Монитор 1', model: 'Acer Nitro VG270UPbmiipx 144Hz 2K', price: 25000, manufacturer: 'Acer', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Монитор 2', model: 'DELL S2721D 75Hz 2K', price: 21017, manufacturer: 'DELL', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Ноутбук', model: 'Honor', price: 33000, manufacturer: 'Honor', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Кресло', model: 'EVERPROF LOTUS S10 (ткань, ч/з)', price: 12500, manufacturer: 'Everprof', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Мышь', model: 'Logitech MX 3', price: 8729, manufacturer: 'Logitech', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Клавиатура', model: 'ZET GAMING Blade 2', price: 6199, manufacturer: 'ZET', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Веб-камера', model: 'Microsoft LifeCam VX-2000', price: 2000, manufacturer: 'Microsoft', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Коврик', model: 'Black 80×30 cm', price: 374, manufacturer: null, purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Колонки', model: '2.0 Aceline ASP400', price: 2499, manufacturer: 'Aceline', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Камера', model: 'SONY A6400', price: 87500, manufacturer: 'SONY', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Наушники', model: 'SONY WH-CH710N White', price: 7849, manufacturer: 'SONY', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Микрофон', model: 'Samson C01U PRO', price: 5500, manufacturer: 'Samson', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Телефон', model: 'iPhone 11 Pro', price: 79999, manufacturer: 'Apple', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Квадрокоптер', model: 'DJI Mini SE', price: 25999, manufacturer: 'DJI', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Электронная книга', model: 'DEXP SI Symbol', price: 3999, manufacturer: 'DEXP', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Подсветка', model: '2×RGB + круг + 3 штатива', price: 3200, manufacturer: null, purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Держатель мониторов', model: 'NB F160', price: 2178, manufacturer: 'NB', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Суфлёр', model: 'SITOOSHE', price: 2064, manufacturer: 'SITOOSHE', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Доп. свет', model: 'Ulanzi VL49RGB', price: 2100, manufacturer: 'Ulanzi', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Штатив камеры', model: 'NA666 Tripod Stand', price: 1444, manufacturer: 'KINGJOY', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Стабилизатор камеры', model: 'FeiyuTech AK2000C', price: 14600, manufacturer: 'FeiyuTech', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Геймпад', model: '-', price: 2499, manufacturer: null, purchasedAt: purchasedDefault, updatedAt: purchasedDefault }
  ]
}

const sections = ref<Section[]>([systemUnit, devices])

const sectionTotal = (s: Section) => s.items.reduce((a, i) => a + i.price, 0)
const grandTotal = computed(() => sections.value.reduce((a, s) => a + sectionTotal(s), 0))

const declaredGrandTotal = 350249

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('ru-RU')
const isChanged = (i: Item) => i.updatedAt !== i.purchasedAt

type SortKey = 'name' | 'price' | 'purchasedAt' | 'updatedAt'
const sortKey = ref<SortKey>('name')
const sortAsc = ref(true)

const sortedItems = (s: Section) => {
  const items = [...s.items]
  items.sort((a, b) => {
    const dir = sortAsc.value ? 1 : -1
    if (sortKey.value === 'price') return (a.price - b.price) * dir
    if (sortKey.value === 'purchasedAt' || sortKey.value === 'updatedAt') return (a[sortKey.value].localeCompare(b[sortKey.value])) * dir
    return a.name.localeCompare(b.name) * dir
  })
  return items
}

const setSort = (key: SortKey) => {
  if (sortKey.value === key) sortAsc.value = !sortAsc.value
  else { sortKey.value = key; sortAsc.value = true }
}
</script>

# ПК и периферия

<div class="totals">
  <div>Итог по разделам рассчитывается автоматически. Формат валюты: ₽, ru-RU.</div>
  <div><strong>Итог по всем разделам:</strong> {{ RUB.format(grandTotal) }}</div>
  <div><strong>Заявленный итог «ПК»:</strong> {{ RUB.format(declaredGrandTotal) }}</div>
</div>

<div v-for="section in sections" :key="section.title" class="section">
  <h2>{{ section.title }}</h2>
  <div class="section-meta">
    <div><strong>Сумма раздела:</strong> {{ RUB.format(sectionTotal(section)) }}</div>
    <div v-if="section.declaredTotal != null"><strong>Заявлено:</strong> {{ RUB.format(section.declaredTotal!) }}</div>
  </div>

  <div class="controls">
    <span>Сортировка:</span>
    <button class="btn" @click="setSort('name')">по названию</button>
    <button class="btn" @click="setSort('price')">по цене</button>
    <button class="btn" @click="setSort('purchasedAt')">по дате покупки</button>
    <button class="btn" @click="setSort('updatedAt')">по дате изменения</button>
    <span class="dir">{{ sortAsc ? '▲' : '▼' }}</span>
  </div>

  <table class="inventory">
    <thead>
      <tr>
        <th>Позиция</th>
        <th>Модель</th>
        <th>Производитель</th>
        <th>Цена</th>
        <th>Куплено</th>
        <th>Изменено</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in sortedItems(section)" :key="section.title + i.name + i.model">
        <td>{{ i.name }}</td>
        <td>{{ i.model }}</td>
        <td>{{ i.manufacturer ?? '—' }}</td>
        <td class="num">{{ RUB.format(i.price) }}</td>
        <td>{{ formatDate(i.purchasedAt) }}</td>
        <td>{{ formatDate(i.updatedAt) }}</td>
        <td>
          <span class="badge" :class="isChanged(i) ? 'changed' : 'unchanged'">
            {{ isChanged(i) ? 'Изменено' : 'Без изменений' }}
          </span>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3"><strong>Итог раздела</strong></td>
        <td class="num"><strong>{{ RUB.format(sectionTotal(section)) }}</strong></td>
        <td colspan="3"></td>
      </tr>
    </tfoot>
  </table>
</div>

<style scoped>
.totals { display: grid; gap: 4px; margin: 12px 0 20px }
.section { margin: 20px 0 40px }
.section-meta { display: flex; gap: 24px; margin: 8px 0 12px }
.controls { display: flex; align-items: center; gap: 8px; margin: 8px 0 16px; flex-wrap: wrap }
.btn { padding: 6px 10px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-alt); border-radius: 6px; cursor: pointer }
.btn:hover { background: var(--vp-c-bg-soft) }
.dir { opacity: .7 }
.inventory { width: 100%; border-collapse: collapse; font-size: 14px }
.inventory th, .inventory td { border: 1px solid var(--vp-c-divider); padding: 8px }
.inventory th { background: var(--vp-c-bg-alt) }
.num { text-align: right }
.badge { padding: 2px 8px; border-radius: 999px; font-size: 12px }
.badge.changed { background: #fff2cc; color: #8a6d3b; border: 1px solid #ffe58f }
.badge.unchanged { background: #e8f5e9; color: #2e7d32; border: 1px solid #c8e6c9 }
</style>
