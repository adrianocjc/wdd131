document.addEventListener('DOMContentLoaded', function() {
  // Product array
  const products = [
    { id: 'p1', name: 'Super Blender 3000' },
    { id: 'p2', name: 'UltraVac Vacuum' },
    { id: 'p3', name: 'Smart Kettle Pro' },
    { id: 'p4', name: 'EcoToaster' }
  ];

  // Populate product select
  const productSelect = document.getElementById('productName');
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // localStorage: Track number of reviews
  const formForm = document.getElementById('formForm');
  const reviewCountDiv = document.getElementById('reviewCount');

  function updateReviewCount() {
    const count = localStorage.getItem('reviewCount') || 0;
    if (reviewCountDiv) {
      reviewCountDiv.textContent = `Reviews submitted: ${count}`;
    }
  }

  if (formForm) {
    formForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let count = parseInt(localStorage.getItem('reviewCount') || '0', 10);
      count += 1;
      localStorage.setItem('reviewCount', count);
      updateReviewCount();
      alert('Thank you for your review!');
      formForm.reset();
    });
  }

  updateReviewCount();

  // Footer dynamic content
  const yearSpan = document.getElementById('currentYear');
  const modifiedSpan = document.getElementById('lastModified');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
  }
});