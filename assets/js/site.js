/* Ziqi Li portfolio v3 · motion + small helpers.
   - Without JavaScript, or with "reduce motion" on, everything is already visible.
   - GSAP + ScrollTrigger + Lenis (loaded from a CDN only when motion is allowed) add smooth scroll,
     drawing on scroll and gentle parallax. If they fail to load, a plain IntersectionObserver takes over.
   动效：没有 JS 或开启"减少动态效果"时，所有内容直接可见。 */
(function () {
  'use strict';
  window.__zlReady = true;
  var d = document, h = d.documentElement;
  var motion = h.classList.contains('motion');

  /* year + menu */
  d.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  var btn = d.querySelector('.menu-btn'), nav = d.getElementById('site-nav');
  if (btn && nav) btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
  });
  var header = d.querySelector('.site-header');
  var onScroll = function () { if (header) header.classList.toggle('scrolled', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* reflection filter */
  var filters = d.querySelector('.filters');
  if (filters) {
    filters.hidden = false;
    var status = d.querySelector('.filter-status');
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('[data-filter]'); if (!b) return;
      filters.querySelectorAll('[data-filter]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var f = b.getAttribute('data-filter'), n = 0;
      d.querySelectorAll('.note').forEach(function (c) { var show = f === 'all' || c.getAttribute('data-course') === f; c.hidden = !show; if (show) n++; });
      if (status) status.textContent = n + ' reflection' + (n === 1 ? '' : 's') + ' shown';
    });
  }

  if (!motion) return;

  /* stagger index for each crayon stroke (so a doodle draws mark by mark) */
  d.querySelectorAll('[data-draw]').forEach(function (el) {
    var paths = el.querySelectorAll('.ln, .blk-ln');
    var step = Math.max(1, Math.round(paths.length / 60));
    paths.forEach(function (p, i) { p.style.setProperty('--k', Math.floor(i / step)); });
  });

  var targets = d.querySelectorAll('[data-reveal], [data-split], [data-draw], [data-media]');
  var show = function (el) { el.classList.add('in'); };

  /* hero marks draw right away · 首屏涂鸦立刻画出 */
  requestAnimationFrame(function () {
    d.querySelectorAll('.hero [data-draw], .phero [data-draw], .about-hero [data-draw], .hero [data-split], .phero [data-split], .about-hero [data-split]').forEach(show);
  });

  var G = window.gsap, ST = window.ScrollTrigger;
  if (G && ST) {
    G.registerPlugin(ST);
    if (window.Lenis) {
      var lenis = new window.Lenis({ lerp: 0.11, wheelMultiplier: 0.9 });
      lenis.on('scroll', ST.update);
      G.ticker.add(function (t) { lenis.raf(t * 1000); });
      G.ticker.lagSmoothing(0);
      d.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
          var id = a.getAttribute('href'); if (id.length < 2) return;
          var t = d.querySelector(id); if (!t) return;
          e.preventDefault(); lenis.scrollTo(t, { offset: -80 });
          if (id === '#main') t.focus({ preventScroll: true });
        });
      });
    }
    ST.batch(targets, { start: 'top 88%', once: true, onEnter: function (els) { els.forEach(show); } });

    /* the children strip draws itself as you scroll, and drifts sideways · 小人随滚动画出并横向漂移 */
    d.querySelectorAll('[data-strip]').forEach(function (strip) {
      var paths = strip.querySelectorAll('.ln');
      G.to(paths, { strokeDashoffset: 0, ease: 'none', stagger: { each: 0.02 },
        scrollTrigger: { trigger: strip, start: 'top 92%', end: 'bottom 35%', scrub: 0.6 } });
      G.fromTo(strip, { x: 0 }, { x: function () { return -Math.max(0, strip.offsetWidth - window.innerWidth) * 0.6; }, ease: 'none',
        scrollTrigger: { trigger: strip, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
    });

    /* gentle parallax · 轻微视差 */
    d.querySelectorAll('[data-speed]').forEach(function (el) {
      var s = parseFloat(el.getAttribute('data-speed')) || 0;
      G.to(el, { y: function () { return s * window.innerHeight * 1.4; }, ease: 'none',
        scrollTrigger: { trigger: el.closest('section, header') || el, start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
    });
    d.querySelectorAll('.dir-img-2, .area-img-2').forEach(function (el) {
      G.fromTo(el, { y: 40 }, { y: -40, ease: 'none', scrollTrigger: { trigger: el.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    window.addEventListener('load', function () { ST.refresh(); });
  } else {
    /* fallback without GSAP */
    d.querySelectorAll('[data-strip]').forEach(function (s) { s.setAttribute('data-draw', ''); });
    targets = d.querySelectorAll('[data-reveal], [data-split], [data-draw], [data-media]');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -10% 0px' });
      targets.forEach(function (t) { io.observe(t); });
    } else targets.forEach(show);
  }
})();
