/*
  main.js — navigation, grid building, lightbox, image protection
  ────────────────────────────────────────────────────────────────
  Depends on: data.js (must be loaded first)
*/

/* ── HELPERS ──────────────────────────────────────────── */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── STATE ────────────────────────────────────────────── */
let lbItems  = [];   // current lightbox image list
let lbIndex  = 0;    // current position

/* ── NAVIGATION ───────────────────────────────────────── */
function showView(name) {
  // Hide all views
  $$('.view').forEach(v => v.classList.remove('active'));
  // Show requested view
  const view = $(`#view-${name}`);
  if (view) view.classList.add('active');

  // Update nav active state (desktop + mobile)
  $$('#nav-links li, #mobile-menu li').forEach(li => {
    li.classList.toggle('active', li.dataset.view === name);
  });

  // Close mobile menu if open
  $('#mobile-menu').classList.remove('open');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Nav link clicks
$$('#nav-links li, #mobile-menu li').forEach(li => {
  li.addEventListener('click', () => {
    const target = li.dataset.view;
    if (target === 'portfolio') buildPortfolio();
    showView(target);
  });
});

// Back buttons and home-panel clicks (data-target attribute)
document.addEventListener('click', e => {
  const el = e.target.closest('[data-target]');
  if (!el) return;
  const target = el.dataset.target;
  if (target === 'portfolio') buildPortfolio();
  showView(target);
});

// Project row clicks
document.addEventListener('click', e => {
  const row = e.target.closest('.project-row');
  if (!row) return;
  openSeries(parseInt(row.dataset.series, 10));
});

// Hamburger
$('#hamburger').addEventListener('click', () => {
  $('#mobile-menu').classList.toggle('open');
});

/* ── METADATA INJECTION ───────────────────────────────── */
function injectMetadata() {
  // Project count
  const projectsCount = $('#projects-count');
  if (projectsCount) projectsCount.textContent = `${SITE.series.length} albums`;

  const list = document.getElementById('projects-list');
    SITE.series.forEach((s, i) => {
      list.innerHTML += `
        <div class="project-row" data-series="${i}">
          <div class="proj-cover">
            <img src="${s.cover}" alt="${s.title} cover" draggable="false" />
          </div>
          <div class="proj-meta">
            <div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          <div class="mf">${s.photos.length} photographs · ${s.year}</div>
        </div>
      </div>
    `;});
  // Per-series footer metadata
  SITE.series.forEach((s, i) => {
    const el = $(`#meta-${i}`);
    if (el) el.textContent = `${s.photos.length} photographs · ${s.year}`;
  });

  // Portfolio count
  const portfolioCount = $('#portfolio-count');
  if (portfolioCount) portfolioCount.textContent = `${SITE.portfolio.length} photographs`;
}

/* ── LAZY IMAGE LOADING ───────────────────────────────── */
function lazyLoad(container) {
  if (!('IntersectionObserver' in window)) {
    // Fallback: load everything immediately
    $$('img[data-src]', container).forEach(img => {
      img.src = img.dataset.src;
      delete img.dataset.src;
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      img.src = img.dataset.src;
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
      delete img.dataset.src;
      obs.unobserve(img);
    });
  }, { rootMargin: '200px 0px' });

  $$('img[data-src]', container).forEach(img => observer.observe(img));
}

/* ── SERIES VIEW ──────────────────────────────────────── */
function openSeries(idx) {
  const s = SITE.series[idx];
  lbContext = s.title;
  
  if (!s) return;

  $('#series-title').textContent = s.title;
  $('#series-cnt').textContent   = `${s.photos.length} photographs · ${s.year}`;

  const grid = $('#series-grid');
  grid.innerHTML = '';

  // Build lightbox items for this series
  // lbItems = s.photos.map(p => ({ src: p.lb || p.src, caption: p.caption }));
  lbItems = s.photos.map(p => ({ src: p.lb || p.src, caption: p.caption, date: p.date }));

  s.photos.forEach((photo, i) => {
    const item = document.createElement('div');
    item.className = 'g-item';
    item.innerHTML = `
      <img data-src="${photo.src}" alt="${photo.caption}" draggable="false" />
      <span class="inum">${String(i + 1).padStart(2, '0')}</span>
    `;
    item.addEventListener('click', () => openLB(i));
    grid.appendChild(item);
  });

  lazyLoad(grid);
  showView('series');
}

/* ── PORTFOLIO GRID ───────────────────────────────────── */
let portfolioBuilt = false;

function buildPortfolio() {
  lbContext = 'Portfolio';
  if (portfolioBuilt) return;
  portfolioBuilt = true;

  const grid = $('#portfolio-grid');
  grid.innerHTML = '';

  // lbItems = SITE.portfolio.map(p => ({ src: p.lb || p.src, caption: p.caption }));
  lbItems = SITE.portfolio.map(p => ({ src: p.lb || p.src, caption: p.caption, date: p.date }));

  SITE.portfolio.forEach((photo, i) => {
    const item = document.createElement('div');
    item.className = 'g-item';
    // should I add some reference to the date in <img data-src ... />??
    item.innerHTML = `
      <img data-src="${photo.src}" alt="${photo.caption}" draggable="false" /> 
      <span class="inum">${String(i + 1).padStart(2, '0')}</span>
    `;
    item.addEventListener('click', () => {
      // Rebuild lbItems in case series was opened in between
      lbItems = SITE.portfolio.map(p => ({ src: p.lb || p.src, caption: p.caption, date: p.date }));
      openLB(i);
    });
    grid.appendChild(item);
  });

  lazyLoad(grid);
}

