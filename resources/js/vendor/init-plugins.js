function nextFrame() {
    return new Promise((resolve) => {
        requestAnimationFrame(() => resolve());
    });
}

export async function initPlugins() {
    if (typeof jQuery === 'undefined') return;

    // Wait for a paint frame so Inertia/Vue DOM changes are committed.
    await nextFrame();

    window.runTemplatePlugins?.();
    window.runTemplateLoadPlugins?.();

    jQuery(window)
        .off('scroll.template')
        .on('scroll.template', () => {
            window.runTemplateScrollPlugins?.();
        });

    // Run once immediately so "scroll-state" plugins can set initial UI state.
    window.runTemplateScrollPlugins?.();
}
