// Product array (could be imported from a separate file)
const products = [
  { id: 'p1', name: 'Super Blender 3000' },
  { id: 'p2', name: 'UltraVac Vacuum' },
  { id: 'p3', name: 'Smart Kettle Pro' },
  { id: 'p4', name: 'EcoToaster' }
];

// Populate product select
const productSelect = document.getElementById('productName');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// localStorage: Track number of reviews
const reviewForm = document.getElementById('reviewForm');
const reviewCountDiv = document.getElementById('reviewCount');

function updateReviewCount() {
  const count = localStorage.getItem('reviewCount') || 0;
  reviewCountDiv.textContent = `Reviews submitted: ${count}`;
}

reviewForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Increment review count in localStorage
  let count = parseInt(localStorage.getItem('reviewCount') || '0', 10);
  count += 1;
  localStorage.setItem('reviewCount', count);
  updateReviewCount();
  alert('Thank you for your review!');
  reviewForm.reset();
});

updateReviewCount();