<script setup lang="ts">
import { Head, Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'

import { jobs, type Job } from '@/data/jobs'
import { companyInfo } from '@/data/company'

// get slug from route params
const page = usePage()
const slug = computed(() => String(page.props.slug || ''))

// find job by slug
const job = computed<Job | undefined>(() =>
  jobs.find(j => j.slug === slug.value)
)
</script>

<template>

  <Head>
    <title>
      {{ job ? `${job.title} | Careers at Nervego` : 'Role Not Found | Careers at Nervego' }}
    </title>
    <meta name="description" content="Explore career opportunities at Nervego." />
  </Head>

  <MainLayout>
    <div class="page-content">
      <template v-if="job">
        <!-- INNER PAGE BANNER -->
        <div class="wt-bnr-inr site-bg-gray" :style="{ backgroundImage: `url(${asset('banner/banner1.jpg')})` }">
          <div class="container">
            <div class="wt-bnr-inr-entry">
              <div class="banner-title-outer">
                <div class="banner-title-name">
                  <h2 class="wt-title">{{ job.title }}</h2>
                </div>
              </div>

              <!-- BREADCRUMB -->
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>{{ job.title }}</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- INNER PAGE BANNER END -->

        <!-- CONTENT SECTION -->
        <div class="section-full p-t150 p-b120 site-bg-black">
          <div class="container">
            <div class="section-content">
              <div class="kv-blg-detail-wrap">
                <div class="row">

                  <!-- SIDEBAR -->
                  <div class="col-xl-4 col-lg-4 col-md-12 sticky-sidebar">
                    <div class="side-bar sx-bg-white">

                      <!-- JOB DETAILS -->
                      <div class="widget widget_services">
                        <h4 class="widget-title">Job details</h4>
                        <div class="widget-bg">
                          <ul>
                            <li><span>Job type: {{ job.jobType }}</span></li>
                            <li><span>Shift: {{ job.shift }}</span></li>
                            <li><span>Pay: {{ job.pay }}</span></li>
                            <li><span>Location: {{ job.location }}</span></li>
                            <li><span>Start date: {{ job.startDate }}</span></li>
                          </ul>
                        </div>
                      </div>

                      <!-- APPLICATION DEADLINE -->
                      <div class="widget widget_services">
                        <h4 class="widget-title">Application Deadline</h4>
                        <div class="widget-bg">
                          <ul>
                            <li>Application closes:</li>
                            <li>{{ job.applicationDeadline }}</li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                  <!-- SIDEBAR END -->

                  <!-- MAIN CONTENT -->
                  <div class="col-xl-8 col-lg-8 col-md-12 m-b30">
                    <div class="kv-mid-info">

                      <!-- ABOUT COMPANY -->
                      <div class="kv-content m-b30">
                        <h3 class="kv-title">About The Company:</h3>
                        <p v-for="(text, index) in companyInfo.about" :key="index">
                          {{ text }}
                        </p>
                      </div>

                      <!-- ABOUT ROLE -->
                      <div class="kv-content m-b30">
                        <h3 class="kv-title">About The Role:</h3>

                        <p v-for="(text, index) in job.aboutRole" :key="index">
                          {{ text }}
                        </p>

                        <h3 class="kv-title">Your key responsibilities will include, but are not limited to:</h3>

                        <p v-for="(text, index) in job.roleOverview" :key="index">
                          {{ text }}
                        </p>

                        <div v-for="(group, index) in job.responsibilities" :key="index" class="m-t20">
                          <h4 class="kv-title" :style="{ fontSize: index === 0 ? '19px' : '16px' }">
                            {{ group.section }}
                          </h4>

                          <ul>
                            <li v-for="(item, i) in group.items" :key="i">
                              {{ item }}
                            </li>
                          </ul>
                        </div>

                        <h4 class="kv-title" style="font-size:19px">
                          Ideal candidate:
                        </h4>

                        <ul>
                          <li v-for="(item, index) in job.idealCandidate" :key="index">
                            {{ item }}
                          </li>
                        </ul>
                      </div>

                      <!-- HOW TO APPLY -->
                      <div class="kv-content m-b30">
                        <h3 class="kv-title">How to Apply:</h3>
                        <p>
                          To apply, please send your CV to
                          <strong>{{ companyInfo.careersEmail }}</strong>
                          and include a brief introduction about yourself in the body
                          of the email.
                          Use the subject line:
                          <strong>
                            Application {{ job.title }} - [Your Full Name]
                          </strong>.
                          Only shortlisted candidates will be contacted.
                        </p>
                      </div>

                      <!-- APPLY BUTTON -->
                      <div class="kv-content m-b30">
                        <a v-if="job.status === 'open'"
                          :href="`mailto:${companyInfo.careersEmail}?subject=Application ${job.title} - [Your Full Name]`"
                          class="site-button">
                          <em>Apply</em>
                        </a>

                        <span v-else class="site-button site-button-disabled">
                          Applications Closed
                        </span>
                      </div>

                    </div>
                  </div>
                  <!-- MAIN CONTENT END -->

                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- CONTENT SECTION END -->
      </template>
      <!-- JOB NOT FOUND -->
      <template v-else>
        <div class="section-full p-t150 p-b120 site-bg-black text-center">
          <div class="container">
            <h2 class="wt-title">Job not found</h2>
            <p class="m-t10">The role may have been closed or removed.</p>

            <Link href="/careers" class="site-button m-t20">
              <em>View other openings</em>
            </Link>
          </div>
        </div>
      </template>
    </div>
  </MainLayout>
</template>

<style scoped>
.site-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
