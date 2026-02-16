<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class DashboardOverviewController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $user = $request->user();
        $isAdmin = $user && $user->role === User::ROLE_ADMIN;

        $metrics = [
            'totalUsers' => 0,
            'totalEvents' => 0,
            'totalPosts' => 0,
            'totalJobs' => 0,
            'newUsers7d' => 0,
        ];

        if ($isAdmin) {
            $metrics['totalUsers'] = User::count();
            $metrics['newUsers7d'] = User::where('created_at', '>=', Carbon::now()->subDays(7))->count();

            if (Schema::hasTable('events')) {
                $metrics['totalEvents'] = DB::table('events')->count();
            }

            if (Schema::hasTable('jobs')) {
                $metrics['totalJobs'] = DB::table('jobs')->count();
            }

            if (Schema::hasTable('posts')) {
                $metrics['totalPosts'] = DB::table('posts')->count();
            } elseif (Schema::hasTable('blogs')) {
                $metrics['totalPosts'] = DB::table('blogs')->count();
            }
        }

        $recentActivity = [];
        $upcomingEvents = [];

        if (Schema::hasTable('events') && Schema::hasColumn('events', 'start_date')) {
            $events = DB::table('events')
                ->select(['id', 'title', 'start_date', 'venue'])
                ->where('start_date', '>=', Carbon::now())
                ->orderBy('start_date')
                ->limit(5)
                ->get();

            $upcomingEvents = $events->map(fn ($event) => [
                'id' => (string) $event->id,
                'title' => $event->title,
                'startDate' => Carbon::parse($event->start_date)->toFormattedDateString(),
                'location' => $event->venue,
            ])->all();
        }

        return response()->json([
            'metrics' => $metrics,
            'recentActivity' => $recentActivity,
            'upcomingEvents' => $upcomingEvents,
        ]);
    }
}
