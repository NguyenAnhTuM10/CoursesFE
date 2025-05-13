// Configuration
const config = {
    // Site settings
    siteName: 'Fullstack.edu.vn Clone',
    siteDescription: 'Học Lập Trình Để Đi Làm',
    
    // API endpoints (can be replaced with real endpoints)
    apiEndpoints: {
        courses: '/api/courses',
        roadmaps: '/api/roadmaps',
        blogPosts: '/api/blog-posts',
    },
    
    // Dummy data for demonstration
    dummyData: {
        // Popular courses data
        courses: [
            {
                id: 1,
                title: 'HTML CSS Pro',
                image: 'https://fullstack.edu.vn/static/media/html-css.a73a3d36.png',
                instructor: 'Sơn Đặng',
                students: 12345,
                lessons: 18,
                price: 'Free',
                isFree: true,
                level: 'Cơ bản'
            },
            {
                id: 2,
                title: 'JavaScript Pro',
                image: 'https://fullstack.edu.vn/static/media/js.a38cd1a3.png',
                instructor: 'Sơn Đặng',
                students: 9876,
                lessons: 24,
                price: '1.299.000đ',
                isFree: false,
                level: 'Trung bình'
            },
            {
                id: 3,
                title: 'ReactJS Pro',
                image: 'https://fullstack.edu.vn/static/media/reactjs.c2c2adf5.png',
                instructor: 'Sơn Đặng',
                students: 7654,
                lessons: 30,
                price: '1.499.000đ',
                isFree: false,
                level: 'Nâng cao'
            },
            {
                id: 4,
                title: 'Node & ExpressJS Pro',
                image: 'https://fullstack.edu.vn/static/media/nodejs.10596863.png',
                instructor: 'Sơn Đặng',
                students: 5432,
                lessons: 28,
                price: '1.399.000đ',
                isFree: false,
                level: 'Nâng cao'
            },
            {
                id: 5,
                title: 'Responsive Web Design',
                image: 'https://fullstack.edu.vn/static/media/responsive.6d5fecc6.png',
                instructor: 'Sơn Đặng',
                students: 6789,
                lessons: 12,
                price: 'Free',
                isFree: true,
                level: 'Cơ bản'
            },
            {
                id: 6,
                title: 'Kiến Thức Nhập Môn IT',
                image: 'https://fullstack.edu.vn/static/media/basic.0976e105.png',
                instructor: 'Sơn Đặng',
                students: 15678,
                lessons: 15,
                price: 'Free',
                isFree: true,
                level: 'Cơ bản'
            }
        ],
        
        // Roadmaps data
        roadmaps: [
            {
                id: 1,
                title: 'Lộ trình học Front-end Developer',
                description: 'Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.',
                image: 'https://fullstack.edu.vn/static/media/frontend.61c5a0e2.png',
                courses: 6,
                duration: '6 tháng'
            },
            {
                id: 2,
                title: 'Lộ trình học Back-end Developer',
                description: 'Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu lộ trình học Back-end nhé.',
                image: 'https://fullstack.edu.vn/static/media/backend.c593e3a9.png',
                courses: 6,
                duration: '8 tháng'
            },
            {
                id: 3,
                title: 'Lộ trình học Mobile Developer',
                description: 'Lập trình viên Mobile là người phát triển các ứng dụng trên các thiết bị di động như điện thoại, máy tính bảng.',
                image: 'https://fullstack.edu.vn/static/media/mobile.5a1047a2.png',
                courses: 5,
                duration: '7 tháng'
            },
            {
                id: 4,
                title: 'Lộ trình DevOps Engineer',
                description: 'DevOps là một văn hóa làm việc kết hợp giữa kỹ sư phát triển phần mềm với bộ phận vận hành hệ thống nhằm mục đích rút ngắn vòng đời phát triển phần mềm.',
                image: 'https://fullstack.edu.vn/static/media/devops.afe7e01b.png',
                courses: 4,
                duration: '9 tháng'
            }
        ],
        
        // Blog posts data
        blogPosts: [
            {
                id: 1,
                title: 'Tôi đã học lập trình như thế nào?',
                excerpt: 'Câu chuyện về việc tôi đã học lập trình như thế nào và làm sao để có được công việc đầu tiên.',
                image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/1671/615436b218d0a.png',
                author: {
                    name: 'Sơn Đặng',
                    avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                },
                date: '12/10/2023',
                readTime: '15 phút đọc'
            },
            {
                id: 2,
                title: 'Ngành IT, học được gì để đi làm?',
                excerpt: 'Để theo ngành IT - Phần mềm cần học những gì? Và có thể làm được những công việc nào?...',
                image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/1355/6139fe28a9844.jpg',
                author: {
                    name: 'Sơn Đặng',
                    avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                },
                date: '05/09/2023',
                readTime: '12 phút đọc'
            },
            {
                id: 3,
                title: 'Làm sao để có thu nhập cao và đi xa hơn trong ngành IT?',
                excerpt: 'Học lập trình để đi làm, đa số các bạn đều hướng tới việc có thu nhập cao và thăng tiến. Vậy làm sao để có thể tiến xa hơn?',
                image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/1309/6153f692d366e.jpg',
                author: {
                    name: 'Sơn Đặng',
                    avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                },
                date: '28/08/2023',
                readTime: '10 phút đọc'
            },
            {
                id: 4,
                title: 'CSS flexbox toàn tập',
                excerpt: 'Tổng hợp các kiến thức về CSS flexbox từ cơ bản đến nâng cao...',
                image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f244d366e.jpg',
                author: {
                    name: 'Sơn Đặng',
                    avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                },
                date: '15/08/2023',
                readTime: '20 phút đọc'
            },
            {
                id: 5,
                title: 'Tạo dự án ReactJS với Webpack và Babel',
                excerpt: 'Hướng dẫn tạo dự án ReactJS với webpack và babel một cách chi tiết nhất...',
                image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615de64e40b17.jpg',
                author: {
                    name: 'Sơn Đặng',
                    avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                },
                date: '01/08/2023',
                readTime: '25 phút đọc'
            },
            {
                id: 6,
                title: 'Cách đưa code lên GitHub và tạo GitHub Pages',
                excerpt: 'Hướng dẫn cách để đưa code lên GitHub và tạo GitHub Pages đơn giản nhất...',
                image: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c6453456e.jpg',
                author: {
                    name: 'Sơn Đặng',
                    avatar: 'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                },
                date: '20/07/2023',
                readTime: '8 phút đọc'
            }
        ]
    }
};

// Utility functions
const utils = {
    // Format numbers with commas for better readability
    formatNumber: (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    
    // Truncate text if it's too long
    truncateText: (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    },
    
    // Debounce function for search
    debounce: (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }
};

// DOM Elements
const DOM = {
    popularCourses: document.getElementById('popularCourses'),
    roadmaps: document.getElementById('roadmaps'),
    blogPosts: document.getElementById('blogPosts'),
    searchInput: document.querySelector('.search-bar input'),
    mobileMenuBtn: document.querySelector('.mobile-menu-btn')
};

// Template generators
const templates = {
    // Generate HTML for a course card
    courseCard: (course) => {
        return `
            <div class="course-card">
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="course-info">
                    <h3 class="course-title">${course.title}</h3>
                    <div class="course-meta">
                        <span class="course-instructor">${course.instructor}</span>
                        <div class="course-level">${course.level}</div>
                    </div>
                    <div class="course-stats">
                        <span><i class="fas fa-user-graduate"></i> ${utils.formatNumber(course.students)}</span>
                        <span><i class="fas fa-book-open"></i> ${course.lessons} bài học</span>
                    </div>
                    <div class="course-price ${course.isFree ? 'free' : ''}">${course.price}</div>
                </div>
            </div>
        `;
    },
    
    // Generate HTML for a roadmap card
    roadmapCard: (roadmap) => {
        return `
            <div class="roadmap-card">
                <div class="roadmap-image">
                    <img src="${roadmap.image}" alt="${roadmap.title}">
                </div>
                <div class="roadmap-content">
                    <h3 class="roadmap-title">${roadmap.title}</h3>
                    <p class="roadmap-description">${utils.truncateText(roadmap.description, 100)}</p>
                    <div class="roadmap-stats">
                        <span><i class="fas fa-book"></i> ${roadmap.courses} khóa học</span>
                        <span><i class="fas fa-clock"></i> ${roadmap.duration}</span>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Generate HTML for a blog post card
    blogPostCard: (post) => {
        return `
            <div class="blog-post-card">
                <div class="blog-post-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="blog-post-info">
                    <h3 class="blog-post-title">${post.title}</h3>
                    <div class="blog-post-meta">
                        <div class="blog-post-author">
                            <img src="${post.author.avatar}" alt="${post.author.name}">
                            <span>${post.author.name}</span>
                        </div>
                        <div class="blog-post-date">${post.date}</div>
                    </div>
                    <p class="blog-post-excerpt">${post.excerpt}</p>
                </div>
            </div>
        `;
    }
};

// API Service (mock)
const apiService = {
    // Fetch courses (uses dummy data for demo)
    getCourses: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(config.dummyData.courses);
            }, 300);
        });
    },
    
    // Fetch roadmaps (uses dummy data for demo)
    getRoadmaps: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(config.dummyData.roadmaps);
            }, 300);
        });
    },
    
    // Fetch blog posts (uses dummy data for demo)
    getBlogPosts: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(config.dummyData.blogPosts);
            }, 300);
        });
    },
    
    // Search functionality (mock implementation)
    search: (query) => {
        return new Promise((resolve) => {
            const results = {
                courses: config.dummyData.courses.filter(course => 
                    course.title.toLowerCase().includes(query.toLowerCase())
                ),
                blogPosts: config.dummyData.blogPosts.filter(post => 
                    post.title.toLowerCase().includes(query.toLowerCase()) || 
                    post.excerpt.toLowerCase().includes(query.toLowerCase())
                )
            };
            
            setTimeout(() => {
                resolve(results);
            }, 300);
        });
    }
};

// App functionality
const app = {
    init: () => {
        // Initialize the application
        app.loadContent();
        app.attachEventListeners();
    },
    
    loadContent: async () => {
        try {
            // Load courses
            const courses = await apiService.getCourses();
            if (DOM.popularCourses) {
                DOM.popularCourses.innerHTML = courses
                    .slice(0, 6) // Show only first 6 courses
                    .map(templates.courseCard)
                    .join('');
            }
            
            // Load roadmaps
            const roadmaps = await apiService.getRoadmaps();
            if (DOM.roadmaps) {
                DOM.roadmaps.innerHTML = roadmaps
                    .map(templates.roadmapCard)
                    .join('');
            }
            
            // Load blog posts
            const blogPosts = await apiService.getBlogPosts();
            if (DOM.blogPosts) {
                DOM.blogPosts.innerHTML = blogPosts
                    .slice(0, 6) // Show only first 6 blog posts
                    .map(templates.blogPostCard)
                    .join('');
            }
        } catch (error) {
            console.error('Error loading content:', error);
        }
    },
    
    attachEventListeners: () => {
        // Search functionality
        if (DOM.searchInput) {
            DOM.searchInput.addEventListener('input', utils.debounce((e) => {
                const query = e.target.value.trim();
                if (query.length >= 2) {
                    app.handleSearch(query);
                }
            }, 500));
        }
        
        // Mobile menu toggle
        if (DOM.mobileMenuBtn) {
            DOM.mobileMenuBtn.addEventListener('click', app.toggleMobileMenu);
        }
        
        // Add window resize listener to handle mobile menu state
        window.addEventListener('resize', utils.debounce(() => {
            if (window.innerWidth > 768) {
                const mobileNav = document.querySelector('.nav-list.mobile-view');
                if (mobileNav) {
                    mobileNav.classList.remove('mobile-view');
                }
            }
        }, 200));
    },
    
    handleSearch: async (query) => {
        try {
            const results = await apiService.search(query);
            // Handle the search results (in a real implementation, this would update UI)
            console.log('Search results:', results);
            // This is where you would show search results in a dropdown or redirect to a search results page
        } catch (error) {
            console.error('Error searching:', error);
        }
    },
    
    toggleMobileMenu: () => {
        const navList = document.querySelector('.nav-list');
        navList.classList.toggle('mobile-view');
        
        // Add mobile styles if not already in CSS
        if (navList.classList.contains('mobile-view')) {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '66px';
            navList.style.left = '0';
            navList.style.right = '0';
            navList.style.backgroundColor = 'var(--white)';
            navList.style.padding = '16px';
            navList.style.boxShadow = '0 4px 6px var(--shadow-color)';
            navList.style.zIndex = '99';
        } else {
            navList.style = '';
        }
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', app.init);