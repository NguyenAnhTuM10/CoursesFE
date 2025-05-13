
      // Configuration object
      const config = {
        site: {
          title: "Fullstack Blog Clone",
          name: "Blog",
          logoUrl: "/api/placeholder/120/40",
          logoAlt: "Fullstack Logo",
        },
        blog: {
          title: "Blog Học Lập Trình",
          description: "Kiến thức miễn phí cho cộng đồng công nghệ Việt Nam",
          searchPlaceholder: "Tìm kiếm bài viết...",
        },
        auth: {
          loginText: "Đăng nhập",
          registerText: "Đăng ký",
          loginUrl: "#",
          registerUrl: "#",
        },
        filters: [
          { id: "all", text: "Tất cả bài viết", active: true },
          { id: "frontend", text: "Front-end", active: false },
          { id: "backend", text: "Back-end", active: false },
          { id: "uiux", text: "UI/UX", active: false },
          { id: "devops", text: "DevOps", active: false },
          { id: "react", text: "React", active: false },
          { id: "javascript", text: "JavaScript", active: false },
          { id: "nodejs", text: "NodeJS", active: false },
          { id: "php", text: "PHP", active: false },
        ],
        posts: [
          {
            id: 1,
            title: "Học Flexbox CSS qua ví dụ thực tế",
            thumbnail: "/api/placeholder/400/225",
            author: {
              name: "Sơn Đặng",
              avatar: "/api/placeholder/24/24",
            },
            date: "5 ngày trước",
            excerpt:
              "Flexbox là một module của CSS giúp bạn thiết kế layout linh hoạt mà không cần phải sử dụng float hay position. Trong bài viết này, chúng ta sẽ tìm hiểu về cách sử dụng Flexbox thông qua các ví dụ thực tế.",
            views: "1.5k",
            comments: "24",
            categories: ["frontend", "css"],
          },
          {
            id: 2,
            title: "Cách tạo REST API với Express và MongoDB",
            thumbnail: "/api/placeholder/400/225",
            author: {
              name: "Minh Thảo",
              avatar: "/api/placeholder/24/24",
            },
            date: "1 tuần trước",
            excerpt:
              "REST API là một phần không thể thiếu trong phát triển web hiện đại. Trong bài viết này, bạn sẽ học cách tạo một REST API đơn giản sử dụng Express.js và MongoDB.",
            views: "982",
            comments: "18",
            categories: ["backend", "nodejs", "mongodb"],
          },
          {
            id: 3,
            title: "10 thủ thuật JavaScript giúp code ngắn gọn hơn",
            thumbnail: "/api/placeholder/400/225",
            author: {
              name: "Hà Anh",
              avatar: "/api/placeholder/24/24",
            },
            date: "2 tuần trước",
            excerpt:
              "JavaScript là ngôn ngữ phổ biến nhất hiện nay và có rất nhiều cách để làm cho code của bạn ngắn gọn, dễ đọc hơn. Trong bài viết này, chúng ta sẽ khám phá 10 thủ thuật giúp code JavaScript của bạn trở nên tối ưu hơn.",
            views: "2.1k",
            comments: "36",
            categories: ["frontend", "javascript"],
          },
          {
            id: 4,
            title: "Hiểu về React Hooks một cách đơn giản",
            thumbnail: "/api/placeholder/400/225",
            author: {
              name: "Sơn Đặng",
              avatar: "/api/placeholder/24/24",
            },
            date: "3 tuần trước",
            excerpt:
              "React Hooks được giới thiệu từ phiên bản 16.8.0 và đã thay đổi cách chúng ta viết components trong React. Bài viết này sẽ giúp bạn hiểu một cách đơn giản về React Hooks và cách áp dụng chúng vào dự án của mình.",
            views: "1.8k",
            comments: "29",
            categories: ["frontend", "react", "javascript"],
          },
          {
            id: 5,
            title: "Xây dựng ứng dụng Todo List với React và Redux",
            thumbnail: "/api/placeholder/400/225",
            author: {
              name: "Trung Quân",
              avatar: "/api/placeholder/24/24",
            },
            date: "1 tháng trước",
            excerpt:
              "Redux là một thư viện quản lý trạng thái phổ biến trong ứng dụng React. Trong bài viết này, chúng ta sẽ xây dựng một ứng dụng Todo List đơn giản sử dụng React và Redux từ đầu đến cuối.",
            views: "1.2k",
            comments: "22",
            categories: ["frontend", "react", "redux"],
          },
          {
            id: 6,
            title: "Thiết kế UI/UX hiệu quả cho ứng dụng mobile",
            thumbnail: "/api/placeholder/400/225",
            author: {
              name: "Hồng Anh",
              avatar: "/api/placeholder/24/24",
            },
            date: "1 tháng trước",
            excerpt:
              "UI/UX đóng vai trò quan trọng trong việc tạo ra trải nghiệm người dùng tốt trên ứng dụng mobile. Trong bài viết này, chúng ta sẽ tìm hiểu các nguyên tắc thiết kế UI/UX hiệu quả cho ứng dụng di động.",
            views: "956",
            comments: "17",
            categories: ["uiux", "mobile"],
          },
        ],
      };

      // Initialize the page
      function initPage() {
        // Set page title
        document.getElementById("page-title").textContent = config.site.title;

        // Set site info
        document.getElementById("logo-image").src = config.site.logoUrl;
        document.getElementById("logo-image").alt = config.site.logoAlt;
        document.getElementById("site-name").textContent = config.site.name;

        // Set blog info
        document.getElementById("blog-title").textContent = config.blog.title;
        document.getElementById("blog-description").textContent =
          config.blog.description;
        document.getElementById("search-input").placeholder =
          config.blog.searchPlaceholder;

        // Set auth links
        document.getElementById("login-link").textContent =
          config.auth.loginText;
        document.getElementById("login-link").href = config.auth.loginUrl;
        document.getElementById("register-link").textContent =
          config.auth.registerText;
        document.getElementById("register-link").href = config.auth.registerUrl;

        // Render filters
        renderFilters();

        // Render posts
        renderPosts();
      }

      // Render filter items
      function renderFilters() {
        const filterContainer = document.getElementById("filter-container");
        filterContainer.innerHTML = "";

        config.filters.forEach((filter) => {
          const filterItem = document.createElement("div");
          filterItem.className = `filter-item${filter.active ? " active" : ""}`;
          filterItem.dataset.id = filter.id;
          filterItem.textContent = filter.text;

          // Add event listener
          filterItem.addEventListener("click", () => {
            // Update active state
            config.filters.forEach((f) => (f.active = false));
            filter.active = true;

            // Re-render filters
            renderFilters();

            // Filter posts
            filterPosts(filter.id);
          });

          filterContainer.appendChild(filterItem);
        });
      }

      // Filter posts based on category
      function filterPosts(filterId) {
        const postItems = document.querySelectorAll(".post-card");

        if (filterId === "all") {
          // Show all posts
          postItems.forEach((post) => {
            post.style.display = "block";
          });
        } else {
          // Show only posts with matching category
          postItems.forEach((post) => {
            const categories = post.dataset.categories.split(",");
            if (categories.includes(filterId)) {
              post.style.display = "block";
            } else {
              post.style.display = "none";
            }
          });
        }
      }

      // Render post items
      function renderPosts() {
        const postsGrid = document.getElementById("posts-grid");
        postsGrid.innerHTML = "";

        config.posts.forEach((post) => {
          const postCard = document.createElement("div");
          postCard.className = "post-card";
          postCard.dataset.id = post.id;
          postCard.dataset.categories = post.categories.join(",");

          postCard.innerHTML = `
            <div class="post-thumbnail">
              <img src="${post.thumbnail}" alt="${post.title}" />
            </div>
            <div class="post-content">
              <h3 class="post-title">${post.title}</h3>
              <div class="post-meta">
                <img
                  src="${post.author.avatar}"
                  alt="${post.author.name}"
                  class="author-avatar" />
                <span class="author-name">${post.author.name}</span>
                <span class="post-date">${post.date}</span>
              </div>
              <p class="post-excerpt">${post.excerpt}</p>
              <div class="post-stats">
                <div class="stat-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>${post.views}</span>
                </div>
                <div class="stat-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <span>${post.comments}</span>
                </div>
              </div>
            </div>
          `;

          postsGrid.appendChild(postCard);
        });
      }

      // Initialize the app when the document is ready
      document.addEventListener("DOMContentLoaded", initPage);

      // Additional functionality for search
      document
        .getElementById("search-input")
        .addEventListener("input", function (e) {
          const searchTerm = e.target.value.toLowerCase();
          const postItems = document.querySelectorAll(".post-card");

          postItems.forEach((post) => {
            const title = post
              .querySelector(".post-title")
              .textContent.toLowerCase();
            const excerpt = post
              .querySelector(".post-excerpt")
              .textContent.toLowerCase();
            const author = post
              .querySelector(".author-name")
              .textContent.toLowerCase();

            if (
              title.includes(searchTerm) ||
              excerpt.includes(searchTerm) ||
              author.includes(searchTerm)
            ) {
              post.style.display = "block";
            } else {
              post.style.display = "none";
            }
          });
        });

      // Exposed API for other scripts to use
      window.BlogApp = {
        getConfig: () => config,
        updateConfig: (newConfig) => {
          // Deep merge the configs
          Object.keys(newConfig).forEach((key) => {
            if (typeof newConfig[key] === "object" && newConfig[key] !== null) {
              config[key] = { ...config[key], ...newConfig[key] };
            } else {
              config[key] = newConfig[key];
            }
          });

          // Re-initialize the page with new config
          initPage();
        },
        addPost: (post) => {
          // Add a new post to the config
          config.posts.unshift(post);
          renderPosts();
        },
        removePost: (postId) => {
          // Remove a post from the config
          config.posts = config.posts.filter((p) => p.id !== postId);
          renderPosts();
        },
        addFilter: (filter) => {
          // Add a new filter to the config
          config.filters.push(filter);
          renderFilters();
        },
      };
  