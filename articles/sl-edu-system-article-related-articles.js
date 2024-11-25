// Related Articles Population Script
document.addEventListener('DOMContentLoaded', function() {
    // Curated related articles specifically tailored to the Sri Lankan education system article
    /*const relatedArticles = [
        {
            title: "Education Reforms in South Asia",
            category: "Education Policy",
            link: "/articles/south-asian-education-reforms",
            date: "2024-11-20",
            excerpt: "Exploring recent educational policy changes and innovations across South Asian countries.",
            relevance: ["Regional Perspective", "Educational Policy"]
        },
        {
            title: "Free Education: A Global Comparative Study",
            category: "Education Accessibility",
            link: "/articles/free-education-global-study",
            date: "2024-11-15", 
            excerpt: "Analyzing the impact and implementation of free education policies worldwide, with a focus on developing nations.",
            relevance: ["Free Education", "Educational Accessibility"]
        },
        {
            title: "Technology Integration in Developing World Classrooms",
            category: "Educational Technology",
            link: "/articles/education-technology-developing-countries",
            date: "2024-11-10",
            excerpt: "Examining strategies for technological advancement in educational systems of emerging economies.",
            relevance: ["Modern Education", "Infrastructure Development"]
        },
        {
            title: "Literacy and Social Mobility in South Asia",
            category: "Socio-Economic Impact",
            link: "/articles/literacy-social-mobility-south-asia",
            date: "2024-11-05",
            excerpt: "Investigating the connection between education, literacy rates, and social advancement in South Asian countries.",
            relevance: ["Literacy", "Social Development"]
        }
    ];*/

    // Enhanced function to populate related articles with better organization
    const populateRelatedArticles = () => {
        const relatedArticlesContainer = document.querySelector('.related-articles');
        if (relatedArticlesContainer) {
            // Clear existing content
            relatedArticlesContainer.innerHTML = '';

            // Add title
            const title = document.createElement('h3');
            title.textContent = 'Explore Related Content';
            title.className = 'related-articles-title';
            relatedArticlesContainer.appendChild(title);

            const articlesList = document.createElement('div');
            articlesList.className = 'related-articles-grid';
            
            relatedArticles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'related-article-card';
                articleElement.innerHTML = `
                    <a href="${article.link}" class="related-article-link">
                        <div class="article-meta">
                            <span class="related-article-category">${article.category}</span>
                            <span class="related-article-date">${new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <h4 class="related-article-title">${article.title}</h4>
                        <p class="related-article-excerpt">${article.excerpt}</p>
                        <div class="article-relevance-tags">
                            ${article.relevance.map(tag => `<span class="relevance-tag">${tag}</span>`).join('')}
                        </div>
                    </a>
                `;
                articlesList.appendChild(articleElement);
            });

            relatedArticlesContainer.appendChild(articlesList);
        }
    };

    // Call the function to populate related articles
    populateRelatedArticles();
});