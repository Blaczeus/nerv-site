export function initPlugins() {
    return new Promise((resolve) => {
        if (typeof jQuery === 'undefined') {
            resolve();
            return;
        }

        if (window.runTemplatePlugins) window.runTemplatePlugins();

        jQuery(window)
            .off('scroll.template')
            .on('scroll.template', () => {
                window.runTemplateScrollPlugins?.();
            });

        // Window-load replacements: keep same delay as before,
        // but resolve the promise once done.
        setTimeout(() => {
            if (window.runTemplateLoadPlugins) window.runTemplateLoadPlugins();
            // allow any synchronous plugin init to run first, then finish
            setTimeout(() => resolve(), 80);
        }, 300);
    });
}
