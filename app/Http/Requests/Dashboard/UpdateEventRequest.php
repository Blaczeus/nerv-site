<?php

namespace App\Http\Requests\Dashboard;

use App\Models\Event;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        /** @var Event|null $event */
        $event = $this->route('event');

        return [
            'slug' => ['required', 'string', 'max:255', Rule::unique('events', 'slug')->ignore($event?->id)],
            'title' => ['required', 'string', 'max:255'],
            'headline' => ['nullable', 'string', 'max:255'],
            'intro' => ['nullable', 'string'],
            'description' => ['required', 'string'],
            'organizer' => ['nullable', 'string', 'max:255'],
            'host' => ['nullable', 'string', 'max:255'],
            'target_audience' => ['nullable', 'string', 'max:255'],
            'venue' => ['nullable', 'string', 'max:255'],
            'start_date' => ['required', 'date'],
            'end_date' => ['nullable', 'date', 'after_or_equal:start_date'],
            'featured_image' => ['nullable', 'string', 'max:255'],
            'seo_title' => ['nullable', 'string', 'max:255'],
            'seo_description' => ['nullable', 'string'],
            'seo_image' => ['nullable', 'string', 'max:255'],
            'status' => ['required', Rule::in([
                Event::STATUS_DRAFT,
                Event::STATUS_PUBLISHED,
                Event::STATUS_ARCHIVED,
            ])],
            'objectives' => ['nullable', 'array'],
            'objectives.*.id' => [
                'nullable',
                'integer',
                Rule::exists('event_objectives', 'id')->where(fn ($query) => $query->where('event_id', $event?->id)),
            ],
            'objectives.*.content' => ['required', 'string'],
        ];
    }
}
