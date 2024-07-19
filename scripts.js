// API Endpoints
const API_MENU = 'http://localhost:3000/menu';
const API_REVIEWS = 'http://localhost:3000/reviews';
const API_LOCATIONS = 'http://localhost:3000/locations';

// Fetch and display menu items
async function fetchMenu() {
    try {
        const response = await fetch(API_MENU);
        const menuItems = await response.json();

        const menuContainer = document.querySelector('.menu-items');
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>$${item.price.toFixed(2)}</p>
            `;
            menuContainer.appendChild(menuItem);
        });
    } catch (error) {
        console.error('Error fetching menu items:', error);
    }
}

// Fetch and display customer reviews
async function fetchReviews() {
    try {
        const response = await fetch(API_REVIEWS);
        const reviews = await response.json();

        const reviewsContainer = document.querySelector('.reviews');
        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review';
            reviewItem.innerHTML = `
                <p>"${review.comment}" - ${review.author}</p>
                <span>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
            `;
            reviewsContainer.appendChild(reviewItem);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

// Fetch and display locations
async function fetchLocations() {
    try {
        const response = await fetch(API_LOCATIONS);
        const locations = await response.json();

        const locationContainer = document.querySelector('#locations');
        locationContainer.innerHTML += locations.map(location => `
            <p>${location.address}</p>
            <p>${location.phone}</p>
            <p>${location.hours}</p>
        `).join('');
    } catch (error) {
        console.error('Error fetching locations:', error);
    }
}

// Call the functions to fetch and display data
fetchMenu();
fetchReviews();
fetchLocations();

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Enhanced Form Validation
document.querySelector('#newsletter form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.querySelector('#newsletter input[type="email"]');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        alert(`Thank you for subscribing with ${email}`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address');
    }
});

// Intersection Observer for animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

