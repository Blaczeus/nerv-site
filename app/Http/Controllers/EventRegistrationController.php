<?php

namespace App\Http\Controllers;

use App\Models\Eventreg;
use Illuminate\Http\Request;
use Session;

class EventRegistrationController extends Controller
{
    public function store(Request $request)
    {
        
        $request->validate([
            'firstname' => 'required|string|max:20',
            'lastname' => 'required|string|max:20',
            'email' => 'required|string|email|max:55|unique:eventregs',
            'phone' => ['required','regex:/^(?:\+234|0)(?:7\d|8\d|9\d)\d{8}$/',],
            'institute' => 'required|string|max:255|in:Gateway ICT Polytechnic Saapade',
            'department' => 'required|string|max:55|in:Computer Science,Computer Engineering,Electrical/Electronics Engineering,Physics with Electronics',
            'workshop' => 'nullable|boolean',
            'consent' => 'accepted',
            
        ]);
        
        
        
        
    
        $eventreg = new Eventreg;
        $eventreg->event_id = 1;
        $eventreg->firstname = $request->firstname;
        $eventreg->lastname = $request->lastname;
        $eventreg->email = $request->email;
        $eventreg->phone = $request->phone;
        $eventreg->institute = $request->institute;
        $eventreg->department = $request->department;
        $eventreg->workshop = $request->boolean('workshop');
        $eventreg->save();
        
        Session::flash('success', 'Registered');
        return redirect()->back();
        
    }
    
    public function show()
    {
        //$events = Eventreg::whereSlug($id)->firstOrFail();
        return view('pages.events.show');
    }
}
