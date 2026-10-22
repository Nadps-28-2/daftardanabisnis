/**
 * QRIS PRAKTIS — INTERACTIVE JAVASCRIPT
 * Features: Mobile Drawer, Parallax, Active Nav, Interactive Checklist,
 * Copy Referral Code, FAQ Accordion, Back-to-Top, Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initNavbarDropdown();
  initHeroParallax();
  initSmoothScrollAndActiveNav();
  initInteractiveChecklist();
  initReferralCopy();
  initFaqAccordion();
  initScrollReveal();
  initBackToTop();
});

/* ==========================================================================
   1. STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  const heroSection = document.getElementById('beranda');
  if (!header) return;

  const handleScroll = () => {
    // When scrolled past hero section (accounting for header height)
    const heroHeight = heroSection ? (heroSection.offsetHeight - 80) : 400;
    if (window.scrollY >= heroHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER & MODAL
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('mobileDrawerClose');
  const navLinks = document.querySelectorAll('.mobile-nav-item, .mobile-drawer-footer a');

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.classList.add('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    const icon = toggleBtn.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = 'close';
    if (closeBtn) closeBtn.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.classList.remove('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    const icon = toggleBtn.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = 'menu';
    toggleBtn.focus();
  };

  // Toggle button click
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.contains('active');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  // Backdrop click
  backdrop.addEventListener('click', closeDrawer);

  // Close when clicking any nav link inside drawer
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Reset state when resizing to desktop viewport
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && drawer.classList.contains('active')) {
      closeDrawer();
    }
  }, { passive: true });
}

   2b. DESKTOP NAVBAR DROPDOWN ("Lainnya")
   ========================================================================== */
function initNavbarDropdown() {
  const dropdown = document.getElementById('navDropdown');
  const toggleBtn = document.getElementById('dropdownToggle');
  const dropdownLinks = document.querySelectorAll('.dropdown-item');

  if (!dropdown || !toggleBtn) return;

  const toggleDropdown = (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('open');
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const openDropdown = () => {
    dropdown.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDropdown = () => {
    dropdown.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', toggleDropdown);

  // Close when clicking any link inside dropdown
  dropdownLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDropdown();
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdown.classList.contains('open')) {
      closeDropdown();
      toggleBtn.focus();
    }
  });

  // Close on resize if below desktop breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth < 992 && dropdown.classList.contains('open')) {
      closeDropdown();
    }
  }, { passive: true });
}

/* ==========================================================================
   3. HERO PARALLAX BACKGROUND
   ========================================================================== */
function initHeroParallax() {
  const heroBg = document.getElementById('heroBg');
  const heroSection = document.getElementById('beranda');
  if (!heroBg || !heroSection) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    if (scrollY <= heroHeight + 100) {
      // Dynamic factor: subtle on mobile, pronounced on desktop
      const factor = window.innerWidth >= 768 ? 0.32 : 0.15;
      const offset = scrollY * factor;
      heroBg.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   4. SMOOTH SCROLL & ACTIVE NAVIGATION OBSERVER
   ========================================================================== */
function initSmoothScrollAndActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link:not(.dropdown-toggle)');
  const dropdownToggle = document.getElementById('dropdownToggle');
  const dropdownLinks = document.querySelectorAll('.dropdown-item');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item');

  if (!sections.length) return;

  const dropdownSectionIds = ['persiapan', 'panduan', 'faq'];
  // Active section observer
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');

        desktopLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });

        // Dropdown toggle & sub-items active state
        if (dropdownToggle) {
          if (dropdownSectionIds.includes(activeId)) {
            dropdownToggle.classList.add('active');
          } else {
            dropdownToggle.classList.remove('active');
          }
        }

        dropdownLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        mobileLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((sec) => observer.observe(sec));
}

/* ==========================================================================
   5. INTERACTIVE PREPARATION CHECKLIST
   ========================================================================== */
function initInteractiveChecklist() {
  const checklistItems = document.querySelectorAll('.checklist-item');
  const progressBar = document.getElementById('checklistProgressBar');
  const progressPercentText = document.getElementById('checklistProgressPercent');
  const progressCountText = document.getElementById('checklistProgressCount');
  const congratsBanner = document.getElementById('checklistCongrats');

  if (!checklistItems.length || !progressBar) return;

  const totalItems = checklistItems.length;

  const updateProgress = () => {
    const checkedCount = document.querySelectorAll('.checklist-item.checked').length;
    const percentage = Math.round((checkedCount / totalItems) * 100);

    progressBar.style.width = `${percentage}%`;
    if (progressPercentText) progressPercentText.textContent = `${percentage}%`;
    if (progressCountText) progressCountText.textContent = `${checkedCount} dari ${totalItems} Siap`;

    if (congratsBanner) {
      if (checkedCount === totalItems) {
        congratsBanner.classList.add('show');
      } else {
        congratsBanner.classList.remove('show');
      }
    }
  };

  checklistItems.forEach((item) => {
    // Click toggle
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      const isChecked = item.classList.contains('checked');
      item.setAttribute('aria-checked', isChecked ? 'true' : 'false');
      updateProgress();
    });

    // Keyboard support (Space/Enter)
    item.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        item.click();
      }
    });
  });

  // Initialize progress
  updateProgress();
}

/* ==========================================================================
   6. REFERRAL CODE COPY WITH FALLBACK
   ========================================================================== */
function initReferralCopy() {
  const copyBtn = document.getElementById('copyReferralBtn');
  const codeElement = document.getElementById('referralCode');

  if (!copyBtn || !codeElement) return;

  const codeText = codeElement.textContent.trim();
  const textSpan = copyBtn.querySelector('.btn-text');
  const iconSpan = copyBtn.querySelector('.material-symbols-outlined');

  const showSuccessFeedback = () => {
    copyBtn.classList.add('copied');
    if (textSpan) textSpan.textContent = 'Kode Berhasil Disalin! ✓';
    if (iconSpan) iconSpan.textContent = 'check_circle';

    setTimeout(() => {
      copyBtn.classList.remove('copied');
      if (textSpan) textSpan.textContent = 'Salin Kode Referral';
      if (iconSpan) iconSpan.textContent = 'content_copy';
    }, 3000);
  };

  const copyFallback = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showSuccessFeedback();
      } else {
        alert(`Gunakan kode referral: ${text}`);
      }
    } catch (err) {
      console.error('Fallback clipboard error:', err);
      alert(`Gunakan kode referral: ${text}`);
    }
    document.body.removeChild(textarea);
  };

  copyBtn.addEventListener('click', () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(codeText)
        .then(() => {
          showSuccessFeedback();
        })
        .catch((err) => {
          console.warn('Clipboard API error, trying fallback:', err);
          copyFallback(codeText);
        });
    } else {
      copyFallback(codeText);
    }
  });
}

/* ==========================================================================
   7. ACCESSIBLE FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question-btn');
    const pane = item.querySelector('.faq-answer-pane');

    if (!btn || !pane) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items for clean editorial accordion feel
      faqItems.forEach((other) => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-question-btn');
          const otherPane = other.querySelector('.faq-answer-pane');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherPane) otherPane.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        pane.style.maxHeight = null;
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        pane.style.maxHeight = `${pane.scrollHeight}px`;
      }
    });
  });
}

/* ==========================================================================
   8. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   9. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
