// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const articleCards = document.querySelectorAll('.article-card');

function searchArticles(query) {
    const searchString = query.toLowerCase();
    
    articleCards.forEach(card => {
        const title = card.querySelector('.article-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.article-excerpt').textContent.toLowerCase();
        const category = card.querySelector('.article-category').textContent.toLowerCase();
        
        if (title.includes(searchString) || 
            excerpt.includes(searchString) || 
            category.includes(searchString)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
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
    });
});

// Newsletter form submission
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with: ${email}`);
        form.reset();
    });
});

