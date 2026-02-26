/**
 * VIBRA - Event Detail Modal (version complète)
 * Galerie Swiper + infos événement
 */
(function() {

// ===== Injecter les styles directement (évite les problèmes d'import CSS) =====
var style = document.createElement('style');
style.textContent = '' +
  '#vibraModal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.82);z-index:99999;justify-content:center;align-items:center;padding:20px;}' +
  '#vibraModal.is-open{display:flex;}' +
  '#vibraBox{background:#fff;border-radius:20px;width:94vw;max-width:1500px;height:88vh;overflow:hidden;display:grid;grid-template-columns:1.3fr 1fr;position:relative;box-shadow:0 25px 60px rgba(0,0,0,0.4);}' +
  '#vibraClose{position:absolute;top:14px;right:14px;z-index:10;background:rgba(0,0,0,0.5);color:#fff;border:none;border-radius:50%;width:38px;height:38px;font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s;}' +
  '#vibraClose:hover{background:rgba(0,0,0,0.7);}' +
  '#vibraGallery{position:relative;background:#111;height:100%;overflow:hidden;}' +
  '#vibraGallery .swiper{width:100%;height:100%;}' +
  '#vibraGallery .swiper-slide{display:flex;align-items:center;justify-content:center;height:100%;}' +
  '#vibraGallery .swiper-slide img{width:100%;height:100%;object-fit:cover;}' +
  '#vibraGallery .swiper-button-prev,#vibraGallery .swiper-button-next{color:#fff;width:36px;height:36px;background:rgba(234,106,40,0.6);border-radius:50%;}' +
  '#vibraGallery .swiper-button-prev:hover,#vibraGallery .swiper-button-next:hover{background:#ea6a28;}' +
  '#vibraGallery .swiper-button-prev::after,#vibraGallery .swiper-button-next::after{font-size:14px;font-weight:bold;color:#fff;}' +
  '#vibraGallery .swiper-pagination{position:absolute;bottom:12px;left:0;width:100%;display:flex;justify-content:center;gap:4px;z-index:5;}' +
  '#vibraGallery .swiper-pagination-bullet{background:#fff;opacity:0.5;width:8px;height:8px;transition:all 0.2s ease;}' +
  '#vibraGallery .swiper-pagination-bullet-active{background:#ea6a28;opacity:1;width:22px;border-radius:4px;}' +
  '#vibraInfo{padding:36px;overflow-y:auto;height:100%;display:flex;flex-direction:column;}' +
  '#vibraCategory{display:inline-block;background:#ea6a28;color:#fff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;padding:5px 14px;border-radius:50px;margin-bottom:14px;width:fit-content;}' +
  '#vibraTitle{margin:0 0 6px;font-family:Archivo Black,sans-serif;font-size:28px;color:#0a0a0a;line-height:1.2;}' +
  '#vibraSubtitle{margin:0 0 18px;font-size:17px;color:#666;}' +
  '.vibra-meta{display:flex;gap:20px;margin-bottom:18px;}' +
  '.vibra-meta-item{display:flex;align-items:center;gap:6px;font-size:13px;color:#888;}' +
  '.vibra-meta-item svg{width:15px;height:15px;color:#ea6a28;flex-shrink:0;}' +
  '#vibraDivider{width:50px;height:3px;background:#ea6a28;border-radius:2px;margin-bottom:18px;}' +
  '#vibraDesc{margin:0 0 28px;font-size:15px;color:#555;line-height:1.7;flex:1;}' +
  '#vibraCta{display:inline-flex;align-items:center;gap:8px;background:#ea6a28;color:#fff;padding:13px 26px;border-radius:10px;text-decoration:none;font-weight:600;font-size:15px;width:fit-content;transition:background 0.2s;}' +
  '#vibraCta:hover{background:#d45a1a;color:#fff;}' +
  '@media(max-width:768px){' +
    '#vibraModal{padding:0;align-items:flex-end;}' +
    '#vibraBox{grid-template-columns:1fr;grid-template-rows:38% 1fr;width:100%;max-width:100%;height:95vh;border-radius:16px 16px 0 0;}' +
    '#vibraGallery{height:100%;min-height:0;}' +
    '#vibraInfo{padding:20px 20px 24px;height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch;}' +
    '#vibraDesc{font-size:13px;line-height:1.6;margin-bottom:16px;flex:0 0 auto;}' +
    '#vibraTitle{font-size:20px;}' +
    '#vibraSubtitle{font-size:14px;margin-bottom:12px;}' +
    '#vibraCategory{font-size:10px;padding:4px 10px;margin-bottom:10px;}' +
    '.vibra-meta{flex-direction:column;gap:8px;margin-bottom:12px;}' +
    '#vibraDivider{margin-bottom:12px;}' +
    '#vibraCta{width:100%;justify-content:center;padding:14px 20px;font-size:14px;border-radius:12px;}' +
    '#vibraClose{top:10px;right:10px;width:34px;height:34px;font-size:18px;background:rgba(0,0,0,0.6);}' +
    '#vibraGallery .swiper-button-prev,#vibraGallery .swiper-button-next{width:30px;height:30px;}' +
    '#vibraGallery .swiper-button-prev::after,#vibraGallery .swiper-button-next::after{font-size:11px;}' +
  '}' +
  '@media(max-width:480px){' +
    '#vibraBox{height:96vh;grid-template-rows:35% 1fr;border-radius:12px 12px 0 0;}' +
    '#vibraInfo{padding:16px 16px 20px;}' +
    '#vibraTitle{font-size:18px;}' +
    '#vibraSubtitle{font-size:13px;}' +
    '#vibraDesc{font-size:12px;}' +
    '#vibraCta{padding:12px 16px;font-size:13px;}' +
    '.vibra-meta-item{font-size:11px;}' +
  '}' +
  // "Voir plus" badge on clickable images (excluding portfolio)
  '.vibra-badge{position:absolute;bottom:14px;right:14px;z-index:3;display:flex;align-items:center;gap:5px;background:rgba(234,106,40,0.9);color:#fff;font-family:Inter,sans-serif;font-weight:600;font-size:12px;padding:6px 12px;border-radius:20px;cursor:pointer;opacity:0.85;transition:opacity 0.3s ease,transform 0.3s ease;backdrop-filter:blur(4px);box-shadow:0 2px 8px rgba(0,0,0,0.2);}' +
  '.vibra-badge svg{width:14px;height:14px;fill:none;stroke:#fff;stroke-width:2;}' +
  '[data-event-id]:hover .vibra-badge{opacity:1;transform:scale(1.05);}' +
  // Make entire slide clickable + fix Swiper pagination blocking bottom clicks
  '[data-event-id]{cursor:pointer;}' +
  '.swiper-pagination{pointer-events:none;}' +
  '.swiper-pagination-bullet{pointer-events:auto;}' +
  '@media(max-width:768px){.vibra-badge{font-size:11px;padding:5px 10px;bottom:10px;right:10px;}}';
document.head.appendChild(style);

// ===== Créer le DOM =====
var overlay = document.createElement('div');
overlay.id = 'vibraModal';

var box = document.createElement('div');
box.id = 'vibraBox';

var closeBtn = document.createElement('button');
closeBtn.id = 'vibraClose';
closeBtn.innerHTML = '&#10005;';
closeBtn.setAttribute('aria-label', 'Fermer');

// Galerie
var gallery = document.createElement('div');
gallery.id = 'vibraGallery';
gallery.innerHTML = '<div class="swiper vibra-swiper"><div class="swiper-wrapper" id="vibraSwiperWrap"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div><div class="swiper-pagination"></div></div>';

// Info panel
var info = document.createElement('div');
info.id = 'vibraInfo';
info.innerHTML =
  '<span id="vibraCategory"></span>' +
  '<h2 id="vibraTitle"></h2>' +
  '<p id="vibraSubtitle"></p>' +
  '<div class="vibra-meta">' +
    '<div class="vibra-meta-item">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
      '<span id="vibraLocation"></span>' +
    '</div>' +
    '<div class="vibra-meta-item">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' +
      '<span id="vibraDate"></span>' +
    '</div>' +
  '</div>' +
  '<div id="vibraDivider"></div>' +
  '<p id="vibraDesc"></p>' +
  '<a id="vibraCta" href="devis.html" data-i18n="modal.cta">Demander un devis similaire &#8594;</a>';

box.appendChild(closeBtn);
box.appendChild(gallery);
box.appendChild(info);
overlay.appendChild(box);

// ===== State =====
var modalSwiper = null;

// ===== Inject =====
function inject() {
  if (!document.body || document.getElementById('vibraModal')) return;
  document.body.appendChild(overlay);
  // Apply current language to modal CTA
  var lang = localStorage.getItem('vibra-lang') || 'fr';
  var T = window.VIBRA_TRANSLATIONS;
  if (T && T.modal && T.modal['modal.cta']) {
    var cta = document.getElementById('vibraCta');
    if (cta) cta.textContent = T.modal['modal.cta'][lang] + ' \u2192';
  }
}

// ===== Open =====
function openModal(eventId) {
  var allEvents = window.eventsData;
  if (!allEvents || !allEvents[eventId]) return;
  var data = allEvents[eventId];

  document.getElementById('vibraCategory').textContent = data.category;
  document.getElementById('vibraTitle').textContent = data.title;
  document.getElementById('vibraSubtitle').textContent = data.subtitle;
  document.getElementById('vibraLocation').textContent = data.location;
  document.getElementById('vibraDate').textContent = data.date;
  document.getElementById('vibraDesc').textContent = data.description;

  // Build slides
  var wrap = document.getElementById('vibraSwiperWrap');
  wrap.innerHTML = data.images.map(function(src) {
    return '<div class="swiper-slide"><img src="' + src + '" alt="' + data.title + '"></div>';
  }).join('');

  // Destroy old Swiper
  if (modalSwiper) {
    modalSwiper.destroy(true, true);
    modalSwiper = null;
  }

  // Show
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Init Swiper
  requestAnimationFrame(function() {
    if (typeof Swiper !== 'undefined') {
      modalSwiper = new Swiper('.vibra-swiper', {
        loop: data.images.length > 1,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          prevEl: '#vibraGallery .swiper-button-prev',
          nextEl: '#vibraGallery .swiper-button-next',
        },
        pagination: {
          el: '#vibraGallery .swiper-pagination',
          clickable: true,
        },
      });
    }
  });
}

// ===== Close =====
function closeModal() {
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
  if (modalSwiper) {
    modalSwiper.destroy(true, true);
    modalSwiper = null;
  }
}

// ===== Events =====
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', function(e) {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
});

