<template>
    <div class="loading-area fixed-loader" :class="{ 'loader-hidden': !visible }">
        <div class="loading-box"></div>
        <div class="loading-pic">
            <div class="center-body">
                <div class="loader-circle-9">
                    Loading
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    visible: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped>
.fixed-loader {
    transition: opacity 0.35s ease;
}

.loader-hidden {
    opacity: 0;
    pointer-events: none;
}
</style>
