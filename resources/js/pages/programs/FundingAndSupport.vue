<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import MainLayout from '@/layouts/MainLayout.vue'
import ProgramSidebar from '@/components/programs/ProgramSidebar.vue'
</script>

<template>

  <Head>
    <title>Funding & Support | Nervego</title>
    <meta name="description"
      content="We are a community of innovators, driven by a passion for advanced technology and a commitment to shaping the future." />
  </Head>

  <MainLayout>
    <div class="page-content">

      <!-- INNER PAGE BANNER -->
      <div class="wt-bnr-inr site-bg-gray" :style="{ backgroundImage: `url(${asset('banner/banner1.jpg')})` }">
        <div class="container">
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="wt-title">Funding and Support</h2>
              </div>
            </div>

            <ul class="wt-breadcrumb breadcrumb-style-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Funding and Support</li>
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
                    <img class="grayscale" :src="asset('fs.jpg')" alt="Funding and Support" />
                  </div>

                  <div class="kv-mid-info">
                    <div class="kv-content m-b30">
                      <h3 class="kv-title">Funding and Supporting Our Tech Communities</h3>
                      <p>
                        Innovative ideas deserve the resources to thrive. Our Funding and Support program is designed to
                        empower tech communities and innovators by providing financial assistance, mentorship, and the
                        necessary tools to turn groundbreaking concepts into reality.
                      </p>
                    </div>
                  </div>

                  <div class="kv-mid-info">
                    <div class="row">
                      <div class="col-md-8 m-b30">
                        <div class="kv-content m-b30">
                          <h3 class="kv-title">How We Help</h3>
                          <p>
                            We offer structured funding and tailored support to developers and tech enthusiasts who need
                            resources to accelerate their innovations. Whether it's purchasing hardware, securing
                            workspace, accessing expert mentorship, or facilitating product development, we provide the
                            backing needed to bring visionary projects to life.
                          </p>
                          <p>
                            Our goal is to bridge the gap between talent and opportunity by ensuring that financial
                            constraints don’t hinder technological progress. Through strategic partnerships and
                            community-driven initiatives, we enable innovators to focus on what truly matters—building
                            solutions that drive impact.
                          </p>
                        </div>
                      </div>
                      <div class="col-md-4 m-b30">
                        <div class="kv-outline-media">
                          <img class="grayscale" :src="asset('how-we-help1.png')" alt="How we help" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 m-b30">
                      <div class="kv-icon-style-left large-set with-bdr-frame">
                        <div class="kv-media">
                          <img :src="asset('service-icon/pic3.png')" alt="Project Development" />
                        </div>
                        <div class="kv-content">
                          <h3 class="kv-title2">Project Development Support</h3>
                          <p>Receive guidance and resources to refine your project from idea to execution.</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 m-b30">
                      <div class="kv-icon-style-left large-set with-bdr-frame">
                        <div class="kv-media">
                          <img :src="asset('service-icon/pic4.png')" alt="Opportunities" />
                        </div>
                        <div class="kv-content">
                          <h3 class="kv-title2">Access to Opportunities</h3>
                          <p>Get connected to industry partners and collaborative teams who can help accelerate your
                            project.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="kv-mid-info">
                    <div class="row">
                      <div class="col-md-4 m-b30">
                        <div class="kv-outline-media">
                          <img class="grayscale" :src="asset('why-fund.png')" alt="Why funding" />
                        </div>
                      </div>
                      <div class="col-md-8 m-b30">
                        <div class="kv-content m-b30">
                          <h3 class="kv-title">Why Seek Funding & Support?</h3>
                          <p>
                            For innovators and builders, having a strong idea is just the beginning. Funding & Support
                            ensures that your project has the resources, mentorship, and structure it needs to grow.
                          </p>
                          <p>
                            For the broader ecosystem, funding initiatives help drive innovation by empowering
                            problem-solvers, encouraging experimentation, and creating pathways for sustainable
                            development within the tech space.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="kv-faq-info">
                    <div class="accordion kv-acdn" id="sf-faq-accordion">

                      <div class="accordion-item">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#FAQ1"
                          aria-expanded="true">
                          Who can apply for Funding & Support?
                        </button>
                        <div id="FAQ1" class="accordion-collapse collapse show" data-bs-parent="#sf-faq-accordion">
                          <div class="accordion-body">
                            Members of our tech community, independent innovators, and collaborative project teams
                            working on impactful initiatives.
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#FAQ2">
                          Is every project guaranteed funding?
                        </button>
                        <div id="FAQ2" class="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                          <div class="accordion-body">
                            Support is offered based on readiness and potential impact. Some receive funding, others
                            mentorship or resources.
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#FAQ3">
                          Does Nervego take ownership of supported projects?
                        </button>
                        <div id="FAQ3" class="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                          <div class="accordion-body">
                            Ownership remains with the creator unless a transparent partnership agreement is formed.
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#FAQ4">
                          How do I know if my project is a good fit?
                        </button>
                        <div id="FAQ4" class="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                          <div class="accordion-body">
                            Projects that solve real problems, show clear value, and demonstrate growth potential are
                            strong candidates.
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
