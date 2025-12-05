<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    @class(['dark'=> ($appearance ?? 'system') === 'dark'])>

<head>
    <!-- Essential Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO / Default Meta -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="tech startup, software development, developer training, web development, mobile app development, IT consulting, young visionaries, coding bootcamp, digital solutions, technology innovation, nigeria, africa">
    <meta name="author" content="Nervego">
    <meta name="robots" content="index, follow">

    <!-- Default Description -->
    <meta name="description" content="Nervego empowers Nigeria's next generation of tech innovators through training, mentorship, and community building.">

    <!-- Open Graph -->
    <meta property="og:title" content="Nervego">
    <meta property="og:description"
        content="Nervego empowers Nigeria's next generation of tech innovators through training, mentorship, and community building.">
    <meta property="og:image" content="/assets/images/og-default.png">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Nervego">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Nervego">
    <meta name="twitter:description"
        content="Empowering Nigeria’s next generation of tech innovators.">
    <meta name="twitter:image" content="/assets/images/og-default.png">
    <meta name="twitter:site" content="@nervego_com">
    <meta name="twitter:creator" content="@nervego_com">

    <!-- Favicons -->
    <link rel="icon" href="/assets/images/favicon.png" type="image/png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!-- Theme Detection (Instant on page load) -->
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';
            if (appearance === 'system' &&
                window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            }
        })();
    </script>

    <!-- Background Color (prevents flash of white/black) -->
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <!-- Title managed dynamically by Inertia -->
    <title inertia>{{ config('app.name', 'Nervego') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet">

    <!-- Vite + Inertia -->
    @vite(['resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
