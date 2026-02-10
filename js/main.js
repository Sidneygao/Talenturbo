(function () {
  // 更新公司名称
  function updateCompanyName() {
    if (!window.ExquisysI18n) return;
    
    var lang = window.ExquisysI18n.lang;
    
    // 更新页脚公司名称
    var footerNames = document.querySelectorAll('.footer-name');
    footerNames.forEach(function(el) {
      if (lang === 'en') {
        el.textContent = 'Talenturbo';
      } else {
        el.textContent = '北京玄码智创信息技术有限公司 · Talenturbo';
      }
    });
  }
  
  // 应用国际化
  function applyI18n() {
    if (!window.ExquisysI18n) return;
    
    var tr = window.ExquisysI18n.tr.bind(window.ExquisysI18n);
    var lang = window.ExquisysI18n.lang;
    
    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = tr(key);
      
      // 对于包含 HTML 的内容使用 innerHTML
      if (key === 'about.intro' || key === 'about.exec0.bio' || key === 'about.exec1.bio') {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });
    
    // 更新语言切换按钮
    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
      // 中文时显示 EN，英文时显示 CN
      langBtn.textContent = lang === 'zh' ? 'EN' : 'CN';
    }
    
    // 更新公司名称
    updateCompanyName();
  }

  // 暴露全局函数
  window.applyI18n = applyI18n;
  window.updateCompanyName = updateCompanyName;

  // 初始化模态框
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

  // 初始化动画
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

  // 初始化滚动效果
  function initScrollEffects() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    
    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // 初始化下拉菜单定位
  function initDropdownPosition() {
    var navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(function(item) {
      var dropdown = item.querySelector('.dropdown-menu');
      if (!dropdown) return;
      
      // 桌面端：将下拉菜单移到body下，避免被header的backdrop-filter限制
      var isMobile = window.innerWidth <= 768;
      
      if (!isMobile) {
        document.body.appendChild(dropdown);
        dropdown.setAttribute('data-desktop-mode', 'true');
      }
      
      function updatePosition() {
        if (window.innerWidth > 768 && dropdown.getAttribute('data-desktop-mode') === 'true') {
          var rect = item.getBoundingClientRect();
          dropdown.style.top = rect.bottom + 'px';
          dropdown.style.left = rect.left + 'px';
        }
      }
      
      item.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) {
          updatePosition();
          dropdown.classList.add('show');
        }
      });
      
      item.addEventListener('mouseleave', function() {
        if (window.innerWidth > 768) {
          dropdown.classList.remove('show');
        }
      });
      
      dropdown.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) {
          dropdown.classList.add('show');
        }
      });
      
      dropdown.addEventListener('mouseleave', function() {
        if (window.innerWidth > 768) {
          dropdown.classList.remove('show');
        }
      });
      
      window.addEventListener('scroll', function() {
        if (dropdown.classList.contains('show') && window.innerWidth > 768) {
          updatePosition();
        }
      });
      
      window.addEventListener('resize', function() {
        var nowMobile = window.innerWidth <= 768;
        var wasDesktop = dropdown.getAttribute('data-desktop-mode') === 'true';
        
        if (nowMobile && wasDesktop) {
          // 切换到移动端：将下拉菜单移回nav-item
          item.appendChild(dropdown);
          dropdown.removeAttribute('data-desktop-mode');
          dropdown.classList.remove('show');
          dropdown.style.top = '';
          dropdown.style.left = '';
        } else if (!nowMobile && !wasDesktop) {
          // 切换到桌面端：将下拉菜单移到body
          document.body.appendChild(dropdown);
          dropdown.setAttribute('data-desktop-mode', 'true');
        }
        
        if (!nowMobile) {
          updatePosition();
        }
      });
    });
  }
  
  // 初始化移动端菜单
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
    
    // 移动端下拉菜单切换
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
      var link = item.querySelector('a');
      if (link) {
        link.addEventListener('click', function(e) {
          // 如果有下拉菜单且在移动端，阻止默认跳转
          var dropdown = item.querySelector('.dropdown-menu');
          if (dropdown && window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            
            // 关闭其他展开的菜单
            navItems.forEach(function(otherItem) {
              if (otherItem !== item) {
                otherItem.classList.remove('mobile-open');
              }
            });
            
            // 切换当前菜单
            item.classList.toggle('mobile-open');
          }
        });
      }
    });
    
    // 点击下拉菜单项后关闭菜单
    nav.querySelectorAll('.dropdown-item').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        nav.classList.remove('mobile-menu-open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        // 关闭所有展开的下拉菜单
        navItems.forEach(function(item) {
          item.classList.remove('mobile-open');
        });
      });
    });
    
    // 点击直接链接后关闭菜单
    nav.querySelectorAll('.nav-main > a').forEach(function (link) {
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
      // 关闭所有展开的下拉菜单
      navItems.forEach(function(item) {
        item.classList.remove('mobile-open');
      });
    });
  }

  // 页面加载完成后初始化
  document.addEventListener('DOMContentLoaded', function () {
    // 应用国际化
    applyI18n();
    
    // 绑定语言切换按钮
    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        window.ExquisysI18n.toggleLang();
      });
    }
    
    // 初始化其他功能
    initBioModal();
    initAnimateIn();
    initMobileMenu();
    initScrollEffects();
    initDropdownPosition();
  });
})();
