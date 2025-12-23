<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class EventsController extends Controller
{
  public function index()
  {
    return Inertia::render('events/Index');
  }

  public function create()
  {
    return Inertia::render('events/Create');
  }

  public function show(string $slug)
  {
    return Inertia::render('events/Show', [
      'slug' => $slug,
    ]);
  }
}
