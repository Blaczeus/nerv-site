<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import { onMounted, ref, watch } from 'vue'

defineProps<{
    statuses: Array<'draft' | 'published' | 'archived'>;
}>()

const CREATE_DRAFT_KEY = 'dashboard.events.create.draft';

const initialState = {
    slug: '',
    status: 'draft' as 'draft' | 'published' | 'archived',
    title: '',
    headline: '',
    intro: '',
    description: '',
    organizer: '',
    host: '',
    target_audience: '',
    venue: '',
    start_date: '',
    end_date: '',
    featured_image: '',
    seo_title: '',
    seo_description: '',
    seo_image: '',
    objectives: [{ id: null as number | null, content: '' }],
    duration_value: null as number | null,
    duration_unit: 'days' as 'days' | 'hours',
};

const form = useForm({ ...initialState })

const slugManuallyEdited = ref(false)

function slugify(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

watch(() => form.title, (title) => {
    if (!slugManuallyEdited.value) {
        form.slug = slugify(title);
    }
});

function onSlugInput() {
    slugManuallyEdited.value = true;
}

function toDateTimeLocalString(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function syncEndDateFromDuration() {
    if (!form.start_date || !form.duration_value || form.duration_value <= 0) return;
    const start = new Date(form.start_date);
    if (Number.isNaN(start.getTime())) return;

    const end = new Date(start);
    if (form.duration_unit === 'days') {
        end.setDate(end.getDate() + form.duration_value);
    } else {
        end.setHours(end.getHours() + form.duration_value);
    }

    form.end_date = toDateTimeLocalString(end);
}

function addObjective() {
    form.objectives.push({ id: null, content: '' });
}

function removeObjective(index: number) {
    form.objectives.splice(index, 1);
}

function moveObjective(index: number, direction: 'up' | 'down') {
    const nextIndex = direction === 'up' ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= form.objectives.length) return;
    const current = form.objectives[index];
    form.objectives[index] = form.objectives[nextIndex];
    form.objectives[nextIndex] = current;
}

function submit() {
    form.post('/dashboard/events', {
        onSuccess: () => {
            localStorage.removeItem(CREATE_DRAFT_KEY);
        },
    });
}

onMounted(() => {
    const rawDraft = localStorage.getItem(CREATE_DRAFT_KEY);
    if (!rawDraft) return;

    try {
        const parsed = JSON.parse(rawDraft);
        form.defaults({ ...initialState, ...parsed });
        form.reset();
    } catch {
        localStorage.removeItem(CREATE_DRAFT_KEY);
    }
});

watch(
    () => [form.start_date, form.duration_value, form.duration_unit],
    () => {
        syncEndDateFromDuration();
    },
);

watch(
    () => form.data(),
    (data) => {
        localStorage.setItem(CREATE_DRAFT_KEY, JSON.stringify(data));
    },
    { deep: true },
);
</script>

<template>
    <AppLayout>
        <Head title="Create Event" />
        <div class="rounded-xl border border-white/10 bg-gray-900/50 p-6 space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold text-white">Create Event</h2>
                <Link href="/dashboard/events" class="text-sm text-gray-300">Back to list</Link>
            </div>

            <form class="space-y-4" @submit.prevent="submit">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm text-gray-300">Slug</label>
                        <input v-model="form.slug" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" @input="onSlugInput" />
                        <p v-if="form.errors.slug" class="mt-1 text-xs text-red-300">{{ form.errors.slug }}</p>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Status</label>
                        <select v-model="form.status" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white">
                            <option v-for="status in statuses" :key="status" :value="status">{{ status }}</option>
                        </select>
                        <p v-if="form.errors.status" class="mt-1 text-xs text-red-300">{{ form.errors.status }}</p>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Title</label>
                        <input v-model="form.title" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                        <p v-if="form.errors.title" class="mt-1 text-xs text-red-300">{{ form.errors.title }}</p>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Headline</label>
                        <input v-model="form.headline" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                        <p v-if="form.errors.headline" class="mt-1 text-xs text-red-300">{{ form.errors.headline }}</p>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Start date</label>
                        <input v-model="form.start_date" type="datetime-local" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                        <p v-if="form.errors.start_date" class="mt-1 text-xs text-red-300">{{ form.errors.start_date }}</p>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Duration</label>
                        <div class="mt-1 flex gap-2">
                            <input
                                v-model.number="form.duration_value"
                                type="number"
                                min="1"
                                step="1"
                                placeholder="e.g. 3"
                                class="w-full rounded border border-white/20 bg-transparent p-2 text-white"
                            />
                            <select v-model="form.duration_unit" class="rounded border border-white/20 bg-transparent p-2 text-white">
                                <option value="days">Days</option>
                                <option value="hours">Hours</option>
                            </select>
                        </div>
                        <p class="mt-1 text-xs text-gray-400">End date auto-calculates from start date + duration.</p>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">End date</label>
                        <input v-model="form.end_date" type="datetime-local" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                        <p v-if="form.errors.end_date" class="mt-1 text-xs text-red-300">{{ form.errors.end_date }}</p>
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Organizer</label>
                        <input v-model="form.organizer" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Host</label>
                        <input v-model="form.host" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Target audience</label>
                        <input v-model="form.target_audience" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Venue</label>
                        <input v-model="form.venue" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">Featured image</label>
                        <input v-model="form.featured_image" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                    </div>
                    <div>
                        <label class="block text-sm text-gray-300">SEO image</label>
                        <input v-model="form.seo_image" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                    </div>
                </div>

                <div>
                    <label class="block text-sm text-gray-300">Intro</label>
                    <textarea v-model="form.intro" rows="3" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                    <p v-if="form.errors.intro" class="mt-1 text-xs text-red-300">{{ form.errors.intro }}</p>
                </div>

                <div>
                    <label class="block text-sm text-gray-300">Description</label>
                    <textarea v-model="form.description" rows="6" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                    <p v-if="form.errors.description" class="mt-1 text-xs text-red-300">{{ form.errors.description }}</p>
                </div>

                <div>
                    <label class="block text-sm text-gray-300">SEO title</label>
                    <input v-model="form.seo_title" type="text" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                </div>

                <div>
                    <label class="block text-sm text-gray-300">SEO description</label>
                    <textarea v-model="form.seo_description" rows="3" class="mt-1 w-full rounded border border-white/20 bg-transparent p-2 text-white" />
                </div>

                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <h3 class="text-base text-white">Objectives</h3>
                        <button type="button" class="rounded border border-white/20 px-2 py-1 text-xs text-white" @click="addObjective">
                            Add objective
                        </button>
                    </div>

                    <div v-for="(objective, index) in form.objectives" :key="index" class="flex items-start gap-2">
                        <div class="flex-1">
                            <textarea
                                v-model="objective.content"
                                rows="2"
                                class="w-full rounded border border-white/20 bg-transparent p-2 text-white"
                            />
                            <p v-if="form.errors[`objectives.${index}.content`]" class="mt-1 text-xs text-red-300">
                                {{ form.errors[`objectives.${index}.content`] }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-1">
                            <button
                                type="button"
                                class="rounded border border-white/20 px-2 py-1 text-xs text-white"
                                @click="moveObjective(index, 'up')"
                            >
                                Up
                            </button>
                            <button
                                type="button"
                                class="rounded border border-white/20 px-2 py-1 text-xs text-white"
                                @click="moveObjective(index, 'down')"
                            >
                                Down
                            </button>
                        </div>
                        <button
                            type="button"
                            class="rounded border border-red-300/30 px-2 py-1 text-xs text-red-300"
                            @click="removeObjective(index)"
                        >
                            Remove
                        </button>
                    </div>
                </div>

                <button type="submit" :disabled="form.processing" class="rounded border border-white/20 px-4 py-2 text-white">
                    {{ form.processing ? 'Saving...' : 'Create event' }}
                </button>
            </form>
        </div>
    </AppLayout>
</template>
