/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
    ('use strict');
    /*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
    const EVENT_NS = '.kvTemplate';

    function initSwiper(selector, options) {
        if (typeof Swiper === 'undefined') return;

        jQuery(selector).each(function () {
            if (this.swiper && typeof this.swiper.destroy === 'function') {
                this.swiper.destroy(true, true);
            }
            // eslint-disable-next-line no-new
            new Swiper(this, options);
        });
    }

    function initOwlOnce(selector, options) {
        if (!jQuery.fn || !jQuery.fn.owlCarousel) return;

        jQuery(selector).each(function () {
            const $el = jQuery(this);
            if ($el.hasClass('owl-loaded')) return;
            $el.owlCarousel(options);
        });
    }

    function bind($target, events, handler) {
        $target.off(events + EVENT_NS).on(events + EVENT_NS, handler);
    }

    // Home 1 banner slider function by = swiper-bundle.min.js ________//
    function av_home_bnr_1() {
        initSwiper('.home-1-slider', {
            loop: true,
            spaceBetween: 30,
            effect: 'fade',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            //autoplay:false,
            autoplay: {
                delay: 7000,
                disableOnInteraction: true,
            },
        });
    }

    // Home 2 banner slider function by = swiper-bundle.min.js ________//
    function av_home_bnr_2() {
        initSwiper('.home-2-slider', {
            loop: true,
            spaceBetween: 30,
            effect: 'fade',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            autoplay: {
                delay: 7000,
                disableOnInteraction: true,
            },
        });
    }

    // Home 3 banner slider function by = swiper-bundle.min.js ________//
    function av_home_bnr_3() {
        initSwiper('.home-3-slider', {
            loop: true,
            spaceBetween: 30,
            effect: 'fade',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            autoplay: {
                delay: 7000,
                disableOnInteraction: true,
            },
        });
    }

    //testimonial function by = owl.carousel.js________//
    function av_testi_carousel() {
        initOwlOnce('.kv-testimonial-carousel', {
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 3000,
            nav: false,
            dots: true,
            navText: [
                '<i class="feather feather-chevron-left"></i>',
                '<i class="feather feather-chevron-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
            },
        });
    }

    //testimonial function by = owl.carousel.js________//
    function av_testi2_carousel() {
        initOwlOnce('.kv-testimonial2-carousel', {
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 3000,
            nav: false,
            dots: true,
            navText: [
                '<i class="feather feather-chevron-left"></i>',
                '<i class="feather feather-chevron-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1024: {
                    items: 2,
                },
            },
        });
    }

    // blog carousel function by = owl.carousel.js________//
    function av_blog_carousel() {
        initOwlOnce('.kv-blog-carousel', {
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 3000,
            nav: true,
            dots: false,
            navText: [
                '<i class="feather feather-arrow-left"></i>',
                '<i class="feather feather-arrow-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        });
    }

    // Project carousel function by = owl.carousel.js________//
    function av_project_carousel() {
        initOwlOnce('.kv-project-carousel', {
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 3000,
            nav: true,
            dots: false,
            navText: [
                '<i class="feather feather-arrow-left"></i>',
                '<i class="feather feather-arrow-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 4,
                },
            },
        });
    }

    // Services2 carousel function by = owl.carousel.js________//
    function kv_services2_carousel() {
        initOwlOnce('.kv_services2_carousel', {
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 3000,
            nav: false,
            dots: true,
            navText: [
                '<i class="feather feather-arrow-left"></i>',
                '<i class="feather feather-arrow-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        });
    }

    // Featured Project carousel function by = owl.carousel.js________//
    function av_featured_carousel() {
        initOwlOnce('.kv-featured-carousel', {
            loop: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 3000,
            nav: true,
            dots: false,
            navText: [
                '<i class="feather feather-arrow-left"></i>',
                '<i class="feather feather-arrow-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        });
    }

    //  Counter Section function by = counterup.min.js
    function counter_section() {
        jQuery('.counter').counterUp({
            delay: 10,
            time: 3000,
        });
    }

    // > Video responsive function by = custom.js ========================= //
    function video_responsive() {
        jQuery('iframe[src*="youtube.com"]').not('.kv-video-wrapped').wrap(
            '<div class="embed-responsive embed-responsive-16by9"></div>',
        );
        jQuery('iframe[src*="youtube.com"]').addClass('kv-video-wrapped');

        jQuery('iframe[src*="vimeo.com"]').not('.kv-video-wrapped').wrap(
            '<div class="embed-responsive embed-responsive-16by9"></div>',
        );
        jQuery('iframe[src*="vimeo.com"]').addClass('kv-video-wrapped');
    }

    // > magnificPopup for video function	by = magnific-popup.js ===================== //
    function magnific_video() {
        jQuery('.mfp-video').each(function () {
            const $el = jQuery(this);
            if ($el.data('kvMagnificInit')) return;

            $el.magnificPopup({
                type: 'iframe',
            });

            $el.data('kvMagnificInit', true);
        });
    }

    // Vertically center Bootstrap modal popup function by = custom.js ==============//
    function popup_vertical_center() {
        function reposition() {
            var modal = jQuery(this),
                dialog = modal.find('.modal-dialog');
            modal.css('display', 'block');

            dialog.css(
                'margin-top',
                Math.max(0, (jQuery(window).height() - dialog.height()) / 2),
            );
        }

        jQuery('.modal').off('show.bs.modal' + EVENT_NS).on(
            'show.bs.modal' + EVENT_NS,
            reposition,
        );

        bind(jQuery(window), 'resize', function () {
            jQuery('.modal:visible').each(reposition);
        });
    }

    // > Main menu sticky on top  when scroll down function by = custom.js ========== //
    function sticky_header() {
        const $el = jQuery('.sticky-header');

        if ($el.length && !$el.hasClass('sticky-initialized')) {
            new Waypoint.Sticky({
                element: $el[0],
            });

            $el.addClass('sticky-initialized'); // prevents re-running
        }
    }    

    // > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //
    function sticky_sidebar() {
        $('.sticky-sidebar').each(function () {
            const $el = jQuery(this);
            if ($el.data('kvStickySidebarInit')) return;

            $el.theiaStickySidebar({
                additionalMarginTop: 100,
            });
            $el.data('kvStickySidebarInit', true);
        });
    }

    // > page scroll top on button click function by = custom.js ===================== //
    function scroll_top() {
        bind(jQuery('button.scroltop'), 'click', function () {
            jQuery('html, body').animate(
                {
                    scrollTop: 0,
                },
                1000,
            );
            return false;
        });

        bind(jQuery(window), 'scroll', function () {
            var scroll = jQuery(window).scrollTop();
            if (scroll > 900) {
                jQuery('button.scroltop').fadeIn(1000);
            } else {
                jQuery('button.scroltop').fadeOut(1000);
            }
        });
    }

    // > input Placeholder in IE9 function by = custom.js ======================== //
    function placeholderSupport() {
        /* input placeholder for ie9 & ie8 & ie7 */
        jQuery.support.placeholder =
            'placeholder' in document.createElement('input');
        /* input placeholder for ie9 & ie8 & ie7 end*/
        /*fix for IE7 and IE8  */
        if (!jQuery.support.placeholder) {
            jQuery('[placeholder]')
                .off('focus' + EVENT_NS)
                .on('focus' + EVENT_NS, function () {
                    if (jQuery(this).val() === jQuery(this).attr('placeholder'))
                        jQuery(this).val('');
                })
                .blur(function () {
                    if (jQuery(this).val() === '')
                        jQuery(this).val(jQuery(this).attr('placeholder'));
                })
                .blur();

            jQuery('[placeholder]')
                .parents('form')
                .off('submit' + EVENT_NS)
                .on('submit' + EVENT_NS, function () {
                    jQuery(this)
                        .find('[placeholder]')
                        .each(function () {
                            if (
                                jQuery(this).val() ===
                                jQuery(this).attr('placeholder')
                            ) {
                                jQuery(this).val('');
                            }
                        });
                });
        }
        /*fix for IE7 and IE8 end */
    }

    // > Nav submenu show hide on mobile by = custom.js
    function mobile_nav() {
        // Remove previously added toggles to avoid duplicates
        jQuery('.submenu-toogle').remove();

        jQuery('.sub-menu, .mega-menu').parent('li').addClass('has-child');

        jQuery(
            "<div class='fa fa-angle-right submenu-toogle'></div>",
        ).insertAfter('.has-child > a');

        jQuery('.has-child a + .submenu-toogle')
            .off('click')
            .on('click', function (ev) {
                jQuery(this)
                    .parent()
                    .siblings('.has-child ')
                    .children('.sub-menu, .mega-menu')
                    .slideUp(500, function () {
                        jQuery(this).parent().removeClass('nav-active');
                    });

                jQuery(this)
                    .next(jQuery('.sub-menu, .mega-menu'))
                    .slideToggle(500, function () {
                        jQuery(this).parent().toggleClass('nav-active');
                    });

                ev.stopPropagation();
            });
    }    

    // Mobile side drawer function by = custom.js
    function mobile_side_drawer() {
        bind(jQuery('#mobile-side-drawer'), 'click', function () {
            jQuery('.mobile-sider-drawer-menu').toggleClass('active');
        });
    }

    //  > Top Search bar Show Hide function by = custom.js =================== //
    function site_search() {
        bind(jQuery('a[href="#search"]'), 'click', function (event) {
            jQuery('#search').addClass('open');
            jQuery('#search > form > input[type="search"]').focus();
        });

        jQuery('#search, #search button.close').off(
            'click' + EVENT_NS + ' keyup' + EVENT_NS,
        );
        jQuery('#search, #search button.close').on(
            'click' + EVENT_NS + ' keyup' + EVENT_NS,
            function (event) {
                if (
                    event.target === this ||
                    event.target.className === 'close'
                ) {
                    jQuery(this).removeClass('open');
                }
            },
        );
    }

    //  Client logo Carousel function by = owl.carousel.js ========================== //
    function home_client_carousel() {
        initOwlOnce('.home-client-carousel', {
            loop: true,
            nav: false,
            dots: true,
            margin: 5,
            autoplay: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 4,
                },
            },
        });
    }

    //  Client logo Carousel function by = owl.carousel.js ========================== //
    function home_client_carousel_3() {
        initOwlOnce('.home-client-carousel3', {
            loop: true,
            nav: false,
            dots: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 1500,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
            responsive: {
                0: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                767: {
                    items: 4,
                },
                1000: {
                    items: 6,
                },
            },
        });
    }

    //Wow Animation
    function wow_animation() {
        if (window.__kvWowInitialized || typeof WOW === 'undefined') return;
        window.__kvWowInitialized = true;
        new WOW({
            animateClass: 'animated',
            offset: 100,
        }).init();
    }

    // > skills bar function function by  = custom.js ========================= //

    /* 2.1 skills bar tooltips*/
    function progress_bar_tooltips() {
        jQuery(function () {
            jQuery('[data-toggle="tooltips"]')
                .tooltip({ trigger: 'manual' })
                .tooltip('show');
        });
    }

    /* 2.2 skills bar widths*/

    function progress_bar_width() {
        bind(jQuery(window), 'scroll', function () {
            jQuery('.progress-bar').each(function () {
                var value = jQuery(this).attr('aria-valuenow');
                jQuery(this).width(value + '%');
            });
        });
    }

    // > Tooltip function by = isotope.pkgd.min.js ========================= //
    var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]'),
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    /*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
    // > masonry function function by = isotope.pkgd.min.js ========================= //
    function masonryBox() {
        if (jQuery().isotope) {
            var $container = jQuery('.masonry-outer');
            $container.isotope({
                itemSelector: '.masonry-item',
                transitionDuration: '1s',
                originLeft: true,
                stamp: '.stamp',
            });

            $container.imagesLoaded().progress(function () {
                $container.isotope('layout');
            });

            jQuery('.masonry-filter li').off('click' + EVENT_NS).on('click' + EVENT_NS, function () {
                var selector = jQuery(this).find('a').attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        }
    }

    // // > page loader function by = custom.js ========================= //
    // function page_loader() {
    //     $('.loading-area').fadeOut(1000);
    // }

    /*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('.main-bar').addClass('color-fill');
        } else {
            scroll = 100;
            $('.main-bar').removeClass('color-fill');
        }
    }
    // All functions

    // Document-ready group
    window.runTemplatePlugins = function () {
        if (typeof av_home_bnr_1 === 'function') av_home_bnr_1();
        if (typeof av_home_bnr_2 === 'function') av_home_bnr_2();
        if (typeof av_home_bnr_3 === 'function') av_home_bnr_3();
        if (typeof av_testi_carousel === 'function') av_testi_carousel();
        if (typeof av_testi2_carousel === 'function') av_testi2_carousel();
        if (typeof av_blog_carousel === 'function') av_blog_carousel();
        if (typeof av_project_carousel === 'function') av_project_carousel();
        if (typeof kv_services2_carousel === 'function')
            kv_services2_carousel();
        if (typeof av_featured_carousel === 'function') av_featured_carousel();
        if (typeof counter_section === 'function') counter_section();
        if (typeof site_search === 'function') site_search();
        if (typeof video_responsive === 'function') video_responsive();
        if (typeof magnific_video === 'function') magnific_video();
        if (typeof popup_vertical_center === 'function')
            popup_vertical_center();
        if (typeof sticky_header === 'function') sticky_header();
        if (typeof sticky_sidebar === 'function') sticky_sidebar();
        if (typeof scroll_top === 'function') scroll_top();
        if (typeof placeholderSupport === 'function') placeholderSupport();
        if (typeof mobile_nav === 'function') mobile_nav();
        if (typeof mobile_side_drawer === 'function') mobile_side_drawer();
        if (typeof home_client_carousel === 'function') home_client_carousel();
        if (typeof wow_animation === 'function') wow_animation();
        if (typeof home_client_carousel_3 === 'function')
            home_client_carousel_3();
    };

    // Window-load group
    window.runTemplateLoadPlugins = function () {
        if (typeof masonryBox === 'function') masonryBox();
        if (typeof color_fill_header === 'function') color_fill_header();
        if (typeof progress_bar_tooltips === 'function')
            progress_bar_tooltips();
        if (typeof progress_bar_width === 'function') progress_bar_width();
        // if (typeof page_loader === 'function') page_loader();
    };

    // Scroll group
    window.runTemplateScrollPlugins = function () {
        if (typeof color_fill_header === 'function') color_fill_header();
    };

    /*TICKERNEWS FUNCTiON*/
    jQuery(function () {
        var timer = !1;
        var _Ticker = jQuery('#T1').newsTicker();
        _Ticker.on('mouseenter', function () {
            var __self = this;
            timer = setTimeout(function () {
                __self.pauseTicker();
            }, 10);
        });
        _Ticker.on('mouseleave', function () {
            clearTimeout(timer);
            if (!timer) return !1;
            this.startTicker();
        });
    });
})(window.jQuery);
