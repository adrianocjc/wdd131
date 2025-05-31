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
  // Additional temples
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
  }
];

function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy';

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

function filterTemples(filter) {
  switch (filter) {
    case 'old':
      return temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year < 1900;
      });
    case 'new':
      return temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year > 2000;
      });
    case 'large':
      return temples.filter(t => t.area > 90000);
    case 'small':
      return temples.filter(t => t.area < 10000);
    default:
      return temples;
  }
}

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
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
      navMenu.classList.remove('open');
      hamburger.textContent = '☰';
    }
  });

  // Navigation filtering
  navMenu.querySelectorAll('a[data-filter]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');
      displayTemples(filterTemples(filter));
      // Optionally, highlight the active filter
      navMenu.querySelectorAll('a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Initial display
  displayTemples(temples);
});