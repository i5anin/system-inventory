---
title: "ПК и периферия 123"
updated: "2025-09-25"
---

<script setup lang="ts">
import { buildSections, type RawData } from '../.vitepress/composables/inventory'
import type { Section } from '../.vitepress/theme/components/types'
import raw from './data.json'

const { systemUnit, peripherals, devices } = buildSections(raw as RawData)

const listA: Section[] = [systemUnit]
const listPeripherals: Section[] = peripherals ? [peripherals] : []
const listDevices: Section[] = devices ? [devices] : []
</script>

# ПК и периферия

<InventoryRoot :sections="listA" />

<InventoryRoot v-if="listPeripherals.length" :sections="listPeripherals" />

<InventoryRoot v-if="listDevices.length" :sections="listDevices" />
