(function () {
  function updateCompanyName() {
    var lang = window.ExquisysI18n && window.ExquisysI18n.lang;
    if (!lang) return;
    
    var footerNames = document.querySelectorAll('.footer-name');
    footerNames.forEach(function(el) {
      if (lang === 'en') {
        el.textContent = 'Talenturbo';
      } else {
        el.textContent = '北京玄码智创信息技术有限公司 · Talenturbo';
      }
    });
  }
  
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
    if (btn) {
      btn.textContent = window.ExquisysI18n.lang === 'zh' ? 'EN' : 'CN';
    }
    
    // 更新公司名称显示
    updateCompanyName();
  }

  window.applyI18n = applyI18n;
  window.updateCompanyName = updateCompanyName;

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
    // 应用国际化
    applyI18n();
    
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        window.ExquisysI18n.toggleLang();
      });
    }
    
    initBioModal();
    initAnimateIn();
    initMobileMenu();
    initScrollEffects();
  });
  
  function initScrollEffects() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
  
  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var nav = document.querySelector('.nav-main');
    
    if (!toggle || !nav) return;
    
    // 创建遮罩层
    var overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);
    
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle.classList.toggle('active');
      nav.classList.toggle('mobile-menu-open');
      overlay.classList.toggle('active');
      
      // 防止背景滚动
      if (nav.classList.contains('mobile-menu-open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // 点击菜单项后关闭菜单
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        nav.classList.remove('mobile-menu-open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // 点击遮罩关闭菜单
    overlay.addEventListener('click', function () {
      toggle.classList.remove('active');
      nav.classList.remove('mobile-menu-open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
})();
