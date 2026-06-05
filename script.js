// ===================== AGE GATE PERSISTENCE =====================
// Once verified, the user doesn't see the gate again across pages
// until they clear browser data.

(function() {
  const GATE_KEY = 'catalyx_age_verified';
  const gate = document.getElementById('gate');
  if (!gate) return;

  // If already verified, hide the gate immediately
  if (localStorage.getItem(GATE_KEY) === 'true') {
    gate.style.display = 'none';
    return;
  }

  // Otherwise wire up the checkboxes and enter button
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
