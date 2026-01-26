document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Initialize all dropdowns
    const dropdownTogglesBootstrap = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdownTogglesBootstrap.forEach(toggle => {
        new bootstrap.Dropdown(toggle);
    });

    // Toggle menu on button click
    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
        document.body.style.overflow = navbarCollapse.classList.contains('show') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navbarCollapse.classList.contains('show') && 
            !navbarCollapse.contains(event.target) && 
            !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking a nav link (except dropdown toggles)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            navbarCollapse.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            document.body.style.overflow = '';
        }
    });

    // Cart functionality
    function updateCartCount() {
        const cartBadge = document.querySelector('.badge');
        if (cartBadge) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartBadge.textContent = totalItems;
            cartBadge.style.display = totalItems > 0 ? 'block' : 'none';
        }
    }

    // Initialize cart
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // Update cart count on page load
    updateCartCount();

    // Handle add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    quantity: 1
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification('Product added to cart!');
        });
    });

    // Search form validation
    const searchForm = document.querySelector('form[action="search.php"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const searchInput = this.querySelector('input[name="q"]');
            if (searchInput.value.trim() === '') {
                e.preventDefault();
                alert('Please enter a search term');
            }
        });
    }

    // Notification system
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;

        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            backgroundColor: '#2c3e50',
            color: 'white',
            borderRadius: '5px',
            zIndex: '1000',
            animation: 'slideIn 0.5s ease-out'
        });

        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease-out';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // View toggle functionality
    const gridViewBtn = document.getElementById('gridView');
    const listViewBtn = document.getElementById('listView');
    const productContainer = document.querySelector('.row.row-cols-1.row-cols-md-3.g-4');

    if (gridViewBtn && listViewBtn && productContainer) {
        gridViewBtn.addEventListener('click', function() {
            productContainer.classList.remove('list-view');
            productContainer.classList.add('row-cols-1', 'row-cols-md-3', 'g-4');
        });

        listViewBtn.addEventListener('click', function() {
            productContainer.classList.add('list-view');
            productContainer.classList.remove('row-cols-1', 'row-cols-md-3', 'g-4');
        });
    }

    // Filter functionality
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    const productCards = document.querySelectorAll('.product-card');

    function applyFilters() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;
        const selectedSort = sortFilter.value;

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const price = parseFloat(card.getAttribute('data-price'));
            let shouldShow = true;

            // Category filter
            if (selectedCategory !== 'all' && category !== selectedCategory) {
                shouldShow = false;
            }

            // Price filter
            if (selectedPrice !== 'all') {
                const [min, max] = selectedPrice.split('-').map(Number);
                if (max && (price < min || price > max)) {
                    shouldShow = false;
                } else if (!max && price < min) {
                    shouldShow = false;
                }
            }

            // Show/hide card
            card.style.display = shouldShow ? 'block' : 'none';
        });

        // Sort products
        const visibleCards = Array.from(productCards).filter(card => card.style.display !== 'none');
        const container = productCards[0].parentNode;

        visibleCards.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));
            const nameA = a.querySelector('.card-title').textContent;
            const nameB = b.querySelector('.card-title').textContent;

            if (selectedSort === 'price-low') {
                return priceA - priceB;
            } else if (selectedSort === 'price-high') {
                return priceB - priceA;
            } else if (selectedSort === 'name-asc') {
                return nameA.localeCompare(nameB);
            } else if (selectedSort === 'name-desc') {
                return nameB.localeCompare(nameA);
            }
            return 0;
        });

        // Reorder cards
        visibleCards.forEach(card => {
            container.appendChild(card);
        });
    }

    // Add event listeners for filters
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    if (sortFilter) sortFilter.addEventListener('change', applyFilters);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 