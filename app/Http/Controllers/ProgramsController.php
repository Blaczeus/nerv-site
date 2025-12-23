<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ProgramsController extends Controller
{
    public function mentorship()
    {
        return Inertia::render('programs/MentorshipAndTalent');
    }

    public function community()
    {
        return Inertia::render('programs/TechCommunities');
    }

    public function funding()
    {
        return Inertia::render('programs/FundingAndSupport');
    }
}
