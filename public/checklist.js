// Persists task-list checkbox state per page in localStorage.
// Activates on any <li> that contains an <input type="checkbox"> generated
// from GitHub-flavored markdown task lists.

(function () {
  const STORAGE_PREFIX = 'd4-playbook:';

  function pageKey() {
    return STORAGE_PREFIX + window.location.pathname.replace(/\/$/, '');
  }

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(pageKey()) || '{}');
    } catch (_) {
      return {};
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(pageKey(), JSON.stringify(state));
    } catch (_) { /* quota or private mode — ignore */ }
  }

  function checkboxKey(cb) {
    // Stable identifier: trimmed text of the parent <li>
    const li = cb.closest('li');
    if (!li) return null;
    return li.textContent.trim().slice(0, 200);
  }

  function init() {
    const checkboxes = document.querySelectorAll('.sl-markdown-content li input[type="checkbox"]');
    if (!checkboxes.length) return;

    const state = loadState();

    checkboxes.forEach((cb) => {
      // Re-enable the checkboxes (GFM renders them as disabled by default).
      cb.removeAttribute('disabled');
      cb.disabled = false;

      const key = checkboxKey(cb);
      if (key && state[key]) {
        cb.checked = true;
        cb.closest('li')?.classList.add('task-completed');
      }

      cb.addEventListener('change', () => {
        const k = checkboxKey(cb);
        if (!k) return;
        const cur = loadState();
        if (cb.checked) {
          cur[k] = true;
          cb.closest('li')?.classList.add('task-completed');
        } else {
          delete cur[k];
          cb.closest('li')?.classList.remove('task-completed');
        }
        saveState(cur);
      });
    });

    // Wire any reset buttons on the page
    document.querySelectorAll('[data-reset-progress]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!confirm('Clear all checked items on this page?')) return;
        localStorage.removeItem(pageKey());
        checkboxes.forEach((cb) => {
          cb.checked = false;
          cb.closest('li')?.classList.remove('task-completed');
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  // Re-run on Starlight client-side navigation
  document.addEventListener('astro:page-load', init);
})();
