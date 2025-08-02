// Startup logo
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.body.classList.add('loaded');
  }, 2500);
});

// Load products
fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-container');
    data.forEach(product => {
      container.innerHTML += `
        <div class="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform fade-in">
          <img src="${product.image}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold text-white">${product.name}</h3>
            <p class="text-green-400 font-semibold mb-2">₹${product.price}</p>
            <button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">Add to Cart</button>
          </div>
        </div>
      `;
    });

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.style.opacity = 1;
      });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  });
