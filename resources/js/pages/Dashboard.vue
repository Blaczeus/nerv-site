<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import AppLayout from '@/layouts/AppLayout.vue'

const props = defineProps<{
    auth: {
        user: {
            name: string
            email: string
            created_at: string
            email_verified_at: string | null
        }
    }
}>()

const user = props.auth.user
</script>

<template>
    <AppLayout>
        <Head title="Dashboard" />
        <div class="rounded-xl border border-white/10 bg-gray-900/50 p-6">
            <h2 class="text-xl font-semibold text-white">
                Welcome back, {{ user.name }}
            </h2>

            <p class="mt-2 text-sm text-gray-400">
                Your account is authenticated and ready. This dashboard will be expanded soon.
            </p>
        </div>
    </AppLayout>
</template>
