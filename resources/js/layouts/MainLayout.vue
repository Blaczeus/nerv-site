<template>
    <div class="page-wraper">
        <Loader :visible="loading" />
        <Header />

        <main>
            <slot :key="pageKey" />
        </main>

        <Footer />
        <ScrollToTop />
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/new/Header.vue'
import Footer from '@/components/new/Footer.vue'
import Loader from '@/components/new/Loader.vue'
import ScrollToTop from '@/components/new/ScrollToTop.vue'

import { ref, onMounted, nextTick, computed } from 'vue'
import { router, usePage } from '@inertiajs/vue3'
import { initPlugins } from '@/vendor/init-plugins'

import '../../css/legacy.css'

const loading = ref(false)

const page = usePage()

// Force a fresh DOM render ONLY for the homepage
const pageKey = computed(() => {
  return page.url === '/' ? `home` : page.url
})


// Handle Inertia navigation (clicking links)
router.on('finish', async (event) => {
  const path = event.detail.visit.url.pathname

  if (path === '/') {
    loading.value = true
    await nextTick()

    setTimeout(async () => {
      loading.value = false
      await nextTick()
      initPlugins()
    }, 300)
  }
})


// Handle hard reload / initial load
onMounted(async () => {
  if (window.location.pathname === '/') {
    loading.value = true
    await nextTick()

    setTimeout(async () => {
      loading.value = false
      await nextTick()
      initPlugins()
    }, 500)
  }
})
</script>
