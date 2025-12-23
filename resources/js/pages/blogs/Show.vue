<script setup lang="ts">
import { Head, Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

import { blogs, sidebarBlogs, type Blog } from '@/data/blogs'

const page = usePage()
const slug = computed(() => String(page.props.slug || ''))

const blog = computed<Blog | undefined>(() =>
  blogs.find(b => b.slug === slug.value && b.status === 'published')
)

const date = computed(() => {
  if (!blog.value) return null
  return new Date(blog.value.published_at)
})

const day = computed(() => (date.value ? date.value.getDate() : ''))
const month = computed(() =>
  date.value ? date.value.toLocaleString('en-US', { month: 'short' }) : ''
)

const recentPosts = computed(() => {
  return sidebarBlogs
    .filter(post => post.slug !== slug.value)
    .slice(0, 3)
})
</script>

<template>

  <Head>
    <title>
      {{ blog ? blog.seo.title : 'Blog Not Found | Nervego' }}
    </title>

    <meta name="description" :content="blog ? blog.seo.description : 'Nervego blog articles and updates.'" />

    <meta v-if="blog" property="og:image" :content="asset(blog.seo.image)" />
  </Head>

  <MainLayout>
    <div class="page-content">

      <template v-if="blog">
        <!-- INNER PAGE BANNER -->
        <div class="wt-bnr-inr site-bg-gray" :style="{ backgroundImage: `url(${asset('banner/banner1.jpg')})` }">
          <div class="container">
            <div class="wt-bnr-inr-entry">

              <div class="banner-title-outer">
                <div class="banner-title-name">
                  <h2 class="wt-title">{{ blog.title }}</h2>
                </div>
              </div>

              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>{{ blog.title }}</li>
              </ul>

            </div>
          </div>
        </div>
        <!-- INNER PAGE BANNER END -->

        <!-- BLOG DETAIL SECTION -->
        <div class="section-full p-t150 p-b120 site-bg-black">
          <div class="container">
            <div class="section-content">
              <div class="kv-blg-detail-wrap">
                <div class="row">

                  <!-- MAIN CONTENT -->
                  <div class="col-xl-8 col-lg-8 col-md-12">
                    <div class="kv-lt-blog-detail">

                      <div class="wt-post-media">
                        <img class="grayscale" :src="asset(blog.seo.image)" :alt="blog.title" />

                        <div class="post-date">
                          <span class="date">{{ day }}</span>
                          <span class="month">{{ month }}</span>
                        </div>
                      </div>

                      <div class="kv-content-info">
                        <div class="kv-post-info">
                          <div class="kv-post-head">
                            <div class="post-author">
                              <Link class="au-name" :href="`/staff/${blog.author.slug}`">
                                {{ blog.author.name }}
                              </Link>
                            </div>
                          </div>

                          <h3 class="post-title">
                            {{ blog.title }}
                          </h3>
                        </div>

                        <!-- BLOG CONTENT -->
                        <p v-for="(paragraph, index) in blog.content" :key="index" class="p-text">
                          {{ paragraph }}
                        </p>

                      </div>
                    </div>
                  </div>
                  <!-- SIDEBAR -->
                  <div class="col-xl-4 col-lg-4 col-md-12 sticky-sidebar">
                    <div class="side-bar sx-bg-white">
                      <div class="widget widget-news-post">
                        <h4 class="widget-title">Recent Posts</h4>

                        <div class="widget-bg">
                          <div v-if="recentPosts.length" class="widget-post-bx">
                            <div v-for="post in recentPosts" :key="post.id" class="kv-news-post">
                              <div class="wt-post-media">
                                <Link :href="`/blog/${post.slug}`">
                                  <img :src="asset(post.featured_image)" :alt="post.title" />
                                </Link>
                              </div>

                              <div class="kv-post-info">
                                <div class="post-date">
                                  {{ new Date(post.published_at).toDateString() }}
                                </div>

                                <h3 class="post-title">
                                  <Link :href="`/blog/${post.slug}`">
                                    {{ post.title }}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </div>

                          <!-- FALLBACK -->
                          <div v-else class="text-center p-t20 p-b20">
                            <p class="site-text-gray">
                              No other posts yet.
                              Check back soon 🚀
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="widget widget_services">
                        <h4 class="widget-title">Categories</h4>
                        <div class="widget-bg">
                          <ul>
                            <li v-for="category in blog.categories" :key="category.slug">
                              <Link :href="`/blog/category/${category.slug}`">
                                {{ category.name }}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="widget tw-sidebar-tags-wrap">
                        <h4 class="widget-title">Popular Tags</h4>
                        <div class="widget-bg">
                          <div class="tagcloud">
                            <Link v-for="tag in blog.tags" :key="tag" href="/blog">
                              {{ tag }}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div class="widget widget_social_icon">
                        <h4 class="widget-title">Social</h4>
                        <div class="widget-bg">
                          <div class="kv-social">
                            <ul>
                              <li>
                                <a href="https://www.facebook.com/nervego" target="_blank" rel="noopener noreferrer">
                                  <i class="fa-brands fa-facebook-f"></i>
                                </a>
                              </li>

                              <li>
                                <a href="https://www.linkedin.com/company/nervego/" target="_blank"
                                  rel="noopener noreferrer">
                                  <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                              </li>

                              <li>
                                <a href="https://www.x.com/nervego_com" target="_blank" rel="noopener noreferrer">
                                  <i class="fa-brands fa-x-twitter"></i>
                                </a>
                              </li>

                              <li>
                                <a href="https://www.instagram.com/nervego" target="_blank" rel="noopener noreferrer">
                                  <i class="fa-brands fa-instagram"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- SIDEBAR END -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="section-full p-t150 p-b150 site-bg-black text-center">
          <h2 class="site-text-white">Blog Post Not Found</h2>
          <p class="site-text-gray m-t20">
            The blog post you’re looking for does not exist or has been removed.
          </p>
          <Link href="/blog" class="site-button">
            Back to Blog
          </Link>
        </div>
      </template>
    </div>
  </MainLayout>
</template>
