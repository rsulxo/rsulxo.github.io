// Navigation handling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show target page
        document.getElementById(targetId).classList.add('active');
        
        // Update URL without page reload
        history.pushState(null, '', `#${targetId}`);
    });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const page = window.location.hash.substring(1) || 'home';
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    document.getElementById(page).classList.add('active');
});