// Click delegation
document.addEventListener('click', function(e) {
  var trigger = e.target.closest('[data-event-id]');
  if (!trigger) return;
  var swiperEl = trigger.closest('.swiper');
  if (swiperEl && swiperEl.swiper && swiperEl.swiper.animating) return;
  e.preventDefault();
  openModal(trigger.getAttribute('data-event-id'));
});

// ===== "Voir plus" badges on clickable images =====
function injectBadges() {
  // Skip portfolio page
  if (document.querySelector('.port-grid')) return;

  var lang = localStorage.getItem('vibra-lang') || 'fr';
  var label = lang === 'en' ? 'See more' : 'Voir plus';
  var svgIcon = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>';

  document.querySelectorAll('[data-event-id]').forEach(function(el) {
    // Skip if already has badge or if inside portfolio
    if (el.querySelector('.vibra-badge') || el.closest('.port-card')) return;
    // Ensure element has position for absolute badge
    var pos = window.getComputedStyle(el).position;
    if (pos === 'static') el.style.position = 'relative';

    var badge = document.createElement('span');
    badge.className = 'vibra-badge';
    badge.innerHTML = svgIcon + '<span>' + label + '</span>';
    el.appendChild(badge);
  });
}

// ===== Init =====
function initAll() {
  inject();
  injectBadges();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

window.openModal = openModal;
window.closeModal = closeModal;
})();
