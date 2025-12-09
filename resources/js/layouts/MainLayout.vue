<template>
  <div class="page-wraper">
    <Loader :visible="loading" />
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
import { ref, onMounted } from 'vue'
import { router } from '@inertiajs/vue3'

const loading = ref(true)
let previousPage = null

// Initial page load
onMounted(() => {
  previousPage = window.location.pathname
  setTimeout(() => loading.value = false, 500)
})

// Only show loader when navigating to a DIFFERENT page
router.on('navigate', (event) => {
  const newPage = event.detail.page.url.pathname

  // Only trigger loader if page changed
  if (newPage !== previousPage) {
    loading.value = true
  }

  router.on('finish', () => {
    setTimeout(() => loading.value = false, 300)
    previousPage = newPage
  })
})
</script>
