<script setup lang="ts">
import {
    Bell,
    Building2,
    ChartNoAxesColumnIcon,
    ChevronRight,
    Power,
    Search,
    Users,
    Users2,
    FileQuestion,
    Settings,
} from 'lucide-vue-next';

// Props
const props = defineProps<{
    scrolled: boolean;
    showNotifications: boolean;
    showProfileDropdown: boolean;
    showQuickSearch: boolean;
    collapsed?: boolean;
    searchShortcutHint: string;
}>();

// Emits
const emit = defineEmits<{
    (e: 'open-mobile-menu'): void;
    (e: 'open-search'): void
    (e: 'toggle-quick-search'): void;
    (e: 'toggle-notifications', value: boolean): void;
    (e: 'profile-action', action: string): void;
    (e: 'navigate', page: string): void;
    (e: 'toggle-sidebar-collapse'): void;
}>();

// Utility for images
const assets = (path: string) => `/assets/images/rubick/${path}`;
</script>

<template>
    <div class="top-bar group -mt-2
         [&.scrolled]:sticky
         [&.scrolled]:inset-x-0
         [&.scrolled]:top-0
         [&.scrolled]:z-[999]
         [&.scrolled]:mt-0" :class="{ scrolled: scrolled }">

        <div
            class="flex h-16 items-center gap-5 border-b transition-all group-[.scrolled]:rounded-2xl group-[.scrolled]:border group-[.scrolled]:bg-background group-[.scrolled]:px-5 group-[.scrolled]:shadow-lg">
            <!-- Mobile Menu -->
            <div class="open-mobile-menu mr-auto flex size-9 cursor-pointer items-center justify-center rounded-xl border bg-background xl:hidden"
                @click="$emit('open-mobile-menu')">
                <ChartNoAxesColumnIcon class="size-4 rotate-90 stroke-[1.5]" />
            </div>
            <div v-if="collapsed"
                class="flex size-9 cursor-pointer items-center justify-center rounded-xl border bg-background"
                @click="$emit('toggle-sidebar-collapse')">
                <ChevronRight class="size-4 stroke-[1.5]" />
            </div>

            <!-- Navigation Links -->
            <ul
                class="truncate gap-x-6 [--color-link:var(--color-primary)] [--color-base:var(--color-foreground)] mr-auto hidden xl:flex">
                <li
                    class="[&:not(:last-child)&gt;a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden">
                    <a href="#" @click.prevent="$emit('navigate', 'apps')">Apps</a>
                </li>
                <li
                    class="[&:not(:last-child)&gt;a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden">
                    <a href="#" @click.prevent="$emit('navigate', 'dashboards')">Dashboards</a>
                </li>
                <li
                    class="[&:not(:last-child)&gt;a]:text-(--color-link) text-(--color-base) before:bg-(image:--background-image-chevron) relative before:absolute before:inset-y-0 before:my-auto before:-ml-4 before:size-2 before:-rotate-90 before:bg-center before:bg-no-repeat before:opacity-70 first:before:hidden">
                    <a href="#" @click.prevent="$emit('navigate', 'overview')">Overview</a>
                </li>
            </ul>

            <!-- Quick Search Toggle -->
            <div class="quick-search-toggle bg-background hover:ring-foreground/5 flex h-9 cursor-pointer items-center rounded-full border px-4 ring-1 ring-transparent ring-offset-2 ring-offset-transparent"
                @click="emit('open-search')">
                <div class="flex items-center gap-3 opacity-70">
                    <Search class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25" />
                    {{ searchShortcutHint }}
                </div>
            </div>

            <!-- Notifications -->
            <div class="group/notifications relative flex h-9 items-center"
                @mouseenter="$emit('toggle-notifications', true)" @mouseleave="$emit('toggle-notifications', false)">
                <Bell class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25" />
                <div class="hidden group-hover/notifications:block">
                    <div v-show="showNotifications"
                        class="box p-5 before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:z-[-1] after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:z-[-1] after:backdrop-blur-md before:shadow-foreground/5 absolute right-0 top-0 z-50 -mr-0.5 -mt-0.5 flex w-96 flex-col gap-2.5 px-6 py-5 before:rounded-2xl before:shadow-xl before:backdrop-blur after:rounded-2xl">
                        <div class="flex place-content-between items-center">
                            <div class="font-medium">Notifications</div>
                            <a class="text-primary text-xs" href="#">View More</a>
                        </div>
                        <div class="mt-1 flex flex-col gap-2.5">
                            <a class="hover:border-foreground/10 hover:bg-foreground/5 -mx-2 flex items-center gap-3.5 rounded-2xl border border-transparent p-2"
                                href="#">
                                <span data-content=""
                                    class="tooltip border-(--color)/5 block relative flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] size-11">
                                    <img :src="assets(
                                        `fakers/profile-13.jpg`,
                                    )
                                        " class="absolute top-0 size-full object-cover" alt="profile_pic" />
                                </span>
                                <div class="flex flex-col gap-1">
                                    <div class="flex place-content-between items-center">
                                        <div class="font-medium">Leonardo DiCaprio</div>
                                        <div class="text-xs opacity-70">01:10 PM</div>
                                    </div>
                                    <div class="line-clamp-2 text-xs opacity-70">
                                        There are many variations of passages of Lorem
                                        Ipsum available, but the majority have suffered
                                        alteration in some form, by injected humour, or
                                        randomi
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Profile -->
            <div class="group/profile relative size-9 flex-none" @mouseenter="$emit('profile-action', 'show-dropdown')"
                @mouseleave="$emit('profile-action', 'hide-dropdown')">
                <span
                    class="image-fit tooltip border-(--color)/5 block relative flex-none overflow-hidden rounded-full border-3 ring-1 ring-(--color)/25 [--color:var(--color-primary)] size-full">
                    <img :src="assets('fakers/profile-2.jpg')" class="absolute top-0 size-full object-cover" />
                </span>

                <div class="">
                    <div v-show="showProfileDropdown"
                        class="box p-5 before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border before:border-foreground/10 before:bg-background/30 before:z-[-1] after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:z-[-1] after:backdrop-blur-md before:shadow-foreground/5 absolute right-0 top-0 z-50 -mr-0.5 -mt-0.5 flex w-64 flex-col gap-2.5 px-6 py-5 before:rounded-2xl before:shadow-xl before:backdrop-blur after:rounded-2xl">
                        <div class="flex flex-col gap-0.5">
                            <div class="font-medium">Arnold Schwarzenegger</div>
                            <div class="mt-0.5 text-xs opacity-70">
                                Backend Engineer
                            </div>
                        </div>

                        <div class="h-px bg-foreground/5"></div>

                        <div class="flex flex-col gap-0.5">
                            <a class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                                @click="$emit('profile-action', 'profile')">
                                <Users
                                    class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25" />
                                Profile
                            </a>

                            <a class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                                @click="$emit('profile-action', 'settings')">
                                <Settings
                                    class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25" />
                                Settings
                            </a>

                            <a class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                                @click="$emit('profile-action', 'help')">
                                <FileQuestion
                                    class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25" />
                                Help
                            </a>

                        </div>
                        <div class="bg-foreground/5 h-px"></div>
                        <div class="flex flex-col gap-0.5">
                            <a class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                                @click="$emit('profile-action', 'logout')">
                                <Power
                                    class="size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25" />
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Search Modal -->
        <div v-if="showQuickSearch"
            class="modal fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-10">
            <div class="box relative w-full max-w-2xl p-6">
                <div class="relative border-b border-dashed">
                    <Search class="absolute inset-y-0 my-auto ml-4 size-4" />
                    <input type="text" placeholder="Quick search..."
                        class="h-14 w-full rounded-md border bg-transparent pr-19 pl-12 focus:outline-none" />
                    <div class="absolute inset-y-0 right-0 my-auto mr-4 flex h-6 items-center rounded-lg border px-2"
                        @click="$emit('toggle-quick-search')">
                        esc
                    </div>
                </div>
                <!-- Quick search content placeholders -->
                <div class="mt-4 flex flex-wrap gap-2 px-5">
                    <a class="flex items-center gap-x-1.5 rounded-full border px-3 py-0.5 hover:bg-foreground/5"
                        href="#">
                        <Users2 class="size-4" />
                        Users
                    </a>
                    <a class="flex items-center gap-x-1.5 rounded-full border px-3 py-0.5 hover:bg-foreground/5"
                        href="#">
                        <Building2 class="size-4" />
                        Departments
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