/* ── LIGHTBOX ─────────────────────────────────────────── */
const lb         = $('#lb');
const lbImg      = $('#lb-img');
const lbCap      = $('#lb-cap');
const lbNum      = $('#lb-num');
const lbImgBox   = $('#lb-img-box');

function openLB(idx) {
  lbIndex = idx;
  renderLB();
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// function renderLB() {
//   const item = lbItems[lbIndex];
//   lbImg.src        = item.src;
//   lbImg.alt        = item.caption;
//   lbCap.textContent = item.caption;
//   lbNum.textContent = `${lbIndex + 1} / ${lbItems.length}`;
// }

// function renderLB() {
//   const item = lbItems[lbIndex];
//   lbImg.src = item.src;
//   lbImg.alt = item.caption;
//   lbCap.textContent = item.caption;
//   lbNum.textContent = `${lbIndex + 1} / ${lbItems.length}`;
//   lbImg.onload = () => {
//     const w = lbImg.offsetWidth;
//     const offset = (lbImgBox.offsetWidth - w) / 2;
//     document.getElementById('lb-prev').style.left = (offset - 52) + 'px';
//     document.getElementById('lb-next').style.right = (offset - 52) + 'px';
//   };
// }

function renderLB() {
  // console.log('renderLB called', lbItems[lbIndex]);
  const item = lbItems[lbIndex];
  // console.log('full item:', JSON.stringify(item));
  lbImg.src = '';
  lbImg.src = item.src;
  lbImg.alt = item.caption;
  lbCap.textContent = item.caption;
  lbNum.textContent = `${lbIndex + 1} / ${lbItems.length}`;
  document.getElementById('lb-context').textContent = lbContext;
  document.getElementById('lb-date').textContent = item.date || '';
  console.log(item.date);
  // lbImg.onload = () => {
  //   const w = lbImg.offsetWidth;
  //   const offset = (lbImgBox.offsetWidth - w) / 2;
  //   document.getElementById('lb-prev').style.left = (offset - 52) + 'px';
  //   document.getElementById('lb-next').style.right = (offset - 52) + 'px';
  // }; 
}


function navLB(dir) {
  lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
  renderLB();
}

function closeLB() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

$('#lb-close').addEventListener('click', closeLB);
$('#lb-backdrop').addEventListener('click', closeLB);
$('#lb-prev').addEventListener('click', () => navLB(-1));
$('#lb-next').addEventListener('click', () => navLB(1));

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'ArrowRight') navLB(1);
  if (e.key === 'ArrowLeft')  navLB(-1);
  if (e.key === 'Escape')     closeLB();
});

// Swipe support (touch devices)
let touchStartX = 0;
lbImgBox.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
lbImgBox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(dx) < 40) return;
  navLB(dx < 0 ? 1 : -1);
}, { passive: true });

/* ── IMAGE PROTECTION ─────────────────────────────────── */
/*
  NOTE: These measures raise the barrier for casual copying.
  They are NOT foolproof — a determined person can always
  take a screenshot or inspect network requests.
  The real protection for your work is legal (copyright law)
  and metadata (EXIF). See README.md for more information.
*/

// Disable right-click context menu sitewide
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  return false;
});

// Disable common keyboard shortcuts for saving / printing
document.addEventListener('keydown', e => {
  const ctrl = e.ctrlKey || e.metaKey;
  if (
    (ctrl && e.key === 's') ||   // Save
    (ctrl && e.key === 'p') ||   // Print
    (ctrl && e.key === 'u') ||   // View source
    e.key === 'F12'              // DevTools (partial deterrent only)
  ) {
    e.preventDefault();
  }
});

// Disable drag on all images (belt-and-suspenders with CSS)
document.addEventListener('dragstart', e => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});

// New function for authomatic hight
document.addEventListener('DOMContentLoaded', () => {
  function setNavHeight() {
    const navH = document.getElementById('nav').offsetHeight;
    const footH = document.querySelector('.footer').offsetHeight;
    document.documentElement.style.setProperty('--nav-height', navH + 'px');
    document.documentElement.style.setProperty('--footer-height', footH + 'px');
  }
  setNavHeight();
  window.addEventListener('resize', setNavHeight);
});

// Random home panel covers
// const projectCovers = SITE.series.map(s => s.cover || `pictures/${s.slug}/cover.jpg`);
// const portfolioPhotos = SITE.portfolio.map(p => p.src);


// const randomFrom = arr => arr[Math.floor(Math.random() * arr.length)];

// document.querySelector('.home-panel[data-target="projects"] .panel-img').src = randomFrom(projectCovers);
// document.querySelector('.home-panel[data-target="portfolio"] .panel-img').src = randomFrom(portfolioPhotos);
// ––––––––––––––––––––––––––––––––––––––


/* ── INIT ─────────────────────────────────────────────── */
injectMetadata();
showView('home');
