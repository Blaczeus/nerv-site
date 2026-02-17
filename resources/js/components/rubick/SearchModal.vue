<script setup lang="ts">
import {
  Search,
  Users2,
  Building2,
} from 'lucide-vue-next'

const assets = (path: string) => `/assets/images/rubick/${path}`

defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

</script>

<template>
  <!-- BEGIN: Quick Search Modal -->
  <div data-tw-backdrop id="quick-search-modal" class="modal group bg-black/60 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0
         [&:not(.show)]:duration-[0s,0.2s]
         [&:not(.show)]:delay-[0.2s,0s]
         [&:not(.show)]:invisible
         [&:not(.show)]:opacity-0
         [&.show]:visible
         [&.show]:opacity-100
         [&.show]:duration-[0s,0.4s]" :class="{ show }" @click.self="emit('close')">
    <div class="box relative before:absolute before:inset-0 before:mx-3 before:-mb-3 before:border
           before:border-foreground/10 before:z-[-1]
           after:absolute after:inset-0 after:border after:border-foreground/10 after:bg-background
           after:shadow-[0px_3px_5px_#0000000b] after:z-[-1] after:backdrop-blur-md
           before:bg-background/60 dark:before:shadow-background before:shadow-foreground/60
           z-50 mx-auto -mt-16 p-6 transition-[margin-top,transform]
           duration-[0.4s,0.3s]
           before:rounded-3xl before:shadow-2xl after:rounded-3xl
           group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] sm:max-w-2xl">
      <div class="-mx-5 -mt-5">

        <!-- Search Input -->
        <div class="relative border-b border-dashed">
          <Search class="size-4 stroke-[1.5] absolute inset-y-0 my-auto ml-4
                 [--color:currentColor] stroke-(--color) fill-(--color)/25" />

          <input type="text" placeholder="Quick search..." class="rounded-md border px-3 py-2 ring-offset-background
                 file:border-0 file:bg-transparent file:font-medium file:text-foreground
                 placeholder:text-foreground/70 focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-offset-2
                 disabled:cursor-not-allowed disabled:opacity-50
                 w-full pl-12 bg-transparent border-none pr-19 h-14
                 focus:ring-offset-transparent focus-visible:ring-transparent" />

          <div class="absolute inset-y-0 right-0 flex items-center h-6 px-2 my-auto mr-4 border rounded-lg">
            esc
          </div>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-2 px-5 mt-4">
          <a href="#" class="hover:bg-foreground/5 flex items-center gap-x-1.5 rounded-full border px-3 py-0.5">
            <Users2 class="size-4 stroke-[1.5]
                   [--color:currentColor] stroke-(--color) fill-(--color)/25" />
            Users
          </a>
        </div>

        <!-- Users -->
        <div class="px-5 py-4">
          <div class="flex items-center">
            <div class="text-xs uppercase opacity-70">Users</div>
            <a href="#" class="ml-auto text-xs opacity-70">See All</a>
          </div>

          <div class="mt-3.5 flex flex-col gap-1">
            <a href="#" class="hover:border-foreground/10 hover:bg-foreground/5 -mx-1
                   flex items-center gap-2.5 rounded-xl border border-transparent p-1">
              <span class="tooltip border-(--color)/5 block relative flex-none overflow-hidden
                     rounded-full border-3 ring-1 ring-(--color)/25
                     [--color:var(--color-primary)] size-8">
                <img class="absolute top-0 size-full object-cover" :src="assets('fakers/profile-4.jpg')" alt="User" />
              </span>

              <div class="font-medium truncate">Tom Cruise</div>
              <div class="hidden opacity-70 sm:block">Frontend Engineer</div>
            </a>
          </div>
        </div>

        <!-- Departments -->
        <div class="px-5 py-4 border-t border-dashed">
          <div class="flex items-center">
            <div class="text-xs uppercase opacity-70">Departments</div>
            <a href="#" class="ml-auto text-xs opacity-70">See All</a>
          </div>

          <div class="mt-3.5 flex flex-col gap-1">
            <a href="#" class="hover:border-foreground/10 hover:bg-foreground/5 -mx-1
                   flex items-center gap-2.5 rounded-xl border border-transparent p-1">
              <div class="flex items-center justify-center overflow-hidden border rounded-lg
                     border-primary/10 bg-primary/10 text-primary size-8">
                <Building2 class="size-4 stroke-1
                       [--color:currentColor] stroke-(--color) fill-(--color)/25" />
              </div>

              <div class="font-medium truncate">Engineering</div>
              <div class="hidden opacity-70 sm:block">Tech Department</div>
            </a>
          </div>
        </div>

        <!-- Products -->
        <div class="px-5 py-4 border-t border-dashed">
          <div class="flex items-center">
            <div class="text-xs uppercase opacity-70">Products</div>
            <a href="#" class="ml-auto text-xs opacity-70">See All</a>
          </div>

          <div class="mt-3.5 flex flex-col gap-1">
            <a href="#" class="hover:border-foreground/10 hover:bg-foreground/5 -mx-1
                   flex items-center gap-2.5 rounded-xl border border-transparent p-1">
              <span class="tooltip border-(--color)/5 block relative flex-none overflow-hidden
                     rounded-full border-3 ring-1 ring-(--color)/25
                     [--color:var(--color-primary)] size-8">
                <img class="absolute top-0 size-full object-cover" :src="assets('fakers/preview-11.jpg')"
                  alt="Product" />
              </span>

              <div class="font-medium truncate">Fried Banana</div>
              <div class="hidden opacity-70 sm:block">Photography</div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- END: Quick Search Modal -->
</template>
