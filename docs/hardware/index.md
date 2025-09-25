---
title: "ПК и периферия 123"
updated: "2025-09-25"
---

<script setup lang="ts">
import InventoryTable, { type Section } from '../.vitepress/theme/components/InventoryTable.vue'
import { buildSections, type RawData } from '../.vitepress/composables/inventory'
import raw from './data.json'

const { systemUnit, peripherals, devices } = buildSections(raw as RawData)

const listA: Section[] = [systemUnit]
const listPeripherals: Section[] = peripherals ? [peripherals] : []
const listDevices: Section[] = devices ? [devices] : []
</script>

# ПК и периферия

<InventoryTable :sections="listA" />

<InventoryTable v-if="listPeripherals.length" :sections="listPeripherals" />

<InventoryTable v-if="listDevices.length" :sections="listDevices" />
