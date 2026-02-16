<?php

namespace App\Policies;

use App\Models\Event;
use App\Models\User;

class EventPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->role === User::ROLE_ADMIN;
    }

    public function view(User $user, Event $event): bool
    {
        return $user->role === User::ROLE_ADMIN;
    }

    public function create(User $user): bool
    {
        return $user->role === User::ROLE_ADMIN;
    }

    public function update(User $user, Event $event): bool
    {
        return $user->role === User::ROLE_ADMIN;
    }

    public function delete(User $user, Event $event): bool
    {
        return $user->role === User::ROLE_ADMIN;
    }
}
