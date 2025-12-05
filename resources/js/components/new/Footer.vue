<script setup>
import { Link } from '@inertiajs/vue3'

const year = new Date().getFullYear();

</script>

<template>
  <footer class="footer-dark">
    <div class="container">
      <!-- FOOTER BLOCKES START -->
      <div class="footer-top">
        <div class="row">

          <div class="col-xl-4 col-lg-3">

            <div class="widget widget_about">
              <div class="logo-footer clearfix">
                <a href="{{ url('/') }}"><img src="{{ asset('nvrg/images/nervgo.png') }}" alt="Image"></a>
              </div>
              <div class="f-about-info">
                Nervego empowers Nigeria's next generation of tech innovators through training, mentorship, and
                community building. We're building a sustainable ecosystem where young talents create world-class
                solutions and drive Africa's technological transformation.
              </div>

              <div class="kv-social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/nervego" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/company/nervego/" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.x.com/nervego_com" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/nervego" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          <div class="col-xl-8 col-lg-9">
            <div class="ftr-right-section">
              <div class="kv-subscribe-nl">
                <div class="kv-nl-title">
                  Subscribe To Our Newsletter Today!
                </div>
                <div class="kv-nl-section">
                  <form>
                    <div class="ftr-nw-form">
                      <input name="news-letter" class="form-control" placeholder="Enter Your Email" type="text">
                      <button class="ftr-nw-subcribe-btn">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 m-b20">
                  <div class="kv-list">
                    <!--<ul>-->
                    <!--    <li>Home</li>-->
                    <!--    <li>About us</li>-->
                    <!--    <li>Services</li>-->
                    <!--</ul>-->
                  </div>
                  <div class="kv-icon-style-left">



                    <div class="kv-media">
                      <i class="feather feather-phone-call"></i>
                    </div>
                    <div class="kv-content">
                      <h3 class="kv-title">Call Us</h3>
                      <p>Feel Free To Call Us <a href="tel:+2347060472475">0706 0472 475</a></p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 m-b20">
                  <div class="kv-list">
                    <!--<ul>-->
                    <!--    <li>Mentorship & Talent</li>-->
                    <!--    <li>Tech Communities</li>-->
                    <!--    <li>Funding & Support</li>-->
                    <!--</ul>-->
                  </div>
                  <div class="kv-icon-style-left">
                    <div class="kv-media">
                      <i class="feather feather-mail"></i>
                    </div>
                    <div class="kv-content">
                      <h3 class="kv-title">Email</h3>
                      <p>Contact Us At:
                        hello@nervego.com
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 m-b20">

                  <div class="kv-icon-style-left">
                    <div class="kv-media">
                      <i class="feather feather-home"></i>
                    </div>
                    <div class="kv-content">
                      <h3 class="kv-title">Address</h3>
                      <!--<ul>-->
                      <!--    <li>Privacy Policy</li>-->
                      <!--    <li>Terms & Conditions</li>-->
                      <!--    <li>Support & Donate</li>-->
                      <!--</ul>-->
                      <p>1 Akinola Shofidiya Street, Alagbado, Lagos</p>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    <!-- FOOTER COPYRIGHT -->
    <div class="footer-bottom">
      <div class="footer-bottom-info">
        <div class="footer-copy-right">
          <span class="copyrights-text">
            © {{ year }} <span class="site-text-white">NERVEGO</span> All rights reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
