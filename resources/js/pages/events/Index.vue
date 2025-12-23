<script setup>
import { Head, Link } from '@inertiajs/vue3'
import MainLayout from '@/layouts/MainLayout.vue'
import EventCard from '@/components/events/EventCard.vue'
import { events } from '@/data/events'
</script>

<template>

  <Head>
    <title>Nervego Tech Events</title>
    <meta name="description"
      content="Discover Nervego tech events, meetups, and community gatherings focused on innovation, learning, and collaboration." />
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
                <h2 class="wt-title">Events</h2>
              </div>
            </div>

            <!-- BREADCRUMB ROW -->
            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Events</li>
              </ul>
            </div>
            <!-- BREADCRUMB ROW END -->
          </div>
        </div>
      </div>
      <!-- INNER PAGE BANNER END -->

      <!-- SECTION CONTENT START -->
      <div class="section-full site-bg-black p-t150 p-b90 kv-portfolio-wrap wow fadeInDown" data-wow-offset="100"
        data-wow-delay="0.2">
        <div class="container">
          <!-- Filter Nav START -->
          <div class="filter-navigation-wrap p-b30">
            <ul class="filter-navigation masonry-filter clearfix">
              <li class="active">
                <a class="btn-inline" data-filter="*" href="#" data-hover="All">All</a>
              </li>
            </ul>
          </div>
          <!-- Filter Nav END -->

          <!-- GALLERY CONTENT START -->
          <ul class="masonry-outer mfp-gallery work-grid row clearfix list-unstyled m-b0">
            <EventCard
                v-for="event in events"
                :key="event.id"
                :event="event"
            />
          </ul>
          <!-- GALLERY CONTENT END -->
        </div>
      </div>
      <!-- SECTION CONTENT END -->

    </div>
    <!-- CONTENT END -->
  </MainLayout>
</template>  
