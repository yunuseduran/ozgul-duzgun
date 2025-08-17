// Main JavaScript file for Dr. Özgül Düzgün website

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenu = document.querySelector('.mobile-menu');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    
    // Toggle mobile menu
    if (mobileMenuToggle && mobileMenuOverlay) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
            
            // Animate hamburger lines
            const lines = this.querySelectorAll('.hamburger-line');
            if (mobileMenuOverlay.classList.contains('active')) {
                lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking overlay
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    function closeMobileMenu() {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset hamburger lines
        const lines = mobileMenuToggle.querySelectorAll('.hamburger-line');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
        
        // Close all submenus
        closeAllSubmenus();
    }
    
    // Submenu toggle functionality
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle current submenu
            this.classList.toggle('active');
            
            // Find and toggle the corresponding submenu
            const targetSubmenu = this.closest('.has-submenu').querySelector('.mobile-submenu');
            
            if (targetSubmenu) {
                targetSubmenu.classList.toggle('active');
                
                // Add smooth scroll to submenu if it's opening
                if (targetSubmenu.classList.contains('active')) {
                    setTimeout(() => {
                        targetSubmenu.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 100);
                }
            }
        });
    });
    
    function closeAllSubmenus() {
        submenuToggles.forEach(toggle => {
            toggle.classList.remove('active');
        });
        
        const allSubmenus = document.querySelectorAll('.mobile-submenu');
        allSubmenus.forEach(submenu => {
            submenu.classList.remove('active');
        });
    }
    
    // Close mobile menu when clicking on menu links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Only close if it's not a submenu header
            if (!this.closest('.mobile-menu-header')) {
                closeMobileMenu();
            }
        });
    });
    
    // Close mobile menu when clicking on submenu items
    const submenuItems = document.querySelectorAll('.submenu-items a');
    submenuItems.forEach(item => {
        item.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Add touch support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        mobileMenuOverlay.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        // Swipe right to close menu
        if (swipeDistance > swipeThreshold && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar active state management
    const navLinks = document.querySelectorAll('.desktop-menu .navbar-nav .nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Fade in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade(); // Check on initial load

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--secondary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(backToTopBtn);

    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Back to top functionality
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect for back to top button
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    });

    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    });

    // Form validation (if forms exist)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });

            if (!isValid) {
                e.preventDefault();
                showNotification('Lütfen tüm gerekli alanları doldurun.', 'error');
            }
        });
    });

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Counter animation for statistics (if any)
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => counterObserver.observe(counter));

    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type !== 'submit') return;
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yükleniyor...';
            this.disabled = true;
            
            // Re-enable after 3 seconds (adjust as needed)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 3000);
        });
    });

    // Enhanced dropdown functionality - Portakal İşitme Style
    function initializeDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-item.dropdown');
        
        // Remove any existing event listeners
        dropdowns.forEach(dropdown => {
            const newDropdown = dropdown.cloneNode(true);
            dropdown.parentNode.replaceChild(newDropdown, dropdown);
        });
        
        // Re-select dropdowns after cloning
        const freshDropdowns = document.querySelectorAll('.nav-item.dropdown');
        
        freshDropdowns.forEach(dropdown => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            if (!dropdownToggle || !dropdownMenu) return;
            
            if (window.innerWidth > 768) {
                // Desktop hover behavior
                dropdown.addEventListener('mouseenter', function() {
                    this.classList.add('show');
                });
                
                dropdown.addEventListener('mouseleave', function() {
                    this.classList.remove('show');
                });
            } else {
                // Mobile click behavior - Separate text and icon clicks
                dropdownToggle.addEventListener('click', function(e) {
                    const clickX = e.clientX;
                    const linkRect = this.getBoundingClientRect();
                    const iconZoneStart = linkRect.right - 40; // 40px from right edge for icon
                    
                    // If clicked on + icon area (right 40px)
                    if (clickX >= iconZoneStart) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Get current state
                        const isCurrentlyOpen = dropdown.classList.contains('show');
                        
                        // Close all other dropdowns
                        freshDropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('show');
                            }
                        });
                        
                        // Toggle current dropdown with smooth animation
                        if (isCurrentlyOpen) {
                            dropdown.classList.remove('show');
                        } else {
                            dropdown.classList.add('show');
                            
                            // Smooth scroll to show full dropdown if needed
                            setTimeout(() => {
                                const dropdownRect = dropdown.getBoundingClientRect();
                                const menuRect = dropdownMenu.getBoundingClientRect();
                                const viewportHeight = window.innerHeight;
                                
                                if (menuRect.bottom > viewportHeight) {
                                    dropdown.scrollIntoView({ 
                                        behavior: 'smooth', 
                                        block: 'nearest' 
                                    });
                                }
                            }, 200);
                        }
                    }
                    // If clicked on text area - let it navigate normally
                    // (don't prevent default, let href work)
                });
            }
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-item.dropdown')) {
                freshDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        });
        
        // Close mobile dropdown when clicking on menu items
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('dropdown-item') && window.innerWidth <= 768) {
                freshDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
                
                // Close mobile navbar as well
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    }
    
    // Initialize dropdowns
    initializeDropdowns();
    
    // Reinitialize on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            initializeDropdowns();
        }, 250);
    });

    // Debug function for mobile
    function debugMobileDropdown() {
        console.log('Screen width:', window.innerWidth);
        console.log('Dropdowns found:', document.querySelectorAll('.nav-item.dropdown').length);
        
        const dropdown = document.querySelector('.nav-item.dropdown');
        if (dropdown) {
            console.log('First dropdown classes:', dropdown.className);
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                console.log('Toggle found, classes:', toggle.className);
                console.log('Toggle href:', toggle.href);
                console.log('Mobile behavior: Text -> Navigate, + Icon -> Toggle dropdown');
            }
        }
    }
    
    // Call debug function
    debugMobileDropdown();
    
    console.log('Dr. Özgül Düzgün website loaded successfully!');
}); 