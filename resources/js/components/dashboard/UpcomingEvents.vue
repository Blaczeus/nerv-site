<script setup lang="ts">
interface UpcomingEvent {
    id: string;
    title: string;
    startDate: string;
    location?: string;
}

defineProps<{
    title: string;
    events: UpcomingEvent[];
    loading?: boolean;
}>()
</script>

<template>
    <div class="rounded-xl border border-white/10 bg-gray-900/50 p-6">
        <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold text-white">{{ title }}</h3>
        </div>

        <div v-if="loading" class="mt-4 space-y-3">
            <div v-for="n in 4" :key="n" class="h-12 animate-pulse rounded bg-white/10"></div>
        </div>

        <div v-else-if="events.length === 0" class="mt-4 text-sm text-gray-400">
            No upcoming events.
        </div>

        <ul v-else class="mt-4 space-y-4">
            <li v-for="event in events" :key="event.id" class="flex items-start justify-between gap-4">
                <div>
                    <div class="text-sm font-medium text-white">{{ event.title }}</div>
                    <div v-if="event.location" class="text-xs text-gray-400">{{ event.location }}</div>
                </div>
                <div class="text-xs text-gray-500">{{ event.startDate }}</div>
            </li>
        </ul>
    </div>
</template>
