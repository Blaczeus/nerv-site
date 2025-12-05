<script setup>
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '@/layouts/MainLayout.vue';

</script>
    
<template>
    <Head>
        <title>Welcome to Nervego Limited</title>
        <meta name="description" content="We empower the next generation of world-class developers..." />
    </Head>

    <MainLayout>
        <div class="page-content">
    
            <!--SLIDER BANNER START-->
            <div class="kv-bnr-3-wrap-outer home-3-slider">
    
                <!-- swiper slides -->
                <div class="swiper-wrapper">
    
                    <div class="kv-bnr-3-wrap swiper-slide"
                        :style="{ backgroundImage: `url(${asset('main-slider/slider3/slide-3.jpg')})` }">
                        <div class="container">
                            <div class="kv-bnr-3-content">
                                <h2 class="kv-bnr-3-large-title site-text-white">
                                    Build, Learn and Grow. Your Tech Future Starts Here!
                                </h2>
                                <div class="kv-bnr-3-info s-text-light">
                                    Join Nervego tech revolution and thriving community of developers where mentorship,
                                    funding, and innovation come together to shape tomorrow’s leaders. Turn your potential
                                    into reality.
                                </div>
                                <div class="kv-bnr3-bottom">
                                    <div class="kv-bnr-btn">
                                        <a href="#" class="site-button">
                                            <em>Join our community</em>
                                        </a>
                                    </div>
                                </div>
                            </div>
    
                            <div class="kv-bnr-3-media">
                                <div class="media">
                                    <div class="media-pic">
                                        <img class="grayscale" :src="asset('main-slider/slider3/ban1.jpg')" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="kv-bnr-3-wrap swiper-slide"
                        :style="{ backgroundImage: `url(${asset('main-slider/slider3/slide-3.jpg')})` }">
                        <div class="container">
                            <div class="kv-bnr-3-content">
                                <h2 class="kv-bnr-3-large-title site-text-white">
                                    Nurturing Young Visionaries with Advanced Skills
                                </h2>
                                <div class="kv-bnr-3-info s-text-light">
                                    Empowering the next generation of world-class developers through cutting-edge
                                    technology and transformative solutions.
                                </div>
                                <div class="kv-bnr3-bottom">
                                    <div class="kv-bnr-btn">
                                        <a href="#" class="site-button">
                                            <em>Support with donation</em>
                                        </a>
                                    </div>
                                </div>
                            </div>
    
                            <div class="kv-bnr-3-media">
                                <div class="media">
                                    <div class="media-pic">
                                        <img class="grayscale" :src="asset('main-slider/slider3/ban2.webp')" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div class="swiper-button-wrap">
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
    
            </div>
            <!--SLIDER BANNER END-->
    
            <!-- About Company SECTION START -->
            <div class="section-full p-t150 p-b120 site-bg-black kv-about3-section-wrap wow fadeInDown"
                data-wow-offset="100" data-wow-delay="0.2">
                <div class="container">
    
                    <div class="section-content">
                        <div class="row kv-whychoose-section">
    
                            <!-- Left -->
                            <div class="col-xl-6 col-lg-12 col-md-12 m-b30">
                                <div class="row kv-rev-column-media-wrap">
                                    <div class="col-md-6">
                                        <div class="kv-rev-column-media">
                                            <div class="media">
                                                <img class="grayscale" :src="asset('about1.webp')" alt="#">
                                            </div>
                                            <div class="media-info">
                                                <div class="count-digit">90<span>%</span></div>
                                                <h2 class="kv-title">Technology Growth Movement</h2>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="col-md-6">
                                        <div class="kv-rev-column-media">
                                            <div class="media">
                                                <img class="grayscale" :src="asset('ab3.jpg')" alt="#">
                                            </div>
                                            <div class="media-info">
                                                <div class="count-digit">04<span>+</span></div>
                                                <h2 class="kv-title">Years Of Growth</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Right -->
                            <div class="col-xl-6 col-lg-12 col-md-12 m-b30">
                                <div class="kv-about-com-content">
    
                                    <div class="section-head left">
                                        <div class="kv-sm-title left">About Company</div>
                                        <h2 class="kv-large-title site-text-white">
                                            Nervego is Building the Future Through Technology
                                        </h2>
                                        <p class="p-text">
                                            Nervego is a movement dedicated to raising Nigeria's technology ecosystem to
                                            global standards...
                                        </p>
                                    </div>
    
                                    <div class="kv-inline-list5">
                                        <ul>
                                            <li>Training & Mentorship</li>
                                            <li>Thriving Community</li>
                                            <li>Impactful Solutions</li>
                                            <li>Investment in Youth</li>
                                        </ul>
                                    </div>
    
                                    <div class="kv-btn-left">
                                        <Link href="/about" class="site-button">
                                        <em>Read More</em>
                                        </Link>
                                    </div>
    
                                </div>
                            </div>
    
                        </div>
                    </div>
    
                </div>
            </div>
            <!-- About Company SECTION END -->
    
            <!-- CONTACT SECTION -->
            <div class="section-full p-t150 p-b120 site-bg-dark kv-contact2-section-wrap kv-dark-overlay-wrap wow fadeInDown"
                data-wow-offset="100" data-wow-delay="0.2" :style="{ backgroundImage: `url(${asset('contactbg-3.jpg')})` }">
    
                <div class="kv-dark-overlay"></div>
    
                <div class="container">
                    <div class="kv-contact2-section">
                        <h2 class="kv-large-title site-text-white">
                            Be Part of <span class="site-text-primary">Something Big!</span>
                        </h2>
                        <p class="p-text">
                            Whether you’re a visionary developer or a company seeking transformative solutions,<br>
                            there’s a place for you here.
                        </p>
    
                        <div class="kv-btn-left">
                            <Link href="/contact" class="site-button">
                            <em>Contact Us</em>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CONTACT END -->
    
            <!-- PROCESS SECTION -->
            <div class="section-full p-t150 p-b120 site-bg-black kv-services2--wrap wow fadeInDown" data-wow-offset="100"
                data-wow-delay="0.2">
    
                <div class="container">
    
                    <div class="section-head center">
                        <div class="kv-sm-title left">The Process</div>
                        <h2 class="kv-large-title site-text-white">Where We’re Building the Future</h2>
                    </div>
    
                    <div class="section-content">
                        <div class="kv_process_bx-wrap row d-flex justify-content-center">
    
                            <!-- 01 -->
                            <div class="col-lg-4 col-md-6 m-b30">
                                <div class="kv_process_bx">
                                    <div class="media">
                                        <div class="kv-number"><span>01</span></div>
                                        <div class="kv-media">
                                            <img :src="asset('service2/1.png')" alt="image">
                                        </div>
                                    </div>
    
                                    <div class="kv-info">
                                        <h3 class="title"><a href="#">Blockchain & FinTech</a></h3>
                                        <p class="info-text">
                                            We build Africa's financial future with secure blockchain payments...
                                        </p>
                                        <div class="kv-btn">
                                            <a href="#" class="site-button"><em>Explore More</em></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- 02 -->
                            <div class="col-lg-4 col-md-6 m-b30">
                                <div class="kv_process_bx">
                                    <div class="media">
                                        <div class="kv-number"><span>02</span></div>
                                        <div class="kv-media">
                                            <img :src="asset('service2/3.png')" alt="image">
                                        </div>
                                    </div>
    
                                    <div class="kv-info">
                                        <h3 class="title"><a href="#">AI & Machine Learning</a></h3>
                                        <p class="info-text">
                                            We build AI systems specifically for Africa...
                                        </p>
                                        <div class="kv-btn">
                                            <a href="#" class="site-button"><em>Explore More</em></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- 03 -->
                            <div class="col-lg-4 col-md-6 m-b30">
                                <div class="kv_process_bx">
                                    <div class="media">
                                        <div class="kv-number"><span>03</span></div>
                                        <div class="kv-media">
                                            <img :src="asset('service2/3.png')" alt="image">
                                        </div>
                                    </div>
    
                                    <div class="kv-info">
                                        <h3 class="title"><a href="#">Enterprise-Grade Software</a></h3>
                                        <p class="info-text">
                                            We develop enterprise-grade digital platforms tailored...
                                        </p>
                                        <div class="kv-btn">
                                            <a href="#" class="site-button"><em>Explore More</em></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
    </MainLayout>
</template>
