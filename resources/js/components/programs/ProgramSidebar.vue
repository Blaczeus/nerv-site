<script lang="ts" setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <div class="col-xl-4 col-lg-4 col-md-12 sticky-sidebar">
    <div class="side-bar sx-bg-white">

      <!-- Programs list -->
      <div class="widget widget_services">
        <h4 class="widget-title">Programs</h4>
        <div class="widget-bg">
          <ul>
            <li>
              <Link href="/programs/mentorship-and-talent">
                Mentorship & Talent
              </Link>
              <span class="feather feather-chevron-right"></span>
            </li>

            <li>
              <Link href="/programs/tech-communities">
                Tech Community
              </Link>
              <span class="feather feather-chevron-right"></span>
            </li>

            <li>
              <Link href="/programs/funding-and-support">
                Funding & Support
              </Link>
              <span class="feather feather-chevron-right"></span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Join Us -->
      <div class="widget widget_services">
        <h4 class="widget-title">Join Us in Shaping the Future</h4>
        <div class="widget-bg">
          <ul>
            <li>
              Connect with Our Community
              <span class="feather feather-chevron-right"></span>
            </li>
            <li>
              Reach Out – Have questions?
              <span class="feather feather-chevron-right"></span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Need Help -->
      <div class="tw-need-helpwrap">
        <h4 class="kv-title">Need Any Help From Us!</h4>
        <h2 class="Kv-number">
          <a href="tel:+2347060472475">0706 0472 475</a>
        </h2>
        <Link href="/contact" class="site-button">
          <em>Contact us!</em>
        </Link>
      </div>

    </div>
  </div>
</template>  
