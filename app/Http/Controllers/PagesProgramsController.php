<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesProgramsController extends Controller
{
    public function mentorship()
    {
        return view('pages.programs.mentorship');
    }
    public function community()
    {
        return view('pages.programs.community');
    }
    public function funding()
    {
        return view('pages.programs.funding');
    }
}
