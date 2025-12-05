<template>
  <div class="page-wraper">
    <!-- <Loader /> -->
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import Header from '@/Components/new/Header.vue'
import Footer from '@/Components/new/Footer.vue'
import Loader from '@/Components/new/Loader.vue'
import ScrollToTop from '@/Components/new/ScrollToTop.vue'
</script>
