<script setup lang="ts">
import {
    ChartNoAxesColumnIcon,
    Search,
    Bell,
    ChevronRight,
    Users,
    Power,
    Users2,
    Building2,
} from 'lucide-vue-next';

// Props
const props = defineProps<{
    scrolled: boolean;
    showNotifications: boolean;
    showProfileDropdown: boolean;
    showQuickSearch: boolean;
    collapsed?: boolean;
}>();

// Emits
const emit = defineEmits<{
    (e: 'open-mobile-menu'): void;
    (e: 'toggle-quick-search'): void;
    (e: 'toggle-notifications'): void;
    (e: 'profile-action', action: string): void;
    (e: 'navigate', page: string): void;
    (e: 'toggle-sidebar-collapse'): void;
}>();

// Utility for images
const assets = (path: string) => `/assets/images/rubick/${path}`;
</script>

<template>
    <div class="top-bar group -mt-2" :class="{ scrolled: scrolled }">
        <div
            class="flex h-16 items-center gap-5 border-b transition-all group-[.scrolled]:rounded-2xl group-[.scrolled]:border group-[.scrolled]:bg-background group-[.scrolled]:px-5 group-[.scrolled]:shadow-lg"
        >
            <!-- Mobile Menu -->
            <div
                class="open-mobile-menu mr-auto flex size-9 cursor-pointer items-center justify-center rounded-xl border bg-background xl:hidden"
                @click="$emit('open-mobile-menu')"
            >
                <ChartNoAxesColumnIcon class="size-4 rotate-90 stroke-[1.5]" />
            </div>
            <div
                v-if="collapsed"
                class="flex size-9 cursor-pointer items-center justify-center rounded-xl border bg-background"
                @click="$emit('toggle-sidebar-collapse')"
            >
                <ChevronRight class="size-4 stroke-[1.5]" />
            </div>

            <!-- Navigation Links -->
            <ul class="mr-auto hidden gap-x-6 truncate xl:flex">
                <li>
                    <a href="#" @click.prevent="$emit('navigate', 'apps')"
                        >Apps</a
                    >
                </li>
                <li>
                    <a href="#" @click.prevent="$emit('navigate', 'dashboards')"
                        >Dashboards</a
                    >
                </li>
                <li>
                    <a href="#" @click.prevent="$emit('navigate', 'overview')"
                        >Overview</a
                    >
                </li>
            </ul>

            <!-- Quick Search Toggle -->
            <div
                class="quick-search-toggle flex h-9 cursor-pointer items-center rounded-full border bg-background px-4 ring-1 ring-transparent ring-offset-2 hover:ring-foreground/5"
                @click="$emit('toggle-quick-search')"
            >
                <div class="flex items-center gap-3 opacity-70">
                    <Search class="size-4 stroke-[1.5]" />
                    ⌘ K
                </div>
            </div>

            <!-- Notifications -->
            <div
                class="group/notifications relative flex h-9 items-center"
                @mouseenter="$emit('toggle-notifications')"
                @mouseleave="$emit('toggle-notifications')"
            >
                <Bell class="size-4 stroke-[1.5]" />
                <div
                    v-if="showNotifications"
                    class="box absolute top-0 right-0 z-50 flex w-96 flex-col gap-2.5 p-5 px-6 py-5"
                >
                    <div class="flex items-center justify-between font-medium">
                        <div>Notifications</div>
                        <a class="text-xs text-primary" href="#">View More</a>
                    </div>
                    <div class="mt-1 flex flex-col gap-2.5">
                        <a
                            v-for="(notif, index) in [1, 2, 3, 4, 5, 6]"
                            :key="index"
                            class="-mx-2 flex items-center gap-3.5 rounded-2xl border border-transparent p-2 hover:border-foreground/10 hover:bg-foreground/5"
                            href="#"
                        >
                            <span
                                class="tooltip relative size-11 flex-none overflow-hidden rounded-full border-3 ring-1"
                            >
                                <img
                                    :src="
                                        assets(
                                            `fakers/profile-${index + 2}.jpg`,
                                        )
                                    "
                                    class="absolute top-0 size-full object-cover"
                                 alt="profile_pic"/>
                            </span>
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center justify-between">
                                    <div class="font-medium">
                                        User {{ index + 1 }}
                                    </div>
                                    <div class="text-xs opacity-70">
                                        01:10 PM
                                    </div>
                                </div>
                                <div class="line-clamp-2 text-xs opacity-70">
                                    Sample notification content for user
                                    {{ index + 1 }}.
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Profile -->
            <div
                class="group/profile relative size-9 flex-none"
                @mouseenter="$emit('profile-action', 'show-dropdown')"
                @mouseleave="$emit('profile-action', 'hide-dropdown')"
            >
                <span
                    class="tooltip relative size-full flex-none overflow-hidden rounded-full border-3 ring-1"
                >
                    <img
                        :src="assets('fakers/profile-2.jpg')"
                        class="absolute top-0 size-full object-cover"
                    />
                </span>

                <div
                    v-if="showProfileDropdown"
                    class="box absolute top-0 right-0 z-50 flex w-64 flex-col gap-2.5 px-6 py-5"
                >
                    <div class="flex flex-col gap-0.5">
                        <div class="font-medium">Arnold Schwarzenegger</div>
                        <div class="mt-0.5 text-xs opacity-70">
                            Backend Engineer
                        </div>
                    </div>
                    <div class="h-px bg-foreground/5"></div>
                    <div class="flex flex-col gap-0.5">
                        <a
                            class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                            @click="$emit('profile-action', 'profile')"
                        >
                            <Users class="size-4 stroke-[1.5]" />
                            Profile
                        </a>
                        <a
                            class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                            @click="$emit('profile-action', 'logout')"
                        >
                            <Power class="size-4 stroke-[1.5]" />
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Search Modal -->
        <div
            v-if="showQuickSearch"
            class="modal fixed top-0 left-0 z-50 h-screen w-screen bg-black/60"
        >
            <div class="box relative mx-auto -mt-16 p-6 sm:max-w-2xl">
                <div class="relative border-b border-dashed">
                    <Search class="absolute inset-y-0 my-auto ml-4 size-4" />
                    <input
                        type="text"
                        placeholder="Quick search..."
                        class="h-14 w-full rounded-md border bg-transparent pr-19 pl-12 focus:outline-none"
                    />
                    <div
                        class="absolute inset-y-0 right-0 my-auto mr-4 flex h-6 items-center rounded-lg border px-2"
                        @click="$emit('toggle-quick-search')"
                    >
                        esc
                    </div>
                </div>
                <!-- Quick search content placeholders -->
                <div class="mt-4 flex flex-wrap gap-2 px-5">
                    <a
                        class="flex items-center gap-x-1.5 rounded-full border px-3 py-0.5 hover:bg-foreground/5"
                        href="#"
                    >
                        <Users2 class="size-4" />
                        Users
                    </a>
                    <a
                        class="flex items-center gap-x-1.5 rounded-full border px-3 py-0.5 hover:bg-foreground/5"
                        href="#"
                    >
                        <Building2 class="size-4" />
                        Departments
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
