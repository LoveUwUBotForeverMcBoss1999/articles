// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        try {
            navLinks.classList.toggle('active');
        } catch (error) {
            console.warn('Navigation toggle error:', error);
        }
    });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const articleCards = document.querySelectorAll('.article-card');

function searchArticles(query) {
    try {
        const searchString = query.toLowerCase();
        
        articleCards.forEach(card => {
            const title = card.querySelector('.article-title')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.article-excerpt')?.textContent.toLowerCase() || '';
            const category = card.querySelector('.article-category')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchString) || 
                excerpt.includes(searchString) || 
                category.includes(searchString)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    } catch (error) {
        console.warn('Search error:', error);
    }
}

if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
        searchArticles(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchArticles(searchInput.value);
        }
    });
}

// Category filters
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        try {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            
            articleCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        } catch (error) {
            console.warn('Filter error:', error);
        }
    });
});

// Newsletter form submission
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        try {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput) {
                const email = emailInput.value;
                alert(`Thank you for subscribing with: ${email}`);
                form.reset();
            }
        } catch (error) {
            console.warn('Newsletter submission error:', error);
        }
    });
});

// Add this to handle message port closure
window.addEventListener('unload', () => {
    // Cleanup any pending message ports
    try {
        if (window.chrome && chrome.runtime && chrome.runtime.connect) {
            const port = chrome.runtime.connect();
            if (port) {
                port.disconnect();
            }
        }
    } catch (error) {
        // Silently handle any cleanup errors
    }
});

// Add error event listener to handle runtime errors
window.addEventListener('error', (event) => {
    // Prevent the error from showing in console if it's a message port error
    if (event.message.includes('message port closed')) {
        event.preventDefault();
    }
});
