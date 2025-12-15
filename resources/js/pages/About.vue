<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '@/layouts/MainLayout.vue';

</script>
    
<template>

    <Head>
        <title>About Nervego</title>
        <meta name="description"
            content="We are a community of innovators, driven by a passion for advanced technology and a commitment to shaping the future." />
    </Head>

    <MainLayout>
        <div class="page-content">
            <!-- INNER PAGE BANNER -->
            <div class="wt-bnr-inr site-bg-gray" :style="`background-image: url(${asset('banner/banner1.jpg')})`">
                <div class="container">
                    <div class="wt-bnr-inr-entry">
                        <div class="banner-title-outer">
                            <div class="banner-title-name">
                                <h2 class="wt-title">About Nervego</h2>
                            </div>
                        </div>

                        <div>
                            <ul class="wt-breadcrumb breadcrumb-style-2">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- INNER PAGE BANNER END -->


            <!-- About Company SECTION START -->
            <div class="section-full p-t150 p-b100 site-bg-dark kv-about-section-wrap wow fadeInDown"
                data-wow-offset="100" data-wow-delay="0.2">
                <div class="container">
                    <div class="section-content">
                        <div class="row kv-whychoose-section">

                            <!-- Left Section -->
                            <div class="col-xl-6 col-lg-12 col-md-12 m-b30">
                                <div class="kv-whychoose-Media">
                                    <div class="media">
                                        <div class="media-pic">
                                            <img class="grayscale" :src="asset('about/about.jpg')"
                                                alt="About Nervego" />
                                        </div>
                                    </div>
                                    <div class="dot-pic">
                                        <img :src="asset('dotted-image-dark.png')" alt="Decoration" />
                                    </div>
                                </div>
                            </div>

                            <!-- Right Section -->
                            <div class="col-xl-6 col-lg-12 col-md-12">
                                <div class="kv-about-com-content">

                                    <!-- TITLE -->
                                    <div class="section-head left">
                                        <div class="kv-sm-title left">About Company</div>
                                        <h2 class="kv-large-title site-text-white">
                                            Building African Talent. Creating Global Solutions.
                                        </h2>

                                        <p class="p-text">
                                            Nervego is a technology company dedicated to developing
                                            world-class African engineers and building innovative software
                                            solutions for businesses across the continent. We combine
                                            training, mentorship, product development, and community
                                            support—creating an ecosystem where young developers grow,
                                            collaborate, and build solutions that drive real impact.
                                            <br /><br />
                                            From startups to enterprises, we help organizations transform
                                            their ideas into modern digital products, while empowering
                                            young innovators with the skills, structure, and opportunities
                                            they need to succeed.
                                        </p>
                                    </div>
                                    <!-- TITLE END -->

                                    <div class="kv-about-com-info"></div>

                                    <div class="row">

                                        <!-- Talent Development -->
                                        <div class="col-xl-6 col-lg-6 col-md-6 m-b30">
                                            <div class="kv-icon-style-left large-set icon-no-bg">
                                                <div class="kv-media">
                                                    <img :src="asset('icons/mentorship.png')" alt="Mentorship" />
                                                </div>
                                                <div class="kv-content">
                                                    <h3 class="kv-title">Talent Development</h3>
                                                    <p>Helping developers grow through training and mentorship.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Community Building -->
                                        <div class="col-xl-6 col-lg-6 col-md-6 m-b30">
                                            <div class="kv-icon-style-left large-set icon-no-bg">
                                                <div class="kv-media">
                                                    <img :src="asset('icons/community2.png')" alt="Community" />
                                                </div>
                                                <div class="kv-content">
                                                    <h3 class="kv-title">Community Building</h3>
                                                    <p>Creating spaces where young engineers connect and collaborate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Innovation Support -->
                                        <div class="col-xl-6 col-lg-6 col-md-6 m-b30">
                                            <div class="kv-icon-style-left large-set icon-no-bg">
                                                <div class="kv-media">
                                                    <img :src="asset('icons/money.png')" alt="Innovation" />
                                                </div>
                                                <div class="kv-content">
                                                    <h3 class="kv-title">Innovation Support</h3>
                                                    <p>Supporting ideas with resources, guidance, and light funding.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Product Engineering -->
                                        <div class="col-xl-6 col-lg-6 col-md-6 m-b30">
                                            <div class="kv-icon-style-left large-set icon-no-bg">
                                                <div class="kv-media">
                                                    <img :src="asset('icons/product-development.png')"
                                                        alt="Product Engineering" />
                                                </div>
                                                <div class="kv-content">
                                                    <h3 class="kv-title">Product Engineering</h3>
                                                    <p>Building modern digital products for teams and organizations.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div><!-- row end -->

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- About Company SECTION END -->
        </div>
        <!-- Who We Are SECTION START -->
        <div class="kv-aside-mid site-bg-black">
            <div class="section-full site-bg-dark kv-blog-section-wrap wow fadeInDown" data-wow-offset="100"
                data-wow-delay="0.2">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-5 m-b30">

                            <!-- TITLE START-->
                            <div class="section-head left">
                                <div class="kv-sm-title left">Who We Are</div>
                                <h2 class="kv-large-title site-text-white">
                                    Guided by Purpose, Driven by Impact
                                </h2>
                            </div>
                            <!-- TITLE END-->

                            <div class="kv-inline-list">
                                <ul>
                                    <li>Vision</li>
                                    <li>Mission</li>
                                    <li>Goals</li>
                                    <li>Core Values</li>
                                </ul>
                            </div>

                            <div class="kv-btn-left">
                                <Link href="/programs/mentorship-and-talent" class="site-button">
                                <em>Explore Our Programs</em>
                                </Link>
                            </div>
                        </div>

                        <!-- CAROUSEL -->
                        <div class="col-xl-8 col-lg-7 m-b30">
                            <div class="owl-carousel kv-testimonial-carousel m-b30 owl-btn-bottom-right">

                                <!-- Step 1 -->
                                <div class="item">
                                    <div class="kv-testimonial">

                                        <div class="kv-media">
                                            <div class="media-pic">
                                                <img class="grayscale" :src="asset('about/vision.png')" alt="icon" />
                                            </div>
                                        </div>

                                        <div class="kv-content">
                                            <div class="kv-author-info">
                                                <div class="kv-author-detail">
                                                    <h3 class="kv-title">Our Vision</h3>
                                                </div>
                                            </div>

                                            <div class="kv-testimonial-detail">
                                                <p>
                                                    To empower Africa with world-class engineering talent and build
                                                    technologies
                                                    that accelerate innovation, opportunity, and economic growth across
                                                    the
                                                    continent.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Step 2 -->
                                <div class="item">
                                    <div class="kv-testimonial">

                                        <div class="kv-media">
                                            <div class="media-pic">
                                                <img class="grayscale" :src="asset('about/training.png')" alt="icon" />
                                            </div>
                                        </div>

                                        <div class="kv-content">
                                            <div class="kv-author-info">
                                                <div class="kv-author-detail">
                                                    <h3 class="kv-title">Our Mission</h3>
                                                </div>
                                            </div>

                                            <div class="kv-testimonial-detail">
                                                <p>
                                                    To train, mentor, and support young developers while building
                                                    impactful
                                                    software solutions for businesses, communities, and institutions
                                                    across
                                                    Africa.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Step 3 -->
                                <div class="item">
                                    <div class="kv-testimonial">

                                        <div class="kv-media">
                                            <div class="media-pic">
                                                <img class="grayscale" :src="asset('about/goal.png')" alt="icon" />
                                            </div>
                                        </div>

                                        <div class="kv-content">
                                            <div class="kv-author-info">
                                                <div class="kv-author-detail">
                                                    <h3 class="kv-title">Our Goals</h3>
                                                </div>
                                            </div>

                                            <div class="kv-testimonial-detail">
                                                <p>
                                                    To develop skilled engineers, build sustainable digital products,
                                                    support
                                                    youth-led innovation, and drive Africa’s growth through technology
                                                    and
                                                    collaboration.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Step 4 -->
                                <div class="item">
                                    <div class="kv-testimonial">

                                        <div class="kv-media">
                                            <div class="media-pic">
                                                <img class="grayscale" :src="asset('about/mission2.png')" alt="icon" />
                                            </div>
                                        </div>

                                        <div class="kv-content">
                                            <div class="kv-author-info">
                                                <div class="kv-author-detail">
                                                    <h3 class="kv-title">Core Values</h3>
                                                </div>
                                            </div>

                                            <div class="kv-testimonial-detail">
                                                <p>
                                                    Excellence, integrity, innovation, collaboration, and a commitment
                                                    to
                                                    empowering the next generation.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div><!-- end carousel -->
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- Who We Are SECTION END -->

        <!-- Why Choose Us SECTION START -->
        <div class="section-full site-bg-dark p-t150 p-b90 kv-whychoose2-wrap wow fadeInDown" data-wow-offset="100"
            data-wow-delay="0.2" :style="{ backgroundImage: `url(${asset('about/dot-map-bg.png')})` }">
            <div class="container">
                <div class="section-content">
                    <div class="row kv-whychoose-section">

                        <!-- Left Section -->
                        <div class="col-lg-6 col-md-12 m-b30">
                            <div class="kv-whychoose-Media">

                                <div class="media">
                                    <div class="media-pic">
                                        <img class="grayscale" :src="asset('about/why-choose-us3.png')"
                                            alt="Why Choose Us" />
                                    </div>
                                </div>

                                <div class="dot-pic">
                                    <img :src="asset('about/dotted-image-dark.png')" alt="Decorative Dots" />
                                </div>

                            </div>
                        </div>

                        <!-- Right Section -->
                        <div class="col-lg-6 col-md-12 m-b30">
                            <div class="kv-about-com-content">

                                <!-- TITLE START-->
                                <div class="section-head left">
                                    <div class="kv-sm-title left">Why Choose Us</div>
                                    <h2 class="kv-large-title site-text-white">
                                        We Help You Build, Improve, and Modernize Your Digital Experience.
                                    </h2>

                                    <p class="p-text">
                                        At Nervego, we combine creativity, technology, and collaboration to deliver
                                        solutions that are tailored to your goals. As a growing team, we take every
                                        project personally — ensuring close communication, thoughtful execution, and
                                        results that move your business forward.
                                    </p>
                                </div>
                                <!-- TITLE END-->

                                <div class="kv-inline-list2">
                                    <ul>
                                        <li>Modern digital expertise</li>
                                        <li>Flexible, tailored solutions</li>
                                        <li>Responsive project support</li>
                                        <li>Dedicated attention to detail</li>
                                    </ul>
                                </div>

                                <div class="kv-btn-left">
                                    <Link href="/programs/funding-and-support" class="site-button">
                                    <em>Read More</em>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- Why Choose Us SECTION END -->

    </MainLayout>
</template>
