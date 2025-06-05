function renderWishlist() {
  const container = document.getElementById('wishlist-container');
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  container.innerHTML = '';

  if (wishlist.length === 0) {
    container.innerHTML = '<p>Your wishlist is empty.</p>';
    return;
  }

  wishlist.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('idea');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.heading}">
      <h3>${item.heading}</h3>
      <p>${item.description}</p>
      <button class="remove-button" data-index="${index}">🗑 Remove</button>
    `;
    container.appendChild(div);
  });

  document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      wishlist.splice(index, 1);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      renderWishlist(); // re-render after deletion
    });
  });
}

document.getElementById('clearAllBtn').addEventListener('click', () => {
  if (confirm('Are you sure you want to clear the entire wishlist?')) {
    localStorage.removeItem('wishlist');
    renderWishlist();
  }
});

// Initial render
renderWishlist();
