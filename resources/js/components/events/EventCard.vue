<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

defineProps<{
    event: {
        slug: string
        card_title: string
        card_category: string
        card_image: string
    }
}>()
</script>

<template>
    <li class="masonry-item cat-2 col-lg-4 col-md-6 m-b30">
        <div class="kv-portfolio-block">
            <div class="kv-portfolio-media">
                <Link :href="`/events/${event.slug}`">
                    <img class="grayscale" :src="asset(event.card_image)" :alt="event.card_category" />
                </Link>
            </div>

            <div class="kv-portfolio-info">
                <div class="kv-portfolio-category">
                    {{ event.card_category }}
                </div>

                <h3 class="kv-portfolio-title">
                    <Link :href="`/events/${event.slug}`">
                        {{ event.card_title }}
                    </Link>
                </h3>
            </div>
        </div>
    </li>
</template>
    