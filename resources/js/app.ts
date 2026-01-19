import { createInertiaApp, router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';

import { initializeTheme } from './composables/useAppearance';
import { asset } from './lib/utils';
import { initPlugins } from './vendor/init-plugins';
// import '../css/app.css';

// // VENDOR CSS
// import '../css/vendor/animate.min.css';
// import '../css/vendor/bootstrap.min.css';
// import '../css/vendor/feather.css';
// import '../css/vendor/font-awesome.min.css';
// import '../css/vendor/magnific-popup.min.css';
// import '../css/vendor/owl.carousel.min.css';
// import '../css/vendor/style.css';
// import '../css/vendor/swiper-bundle.min.css';

/*
|--------------------------------------------------------------------------
| INERTIA APP INITIALIZATION
|--------------------------------------------------------------------------
*/
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),

    setup({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) });

        vueApp
            .use(plugin)
            .mixin({
                methods: { asset },
            })
            .mount(el);

        /*
        |--------------------------------------------------------------------------
        | INITIAL PLUGIN LOAD (first page load)
        |--------------------------------------------------------------------------
        */
        setTimeout(() => {
            initPlugins();
        }, 200);

        /*
        |--------------------------------------------------------------------------
        | RE-INIT PLUGINS AFTER INERTIA NAVIGATION
        |--------------------------------------------------------------------------
        */
        router.on('finish', () => {
            setTimeout(() => {
                initPlugins();
            }, 200);
        });
    },

    progress: {
        color: '#ad7b34',
    },
});

/*
|--------------------------------------------------------------------------
| THEME INITIALIZATION
|--------------------------------------------------------------------------
*/
initializeTheme();
