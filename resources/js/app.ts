// VENDOR CSS
import '../css/vendor/animate.min.css';
import '../css/vendor/bootstrap.min.css';
import '../css/vendor/feather.css';
import '../css/vendor/font-awesome.min.css';
import '../css/vendor/magnific-popup.min.css';
import '../css/vendor/owl.carousel.min.css';
import '../css/vendor/style.css';
import '../css/vendor/swiper-bundle.min.css';

// VENDOR JS
import './vendor/bootstrap.min.js';
// import './vendor/counterup.min.js';
// import './vendor/customm.js';
// import './vendor/imagesloaded.pkgd.min.js';
// import './vendor/isotope.pkgd.min.js';
// import './vendor/jquery-3.7.1.min.js';
// import './vendor/magnific-popup.min.js';
// import './vendor/owl.carousel.min.js';
// import './vendor/popper.min.js';
// import './vendor/swiper-bundle.min.js';
// import './vendor/theia-sticky-sidebar.js';
// import './vendor/tickerNews.min.js';
// import './vendor/waypoints-sticky.min.js';
// import './vendor/waypoints.min.js';
// import './vendor/wow.min.js';

import { asset } from './lib/utils';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { initializeTheme } from './composables/useAppearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mixin({
                methods: {
                    asset,
                },
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

// Apply theme at startup
initializeTheme();
