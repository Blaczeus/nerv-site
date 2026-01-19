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

        <template #header>
            <h1 class="text-3xl font-bold tracking-tight text-white">
                Dashboard
            </h1>
        </template>

        <div class="rounded-xl border border-white/10 bg-gray-900/50 p-6">
            <h2 class="text-xl font-semibold text-white">
                Welcome back, {{ user.name }}
            </h2>

            <p class="mt-2 text-sm text-gray-400">
                Your account is authenticated and ready. This dashboard will be expanded soon.
            </p>

            <div class="mt-6 grid gap-4 sm:grid-cols-3">
                <div class="rounded-lg bg-gray-800 p-4">
                    <p class="text-sm text-gray-400">Email</p>
                    <p class="font-medium text-white">{{ user.email }}</p>
                </div>

                <div class="rounded-lg bg-gray-800 p-4">
                    <p class="text-sm text-gray-400">Email status</p>
                    <p class="font-medium text-white">
                        <span v-if="user.email_verified_at">Verified ✅</span>
                        <span v-else>Not verified ❌</span>
                    </p>
                </div>

                <div class="rounded-lg bg-gray-800 p-4">
                    <p class="text-sm text-gray-400">Member since</p>
                    <p class="font-medium text-white">
                        {{ new Date(user.created_at).toLocaleDateString() }}
                    </p>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
