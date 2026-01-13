<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>

  <Head>
    <title>Contact Us | Nervego</title>
    <meta name="description" content="Get in touch with Nervego. Let’s build an awesome project together." />
  </Head>

  <MainLayout>
    <div class="page-content">

      <!-- INNER PAGE BANNER -->
      <div class="wt-bnr-inr site-bg-gray"
        :style="{ backgroundImage: `url(${asset('banner/banner1.jpg')})` }">
        <div class="container">
          <div class="wt-bnr-inr-entry">
            <div class="banner-title-outer">
              <div class="banner-title-name">
                <h2 class="wt-title">Contact us</h2>
              </div>
            </div>

            <div>
              <ul class="wt-breadcrumb breadcrumb-style-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- INNER PAGE BANNER END -->

      <!-- CONTACT SECTION -->
      <div class="section-full p-t150 p-b90 site-bg-black">
        <div class="container">
          <div class="section-content">
            <div class="kv-contact-section wow fadeInDown" data-wow-delay="0.2">
              <div class="row">

                <!-- FORM -->
                <div class="col-xl-6 col-lg-12 col-md-12">
                  <div class="kv-contact-page-form site-bg-primary">

                    <div class="section-head left">
                      <div class="kv-sm-title left">Quick Contact</div>
                      <h2 class="kv-large-title site-text-white">Get a Quote</h2>
                    </div>

                    <div class="contact-form-outer">
                      <form class="cons-contact-form">

                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="form-group mb-4">
                              <input type="text" class="form-control" placeholder="Name" />
                            </div>
                          </div>

                          <div class="col-lg-6 col-md-6">
                            <div class="form-group mb-4">
                              <input type="email" class="form-control  text-white placeholder:text-gray-400" placeholder="Email" />
                            </div>
                          </div>

                          <div class="col-lg-6 col-md-6">
                            <div class="form-group mb-4">
                              <input type="text" class="form-control  text-white placeholder:text-gray-400" placeholder="Phone" />
                            </div>
                          </div>

                          <div class="col-lg-6 col-md-6">
                            <div class="form-group mb-4">
                              <input type="text" class="form-control  text-white placeholder:text-gray-400" placeholder="Subject" />
                            </div>
                          </div>

                          <div class="col-lg-12">
                            <div class="form-group mb-5">
                              <textarea class="form-control  text-white placeholder:text-gray-400" rows="3" placeholder="Message"></textarea>
                            </div>
                          </div>

                          <div class="col-md-12">
                            <button type="submit" class="site-button dark-bg">
                              <em>Submit Now</em>
                            </button>
                          </div>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>

                <!-- CONTACT DETAILS -->
                <div class="col-xl-6 col-lg-12 col-md-12">
                  <div class="kv-contact-page-detail">

                    <div class="section-head left">
                      <h2 class="kv-large-title site-text-white">
                        Let’s build an awesome project together
                      </h2>
                      <p class="p-text">
                        System is a term used to refer to an organized collection symbols and processes
                        that may be used to operate on such symbols.
                      </p>
                    </div>

                    <div class="row">
                      <div class="col-md-6 col-sm-6">
                        <div class="kv-icon-style-left">
                          <div class="kv-media">
                            <i class="feather feather-phone-call"></i>
                          </div>
                          <div class="kv-content">
                            <h3 class="kv-title">Call Us</h3>
                            <p>
                              <a href="tel:+2347060472475">706 0472 475</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 col-sm-6">
                        <div class="kv-icon-style-left">
                          <div class="kv-media">
                            <i class="feather feather-mail"></i>
                          </div>
                          <div class="kv-content">
                            <h3 class="kv-title">Email</h3>
                            <p>hello@nervego.com</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 col-sm-6">
                        <div class="kv-icon-style-left">
                          <div class="kv-media">
                            <i class="feather feather-globe"></i>
                          </div>
                          <div class="kv-content">
                            <h3 class="kv-title">Website</h3>
                            <p>www.nervego.com</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6 col-sm-6">
                        <div class="kv-icon-style-left">
                          <div class="kv-media">
                            <i class="feather feather-home"></i>
                          </div>
                          <div class="kv-content">
                            <h3 class="kv-title">Address</h3>
                            <p>1 Akinola Shofidiya Street, Alagbado, Lagos</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- SOCIAL -->
                    <div class="kv-social">
                      <h3 class="kv-title">Follow Us</h3>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/nervego" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/nervego/" target="_blank">
                            <i class="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.x.com/nervego_com" target="_blank">
                            <i class="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/nervego" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- CONTACT SECTION END -->

      <!-- MAP
      <div class="gmap-outline map-grayscle">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6309.495304446196!2d-122.43885472228101!3d37.74906395235639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e12a1d66d03%3A0xb8c905ae4e81369b!2sQ-Architecture!5e0!3m2!1sen!2sin!4v1623689156327!5m2!1sen!2sin"
          style="border:0;" allowfullscreen loading="lazy"></iframe>
      </div> -->

    </div>
  </MainLayout>
</template>  
