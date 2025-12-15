<?php

use App\Http\Controllers\EventRegistrationController;
use App\Http\Controllers\PagesProgramsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Home
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

// About
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Careers list
Route::get('/careers', function () {
    return Inertia::render('careers/Index');
})->name('careers.index');

// Career detail (slug)
Route::get('/careers/{slug}', function ($slug) {
    return Inertia::render('careers/Show', [
        'slug' => $slug,
    ]);
})->where('slug', '[A-Za-z0-9\-\_]+')->name('careers.show');

// Contact
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// Events listing & create
Route::get('/events', function () {
    return Inertia::render('Events/Index');
})->name('events.index');

Route::get('/events/register', function () {
    return Inertia::render('Events/Create');
})->name('events.create');

// Event registration routes
Route::post('/events/registers', [EventRegistrationController::class, 'store'])->name('events.register.store');
Route::get('/events/nervego-tech-innovators-meetup-2025-gateway-ict-polytechnic-saapade', [EventRegistrationController::class, 'show'])->name('events.special.show');

// Programs
Route::get('/programs/mentorship-and-talent', [PagesProgramsController::class, 'mentorship'])->name('programs.mentorship');
Route::get('/programs/tech-communities', [PagesProgramsController::class, 'community'])->name('programs.community');
Route::get('/programs/funding-and-support', [PagesProgramsController::class, 'funding'])->name('programs.funding');

// Dashboard (protected)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Staff routes
Route::get('/staffs/anya-chidiebere', function () {
    return "ANYA CHIDIEBERE PROFILE APPEARS HERE";
});
Route::get('/staffs/paul-ojomo', function () {
    return "PAUL OJOMO PROFILE APPEARS HERE";
});
Route::get('/staffs/juwon-humphrey', function () {
    return "JUWON HUMPHREY PROFILE APPEARS HERE";
});

require __DIR__ . '/settings.php';
