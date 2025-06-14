// Global variables and data
const galleryData = [
    {
        id: 1,
        title: "Wedding Cookie Set",
        category: "weddings",
        type: "cookies",
        description: "Elegant wedding-themed cookies with intricate lace designs",
        image: "🍪💒"
    },
    {
        id: 2,
        title: "Birthday Macarons",
        category: "birthdays",
        type: "macarons",
        description: "Colorful birthday macarons with fun decorations",
        image: "🧁🎂"
    },
    {
        id: 3,
        title: "Holiday Sugar Cookies",
        category: "holidays",
        type: "cookies",
        description: "Festive holiday cookies with seasonal themes",
        image: "🍪🎄"
    },
    {
        id: 4,
        title: "Corporate Event Treats",
        category: "corporate",
        type: "both",
        description: "Professional branded cookies and macarons for business events",
        image: "🍪💼"
    },
    {
        id: 5,
        title: "Valentine's Day Collection",
        category: "holidays",
        type: "both",
        description: "Romantic heart-shaped cookies and pink macarons",
        image: "💝🧁"
    },
    {
        id: 6,
        title: "Baby Shower Delights",
        category: "celebrations",
        type: "cookies",
        description: "Adorable baby-themed decorated cookies",
        image: "🍪👶"
    }
];

const testimonials = [
    {
        text: "Absolutely stunning cookies for our wedding! Every guest was amazed by the beautiful designs.",
        author: "Sarah & Mike Johnson"
    },
    {
        text: "The macarons were not only gorgeous but incredibly delicious. Perfect for our corporate event!",
        author: "Tech Solutions Inc."
    },
    {
        text: "Mary's attention to detail is incredible. The birthday cookies exceeded all expectations!",
        author: "Jennifer Martinez"
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializePage();
    initializeLazyLoading();
    loadUserPreferences();
});

// Navigation Functions
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Page-specific initialization
function initializePage() {
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'project':
            initializeHomePage();
            break;
        case 'gallery':
            initializeGalleryPage();
            break;
        case 'order':
            initializeOrderPage();
            break;
        case 'contact':
            initializeContactPage();
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    return page || 'project';
}

// Home Page Functions
function initializeHomePage() {
    loadFeaturedItems();
    loadTestimonials();
    initializeScrollEffects();
}

function loadFeaturedItems() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;
    
    const featuredItems = galleryData.slice(0, 3);
    
    featuredGrid.innerHTML = featuredItems.map(item => `
        <div class="featured-item" data-aos="fade-up">
            <div class="featured-image">${item.image}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <button onclick="viewGalleryItem(${item.id})" class="view-btn">View Details</button>
        </div>
    `).join('');
}

function loadTestimonials() {
    const testimonialSlider = document.getElementById('testimonialSlider');
    if (!testimonialSlider) return;
    
    testimonialSlider.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-text">"${testimonial.text}"</div>
            <div class="testimonial-author">- ${testimonial.author}</div>
        </div>
    `).join('');
}

// Gallery Page Functions
function initializeGalleryPage() {
    loadGalleryItems();
    initializeGalleryFilters();
    initializeModal();
}

function loadGalleryItems(filter = 'all') {
    const galleryItems = document.getElementById('galleryItems');
    if (!galleryItems) return;
    
    const filteredItems = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => 
            item.category === filter || 
            item.type === filter || 
            (filter === 'cookies' && item.type.includes('cookies')) ||
            (filter === 'macarons' && item.type.includes('macarons'))
        );
    
    galleryItems.innerHTML = filteredItems.map(item => `
        <div class="gallery-item" onclick="openModal(${item.id})">
            <div class="gallery-image">${item.image}</div>
            <div class="gallery-item-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span class="category-tag">${item.category}</span>
            </div>
        </div>
    `).join('');
}

function initializeGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter gallery items
            const filter = this.getAttribute('data-filter');
            loadGalleryItems(filter);
        });
    });
}

function initializeModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

function openModal(itemId) {
    const item = galleryData.find(item => item.id === itemId);
    if (!item) return;
    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    if (modal && modalImage && modalTitle && modalDescription) {
        modalImage.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="%234ECDC4"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="40">${item.image}</text></svg>`;
        modalImage.alt = item.title;
        modalTitle.textContent = item.title;
        modalDescription.textContent = item.description;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Order Page Functions
function initializeOrderPage() {
    initializeOrderForm();
    initializeCalculator();
    setMinDeliveryDate();
}

function initializeOrderForm() {
    const orderForm = document.getElementById('orderForm');
    if (!orderForm) return;
    
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleOrderSubmission(this);
    });
}

