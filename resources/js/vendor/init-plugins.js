export function initPlugins() {
    if (typeof jQuery === 'undefined') return;

    // Re-run your template’s jQuery init
    if (typeof av_home_bnr_1 === 'function') av_home_bnr_1();
    if (typeof av_home_bnr_2 === 'function') av_home_bnr_2();
    if (typeof av_home_bnr_3 === 'function') av_home_bnr_3();
    if (typeof av_testi_carousel === 'function') av_testi_carousel();
    if (typeof av_testi2_carousel === 'function') av_testi2_carousel();
    if (typeof av_blog_carousel === 'function') av_blog_carousel();
    if (typeof av_project_carousel === 'function') av_project_carousel();
    if (typeof kv_services2_carousel === 'function') kv_services2_carousel();
    if (typeof av_featured_carousel === 'function') av_featured_carousel();
    if (typeof counter_section === 'function') counter_section();
    if (typeof site_search === 'function') site_search();
    if (typeof video_responsive === 'function') video_responsive();
    if (typeof magnific_video === 'function') magnific_video();
    if (typeof popup_vertical_center === 'function') popup_vertical_center();
    if (typeof sticky_header === 'function') sticky_header();
    if (typeof sticky_sidebar === 'function') sticky_sidebar();
    if (typeof scroll_top === 'function') scroll_top();
    if (typeof placeholderSupport === 'function') placeholderSupport();
    if (typeof mobile_nav === 'function') mobile_nav();
    if (typeof mobile_side_drawer === 'function') mobile_side_drawer();
    if (typeof home_client_carousel === 'function') home_client_carousel();
    if (typeof wow_animation === 'function') wow_animation();
    if (typeof home_client_carousel_3 === 'function') home_client_carousel_3();

    // Window load group
    setTimeout(() => {
        if (typeof masonryBox === 'function') masonryBox();
        if (typeof color_fill_header === 'function') color_fill_header();
        if (typeof progress_bar_tooltips === 'function')
            progress_bar_tooltips();
        if (typeof progress_bar_width === 'function') progress_bar_width();
        if (typeof page_loader === 'function') page_loader();
    }, 300);
}
