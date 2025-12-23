<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import type { Blog } from '@/data/blogs'

const { blog } = defineProps<{ blog: Blog }>()

const date = new Date(blog.published_at)
const day = date.getDate()
const month = date.toLocaleString('en-US', { month: 'short' })

function truncateTitle(title: string, words = 6): string {
  const parts = title.split(' ')
  if (parts.length <= words) return title
  return parts.slice(0, words).join(' ') + '...'
}
</script>  

<template>
  <div class="masonry-item col-lg-4 col-md-6 m-b30 wow fadeInDown">
    <div class="kv-lt-blog">
      <div class="wt-post-media">
        <Link :href="`/blog/${blog.slug}`">
          <img class="grayscale" :src="asset(blog.featured_image)" :alt="blog.title" />
        </Link>

        <div class="post-date">
          <span class="date">{{ day }}</span>
          <span class="month">{{ month }}</span>
        </div>
      </div>

      <div class="kv-post-info">
        <div class="kv-post-head">
          <div class="post-author">
            <Link class="au-name" :href="`/staff/${blog.author.slug}`">
              {{ blog.author.name }}
            </Link>
          </div>
        </div>

        <h3 class="post-title">
          <Link :href="`/blog/${blog.slug}`">
            {{ truncateTitle(blog.title) }}
          </Link>
        </h3>

        <p class="post-text">
          {{ blog.excerpt }}
        </p>
      </div>
    </div>
  </div>
</template>  
