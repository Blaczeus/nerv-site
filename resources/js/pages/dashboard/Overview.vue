<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { computed, onMounted, ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import MetricCard from '@/components/dashboard/MetricCard.vue'
import ActivityFeed from '@/components/dashboard/ActivityFeed.vue'
import UpcomingEvents from '@/components/dashboard/UpcomingEvents.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue'
import { RefreshCcw } from 'lucide-vue-next';

type MetricKey = 'totalUsers' | 'totalEvents' | 'totalPosts' | 'totalJobs' | 'newUsers7d';

interface Metrics {
    totalUsers: number;
    totalEvents: number;
    totalPosts: number;
    totalJobs: number;
    newUsers7d: number;
}

interface ActivityItem {
    id: string;
    title: string;
    subtitle?: string;
    occurredAt: string;
}

interface UpcomingEvent {
    id: string;
    title: string;
    startDate: string;
    location?: string;
}

interface OverviewPayload {
    metrics: Metrics;
    recentActivity: ActivityItem[];
    upcomingEvents: UpcomingEvent[];
}

const props = defineProps<{
    auth: {
        user: {
            name: string
            email: string
            created_at: string
            email_verified_at: string | null
            role: string
        }
    }
}>()

const user = props.auth.user
const isAdmin = computed(() => user.role === 'admin')

const loading = ref(false)
const payload = ref<OverviewPayload>({
    metrics: {
        totalUsers: 0,
        totalEvents: 0,
        totalPosts: 0,
        totalJobs: 0,
        newUsers7d: 0,
    },
    recentActivity: [],
    upcomingEvents: [],
})

const metricOrder: Array<{ key: MetricKey; label: string }> = [
    { key: 'totalUsers', label: 'Total Users' },
    { key: 'totalEvents', label: 'Total Events' },
    { key: 'totalPosts', label: 'Total Blog Posts' },
    { key: 'totalJobs', label: 'Total Job Listings' },
    { key: 'newUsers7d', label: 'New Users (7d)' },
]

const adminActions = [
    { label: 'Create Event', href: '/dashboard/events/create' },
    { label: 'Create Blog', href: '/dashboard/blog/create' },
    { label: 'Add Job', href: '/dashboard/careers/create' },
    { label: 'Manage Users', href: '/dashboard/users' },
]

async function loadOverview() {
    loading.value = true
    try {
        const response = await fetch('/admin/dashboard/overview', {
            headers: { Accept: 'application/json' },
            credentials: 'same-origin',
        })
        if (!response.ok) throw new Error('Failed to load dashboard overview')
        payload.value = await response.json()
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    void loadOverview()
})
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
                        {{ isAdmin
                            ? 'Admin overview: operational metrics, activity, and quick actions.'
                            : 'User overview: your activity, upcoming events, and next steps.'
                        }}
                    </p>
                </div>

                <div class="mt-6 grid grid-cols-12 gap-6">
                    <template v-if="isAdmin">
                        <div class="col-span-12 grid grid-cols-12 gap-6">
                            <MetricCard v-for="metric in metricOrder" :key="metric.key" class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3"
                                :label="metric.label" :value="payload.metrics[metric.key]" :loading="loading" />
                        </div>

                        <div class="col-span-12 lg:col-span-7">
                            <ActivityFeed title="Recent Activity" :items="payload.recentActivity" :loading="loading" />
                        </div>

                        <div class="col-span-12 lg:col-span-5">
                            <UpcomingEvents title="Upcoming Events" :events="payload.upcomingEvents" :loading="loading" />
                        </div>

                        <div class="col-span-12">
                            <QuickActions title="Quick Actions" :actions="adminActions" />
                        </div>
                    </template>

                    <template v-else>
                        <div class="col-span-12 lg:col-span-7">
                            <UpcomingEvents title="Your Upcoming Events" :events="payload.upcomingEvents"
                                :loading="loading" />
                        </div>
                        <div class="col-span-12 lg:col-span-5">
                            <ActivityFeed title="Your Recent Activity" :items="payload.recentActivity"
                                :loading="loading" />
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
