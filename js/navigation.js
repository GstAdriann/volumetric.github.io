document.addEventListener('DOMContentLoaded', function() {
    // Handle ALL clicks on data-target links (including table links)
    document.addEventListener('click', function(e) {
        // Check if the clicked element is an anchor tag with data-target
        const anchor = e.target.closest('a[data-target]');
        
        if (anchor) {
            e.preventDefault(); // This stops the URL from changing
            
            const targetId = anchor.getAttribute('data-target');
            const section = document.getElementById(targetId);
            
            if (section) {
                // Optional: Remove active class from all nav links
                document.querySelectorAll('a[data-target]').forEach(a => {
                    a.classList.remove('active');
                });
                // Add active class to clicked link
                anchor.classList.add('active');
                
                // Smooth scroll to section
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Optional: Update page title without hash
                document.title = `Volumetric`;
            }
        }
    });
});
