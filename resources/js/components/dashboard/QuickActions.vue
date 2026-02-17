<script setup lang="ts">
defineProps<{
    title: string;
    actions: Array<{ label: string; href: string }>;
}>()
</script>

<template>
    <div class="rounded-xl border border-white/10 bg-gray-900/50 p-6">
        <h3 class="text-base font-semibold text-white">{{ title }}</h3>
        <div class="mt-4 flex flex-wrap gap-3">
            <a v-for="action in actions" :key="action.href" :href="action.href"
                class="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                {{ action.label }}
            </a>
        </div>
    </div>
</template>
