// scripts/filtered-temples.js

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/800x500/Paris-Temple02.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52820,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/800x1280/tokyo_japan_temple-main.jpeg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-149536-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-37056.jpg"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-3829.jpg"
  },
  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88562,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-13287-main.jpg"},
  {
    templeName: "Mesa Arizona",
    location: "Mesa, Arizona, United States",
    dedicated: "1927, October, 23",
    area: 113916,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-22546.jpg"
  },
  {
    templeName: "Idaho Falls Idaho",
    location: "Idaho Falls, Idaho, United States",
    dedicated: "1945, September, 23",
    area: 85624,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-1903-thumb.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
  },
 {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },
];

// Function to create individual temple cards
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy'; // Native lazy loading

  const name = document.createElement('h3');
  name.textContent = temple.templeName;

  const info = document.createElement('div');
  info.className = 'temple-info';
  info.innerHTML = `
    <strong>Location:</strong> ${temple.location}<br>
    <strong>Dedicated:</strong> ${temple.dedicated}<br>
    <strong>Area:</strong> ${temple.area.toLocaleString()} sq ft
  `;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(info);

  return card;
}

// Function to display temples in the grid
function displayTemples(filteredTemples) {
  const grid = document.getElementById('albumGrid');
  grid.innerHTML = '';
  
  if (filteredTemples.length === 0) {
    grid.innerHTML = '<p>No temples found for this filter.</p>';
    return;
  }
  
  filteredTemples.forEach(temple => {
    grid.appendChild(createTempleCard(temple));
  });
}

// Function to filter temples based on criteria
function filterTemples(filter) {
  switch (filter) {
    case 'old':
      return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
      });
    case 'new':
      return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
      });
    case 'large':
      return temples.filter(temple => temple.area > 90000);
    case 'small':
      return temples.filter(temple => temple.area < 10000);
    case 'home':
    default:
      return temples;
  }
}

// Function to update the page title based on filter
function updatePageTitle(filter) {
  const h2 = document.querySelector('h2');
  switch (filter) {
    case 'old':
      h2.textContent = 'Historic Temples (Built Before 1900)';
      break;
    case 'new':
      h2.textContent = 'Modern Temples (Built After 2000)';
      break;
    case 'large':
      h2.textContent = 'Large Temples (Over 90,000 sq ft)';
      break;
    case 'small':
      h2.textContent = 'Small Temples (Under 10,000 sq ft)';
      break;
    case 'home':
    default:
      h2.textContent = 'Explore Temples Around the World';
      break;
  }
}

// Main DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
  // Footer dynamic year and last modified
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

  // Responsive navigation menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
    hamburger.setAttribute('aria-label', 
      navMenu.classList.contains('open') ? 'Close navigation menu' : 'Open navigation menu'
    );
  });

  // Reset menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
      navMenu.classList.remove('open');
      hamburger.textContent = '☰';
      hamburger.setAttribute('aria-label', 'Open navigation menu');
    }
  });

  // Navigation filtering functionality
  navMenu.querySelectorAll('a[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');
      
      // Update active navigation state
      navMenu.querySelectorAll('a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
      
      // Filter and display temples
      const filteredTemples = filterTemples(filter);
      displayTemples(filteredTemples);
      
      // Update page title
      updatePageTitle(filter);
      
      // Close mobile menu if open
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-label', 'Open navigation menu');
      }
    });
  });

  // Initial display - show all temples and set home as active
  displayTemples(temples);
  const homeLink = navMenu.querySelector('a[data-filter="home"]');
  if (homeLink) {
    homeLink.classList.add('active');
  }
});

// Optional: Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      hamburger.textContent = '☰';
      hamburger.setAttribute('aria-label', 'Open navigation menu');
      hamburger.focus();
    }
  }
});