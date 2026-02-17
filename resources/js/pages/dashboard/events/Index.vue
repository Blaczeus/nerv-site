<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3'
import AppLayout from '@/layouts/AppLayout.vue'

interface EventRow {
    id: number;
    slug: string;
    status: 'draft' | 'published' | 'archived';
    title: string;
    start_date: string | null;
    end_date: string | null;
    updated_at: string | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

defineProps<{
    events: {
        data: EventRow[];
        links: PaginationLink[];
        current_page: number;
        last_page: number;
        total: number;
    };
}>()

function destroyEvent(id: number) {
    if (!confirm('Delete this event? This will also delete all objectives.')) return;
    router.delete(`/dashboard/events/${id}`);
}

function formatDate(date: string | null) {
    if (!date) return '-';
    return new Date(date).toLocaleString();
}
</script>

<template>
    <AppLayout>
        <Head title="Events" />
        <div class="rounded-xl border border-white/10 bg-gray-900/50 p-6 space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold text-white">Events</h2>
                <Link href="/dashboard/events/create" class="rounded border border-white/20 px-3 py-2 text-sm text-white">
                    Create Event
                </Link>
            </div>

            <div class="overflow-x-auto">
                <table class="min-w-full text-sm text-left text-gray-200">
                    <thead>
                        <tr class="text-gray-400">
                            <th class="py-2 pr-4">Title</th>
                            <th class="py-2 pr-4">Status</th>
                            <th class="py-2 pr-4">Start</th>
                            <th class="py-2 pr-4">Updated</th>
                            <th class="py-2 pr-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="event in events.data" :key="event.id" class="border-t border-white/10">
                            <td class="py-3 pr-4">
                                <div class="font-medium">{{ event.title }}</div>
                                <div class="text-xs text-gray-400">{{ event.slug }}</div>
                            </td>
                            <td class="py-3 pr-4">{{ event.status }}</td>
                            <td class="py-3 pr-4">{{ formatDate(event.start_date) }}</td>
                            <td class="py-3 pr-4">{{ formatDate(event.updated_at) }}</td>
                            <td class="py-3 pr-4 space-x-3">
                                <Link :href="`/dashboard/events/${event.id}/edit`" class="text-blue-300">Edit</Link>
                                <button type="button" class="text-red-300" @click="destroyEvent(event.id)">Delete</button>
                            </td>
                        </tr>
                        <tr v-if="events.data.length === 0">
                            <td colspan="5" class="py-6 text-center text-gray-400">No events found.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex flex-wrap items-center gap-2">
                <Link
                    v-for="link in events.links"
                    :key="`${link.label}-${link.url}`"
                    :href="link.url || ''"
                    :class="[
                        'rounded border px-2 py-1 text-xs',
                        link.active ? 'border-white text-white' : 'border-white/20 text-gray-300',
                        !link.url ? 'pointer-events-none opacity-50' : ''
                    ]"
                >
                    <span v-html="link.label"></span>
                </Link>
            </div>
        </div>
    </AppLayout>
</template>
