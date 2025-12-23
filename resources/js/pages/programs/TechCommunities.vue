<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '@/layouts/MainLayout.vue';
import ProgramSidebar from '@/components/programs/ProgramSidebar.vue' 
</script>

<template>

  <Head>
    <title>Nervego Tech Communities</title>
    <meta name="description"
      content="We are a community of innovators, driven by a passion for advanced technology and a commitment to shaping the future." />
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
                <h2 class="wt-title">Tech Communities</h2>
              </div>
            </div>

            <ul class="wt-breadcrumb breadcrumb-style-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Tech Communities</li>
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
                    <img class="grayscale" :src="asset('collab_innovation2.png')" alt="Collaborative Innovation" />
                  </div>

                  <div class="kv-mid-info">
                    <div class="kv-content m-b30">
                      <h3 class="kv-title">Building the Future Through Collaborative Innovation</h3>
                      <p>
                        Innovation thrives when brilliant minds collaborate. Our Tech Communities program
                        brings together passionate individuals who share interests in specific technology
                        domains to brainstorm, create, and develop groundbreaking solutions.
                      </p>
                    </div>
                  </div>

                  <div class="kv-mid-info">
                    <div class="row">
                      <div class="col-md-8 m-b30">
                        <div class="kv-content m-b30">
                          <h3 class="kv-title">The Power of Collaborative Innovation</h3>
                          <p>
                            Tech Communities at Nervego are more than discussion groups — they are engines
                            of innovation. Members collaborate on real-world problems across AI,
                            blockchain, cybersecurity, IoT, and sustainable technologies.
                          </p>
                          <p>
                            Nervego provides funding, mentorship, and logistical support to help ideas
                            grow into impactful solutions.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4 m-b30">
                        <div class="kv-outline-media">
                          <img class="grayscale" :src="asset('colllab_innovation.png')" alt="Innovation" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 m-b30">
                      <div class="kv-icon-style-left large-set with-bdr-frame">
                        <div class="kv-media">
                          <img :src="asset('service-icon/pic2.png')" alt="Career Pathways" />
                        </div>
                        <div class="kv-content">
                          <h3 class="kv-title2">Career Pathways</h3>
                          <p>Gain exposure to cutting-edge tech and industry opportunities.</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 m-b30">
                      <div class="kv-icon-style-left large-set with-bdr-frame">
                        <div class="kv-media">
                          <img :src="asset('service-icon/pic3.png')" alt="Tech Community" />
                        </div>
                        <div class="kv-content">
                          <h3 class="kv-title2">Tech Community</h3>
                          <p>Collaborate, learn, and grow through events and workshops.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="kv-mid-info">
                    <div class="row">
                      <div class="col-md-4 m-b30">
                        <div class="kv-outline-media">
                          <img class="grayscale" :src="asset('why-join.png')" alt="Why Join" />
                        </div>
                      </div>
                      <div class="col-md-8 m-b30">
                        <div class="kv-content m-b30">
                          <h3 class="kv-title">Why Join a Tech Community?</h3>
                          <p>
                            Members gain access to funding, mentorship, and a strong network of
                            innovators while building meaningful solutions.
                          </p>
                          <p>
                            These communities strengthen the broader tech ecosystem by solving real
                            problems and nurturing talent.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- FAQ -->
                  <div class="kv-faq-info">
                    <div class="accordion kv-acdn" id="sf-faq-accordion">
                      <div class="accordion-item">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ1">
                          What is Nervego’s mission with Tech Communities?
                        </button>
                        <div id="FAQ1" class="accordion-collapse collapse show">
                          <div class="accordion-body">
                            Nervego connects talented individuals, providing mentorship, funding, and
                            collaboration opportunities to build impactful solutions.
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#FAQ2">
                          Who can join a Tech Community?
                        </button>
                        <div id="FAQ2" class="accordion-collapse collapse">
                          <div class="accordion-body">
                            Developers, students, researchers, and tech enthusiasts with passion for
                            innovation.
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#FAQ3">
                          Are these communities free to join?
                        </button>
                        <div id="FAQ3" class="accordion-collapse collapse">
                          <div class="accordion-body">
                            Yes. Participation is free, and selected projects may receive funding.
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#FAQ4">
                          Can I join multiple communities?
                        </button>
                        <div id="FAQ4" class="accordion-collapse collapse">
                          <div class="accordion-body">
                            Yes, as long as you can contribute meaningfully.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
    <!-- CONTENT END -->
  </MainLayout>
</template>
