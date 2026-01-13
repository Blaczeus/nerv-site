<script lang="ts" setup>
import { asset } from '@/lib/utils'
import { Link } from '@inertiajs/vue3'
import { ref, onMounted } from 'vue'

defineProps<{ noNavigation?: boolean }>()

// 
// Interaction state
// 

// Controls mobile slide-out menu
const mobileMenuOpen = ref(false)

// TRUE only when the device is primarily touch-based
// IMPORTANT:
// - This is NOT screen-size based
// - DevTools device mode can flip this
// - This listens for changes so Vue stays in sync
const isTouch = ref(false)

/**
 * NOTE TO SELF:
 * -------------
 * I'm using `(pointer: coarse)` here on purpose instead of screen width.
 *
 * Screen size does NOT reliably tell me how users interact.
 * Tablets can be wide but still touch-only, and DevTools device mode
 * also simulates touch input.
 *
 * Hover vs click behavior needs to switch based on input type,
 * not breakpoints.
 *
 * Do NOT replace this with width-based checks unless I want
 * to break dropdowns again.
 */

// Track which dropdown is open (touch only)
const openDropdown = ref<string | null>(null)

onMounted(() => {
  const media = window.matchMedia('(pointer: coarse)')
  isTouch.value = media.matches

  media.addEventListener('change', (e) => {
    isTouch.value = e.matches
  })
})

// 
// Navigation handlers
// 

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Handles parent nav item clicks (touch devices only)
//
// Desktop:
// - Hover is handled purely by CSS
// - Click should navigate normally
//
// Touch:
// - First tap opens dropdown
// - Second tap navigates

function handleParentClick(e: MouseEvent, name: string) {
  if (!isTouch.value) return

  if (openDropdown.value !== name) {
    e.preventDefault()
    openDropdown.value = name
  }
}

function closeAll() {
  mobileMenuOpen.value = false
  openDropdown.value = null
}
</script>  

<template>
  <header
    :class="['site-header header-style-1 mobile-sider-drawer-menu site-bg-black top-bar-style-2', { active: mobileMenuOpen }]">
    <div class="header-style-2-content">
      <div v-if="!noNavigation" class="top-bar site-bg-dark">
        <div class="container">

          <div class="top-bar-wrap">

            <div class="wt-topbar-left d-flex flex-wrap align-content-start">
              <ul class="wt-topbar-left-info">
                <li><a href="mailto:hello@nervego.com">hello@nervego.com</a></li>
                <li><a href="tel:+2347060472475">0706 0472 475</a></li>
              </ul>
              <ul class="social-icons">
                <li><a href="https://www.facebook.com/nervego" class="fab fa-facebook-f" target="_blank"></a></li>
                <li><a href="https://www.x.com/nervego_com" class="fab fa-x-twitter" target="_blank"></a></li>
                <li><a href="https://www.linkedin.com/company/nervego/" class="fab fa-linkedin" target="_blank"></a>
                </li>
              </ul>
            </div>

            <div class="wt-topbar-right d-flex flex-wrap align-content-center">
              <div class="wt-topbar-right-info">
                <p><i class="feather feather-clock"></i>Mon - Fri 09.00 - 17.00</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div class="container">
        <div class="header-middle-wraper sticky-header ">
          <div class="header-middle main-bar">
            <div class="logo-header">
              <div class="logo-header-inner logo-header-one">
                <Link href="/">
                  <img :src="asset('nervgo.png')" alt="">
                </Link>
              </div>
            </div>

            <div class="header-info-wraper">
              <div class="main-bar-wraper  navbar-expand-lg">

                <div class="header-bottom">
                  <div class="container-block clearfix">

                    <div v-if="!noNavigation" class="navigation-bar">
                      <!-- NAV Toggle Button -->
                      <button type="button" class="navbar-toggler collapsed" @click="toggleMobileMenu()">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar icon-bar-first"></span>
                        <span class="icon-bar icon-bar-two"></span>
                        <span class="icon-bar icon-bar-three"></span>
                      </button>

                      <!-- MAIN Nav -->
                      <div class="nav-animation header-nav d-flex justify-content-between">

                        <ul class=" nav navbar-nav">
                          <li>
                            <Link href="/" @click="closeAll()">Home</Link>
                          </li>
                          <li class="has-child" :class="{ active: openDropdown === 'company' }">
                            <a href="#" @click="handleParentClick($event, 'company')">
                              Our Company
                            </a>
                            <ul class="sub-menu" :class="{ 'is-open': isTouch && openDropdown === 'company' }">
                              <li>
                                <Link href="/about" @click="closeAll()">About Us</Link>
                              </li>
                              <li>
                                <Link href="/careers" @click="closeAll()">Careers</Link>
                              </li>
                            </ul>
                          </li>
                          <li class="has-child">
                            <a href="#" @click="handleParentClick($event, 'programs')">
                              Programs
                            </a>

                            <ul class="sub-menu" :class="{ 'is-open': isTouch && openDropdown === 'programs' }">
                              <li>
                                <Link href="/programs/mentorship-and-talent" @click="closeAll()">Mentorship & Talent
                                </Link>
                              </li>
                              <li>
                                <Link href="/programs/tech-communities" @click="closeAll()">Tech Community</Link>
                              </li>
                              <li>
                                <Link href="/programs/funding-and-support" @click="closeAll()">Funding & Support</Link>
                              </li>
                            </ul>
                          </li>
                          <li class="has-child">
                            <a href="#" @click="handleParentClick($event, 'learning')">
                              Learning & Events
                            </a>

                            <ul class="sub-menu" :class="{ 'is-open': isTouch && openDropdown === 'learning' }">
                              <li>
                                <Link href="/events" @click="closeAll()">Events</Link>
                              </li>
                              <li>
                                <Link href="/blog" @click="closeAll()">Blogs</Link>
                              </li>
                            </ul>
                          </li>
                          <!-- <li><a href="{{ url('/contact') }}">Community</a></li> -->
                          <!-- <li>
                            <Link href="/events" @click="closeAll()">Events</Link>
                          </li> -->
                          <li>
                            <Link href="/contact" @click="closeAll()">Contact</Link>
                          </li>

                        </ul>

                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
            <!-- Header Right Section-->
            <div class="extra-nav header-1-nav">
              <div class="extra-cell one">
                <div class="header-search">
                  <a href="#search" class="header-search-icon"><i class="fa fa-search"></i></a>
                </div>
              </div>
              <div v-if="!noNavigation" class="extra-cell two">
                <div class="header-btn">
                  <Link href="/login" class="site-button"><em>Login here</em></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- SITE Search -->
      <div id="search">
        <span class="close"></span>
        <form role="search" id="searchform" action="" method="get" class="radius-xl">
          <div class="input-group">
            <input class="form-control" value="" name="q" type="search" placeholder="Type to search" />
            <span class="input-group-append"><button type="button" class="search-btn"><i
                  class="fa fa-paper-plane"></i></button></span>
          </div>
        </form>
      </div>
    </div>
  </header>
</template>
