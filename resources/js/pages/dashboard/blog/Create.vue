<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import AppLayout from '@/layouts/AppLayout.vue'
</script>

<template>
    <AppLayout>
        <Head title="Create Blog Post" />
        <div class="rounded-xl border border-white/10 bg-gray-900/50 p-6">
            <h2 class="text-xl font-semibold text-white">Create Blog Post</h2>
            <p class="mt-2 text-sm text-gray-400">Form scaffolded. Implement fields next.</p>
        </div>
    </AppLayout>
</template>
