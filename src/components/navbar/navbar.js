// Function to load the navigation bar
document.addEventListener('DOMContentLoaded', function() {
    // Create navbar element
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.innerHTML = `
        <div class="nav-container container">
            <a href="index.html" class="navbar-brand">Sunipun Talukder</a>
            <button class="mobile-menu-btn">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <div class="navbar-links">
                <a href="index.html" ${window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') ? 'class="active"' : ''}>Home</a>
                <a href="about.html" ${window.location.pathname.endsWith('about.html') ? 'class="active"' : ''}>About</a>
                <a href="projects.html" ${window.location.pathname.endsWith('projects.html') ? 'class="active"' : ''}>Projects</a>
                <a href="competitive_programming.html" ${window.location.pathname.endsWith('competitive_programming.html') ? 'class="active"' : ''}>CP</a>
                <a href="certifications.html" ${window.location.pathname.endsWith('certifications.html') ? 'class="active"' : ''}>Certifications</a>
                <a href="blogs.html" ${window.location.pathname.endsWith('blogs.html') ? 'class="active"' : ''}>Blogs</a>
            </div>
        </div>
    `;

    // Insert navbar at the beginning of the body
    document.body.insertBefore(navbar, document.body.firstChild);

    // Mobile menu toggle functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarLinks = document.querySelector('.navbar-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navbarLinks.classList.toggle('active');
        });
    }
});
