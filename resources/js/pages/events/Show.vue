<script setup lang="ts">
import { Head, Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { events } from '@/data/events'

// get slug from URL
const page = usePage()
const slug = computed(() => String(page.props.slug || ''))

// find event
const event = computed(() =>
  events.find(e => e.slug === slug.value && e.status === 'published')
)
</script>

<template>

  <Head v-if="event">
    <title>{{ event.seo_title }}</title>
    <meta name="description" :content="event.seo_description" />
    <meta property="og:image" :content="asset(event.seo_image)" />
  </Head>

  <MainLayout>
    <div v-if="event" class="page-content">

      <!-- INNER PAGE BANNER -->
      <div class="wt-bnr-inr site-bg-gray" :style="{ backgroundImage: `url(${asset('banner/banner1.jpg')})` }">
        <div class="container">
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="wt-title">{{ event.title }}</h2>
              </div>
            </div>

            <!-- BREADCRUMB -->
            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>{{ event.card_category }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- INNER PAGE BANNER END -->

      <!-- DETAIL SECTION -->
      <div class="section-full p-t150 p-b120 site-bg-black kv-team-detail-section-wrap">
        <div class="container">

          <!-- HEAD -->
          <div class="row section-head-2-column">
            <div class="col-lg-5 col-md-12">
              <div class="section-head left">
                <h2 class="kv-large-title site-text-white">
                  {{ event.headline }}
                </h2>
              </div>
            </div>

            <div class="col-lg-7 col-md-12">
              <div class="section-head-detail">
                {{ event.intro }}
              </div>
            </div>
          </div>
          <!-- HEAD END -->

          <div class="section-content">
            <div class="row kv-por-detail-grid">

              <!-- EVENT META -->
              <div class="col-xl-3 col-lg-3 col-md-12">
                <div class="kv-portfolio-d-detail-wrap">
                  <ul class="kv-portfolio-d-detail">
                    <li><span>Organizer:</span> {{ event.organizer }}</li>
                    <li><span>Host:</span> {{ event.host }}</li>
                    <li><span>Target:</span> {{ event.target_audience }}</li>
                    <li><span>Date:</span> {{ event.event_date }}</li>
                    <li><span>Venue:</span> {{ event.venue }}</li>
                    <li><span>Duration:</span> {{ event.duration }}</li>
                  </ul>
                </div>
              </div>

              <!-- EVENT CONTENT -->
              <div class="col-xl-9 col-lg-9 col-md-12">
                <div class="kv-pro-detail-info">
                  <p>{{ event.description }}</p>
                </div>

                <div class="row">
                  <div class="col-xl-7 col-lg-12">
                    <div class="kv-pro-list-details site-bg-primary">
                      <h3 class="kv-title">Event Objectives:</h3>
                      <p style="color:#fff">
                        <span>{{ event.objectives_summary }}</span>
                      </p>

                      <div class="kv-inline-list3">
                        <ul>
                          <li v-for="(objective, index) in event.objectives" :key="index">
                            {{ objective }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-5 col-lg-12">
                    <div class="kv-por-detail-small-image">
                      <img class="grayscale" :src="asset(event.featured_image)" :alt="event.title" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- FALLBACK -->
    <div v-else class="page-content">

      <!-- INNER PAGE BANNER -->
      <div class="wt-bnr-inr site-bg-gray" :style="{ backgroundImage: `url(${asset('banner/banner1.jpg')})` }">
        <div class="container">
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="wt-title">Event Not Found</h2>
              </div>
            </div>

            <!-- BREADCRUMB -->
            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>Not Found</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- INNER PAGE BANNER END -->

      <!-- MESSAGE SECTION -->
      <div class="section-full p-t150 p-b120 site-bg-black text-center">
        <div class="container">
          <h3 class="site-text-white m-b20">
            The event you’re looking for doesn’t exist or may have been removed.
          </h3>

          <Link href="/events" class="site-button site-btn-effect">
            View All Events
          </Link>
        </div>
      </div>

    </div>
  </MainLayout>
</template>  
