<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\StoreEventRequest;
use App\Http\Requests\Dashboard\UpdateEventRequest;
use App\Models\Event;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    use AuthorizesRequests;

    private const PER_PAGE = 15;

    public function __construct()
    {
        $this->authorizeResource(Event::class, 'event');
    }

    public function index(): Response
    {
        $events = Event::query()
            ->select([
                'id',
                'slug',
                'status',
                'title',
                'start_date',
                'end_date',
                'updated_at',
            ])
            ->orderByDesc('start_date')
            ->paginate(self::PER_PAGE)
            ->withQueryString()
            ->through(fn (Event $event) => [
                'id' => $event->id,
                'slug' => $event->slug,
                'status' => $event->status,
                'title' => $event->title,
                'start_date' => $event->start_date?->toDateTimeString(),
                'end_date' => $event->end_date?->toDateTimeString(),
                'updated_at' => $event->updated_at?->toDateTimeString(),
            ]);

        return Inertia::render('dashboard/events/Index', [
            'events' => $events,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('dashboard/events/Create', [
            'statuses' => [
                Event::STATUS_DRAFT,
                Event::STATUS_PUBLISHED,
                Event::STATUS_ARCHIVED,
            ],
        ]);
    }

    public function store(StoreEventRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        DB::transaction(function () use ($request, $validated): void {
            $event = Event::create([
                'slug' => $validated['slug'],
                'status' => $validated['status'],
                'title' => $validated['title'],
                'headline' => $validated['headline'] ?? null,
                'intro' => $validated['intro'] ?? null,
                'description' => $validated['description'],
                'organizer' => $validated['organizer'] ?? null,
                'host' => $validated['host'] ?? null,
                'target_audience' => $validated['target_audience'] ?? null,
                'venue' => $validated['venue'] ?? null,
                'start_date' => $validated['start_date'],
                'end_date' => $validated['end_date'] ?? null,
                'featured_image' => $validated['featured_image'] ?? null,
                'seo_title' => $validated['seo_title'] ?? null,
                'seo_description' => $validated['seo_description'] ?? null,
                'seo_image' => $validated['seo_image'] ?? null,
                'created_by' => $request->user()->id,
            ]);

            $objectives = collect($validated['objectives'] ?? [])->values();
            foreach ($objectives as $index => $objective) {
                $event->objectives()->create([
                    'content' => $objective['content'],
                    'sort_order' => $index,
                ]);
            }
        });

        return redirect()->route('dashboard.events.index')
            ->with('success', 'Event created successfully.');
    }

    public function edit(Event $event): Response
    {
        $event->load('objectives');

        return Inertia::render('dashboard/events/Edit', [
            'statuses' => [
                Event::STATUS_DRAFT,
                Event::STATUS_PUBLISHED,
                Event::STATUS_ARCHIVED,
            ],
            'event' => [
                'id' => $event->id,
                'slug' => $event->slug,
                'status' => $event->status,
                'title' => $event->title,
                'headline' => $event->headline,
                'intro' => $event->intro,
                'description' => $event->description,
                'organizer' => $event->organizer,
                'host' => $event->host,
                'target_audience' => $event->target_audience,
                'venue' => $event->venue,
                'start_date' => $event->start_date?->format('Y-m-d\TH:i'),
                'end_date' => $event->end_date?->format('Y-m-d\TH:i'),
                'featured_image' => $event->featured_image,
                'seo_title' => $event->seo_title,
                'seo_description' => $event->seo_description,
                'seo_image' => $event->seo_image,
                'objectives' => $event->objectives->map(fn ($objective) => [
                    'id' => $objective->id,
                    'content' => $objective->content,
                    'sort_order' => $objective->sort_order,
                ])->values(),
            ],
        ]);
    }

    public function update(UpdateEventRequest $request, Event $event): RedirectResponse
    {
        $validated = $request->validated();

        DB::transaction(function () use ($event, $validated): void {
            $event->update([
                'slug' => $validated['slug'],
                'status' => $validated['status'],
                'title' => $validated['title'],
                'headline' => $validated['headline'] ?? null,
                'intro' => $validated['intro'] ?? null,
                'description' => $validated['description'],
                'organizer' => $validated['organizer'] ?? null,
                'host' => $validated['host'] ?? null,
                'target_audience' => $validated['target_audience'] ?? null,
                'venue' => $validated['venue'] ?? null,
                'start_date' => $validated['start_date'],
                'end_date' => $validated['end_date'] ?? null,
                'featured_image' => $validated['featured_image'] ?? null,
                'seo_title' => $validated['seo_title'] ?? null,
                'seo_description' => $validated['seo_description'] ?? null,
                'seo_image' => $validated['seo_image'] ?? null,
            ]);

            $incoming = collect($validated['objectives'] ?? [])->values();
            $existingById = $event->objectives()->get()->keyBy('id');
            $keptIds = [];

            foreach ($incoming as $index => $objectiveData) {
                $objectiveId = $objectiveData['id'] ?? null;

                if ($objectiveId && $existingById->has($objectiveId)) {
                    $objective = $existingById->get($objectiveId);
                    $objective->update([
                        'content' => $objectiveData['content'],
                        'sort_order' => $index,
                    ]);
                    $keptIds[] = $objective->id;
                    continue;
                }

                $created = $event->objectives()->create([
                    'content' => $objectiveData['content'],
                    'sort_order' => $index,
                ]);
                $keptIds[] = $created->id;
            }

            $query = $event->objectives();
            if (count($keptIds) > 0) {
                $query->whereNotIn('id', $keptIds);
            }
            $query->delete();
        });

        return redirect()->route('dashboard.events.index')
            ->with('success', 'Event updated successfully.');
    }

    public function destroy(Event $event): RedirectResponse
    {
        $event->delete();

        return redirect()->route('dashboard.events.index')
            ->with('success', 'Event deleted successfully.');
    }
}
