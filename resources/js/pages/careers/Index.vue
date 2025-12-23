<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

import { jobs as jobSource, type Job } from '@/data/jobs'

function truncate(text: string, maxLength = 120): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '...'
}


// Map job data into card-friendly format
const jobs = computed(() =>
  jobSource.map((job: Job) => {
    let date = ''
    let month = ''

    if (job.applicationDeadline) {
      const [day, monthNum] = job.applicationDeadline.split('/')
      date = day
      month = new Date(2025, Number(monthNum) - 1).toLocaleString('en', {
        month: 'short',
      })
    }

    return {
      title: job.title,
      slug: job.slug,
      status: job.status,
      image: 'blog/latest/bg4.jpg',
      date,
      month,
      summary1: `${job.jobType} • ${job.location} • ${job.startDate}`,
      summary2: truncate(job.aboutRole[0] ?? '', 140),
    }
  })
)

</script>

<template>

  <Head>
    <title>Careers at Nervego</title>
    <meta name="description"
      content="Explore career opportunities at Nervego. Join our mission to empower Africa’s next generation of innovators." />
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
                <h2 class="wt-title">Careers at Nervego</h2>
              </div>
            </div>

            <ul class="wt-breadcrumb breadcrumb-style-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Careers</li>
            </ul>

          </div>
        </div>
      </div>
      <!-- INNER PAGE BANNER END -->

      <!-- CAREER LIST SECTION -->
      <div class="section-full p-t120 p-b120 site-bg-black">
        <div class="container">

          <div class="section-head center">
            <h2 class="kv-sm-title left">Career Opportunities</h2>
            <h2 class="kv-large-title site-text-white">
              Discover roles we're hiring for.
            </h2>
          </div>

          <div class="row">

            <!-- JOBS AVAILABLE -->
            <template v-if="jobs.length">

              <div v-for="job in jobs" :key="job.slug" class="masonry-item col-lg-4 col-md-6 m-b30 wow fadeInDown"
                data-wow-delay="0.2">

                <Link :href="`/careers/${job.slug}`" class="block">

                  <div class="kv-lt-blog site-bg-dark p-a20 position-relative"
                    :style="{ opacity: job.status === 'closed' ? 0.6 : 1 }">

                    <!-- Closed Ribbon -->
                    <div v-if="job.status === 'closed'"
                      style="position:absolute; top:10px; right:-5px; background:#ff4d4f; color:#fff; padding:5px 15px; font-weight:bold; transform: rotate(15deg); z-index:10; font-size:12px;">
                      Closed
                    </div>

                    <div class="wt-post-media">
                      <img class="grayscale" :src="asset(job.image)" :alt="job.title" />

                      <div class="post-date">
                        <span class="date">{{ job.date }}</span>
                        <span class="month">{{ job.month }}</span>
                      </div>
                    </div>

                    <div class="kv-post-info">

                      <div class="kv-post-head">
                        <div class="post-author">
                          <!-- Apply button -->
                          <span v-if="job.status === 'open'" class="au-name">Apply</span>

                          <span v-else class="au-name" style="opacity:0.6; cursor:not-allowed;">
                            Apply
                          </span>
                        </div>
                      </div>

                      <!-- Title -->
                      <h3 class="post-title site-text-white">
                        {{ job.title }}
                      </h3>

                      <!-- Summary 1 -->
                      <p class="post-text site-text-gray" :style="{ opacity: job.status === 'closed' ? 0.6 : 1 }">
                        {{ job.summary1 }}
                      </p>

                      <!-- Summary 2 -->
                      <p class="post-text site-text-gray" :style="{ opacity: job.status === 'closed' ? 0.6 : 1 }">
                        {{ job.summary2 }}
                      </p>

                    </div>

                  </div>

                </Link>
              </div>
            </template>
            <!-- NO JOBS AVAILABLE -->
            <div v-else class="col-12 text-center p-t60 p-b60">
              <h3 class="site-text-white m-b10">
                No open positions at the moment
              </h3>
              <p class="site-text-gray">
                We’re not hiring right now, but we’re always growing.
                Check back soon or follow us for future opportunities.
              </p>
            </div>

          </div>
        </div>
      </div>
      <!-- CAREER LIST SECTION END -->
    </div>
    <!-- CONTENT END -->
  </MainLayout>
</template>
