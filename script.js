 const backToTopBtn = document.getElementById('backToTopBtn');

    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    };

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }


  


    // Elements
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const menuToggleBtn = document.getElementById('menuToggle');
    const stickyInputWrap = document.getElementById('stickyInputWrap');
    const dropdowns = navMenu.querySelectorAll('.dropdown > .dropdown-toggle');

    // Open/Close menu (mobile)
    menuToggleBtn.addEventListener('click', function() {
      const isOpen = navMenu.classList.contains('open');
      if (!isOpen) {
        navMenu.classList.add('open');
        navOverlay.classList.add('active');
        menuToggleBtn.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        navMenu.classList.remove('open');
        navOverlay.classList.remove('active');
        menuToggleBtn.classList.remove('open');
        document.body.style.overflow = '';
        navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
      }
    });

    navOverlay.addEventListener('click', function() {
      navMenu.classList.remove('open');
      navOverlay.classList.remove('active');
      menuToggleBtn.classList.remove('open');
      document.body.style.overflow = '';
      navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
    });

    // Close menu on outside click (for mobile)
    document.addEventListener('mousedown', function(e) {
      if (window.innerWidth < 900 && navMenu.classList.contains('open')) {
        if (!navMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
          navMenu.classList.remove('open');
          navOverlay.classList.remove('active');
          menuToggleBtn.classList.remove('open');
          document.body.style.overflow = '';
          navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
        }
      }
    });

    // Dropdown toggle
    dropdowns.forEach(drop => {
      drop.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        const isOpen = parent.classList.contains('open');
        navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
        if (!isOpen) parent.classList.add('open');
      });
    });

    // Close dropdowns when clicking outside (desktop)
    document.addEventListener('mousedown', function(e) {
      if (window.innerWidth >= 900) {
        navMenu.querySelectorAll('.dropdown').forEach(dd => {
          if (!dd.contains(e.target)) dd.classList.remove('open');
        });
      }
    });

    // Ensure sticky input is always below nav and dropdown
    function adjustStickyInput() {
      let offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
      // Only add dropdown height on mobile (where dropdown pushes content)
      if (window.innerWidth < 900) {
        const openDropdown = navMenu.querySelector('.dropdown.open .dropdown-content');
        if (openDropdown) {
          offset += openDropdown.offsetHeight;
        }
      }
      stickyInputWrap.style.top = offset + 'px';
    }
    navMenu.addEventListener('transitionend', adjustStickyInput);
    window.addEventListener('resize', adjustStickyInput);
    navMenu.addEventListener('click', adjustStickyInput);
    adjustStickyInput();

