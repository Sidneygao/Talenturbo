(function () {
  function applyI18n() {
    var tr = window.ExquisysI18n && window.ExquisysI18n.tr;
    if (!tr) return;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = tr(key);
      if (key === 'about.intro' || key === 'about.exec1.bio' || key === 'about.exec0.bio') {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });
    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = window.ExquisysI18n.lang === 'zh' ? 'EN' : '中文';
  }

  window.applyI18n = applyI18n;

  function initBioModal() {
    document.querySelectorAll('[data-bio-open]').forEach(function (openBtn) {
      var id = openBtn.getAttribute('data-bio-open');
      var modal = document.getElementById('bioModal' + id);
      if (!modal) return;
      openBtn.addEventListener('click', function () {
        modal.classList.add('bio-modal-visible');
        modal.setAttribute('aria-hidden', 'false');
      });
    });
    document.querySelectorAll('[data-bio-close]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var modal = btn.closest('.bio-modal');
        if (modal) {
          modal.classList.remove('bio-modal-visible');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    });
    document.querySelectorAll('.bio-modal').forEach(function (modal) {
modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('bio-modal-visible');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });
  }

  function initAnimateIn() {
    var els = document.querySelectorAll('.animate-in');
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyI18n();
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        window.ExquisysI18n.toggleLang();
      });
    }
    initBioModal();
    initAnimateIn();
  });
})();
