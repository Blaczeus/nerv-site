
// VENDOR CSS
import '../css/vendor/animate.min.css';
import '../css/vendor/bootstrap.min.css';
import '../css/vendor/feather.css';
import '../css/vendor/font-awesome.min.css';
import '../css/vendor/magnific-popup.min.css';
import '../css/vendor/owl.carousel.min.css';
import '../css/vendor/style.css';
import '../css/vendor/swiper-bundle.min.css';


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
