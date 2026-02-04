<script setup lang="ts">
import Header from '@/components/rubick/Header.vue';
import SideBar from '@/components/rubick/SideBar.vue';
import SearchModal from '@/components/rubick/SearchModal.vue';
import { onBeforeUnmount, onMounted, ref, computed } from 'vue';
import { router } from '@inertiajs/vue3'
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
const showSearchModal = ref(false);
// OS detection (presentation-only)
const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);

// Shortcut hint
const searchShortcutHint = computed(() => (isMac ? '⌘K' : 'Ctrl K'));

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

function openSearch() {
    showSearchModal.value = true;
}

function closeSearch() {
    showSearchModal.value = false;
}

function handleProfileAction(action: string) {
    switch (action) {
        case 'profile':
            console.log('Navigate to profile page')
            break

        case 'logout':
            router.post('/logout')
            break

        case 'show-dropdown':
            showProfileDropdown.value = true
            break

        case 'hide-dropdown':
            showProfileDropdown.value = false
            break
    }
}

// Keyboard shortcuts
function handleKeydown(e: KeyboardEvent) {
    // Cmd + K (Mac) or Ctrl + K (Win/Linux)
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();

        // Avoid reopening if already open
        if (!showSearchModal.value) {
            showSearchModal.value = true;
        }
        return;
    }

    // Escape closes search
    if (e.key === 'Escape' && showSearchModal.value) {
        showSearchModal.value = false;
    }
}

onMounted(() => {
    scrollArea = document.querySelector('.content__scroll-area');
    scrollArea?.addEventListener('scroll', handleScroll);

    window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
    scrollArea?.removeEventListener('scroll', handleScroll);

    window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
    <div
        class="rubick before:bg-noise min-h-screen before:fixed before:inset-0 before:bg-primary after:fixed after:inset-0 after:bg-accent after:bg-contain after:blur-xl dark:bg-background dark:before:bg-foreground/[.01] dark:after:opacity-20">
        <!-- Side Menu Shell -->
        <SideBar :collapsed="isSidebarCollapsed" :mobile-open="isSidebarMobileOpen"
            @toggle-collapse="toggleSidebarCollapse" @close-mobile="closeMobileSidebar"
            @hover-change="isSidebarHovering = $event" @profile-action="handleProfileAction" />

        <!-- Main Content Area -->
        <div class="content relative z-10 h-screen px-7 pt-8 pb-12 transition-[margin,width] duration-200 before:absolute before:inset-y-4 before:right-4 before:left-4 before:-ml-px before:rounded-4xl before:bg-foreground before:opacity-[.07] after:absolute after:inset-y-4 after:right-4 after:left-4 after:-ml-px after:rounded-4xl after:border after:border-foreground/[.15] after:bg-[color-mix(in_oklch,_var(--color-background),_var(--color-foreground)_2%)] xl:ml-[275px] dark:after:opacity-[.59] [&.content--compact]:xl:ml-[110px]"
            :class="{
                'content--compact': isSidebarCollapsed && !isSidebarHovering,
                'content--mobile-menu-open': isSidebarMobileOpen,
            }">
            <div class="h-full overflow-x-hidden">
                <div class="content__scroll-area relative z-20 -mr-7 h-full overflow-y-auto pr-11 pl-4 transition-[margin] duration-200 xl:pl-0"
                    :class="{
                        '-ml-[165px]': isSidebarCollapsed && isSidebarHovering,
                    }">
                    <!-- Header -->
                    <Header :scrolled="isScrolled" :showNotifications="showNotifications"
                        :showProfileDropdown="showProfileDropdown" :showQuickSearch="showQuickSearch"
                        :search-shortcut-hint="searchShortcutHint" @open-mobile-menu="openMobileSidebar"
                        @toggle-sidebar-collapse="toggleSidebarCollapse"
                        @toggle-notifications="showNotifications = $event"
                        @toggle-quick-search="showQuickSearch = !showQuickSearch" @profile-action="handleProfileAction"
                        @open-search="openSearch" />
                    <!-- Quick Search Modal -->
                    <SearchModal :show="showSearchModal" @close="closeSearch" />


                    <!-- Main slot -->
                    <main class="p-6">
                        <slot />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>
