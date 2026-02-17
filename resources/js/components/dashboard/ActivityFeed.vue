<script setup lang="ts">
interface ActivityItem {
    id: string;
    title: string;
    subtitle?: string;
    occurredAt: string;
}

defineProps<{
    title: string;
    items: ActivityItem[];
    loading?: boolean;
}>()
</script>

<template>
    <div class="rounded-xl border border-white/10 bg-gray-900/50 p-6">
        <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold text-white">{{ title }}</h3>
        </div>

        <div v-if="loading" class="mt-4 space-y-3">
            <div v-for="n in 5" :key="n" class="h-12 animate-pulse rounded bg-white/10"></div>
        </div>

        <div v-else-if="items.length === 0" class="mt-4 text-sm text-gray-400">
            No activity yet.
        </div>

        <ul v-else class="mt-4 space-y-4">
            <li v-for="item in items" :key="item.id" class="flex items-start justify-between gap-4">
                <div>
                    <div class="text-sm font-medium text-white">{{ item.title }}</div>
                    <div v-if="item.subtitle" class="text-xs text-gray-400">{{ item.subtitle }}</div>
                </div>
                <div class="text-xs text-gray-500">{{ item.occurredAt }}</div>
            </li>
        </ul>
    </div>
</template>
