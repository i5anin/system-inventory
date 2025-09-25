---
title: "ПК и периферия"
updated: "2025-09-25"
---

<script setup lang="ts">
import InventoryTable, { type Section } from '../.vitepress/theme/components/InventoryTable.vue'

const purchasedDefault = '2023-05-12'

const systemUnit: Section = {
  title: 'Системный блок',
  declaredTotal: 139_328,
  items: [
    { name: 'Процессор',       model: 'Intel Core i5-12400F (42→4)',                  price: 13_499, manufacturer: 'Intel',       purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Видеокарта',      model: 'NVIDIA GeForce RTX 3070 Ti',                   price: 56_999, manufacturer: 'GameRock',    purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Материнская плата', model: 'MAG B660M Bazooka DDR4',                     price: 14_000, manufacturer: 'MSI',         purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Память',          model: 'T-Force 8+8+8=24 GB DDR4-3200(DDR4-3333)',     price: 9_485,  manufacturer: 'XFORCE',      purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Накопители',      model: '256 DEXP L3 + 256 INTEL + 2 Tb BaseTech A400', price: 17_597, manufacturer: 'DEXP+Intel',  purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'HDD',             model: '1TB + 4TB',                                    price: 12_500, manufacturer: 'WD+Toshiba',  purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Охлаждение',      model: '2x140 3x120 Aigo',                              price: 3_250,  manufacturer: 'Aigo',        purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Блок питания',    model: 'DEEPCOOL DQ750',                               price: 7_999,  manufacturer: 'DEEPCOOL',    purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Корпус',          model: 'ZET GAMING Rare L2 WG белый',                  price: 3_999,  manufacturer: 'ZET',         purchasedAt: purchasedDefault, updatedAt: purchasedDefault }
  ]
}

const devices: Section = {
  title: 'Девайсы',
  items: [
    { name: 'Монитор 1',           model: 'Acer Nitro VG270UPbmiipx 144hz 2K', price: 25_000, manufacturer: 'Acer',      purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Монитор 2',           model: 'DELL S2721D 75hz 2K',               price: 21_017, manufacturer: 'DELL',      purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Ноутбук',             model: 'Honor',                              price: 33_000, manufacturer: 'Honor',     purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Кресло',              model: 'EVERPROF LOTUS S10',                 price: 12_500, manufacturer: 'Everprof',  purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Мышь',                model: 'Logitech MX 3',                      price: 8_729,  manufacturer: 'Logitech',  purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Клавиатура',          model: 'ZET GAMING Blade 2',                 price: 6_199,  manufacturer: 'ZET',       purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Веб-камера',          model: 'Microsoft LifeCam VX-2000',          price: 2_000,  manufacturer: 'Microsoft', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Коврик',              model: 'Black for 80x30cm',                   price: 374,    manufacturer: null,        purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Колонки',             model: '2.0 Aceline ASP400',                 price: 2_499,  manufacturer: 'Aceline',   purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Камера',              model: 'SONY A6400',                         price: 87_500, manufacturer: 'SONY',      purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Наушники',            model: 'SONY WH-CH710N White',               price: 7_849,  manufacturer: 'SONY',      purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Микрофон',            model: 'Samson C01U PRO',                    price: 5_500,  manufacturer: 'Samson',    purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Телефон',             model: 'iPhone 11 Pro',                      price: 79_999, manufacturer: 'Apple',     purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Квадрокоптер',        model: 'DJI Mini SE',                        price: 25_999, manufacturer: 'DJI',       purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Электронная книга',   model: 'DEXP SI Symbol',                     price: 3_999,  manufacturer: 'DEXP',      purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Подсветка',           model: '2xRGB + Круг + 3 штатива',           price: 3_200,  manufacturer: null,        purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Держатель мониторов', model: 'NB F160',                            price: 2_178,  manufacturer: 'NB',        purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Суфлер',              model: 'Суфлер (SITOOSHE)',                   price: 2_064,  manufacturer: 'SITOOSHE',  purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Доп. свет',           model: 'Ulanzi VL49RGB',                     price: 2_100,  manufacturer: 'Ulanzi',    purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Штатив камеры',       model: 'NA666 Tripod Stand',                 price: 1_444,  manufacturer: 'KINGJOY',   purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Стабилизатор камеры', model: 'FeiyuTech AK2000C',                  price: 14_600, manufacturer: 'FeiyuTech', purchasedAt: purchasedDefault, updatedAt: purchasedDefault },
    { name: 'Геймпад',             model: '-',                                   price: 2_499,  manufacturer: null,        purchasedAt: purchasedDefault, updatedAt: purchasedDefault }
  ]
}
</script>

# ПК и периферия

<InventoryTable :sections="[systemUnit, devices]" />