function initializeCalculator() {
    const calculateBtn = document.getElementById('calculateBtn');
    if (!calculateBtn) return;
    
    calculateBtn.addEventListener('click', calculateEstimate);
}

function calculateEstimate() {
    const quantity = document.getElementById('calcQuantity').value;
    const pricePerItem = document.getElementById('calcType').value;
    const resultDiv = document.getElementById('estimateResult');
    
    if (!quantity || !pricePerItem) {
        resultDiv.innerHTML = `<p>Please enter quantity and select product type</p>`;
        return;
    }
    
    if (quantity < 12) {
        resultDiv.innerHTML = `<p>Minimum order is 12 pieces</p>`;
        return;
    }
    
    const total = (quantity * parseFloat(pricePerItem)).toFixed(2);
    resultDiv.innerHTML = `<p>Estimated Total: $${total}</p>`;
    
    // Save calculation to localStorage
    const calculation = {
        quantity: quantity,
        pricePerItem: pricePerItem,
        total: total,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('lastCalculation', JSON.stringify(calculation));
}

function setMinDeliveryDate() {
    const deliveryDateInput = document.getElementById('deliveryDate');
    if (!deliveryDateInput) return;
    
    const today = new Date();
    const minDate = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days from now
    deliveryDateInput.min = minDate.toISOString().split('T')[0];
}

function handleOrderSubmission(form) {
    const formData = new FormData(form);
    const orderData = {};
    
    for (let [key, value] of formData.entries()) {
        orderData[key] = value;
    }
    
    // Add timestamp
    orderData.timestamp = new Date().toISOString();
    
    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(existingOrders));
    
    // Show success message
    alert(`Thank you ${orderData.customerName}! Your order request has been submitted. We'll contact you within 24 hours to confirm details.`);
    
    // Reset form
    form.reset();
    setMinDeliveryDate();
}

// Contact Page Functions
function initializeContactPage() {
    initializeContactForm();
}

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactSubmission(this);
    });
}

function handleContactSubmission(form) {
    const formData = new FormData(form);
    const contactData = {};
    
    for (let [key, value] of formData.entries()) {
        contactData[key] = value;
    }
    
    // Add timestamp
    contactData.timestamp = new Date().toISOString();
    
    // Save to localStorage
    const existingMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    existingMessages.push(contactData);
    localStorage.setItem('messages', JSON.stringify(existingMessages));
    
    // Show success message
    alert(`Thank you ${contactData.contactName}! Your message has been sent. We'll get back to you soon!`);
    
    // Reset form
    form.reset();
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function viewGalleryItem(itemId) {
    // Store the item ID and redirect to gallery
    localStorage.setItem('viewItemId', itemId);
    window.location.href = 'gallery.html';
}

function initializeScrollEffects() {
    // Simple scroll effects for better UX
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in effect
    document.querySelectorAll('.service-card, .testimonial-card, .featured-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initializeLazyLoading() {
    // Simple lazy loading implementation
    const lazyImages = document.querySelectorAll('.lazy');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

function loadUserPreferences() {
    // Load and apply user preferences from localStorage
    const preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');
    
    // Apply any saved preferences
    if (preferences.theme) {
        document.body.classList.add(`theme-${preferences.theme}`);
    }
    
    // Load last calculation if on order page
    if (getCurrentPage() === 'order') {
        const lastCalc = JSON.parse(localStorage.getItem('lastCalculation') || 'null');
        if (lastCalc) {
            const calcQuantity = document.getElementById('calcQuantity');
            const calcType = document.getElementById('calcType');
            const resultDiv = document.getElementById('estimateResult');
            
            if (calcQuantity && calcType && resultDiv) {
                calcQuantity.value = lastCalc.quantity;
                calcType.value = lastCalc.pricePerItem;
                resultDiv.innerHTML = `<p>Last Estimate: $${lastCalc.total}</p>`;
            }
        }
    }
    
    // Auto-open specific gallery item if coming from home page
    if (getCurrentPage() === 'gallery') {
        const viewItemId = localStorage.getItem('viewItemId');
        if (viewItemId) {
            setTimeout(() => {
                openModal(parseInt(viewItemId));
                localStorage.removeItem('viewItemId');
            }, 500);
        }
    }
}

// Event listeners for window events
window.addEventListener('resize', function() {
    // Handle responsive adjustments if needed
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
    }
});

window.addEventListener('scroll', function() {
    // Add scroll effects or sticky navigation if needed
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    }
});