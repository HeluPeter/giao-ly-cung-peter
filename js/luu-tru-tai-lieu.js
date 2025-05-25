// Sample article data with enhanced properties
const articles = [
    {
        id: 1,
        title: "[CANVA] - Các ấn phẩm thiết kế nhân dịp sinh nhật 5 năm xứ đoàn",
        excerpt: "Các ấn phẩm thiết kế bao gồm: standee, hashtag cầm tay, cổng trại,...",
        content: `
            <h2 class="font-lora text-2xl font-bold mb-4">[CANVA] - Ấn Phẩm Thiết Kế Sinh Nhật 5 Năm Xứ Đoàn</h2>
            <p class="mb-4">Chặng đường 5 năm là cột mốc ý nghĩa đánh dấu sự trưởng thành và phát triển không ngừng của Xứ Đoàn Các Thánh Tử Đạo Việt Nam. Nhân dịp đặc biệt này, chúng tôi đã chuẩn bị một bộ ấn phẩm thiết kế độc đáo nhằm tôn vinh tinh thần hiệp nhất và niềm vui phục vụ.</p>
            <p class="mb-4">Các ấn phẩm bao gồm: standee chủ đề, hashtag cầm tay sống động, cổng trại sáng tạo cùng nhiều thiết kế phụ trợ khác – tất cả đều được chăm chút kỹ lưỡng để thể hiện rõ nét tinh thần và bản sắc riêng của xứ đoàn.</p>
            <h3 class="font-lora text-xl font-semibold my-3">Ý Tưởng Và Phong Cách Thiết Kế</h3>
            <p class="mb-4">Toàn bộ thiết kế lấy cảm hứng từ hành trình phục vụ và đức tin, kết hợp các gam màu tươi sáng, trẻ trung. Mỗi chi tiết nhỏ trong thiết kế đều mang một thông điệp: cùng nhìn lại quá khứ, sống trọn hiện tại và hướng về một tương lai vững vàng trong đức tin.</p>
            <p class="mb-4">Từ bản in lớn như standee và backdrop sân khấu, đến những chi tiết nhỏ như sticker hoặc bảng hashtag – mọi yếu tố đều góp phần tạo nên một bức tranh tổng thể hài hòa và đầy cảm xúc trong ngày hội 5 năm đáng nhớ.</p>
            <h3 class="font-lora text-xl font-semibold my-3">Sẵn Sàng Cho Ngày Hội</h3>
            <p>Dù bạn là người phụ trách trang trí, tổ chức trò chơi hay đơn giản là tham dự, hãy để những ấn phẩm này giúp bạn cảm nhận rõ hơn tinh thần của ngày mừng sinh nhật xứ đoàn – nơi gắn kết, yêu thương và cùng nhau phục vụ dưới ánh sáng đức tin.</p>
        `,
        wordFileUrl: "memories.docx",
        externalLink: "https://example.com/10-nam-mot-chang-duong",
        year: "2024",
        topics: ["canva", "5years"],
        hashtags: ["#anniversary", "#canva", "#design"],
        relatedLinks: [
            { title: "[DESIGN 5 NĂM] - STANDEE", href: "https://www.canva.com/design/DAGUpM4tQ9g/1InhE-9oQUMdUSd-7OKkpg/edit?utm_content=DAGUpM4tQ9g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
            { title: "[5 NĂM] - HASHTAG CẦM TAY", href: "https://www.canva.com/design/DAGVOxXrORM/_4nmPwQKVPXgzqJcC30SCA/edit?utm_content=DAGVOxXrORM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
        ]
    }
];

// Variables for pagination
let currentPage = 1;
const articlesPerPage = 10;
let filteredArticles = [...articles];
let totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

// Function to get badge for topic
function getBadgeForTopic(topic) {
    return `<span class="badge-${topic} text-xs px-2 py-0.5 rounded-sm font-medium">${topic}</span>`;
}

// Function to filter articles based on search, year, and topic
function filterArticles() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const yearFilter = document.getElementById('year-filter').value;
    const topicFilter = document.getElementById('topic-filter').value;
    
    filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) || 
                                article.excerpt.toLowerCase().includes(searchTerm) ||
                                article.content.toLowerCase().includes(searchTerm);
        
        const matchesYear = yearFilter === '' || article.year === yearFilter;
        
        const matchesTopic = topicFilter === '' || article.topics.includes(topicFilter);
        
        return matchesSearch && matchesYear && matchesTopic;
    });
    
    totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    currentPage = 1; // Reset to first page when filtering
    displayArticles();
}

