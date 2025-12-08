export function initPlugins() {
    if (typeof jQuery === 'undefined') return;

    // Document-ready replacements
    if (window.runTemplatePlugins) window.runTemplatePlugins();

    // Window-load replacements
    setTimeout(() => {
        if (window.runTemplateLoadPlugins) window.runTemplateLoadPlugins();
    }, 300);

    // Scroll replacement
    if (window.runTemplateScrollPlugins) window.runTemplateScrollPlugins();

    // Rebind scroll listener for SPA
    jQuery(window)
        .off('scroll.template')
        .on('scroll.template', () => {
            if (window.runTemplateScrollPlugins) {
                window.runTemplateScrollPlugins();
            }
        });
}
