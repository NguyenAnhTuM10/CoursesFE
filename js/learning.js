/**
 * Fake API service to simulate fetching data from a server
 */
class ApiService {
    // Simulate API delay
    #delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Fetch learning paths from fake API
    async getLearningPaths() {
        // Simulate network delay
        await this.#delay(1000);
        
        // Return mock data
        return [
            {
                id: 1,
                title: "Lộ trình học Front-end",
                description: "Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.",
                imageUrl: "https://cdn.f8.net/images/frontend-path.png",
                detailUrl: "#"
            },
            {
                id: 2,
                title: "Lộ trình học Back-end",
                description: "Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.",
                imageUrl: "https://cdn.f8.net/images/backend-path.png",
                detailUrl: "#"
            }
        ];
    }

    // Additional method for future expansion
    async getCoursesByPath(pathId) {
        await this.#delay(800);
        
        const courses = {
            1: [
                { id: 1, title: "HTML, CSS từ Zero đến Hero", level: "Cơ bản" },
                { id: 2, title: "Responsive với Grid System", level: "Trung bình" },
                { id: 3, title: "JavaScript cơ bản", level: "Cơ bản" },
                { id: 4, title: "JavaScript nâng cao", level: "Nâng cao" },
                { id: 5, title: "ReactJS", level: "Trung bình" }
            ],
            2: [
                { id: 6, title: "Node.js cơ bản", level: "Cơ bản" },
                { id: 7, title: "Node.js & ExpressJS", level: "Trung bình" },
                { id: 8, title: "SQL cơ bản", level: "Cơ bản" },
                { id: 9, title: "MongoDB", level: "Trung bình" }
            ]
        };
        
        return courses[pathId] || [];
    }
}

/**
 * Main application controller
 */
class App {
    constructor() {
        this.apiService = new ApiService();
        this.init();
    }

    async init() {
        try {
            await this.loadLearningPaths();
            this.setupEventListeners();
        } catch (error) {
            this.handleError(error);
        }
    }

    async loadLearningPaths() {
        try {
            const learningPaths = await this.apiService.getLearningPaths();
            this.renderLearningPaths(learningPaths);
        } catch (error) {
            throw new Error('Failed to load learning paths');
        }
    }

    renderLearningPaths(paths) {
        const learningPathsContainer = document.getElementById('learning-paths');
        
        // Clear loading indicator
        learningPathsContainer.innerHTML = '';
        
        if (paths.length === 0) {
            learningPathsContainer.innerHTML = '<p class="no-data">Không có lộ trình học nào.</p>';
            return;
        }
        
        // Create path cards
        paths.forEach(path => {
            const pathCard = this.createPathCard(path);
            learningPathsContainer.appendChild(pathCard);
        });
    }

    createPathCard(path) {
        const card = document.createElement('div');
        card.className = 'path-card';
        card.dataset.pathId = path.id;
        
        // Safely handle missing image URLs
        const imageUrl = path.imageUrl || '/api/placeholder/120/120';
        
        card.innerHTML = `
            <div class="path-card-content">
                <div class="path-info">
                    <h2 class="path-title">${this.escapeHtml(path.title)}</h2>
                    <p class="path-description">${this.escapeHtml(path.description)}</p>
                    <a href="${this.escapeHtml(path.detailUrl)}" class="btn-view-details">XEM CHI TIẾT</a>
                </div>
                <div class="path-image">
                    <img src="${this.escapeHtml(imageUrl)}" alt="${this.escapeHtml(path.title)}">
                </div>
            </div>
        `;
        
        return card;
    }

    setupEventListeners() {
        // Example of event listener for future expansion
        document.querySelectorAll('.path-card').forEach(card => {
            card.addEventListener('click', (event) => {
                // Prevent navigation if clicking on the card but not on the button
                if (!event.target.closest('.btn-view-details')) {
                    event.preventDefault();
                    const pathId = card.dataset.pathId;
                    // Could expand card or show more details
                    console.log(`Card clicked: ${pathId}`);
                }
            });
        });
    }

    handleError(error) {
        console.error('Application error:', error);
        const learningPathsContainer = document.getElementById('learning-paths');
        learningPathsContainer.innerHTML = `
            <div class="error-message">
                <p>Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.</p>
                <button class="btn btn-primary retry-btn">Thử lại</button>
            </div>
        `;
        
        // Add retry button functionality
        const retryBtn = learningPathsContainer.querySelector('.retry-btn');
        if (retryBtn) {
            retryBtn.addEventListener('click', () => {
                learningPathsContainer.innerHTML = `
                    <div class="loading">
                        <div class="spinner"></div>
                        <p>Đang tải lộ trình học...</p>
                    </div>
                `;
                this.loadLearningPaths();
            });
        }
    }

    // Helper function to safely escape HTML content
    escapeHtml(unsafe) {
        if (typeof unsafe !== 'string') return '';
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});