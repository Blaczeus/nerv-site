<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import {
    RefreshCcw,
} from 'lucide-vue-next';

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
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 2xl:col-span-9">
                <div class="grid grid-cols-12 gap-6">
                    <!-- BEGIN: General Report -->
                    <div class="col-span-12 mt-8">
                        <div class="flex h-10 items-center">
                            <h2 class="me-5 truncate text-lg font-medium">
                                General Report
                            </h2>
                            <a class="text-primary ms-auto flex items-center gap-3" href="#">
                                <RefreshCcw
                                    class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25" />
                                Refresh
                            </a>
                        </div>
                    </div>
                </div>
                <div class="rounded-xl border border-white/10 bg-gray-900/50 p-6">
                    <h2 class="text-xl font-semibold text-white">
                        Welcome back, {{ user.name }}
                    </h2>

                    <p class="mt-2 text-sm text-gray-400">
                        Your account is authenticated and ready. This dashboard will be expanded soon.
                    </p>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
