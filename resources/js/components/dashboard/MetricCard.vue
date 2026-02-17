<script setup lang="ts">
defineProps<{
    label: string;
    value: number;
    loading?: boolean;
}>()
</script>

<template>
    <div class="rounded-xl border border-white/10 bg-gray-900/50 p-5">
        <div class="text-xs uppercase tracking-wide text-gray-400">{{ label }}</div>
        <div class="mt-2 text-2xl font-semibold text-white">
            <span v-if="loading" class="inline-block h-6 w-16 animate-pulse rounded bg-white/10"></span>
            <span v-else>{{ value.toLocaleString() }}</span>
        </div>
    </div>
</template>
