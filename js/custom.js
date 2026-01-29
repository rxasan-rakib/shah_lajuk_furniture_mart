document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap dropdowns
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
    });

    // Mobile menu handling
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (window.innerWidth < 992 &&
            navbarCollapse.classList.contains('show') &&
            !navbarCollapse.contains(event.target) &&
            !navbarToggler.contains(event.target)) {
            navbarToggler.click();
        }
    });

    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth < 992) {
                navbarToggler.click();
            }
        });
    });

    // Quantity increment/decrement functionality
    function initializeQuantityControls() {
        const quantityInput = document.getElementById('quantity');
        const decreaseBtn = document.getElementById('decreaseQuantity');
        const increaseBtn = document.getElementById('increaseQuantity');

        if (!quantityInput || !decreaseBtn || !increaseBtn) return;

        decreaseBtn.onclick = function () {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        };

        increaseBtn.onclick = function () {
            const currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        };
    }

    // Initialize quantity controls if they exist on the page
    initializeQuantityControls();
});