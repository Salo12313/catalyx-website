// ===================== AGE GATE PERSISTENCE =====================
// Once verified, the user doesn't see the gate again across pages
// until they clear browser data.

(function() {
  const GATE_KEY = 'catalyx_age_verified';
  const gate = document.getElementById('gate');
  if (!gate) return;

  if (localStorage.getItem(GATE_KEY) === 'true') {
    gate.style.display = 'none';
    return;
  }

  const checks = ['chk-age', 'chk-researcher'];
  const enterBtn = document.getElementById('enter-btn');
  if (!enterBtn) return;

  checks.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', () => {
      const allChecked = checks.every(c => {
        const cEl = document.getElementById(c);
        return cEl && cEl.checked;
      });
      enterBtn.disabled = !allChecked;
    });
  });

  enterBtn.addEventListener('click', () => {
    if (enterBtn.disabled) return;
    localStorage.setItem(GATE_KEY, 'true');
    gate.style.display = 'none';
  });
})();

// ===================== MOBILE NAV HAMBURGER =====================

(function() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const backdrop = document.getElementById('nav-backdrop');
  if (!toggle || !links) return;

  function closeMenu() {
    toggle.classList.remove('open');
    links.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    toggle.classList.add('open');
    links.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  toggle.addEventListener('click', () => {
    if (links.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking the backdrop
  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // Close menu when clicking any nav link
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on resize back to desktop
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 900) closeMenu();
    }, 100);
  });
})();
