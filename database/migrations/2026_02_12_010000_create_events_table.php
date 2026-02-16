<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->enum('status', ['draft', 'published', 'archived'])->index();
            $table->string('title');
            $table->string('headline')->nullable();
            $table->text('intro')->nullable();
            $table->longText('description');
            $table->string('organizer')->nullable();
            $table->string('host')->nullable();
            $table->string('target_audience')->nullable();
            $table->string('venue')->nullable();
            $table->dateTime('start_date')->index();
            $table->dateTime('end_date')->nullable();
            $table->string('featured_image')->nullable();
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->string('seo_image')->nullable();
            $table->foreignId('created_by')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
