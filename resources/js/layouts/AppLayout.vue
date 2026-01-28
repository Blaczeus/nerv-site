<script setup lang="ts">
import Header from '@/components/rubick/Header.vue';
import SideBar from '@/components/rubick/SideBar.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import '../../css/dashboard/rubick/app.css';
import '../../css/dashboard/rubick/side-menu.css';

// ---- Layout state (single source of truth) ----
const isSidebarCollapsed = ref(false);
const isSidebarMobileOpen = ref(false);
const isSidebarHovering = ref(false);
const isScrolled = ref(false);

const showNotifications = ref(false);
const showProfileDropdown = ref(false);
const showQuickSearch = ref(false);

// Scroll handler
let scrollArea: HTMLElement | null = null;
function handleScroll() {
    if (!scrollArea) return;
    isScrolled.value = scrollArea.scrollTop > 10; // threshold for "scrolled"
}

// ---- Intent handlers ----
function toggleSidebarCollapse() {
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
}

function openMobileSidebar() {
    isSidebarMobileOpen.value = true;
}

function closeMobileSidebar() {
    isSidebarMobileOpen.value = false;
}

function handleProfileAction(action: string) {
    switch (action) {
        case 'profile':
            console.log('Navigate to profile page');
            break;
        case 'logout':
            console.log('Perform logout');
            break;
        case 'show-dropdown':
            showProfileDropdown.value = true;
            break;
        case 'hide-dropdown':
            showProfileDropdown.value = false;
            break;
    }
}

onMounted(() => {
    scrollArea = document.querySelector('.content__scroll-area');
    scrollArea?.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    scrollArea?.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div
        class="rubick before:bg-noise min-h-screen before:fixed before:inset-0 before:bg-primary after:fixed after:inset-0 after:bg-accent after:bg-contain after:blur-xl dark:bg-background dark:before:bg-foreground/[.01] dark:after:opacity-20"
    >
        <!-- Side Menu Shell -->
        <SideBar
            :collapsed="isSidebarCollapsed"
            :mobile-open="isSidebarMobileOpen"
            @toggle-collapse="toggleSidebarCollapse"
            @close-mobile="closeMobileSidebar"
            @hover-change="isSidebarHovering = $event"
        />

        <!-- Main Content Area -->
        <div
            class="content relative z-10 h-screen px-7 pt-8 pb-12 transition-[margin,width] duration-200 before:absolute before:inset-y-4 before:right-4 before:left-4 before:-ml-px before:rounded-4xl before:bg-foreground before:opacity-[.07] after:absolute after:inset-y-4 after:right-4 after:left-4 after:-ml-px after:rounded-4xl after:border after:border-foreground/[.15] after:bg-[color-mix(in_oklch,_var(--color-background),_var(--color-foreground)_2%)] xl:ml-[275px] dark:after:opacity-[.59] [&.content--compact]:xl:ml-[110px]"
            :class="{
                'content--compact': isSidebarCollapsed && !isSidebarHovering,
                'content--mobile-menu-open': isSidebarMobileOpen,
            }"
        >
            <div class="h-full overflow-x-hidden">
                <div
                    class="content__scroll-area relative z-20 -mr-7 h-full overflow-y-auto pr-11 pl-4 transition-[margin] duration-200 xl:pl-0"
                    :class="{
                        '-ml-[165px]': isSidebarCollapsed && isSidebarHovering,
                    }"
                >
                    <!-- Header -->
                    <Header
                        :scrolled="isScrolled"
                        :showNotifications="showNotifications"
                        :showProfileDropdown="showProfileDropdown"
                        :showQuickSearch="showQuickSearch"
                        @open-mobile-menu="openMobileSidebar"
                        @toggle-sidebar-collapse="toggleSidebarCollapse"
                        @toggle-notifications="
                            showNotifications = !showNotifications
                        "
                        @toggle-quick-search="
                            showQuickSearch = !showQuickSearch
                        "
                        @profile-action="handleProfileAction"
                    />

                    <!-- Main slot -->
                    <main class="p-6">
                        <slot />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>
