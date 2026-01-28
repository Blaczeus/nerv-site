<script setup lang="ts">
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    FileLock,
    FileQuestion,
    Power,
    ShieldAlert,
    Users,
    X,
} from 'lucide-vue-next';
import { ref } from 'vue';

const isHovering = ref(false);

const props = defineProps<{
    collapsed: boolean;
    mobileOpen: boolean;
}>();

const emit = defineEmits<{
    (e: 'toggle-collapse'): void;
    (e: 'close-mobile'): void;
    (e: 'hover-change', hovering: boolean): void;
}>();

const assets = (path: string) => `/assets/images/rubick/${path}`;
</script>

<template>
    <div
        class="side-menu group after:bg-noise fixed top-0 left-0 z-50 -ml-[275px] text-background transition-[margin] duration-200 before:fixed before:inset-0 before:hidden before:bg-black/80 before:backdrop-blur after:absolute after:inset-0 after:bg-primary xl:ml-0 before:xl:hidden after:xl:hidden dark:text-foreground dark:before:bg-foreground/5 dark:after:bg-background [&.side-menu--mobile-menu-open]:ml-0 [&.side-menu--mobile-menu-open]:before:block"
        :class="{
            'side-menu--collapsed': collapsed,
            'side-menu--mobile-menu-open': mobileOpen,
            'side-menu--on-hover': isHovering,
        }"
        @mouseenter="emit('hover-change', true)"
        @mouseleave="emit('hover-change', false)"
    >
        <!-- Mobile overlay / click-to-close -->
        <div
            class="close-mobile-menu fixed z-50 ml-[275px] hidden cursor-pointer xl:hidden [&.close-mobile-menu--mobile-menu-open]:block"
            :class="{ 'close-mobile-menu--mobile-menu-open': mobileOpen }"
            @click="emit('close-mobile')"
        >
            <div class="mt-5 ml-5 flex size-10 items-center justify-center">
                <X class="size-7 stroke-1 opacity-80" />
            </div>
        </div>

        <!-- Sidebar content -->
        <div
            class="side-menu__content relative z-20 flex h-screen w-[275px] flex-col pt-5 pb-[7.5rem] transition-[width] duration-200 group-[.side-menu--collapsed]:xl:w-[110px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]"
        >
            <!-- Logo / top section -->
            <div
                class="relative z-10 hidden h-[65px] w-[275px] flex-none items-center overflow-hidden px-6 duration-200 xl:flex
                   group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]
                   group-[.side-menu--collapsed]:xl:w-[110px]"
                    >
                        <a
                            class="flex items-center transition-[margin] duration-200 xl:ml-2
                       group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-2
                       group-[.side-menu--collapsed]:xl:ml-6"
                            href="#"
                        >
                            <img class="size-5" :src="assets('logo.svg')" />

                            <div
                                class="ml-3.5 text-nowrap transition-opacity duration-200
                           group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100
                           group-[.side-menu--collapsed]:xl:opacity-0"
                            >
                                <span class="text-base font-medium">Midone </span>
                                <span class="text-base font-light">Rubick</span>
                            </div>
                        </a>

                        <!-- Collapse toggle: emit intent -->
                        <a
                            href="#"
                            class="toggle-compact-menu ml-auto hidden items-center justify-center rounded-md
                       border border-background/20 bg-background/10 py-0.5 pl-0.5 pr-1
                       opacity-70 transition-[opacity,transform] duration-200 hover:opacity-100
                       group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100
                       group-[.side-menu--collapsed]:xl:opacity-0
                       xl:flex
                       dark:border-foreground/[.09] dark:bg-foreground/[.02]"
                            @click.prevent="emit('toggle-collapse')"
                        >
                            <ChevronRight
                                v-if="props.collapsed"
                                class="size-4 transition-transform duration-200
                           fill-(--color)/25 stroke-(--color) stroke-[1.5] [--color:currentColor]"
                            />
                            <ChevronLeft
                                v-else
                                class="size-4 transition-transform duration-200
                           fill-(--color)/25 stroke-(--color) stroke-[1.5] [--color:currentColor]"
                            />
                        </a>
                    </div>


            <!-- Scrollable area -->
            <div
                class="z-20 h-full w-full overflow-x-hidden overflow-y-auto scroll-smooth px-4 pb-3 [-webkit-mask-composite:_destination-in] [-webkit-mask-image:_linear-gradient(to_top,_rgba(0,_0,_0,_0),_black_30px),_linear-gradient(to_bottom,_rgba(0,_0,_0,_0),_black_30px)] [&_.simplebar-scrollbar]:before:!bg-background/70 [&:-webkit-scrollbar]:w-0"
            >
                <ul class="scrollable">
                    <!-- nav items intentionally omitted -->
                </ul>
            </div>

            <!-- Account section -->
            <div
                class="side-menu__account group/profile absolute inset-x-0 bottom-0 mx-4 mb-8 transition-[width] group-[.side-menu--collapsed]:justify-center group-[.side-menu--collapsed.side-menu--on-hover]:block xl:group-[.side-menu--collapsed]:flex"
            >
                <div
                    class="flex cursor-pointer items-center rounded-full border border-background/20 bg-background/10 p-2.5 opacity-80 backdrop-blur-2xl transition hover:opacity-100 dark:border-foreground/[.09] dark:bg-foreground/[.02]"
                >
                    <div
                        class="relative h-10 w-10 flex-none overflow-hidden rounded-full border-4 border-background/20 dark:border-foreground/20"
                    >
                        <img
                            class="absolute top-0 h-full w-full object-cover"
                            :src="assets(`fakers/profile-11.jpg`)"
                            alt="Profile"
                        />
                    </div>

                    <div
                        class="ms-3 flex w-full items-center overflow-hidden transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:ms-3 group-[.side-menu--collapsed.side-menu--on-hover]:w-full group-[.side-menu--collapsed.side-menu--on-hover]:opacity-100 xl:group-[.side-menu--collapsed]:ms-0 xl:group-[.side-menu--collapsed]:w-0 xl:group-[.side-menu--collapsed]:opacity-0"
                    >
                        <div class="w-28">
                            <div class="w-full truncate font-medium">
                                Leonardo DiCaprio
                            </div>
                            <div class="w-full truncate text-xs opacity-60">
                                Administrator
                            </div>
                        </div>

                        <ArrowRight
                            class="ms-auto me-4 size-4 fill-(--color)/25 stroke-(--color) stroke-[1.5] [--color:currentColor]"
                        />
                    </div>
                </div>

                <!-- Profile dropdown -->
                <div class="hidden group-hover/profile:block">
                    <div
                        class="box absolute bottom-0 left-[100%] z-50 ml-2 flex w-64 flex-col gap-2.5 p-5 px-6 py-5 text-foreground before:absolute before:inset-0 before:z-[-1] before:mx-3 before:-mb-3 before:rounded-2xl before:border before:border-foreground/10 before:bg-background/30 before:shadow-xl before:backdrop-blur after:absolute after:inset-0 after:z-[-1] after:rounded-2xl after:border after:border-foreground/10 after:bg-background after:shadow-[0px_3px_5px_#0000000b] after:backdrop-blur-md"
                    >
                        <div class="flex flex-col gap-0.5">
                            <div class="font-medium">Leonardo DiCaprio</div>
                            <div class="mt-0.5 text-xs opacity-70">
                                Frontend Engineer
                            </div>
                        </div>
                        <div class="h-px bg-foreground/5"></div>
                        <div class="flex flex-col gap-0.5">
                            <a
                                class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                                href="#"
                            >
                                <Users
                                    class="size-4 fill-(--color)/25 stroke-(--color) stroke-[1.5] [--color:currentColor]"
                                />
                                Profile
                            </a>
                            <a
                                class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                                href="#"
                            >
                                <ShieldAlert
                                    class="size-4 fill-(--color)/25 stroke-(--color) stroke-[1.5] [--color:currentColor]"
                                />
                                Add Account
                            </a>
                            <a
                                class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                                href="#"
                            >
                                <FileLock
                                    class="size-4 fill-(--color)/25 stroke-(--color) stroke-[1.5] [--color:currentColor]"
                                />
                                Reset Password
                            </a>
                            <a
                                class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                                href="#"
                            >
                                <FileQuestion
                                    class="size-4 fill-(--color)/25 stroke-(--color) stroke-[1.5] [--color:currentColor]"
                                />
                                Help
                            </a>
                        </div>
                        <div class="h-px bg-foreground/5"></div>
                        <div class="flex flex-col gap-0.5">
                            <a
                                class="-mx-3 flex gap-2.5 rounded-lg px-4 py-1.5 hover:bg-foreground/5"
                                href="#"
                            >
                                <Power
                                    class="size-4 fill-(--color)/25 stroke-(--color) stroke-[1.5] [--color:currentColor]"
                                />
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