// Function to display articles for the current page
function displayArticles() {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const currentArticles = filteredArticles.slice(startIndex, endIndex);
    
    const container = document.getElementById('search-results-container');
    container.innerHTML = '';
    
    if (currentArticles.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-warmGray/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 class="text-xl font-medium mt-4 mb-2 text-gray-700">No articles found</h3>
                <p class="text-warmGray">Try adjusting your search or filter criteria</p>
            </div>
        `;
        
        // Update pagination
        updatePagination();
        return;
    }
    
    currentArticles.forEach(article => {
        const result = document.createElement('div');
        result.className = 'search-result py-4 px-2 hover:bg-gray-50 rounded-lg';
        
        // Create badges HTML
        const badgesHtml = article.topics.map(topic => getBadgeForTopic(topic)).join(' ');
        
        result.innerHTML = `
            <div class="mb-1 flex items-center gap-2">
                <span class="text-xs text-warmGray">${article.year}</span>
                <div class="flex gap-1">${badgesHtml}</div>
            </div>
            <h3 class="text-lg font-medium mb-1">
                <a href="#" class="search-title article-link" data-id="${article.id}">${article.title}</a>
            </h3>
            <p class="text-sm text-warmGray mb-1">${article.excerpt}</p>
            <div class="flex items-center gap-4 text-xs text-warmGray mt-2">
                <span>${article.hashtags.join(' ')}</span>
            </div>
        `;
        
        container.appendChild(result);
    });
    
    // Update pagination
    updatePagination();
    
    // Add event listeners to article links
    document.querySelectorAll('.article-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const articleId = parseInt(this.getAttribute('data-id'));
            openArticleModal(articleId);
        });
    });
}

// Function to update pagination
function updatePagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    
    if (totalPages <= 1) {
        return;
    }
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = `pagination-btn w-9 h-9 rounded-full flex items-center justify-center ${currentPage === 1 ? 'text-warmGray/40' : 'text-warmGray hover:bg-lightGray'}`;
    prevButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    `;
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayArticles();
        }
    });
    paginationContainer.appendChild(prevButton);
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `pagination-btn w-9 h-9 rounded-full flex items-center justify-center ${i === currentPage ? 'pagination-active' : 'text-primary hover:bg-lightGray'}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayArticles();
        });
        paginationContainer.appendChild(pageButton);
    }
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = `pagination-btn w-9 h-9 rounded-full flex items-center justify-center ${currentPage === totalPages ? 'text-warmGray/40' : 'text-warmGray hover:bg-lightGray'}`;
    nextButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    `;
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayArticles();
        }
    });
    paginationContainer.appendChild(nextButton);
}

// Function to open article modal
function openArticleModal(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (!article) return;
    
    const modal = document.getElementById('article-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Create related links HTML
    const relatedLinksHtml = article.relatedLinks.map(link => 
        `<p><a href="${link.href}" target="_blank" class="text-primary hover:underline related-link">${link.title}</a></p>`
    ).join('');

    
    // Create modal content
    modalContent.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-sm text-warmGray">${article.year}</span>
                    ${article.topics.map(topic => getBadgeForTopic(topic)).join(' ')}
                </div>
                <h2 class="font-lora text-2xl font-bold text-gray-800">${article.title}</h2>
            </div>
            <button id="close-modal" class="text-warmGray hover:text-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        <div class="prose prose-gray max-w-none mb-6">
            ${article.content}
        </div>
        
        <div class="mt-6 pt-4 border-t border-border">
            <div class="flex flex-wrap gap-2 mb-4">
                ${article.hashtags.map(tag => 
                    `<span class="inline-block bg-lightGray text-gray-700 text-sm px-3 py-1 rounded-full">${tag}</span>`
                ).join('')}
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg mt-4">
                <p class="text-gray-700 mb-2">Các link thiết kế:</p>
                ${relatedLinksHtml}
                <p class="text-gray-600 mt-2">Tham khảo thêm <a href="${article.externalLink}" target="_blank" class="text-primary hover:underline">hoặc tải xuống</a> or <a href="${article.wordFileUrl}" class="text-primary hover:underline" download>tại đây</a>.</p>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.remove('opacity-0', 'invisible');
    document.body.style.overflow = 'hidden';
    
    // Add event listener to close button
    document.getElementById('close-modal').addEventListener('click', closeArticleModal);
    
    // Add event listeners to related links
    document.querySelectorAll('.related-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const relatedId = parseInt(this.getAttribute('data-id'));
            openArticleModal(relatedId);
        });
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeArticleModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeArticleModal();
        }
    });
}

// Function to close article modal
function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    modal.classList.add('opacity-0', 'invisible');
    document.body.style.overflow = '';
}

// Event listeners for search and filters
document.getElementById('search-input').addEventListener('input', filterArticles);
document.getElementById('year-filter').addEventListener('change', filterArticles);
document.getElementById('topic-filter').addEventListener('change', filterArticles);

// Event listeners for topic tag buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const topic = this.getAttribute('data-topic');
        document.getElementById('topic-filter').value = topic;
        
        // Update active state
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        filterArticles();
    });
});

// Initial display
displayArticles();