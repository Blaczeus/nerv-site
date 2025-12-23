<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import BlogCard from '@/components/blogs/BlogCard.vue'

import { blogs as blogSource, type Blog } from '@/data/blogs'

const blogs = computed(() =>
  blogSource.filter((blog: Blog) => blog.status === 'published')
)
</script>  

<template>

  <Head>
    <title>Blog | Nervego News & Insights</title>
    <meta name="description" content="Latest news, updates, and insights from Nervego." />
  </Head>

  <MainLayout>
    <!-- CONTENT START -->
    <div class="page-content">

      <!-- INNER PAGE BANNER -->
      <div class="wt-bnr-inr site-bg-gray" :style="`background-image: url(${asset('banner/banner1.jpg')});`">
        <div class="container">
          <div class="wt-bnr-inr-entry">

            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="wt-title">Blog</h2>
              </div>
            </div>

            <ul class="wt-breadcrumb breadcrumb-style-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Our Blog</li>
            </ul>

          </div>
        </div>
      </div>
      <!-- INNER PAGE BANNER END -->

      <!-- BLOG LIST SECTION -->
      <div class="section-full p-t150 p-b150 site-bg-black kv-case3-section-wrap">
        <div class="container">
          <div class="section-content">

            <!-- SECTION TITLE -->
            <div class="section-head center">
              <div class="kv-sm-title left">Blogs</div>
              <h2 class="kv-large-title site-text-white">
                News And Insights
              </h2>
            </div>

            <div class="row masonry-wrap">

              <!-- BLOGS AVAILABLE -->
              <template v-if="blogs.length">
                <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />

              </template>

              <!-- NO BLOGS AVAILABLE -->
              <div v-else class="col-12 text-center p-t60 p-b60">
                <h3 class="site-text-white m-b10">
                  No blog posts yet
                </h3>
                <p class="site-text-gray">
                  We’re working on new articles and updates.
                  Please check back soon.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- BLOG LIST SECTION END -->

    </div>
    <!-- CONTENT END -->
  </MainLayout>
</template>  
