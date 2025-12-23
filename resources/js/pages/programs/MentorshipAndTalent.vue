<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import MainLayout from '@/layouts/MainLayout.vue'
import ProgramSidebar from '@/components/programs/ProgramSidebar.vue' 
</script>

<template>

  <Head>
    <title>Mentorship Program | Nervego</title>
    <meta name="description"
      content="Empowering aspiring innovators with expert guidance, hands-on training, and career-building opportunities through mentorship and talent development." />
  </Head>

  <MainLayout>
    <div class="page-content">

      <!-- INNER PAGE BANNER -->
      <div class="wt-bnr-inr site-bg-gray" :style="{ backgroundImage: `url(${asset('banner/banner1.jpg')})` }">
        <div class="container">
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="wt-title">Mentorship Program</h2>
              </div>
            </div>

            <ul class="wt-breadcrumb breadcrumb-style-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Mentorship Program</li>
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

                <!-- MAIN CONTENT -->
                <div class="col-xl-8 col-lg-8 col-md-12 m-b30">

                  <div class="kv-mid-media m-b40">
                    <img class="grayscale" :src="asset('mentorship-and-talent_development.png')"
                      alt="Mentorship and Talent Development" />
                  </div>

                  <div class="kv-mid-info">
                    <div class="kv-content m-b30">
                      <h3 class="kv-title">Mentorship and Talent Development</h3>
                      <p>
                        Nervego is committed to empowering the next generation of tech leaders by providing world-class
                        mentorship and hands-on learning opportunities—completely free of charge. Our mission is to
                        nurture young, talented individuals and equip them with the skills, knowledge, and support
                        needed to excel in the global tech industry.
                      </p>
                    </div>
                  </div>

                  <!-- FEATURES -->
                  <div class="row">
                    <div class="col-md-6 m-b30" v-for="(item, index) in [
                      { title: 'Expert Mentorship', text: 'Guidance from industry leaders to sharpen your coding, problem-solving, and career growth.', icon: 'service-icon/pic1.png' },
                      { title: 'Real Projects', text: 'Build impactful solutions alongside a community of passionate developers.', icon: 'service-icon/pic2.png' },
                      { title: 'Career Pathways', text: 'Gain exposure to cutting-edge tech and connections to industry opportunities.', icon: 'service-icon/pic3.png' },
                      { title: 'Tech Community', text: 'Network, collaborate, and learn through hackathons, workshops, and events.', icon: 'service-icon/pic4.png' },
                    ]" :key="index">
                      <div class="kv-icon-style-left large-set with-bdr-frame">
                        <div class="kv-media">
                          <img :src="asset(`${item.icon}`)" alt="" />
                        </div>
                        <div class="kv-content">
                          <h3 class="kv-title2">{{ item.title }}</h3>
                          <p>{{ item.text }}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- SECOND SECTION -->
                  <div class="kv-mid-info">
                    <div class="row">
                      <div class="col-md-4 m-b30">
                        <div class="kv-outline-media">
                          <img class="grayscale" :src="asset('tech_leaders3.png')" alt="Tech leaders" />
                        </div>
                      </div>
                      <div class="col-md-8 m-b30">
                        <div class="kv-content m-b30">
                          <h3 class="kv-title">Building Tomorrow’s Tech Leaders</h3>
                          <p>
                            Nervego Mentorship & Talent Development program transforms passionate coders into elite
                            developers. We pair you with expert mentors, immerse you in real projects, and connect you
                            with a thriving tech community.
                          </p>
                          <p>
                            This isn’t just training, it’s career acceleration. You’ll gain the skills top companies
                            demand, the portfolio that gets noticed, and the network that opens doors. We’re creating
                            developers who don’t just code, but innovate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- FAQ -->
                  <div class="kv-faq-info">
                    <div class="accordion kv-acdn" id="sf-faq-accordion">

                      <div class="accordion-item" v-for="(faq, index) in [
                        { q: 'Why does Nervego offer this mentorship program?', a: 'Nervego was founded to bridge the gap between raw tech talent and industry needs. We invest in developers because we believe Africa’s tech potential is limitless when equipped with the right skills and opportunities.' },
                        { q: 'How does this align with Nervego\'s core business?', a: 'This mentorship program directly supports Nervego\'s mission by cultivating top-tier technical talent that feeds directly into our own projects and partners.' },
                        { q: 'Can participants work for Nervego after?', a: 'There is no obligation, but top individuals may receive internship or job opportunities with Nervego.' },
                        { q: 'What’s Nervego’s long-term vision for this initiative?', a: 'To become Africa’s premier developer accelerator producing world-class engineers.' },
                      ]" :key="index">

                        <button class="accordion-button" :class="{ collapsed: index !== 0 }" type="button"
                          data-bs-toggle="collapse" :data-bs-target="`#faq-${index}`">
                          {{ faq.q }}
                        </button>

                        <div :id="`faq-${index}`" class="accordion-collapse collapse" :class="{ show: index === 0 }"
                          data-bs-parent="#sf-faq-accordion">
                          <div class="accordion-body">
                            {{ faq.a }}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
                <!-- MAIN CONTENT END -->

                <!-- SIDEBAR -->
                <ProgramSidebar />
                <!-- SIDEBAR END -->

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- CONTENT SECTION END -->

    </div>
  </MainLayout>
</template>
