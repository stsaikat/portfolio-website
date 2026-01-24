// Function to include the sidebar in all pages
function includeSidebar() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Configure the request
    xhr.open('GET', '../src/templates/sidebar.html', true);
    
    // Set up the callback for when the request completes
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Create a temporary div to hold the response
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = this.responseText;
            
            // Get the sidebar container
            const sidebarRoot = document.getElementById('sidebar-root');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const sidebarOverlay = document.getElementById('sidebarOverlay');
            
            // Clear any existing content
            if (sidebarRoot) {
                while (sidebarRoot.firstChild) {
                    sidebarRoot.removeChild(sidebarRoot.firstChild);
                }
            }
            
            // Find the template in the response
            const template = tempDiv.querySelector('#sidebar-template');
            
            // If template exists, add it to the page
            if (template) {
                // Add the template to the document
                document.body.appendChild(template);
                
                // Initialize the sidebar
                initializeSidebar();
            }
            
            // Initialize Feather Icons
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }
    };
    
    // Send the request
    xhr.send();
}

// Call the function when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', includeSidebar);
} else {
    includeSidebar();
}
