<?php

use App\Http\Controllers\EventRegistrationController;
use App\Http\Controllers\ProgramsController;
use App\Http\Controllers\EventsController;
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

// Events pages
Route::get('/events', [EventsController::class, 'index'])->name('events.index');
// Route::get('/events/register', [EventsController::class, 'create'])->name('events.create');
Route::get('/events/{slug}', [EventsController::class, 'show'])->name('events.show');

// Event registration
// Route::post('/events/register', [EventRegistrationController::class, 'store'])
//     ->name('events.register.store');

// Blog pages
Route::get('/blog', function () {
    return Inertia::render('blogs/Index');
})->name('blog.index');

Route::get('/blog/{slug}', function ($slug) {
    return Inertia::render('blogs/Show', [
        'slug' => $slug,
    ]);
})->where('slug', '[A-Za-z0-9\-\_]+')->name('blog.show');

// Programs
Route::get('/programs/mentorship-and-talent', [ProgramsController::class, 'mentorship'])->name('programs.mentorship');
Route::get('/programs/tech-communities', [ProgramsController::class, 'community'])->name('programs.community');
Route::get('/programs/funding-and-support', [ProgramsController::class, 'funding'])->name('programs.funding');

// Dashboard (protected)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

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
