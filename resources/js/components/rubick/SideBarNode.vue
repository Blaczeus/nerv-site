<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import type { SidebarItem } from './sidebar.types'

defineOptions({
  name: 'SidebarNode',
})

const props = defineProps<{
  item: SidebarItem
  itemKey: string
  isActive: (item: SidebarItem) => boolean
  isOpen: (key: string) => boolean
  toggle: (key: string) => void
  collapsed: boolean
  isHovering: boolean
}>()

const emit = defineEmits<{
  (e: 'navigate', route: string): void
}>()

function hasActiveChild(item: SidebarItem): boolean {
  if (item.type !== 'item' || !item.children) return false

  return item.children.some(child =>
    props.isActive(child) ||
    (child.type === 'item' && hasActiveChild(child))
  )
}
</script>

<template>
  <li v-if="item.type === 'item'">
    <!-- THE ITEM ITSELF -->
    <a href="javascript:;" class="side-menu__link" :class="{ 'side-menu__link--active': isActive(item) }"
      @click.prevent="
        item.children
          ? toggle(itemKey)
          : item.route && emit('navigate', item.route)
        ">
      <component v-if="item.icon" :is="item.icon"
        class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__icon" />

      <div class="side-menu__link__title overflow-hidden whitespace-nowrap transition-[width,opacity] duration-200"
        :class="{
          'w-0 opacity-0': collapsed && !isHovering,
          'w-auto opacity-100': !collapsed || isHovering
        }">
        {{ item.title }}
      </div>

      <div v-if="item.badge" class="side-menu__link__badge">{{ item.badge }}</div>


      <ChevronDown v-if="item.children"
        class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25 side-menu__link__chevron transition"
        :class="{
          'rotate-180': isOpen(itemKey) || hasActiveChild(item),
        }" />
    </a>

    <!-- CHILDREN -->
    <ul v-if="item.children" :class="isOpen(itemKey) || hasActiveChild(item) ? 'block' : 'hidden'">
      <SidebarNode v-for="(child, index) in item.children" :key="`${itemKey}-${index}`" :item="child"
        :item-key="`${itemKey}-${index}`" :is-active="isActive" :is-open="isOpen" :toggle="toggle"
        :collapsed="collapsed" :is-hovering="isHovering"
        @navigate="emit('navigate', $event)" />
    </ul>
  </li>
</template>
