<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->withoutTwoFactor()->create([
            'name' => 'Anya Chidiebere',
            'email' => 'anyachidiebere029@gmail.com',
            'email_verified_at' => now(),
            'role' => User::ROLE_ADMIN,
        ]);
    }
}
