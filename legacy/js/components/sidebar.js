document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Set active page
  document.querySelectorAll('.sidebar__link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html') ||
        (linkPage !== '/' && currentPage.includes(linkPage.replace('.html', '')))) {
      link.classList.add('active');
    }
  });

  // Toggle sidebar on mobile
  function toggleSidebar() {
    document.body.classList.toggle('sidebar-open');
    sidebar.classList.toggle('sidebar--open');
    sidebarOverlay.classList.toggle('overlay--active');
    
    // Toggle aria-expanded for accessibility
    const isExpanded = sidebar.classList.contains('sidebar--open');
    mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
    
    // Toggle between menu and close icon
    const menuIcon = mobileMenuToggle.querySelector('i');
    if (isExpanded) {
      menuIcon.setAttribute('data-feather', 'x');
    } else {
      menuIcon.setAttribute('data-feather', 'menu');
    }
    feather.replace();
  }

  // Close sidebar when clicking outside on mobile
  function handleOutsideClick(e) {
    if (window.innerWidth < 1024 && 
        !sidebar.contains(e.target) && 
        !mobileMenuToggle.contains(e.target) &&
        sidebar.classList.contains('sidebar--open')) {
      toggleSidebar();
    }
  }

  // Event Listeners
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleSidebar);
  }
  
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', toggleSidebar);
  }
  
  document.addEventListener('click', handleOutsideClick);
  
  // Close sidebar when a link is clicked (for mobile)
  document.querySelectorAll('.sidebar__link').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 1024) {
        toggleSidebar();
      }
    });
  });
  
  // Handle sidebar toggle (for desktop)
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      if (window.innerWidth >= 1024) {
        sidebar.classList.toggle('sidebar--collapsed');
        document.body.classList.toggle('sidebar-collapsed');
        
        // Store preference in localStorage
        const isCollapsed = sidebar.classList.contains('sidebar--collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
      }
    });
  }
  
  // Check for saved sidebar state
  if (localStorage.getItem('sidebarCollapsed') === 'true' && window.innerWidth >= 1024) {
    sidebar.classList.add('sidebar--collapsed');
    document.body.classList.add('sidebar-collapsed');
  }
  
  // Update current year in footer
  const currentYear = document.getElementById('current-year');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
  
  // Initialize Feather Icons
  feather.replace();
});
