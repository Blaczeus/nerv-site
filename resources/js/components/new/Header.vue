<script setup>
import { Link } from '@inertiajs/vue3'
import { onMounted } from 'vue'

onMounted(() => {
  const btn = document.getElementById('mobile-side-drawer');
  const header = document.querySelector('.mobile-sider-drawer-menu');
  const nav = document.querySelector('.header-nav');

  btn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  if (btn && header) {
    btn.addEventListener('click', () => {
      header.classList.toggle('active');
    });
  }
});
</script>

<template>
  <header class="site-header header-style-1 mobile-sider-drawer-menu site-bg-black top-bar-style-2">
    <div class="header-style-2-content">
      <div class="top-bar site-bg-dark">
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

                    <div class="navigation-bar">
                      <!-- NAV Toggle Button -->
                      <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button"
                        class="navbar-toggler collapsed">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar icon-bar-first"></span>
                        <span class="icon-bar icon-bar-two"></span>
                        <span class="icon-bar icon-bar-three"></span>
                      </button>

                      <!-- MAIN Vav -->
                      <div class="nav-animation header-nav navbar-collapse collapse d-flex justify-content-between">

                        <ul class=" nav navbar-nav">
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li class="has-child"><a href="#">Our Company</a>
                            <ul class="sub-menu">
                              <li>
                                <Link href="/about">About Us</Link>
                              </li>
                              <li>
                                <Link href="/careers">Careers</Link>
                              </li>
                            </ul>
                          </li>
                          <li class="has-child"><a href="#">Programs</a>
                            <ul class="sub-menu">
                              <li>
                                <Link href="/programs/mentorship-and-talent">Mentorship & Talent</Link>
                              </li>
                              <li>
                                <Link href="/programs/tech-communities">Tech Community</Link>
                              </li>
                              <li>
                                <Link href="/programs/funding-and-support">Funding & Support</Link>
                              </li>
                            </ul>
                          </li>
                          <li class="has-child">
                            <a href="#">Learning & Events</a>
                            <ul class="sub-menu">
                              <li>
                                <Link href="/events">Events</Link>
                              </li>
                              <li>
                                <Link href="/blogs">Blogs</Link>
                              </li>
                            </ul>
                          </li>
                          <!-- <li><a href="{{ url('/contact') }}">Community</a></li> -->
                          <!-- <li>
                            <Link href="/events">Events</Link>
                          </li> -->
                          <li>
                            <Link href="/contact">Contact</Link>
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
              <div class="extra-cell two">
                <div class="header-btn">
                  <a href="#" class="site-button"><em>Login here</em></a>
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
