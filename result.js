// Get query parameters
const urlParams = new URLSearchParams(window.location.search);
const length = urlParams.get('length');
const breadth = urlParams.get('breadth');
const height = urlParams.get('height');
const roomStyle = urlParams.get('style');
const area = urlParams.get('area');

// Display room details
const roomInfo = document.getElementById('room-info');
roomInfo.innerHTML = `<p>Room Dimensions: ${length} x ${breadth} feet (Height: ${height} feet)</p>
                      <p>Room Style: ${roomStyle}</p>
                      <p>Area: ${area} square feet</p>`;

// Room ideas based on style
const roomIdeas = {
  Modern: [
    { image: 'images/modernsofa1.jpg', heading: 'Modern Sofa', description: 'A sleek modern sofa for your living room.' },
    { image: 'images/modernbed.jpg', heading: 'Modern Bedroom', description: 'A serene modern bedroom with minimalist decor.' },
    { image: 'images/modernkitchen.jpg', heading: 'Modern Kitchen', description: 'Sleek and functional kitchen with clean lines.' },
    { image: 'images/modernhall.jpg', heading: 'Modern Hall', description: 'Spacious hall with modern furniture and open layout.' },
    { image: 'images/modernbathroom.jpg', heading: 'Modern Bathroom', description: 'Minimalist bathroom with high-end fixtures.' }
  ],
  Minimalist: [
    { image: 'images/minisofa.jpg', heading: 'Minimalist Sofa', description: 'Simple and elegant minimalist sofa.' },
    { image: 'images/minibed.jpg', heading: 'Minimalist Bedroom', description: 'Spacious minimalist bedroom.' },
    { image: 'images/minikitchen.jpg', heading: 'Minimalist Kitchen', description: 'Neutral-toned minimalist kitchen.' },
    { image: 'images/minihall.jpg', heading: 'Minimalist Hall', description: 'Simple minimalist hall.' },
    { image: 'images/minibathroom.jpg', heading: 'Minimalist Bathroom', description: 'Minimalist style bathroom.' }
  ],
  Luxury: [
    { image: 'images/luxury-sofa.jpg', heading: 'Luxury Sofa', description: 'Luxurious leather sofa.' },
    { image: 'images/luxury-lighting.jpg', heading: 'Luxury Lighting', description: 'Glamorous lighting.' },
    { image: 'images/luxury-bedroom.jpg', heading: 'Luxury Bedroom', description: 'Lavish luxury bedroom.' },
    { image: 'images/luxury-kitchen.jpg', heading: 'Luxury Kitchen', description: 'Extravagant kitchen.' },
    { image: 'images/luxury-hall.jpg', heading: 'Luxury Hall', description: 'Sophisticated hall.' },
    { image: 'images/luxury-bathroom.jpg', heading: 'Luxury Bathroom', description: 'Spa-like bathroom.' }
  ],
  Boho: [
    { image: 'images/boho-sofa.jpg', heading: 'Boho Sofa', description: 'Cozy bohemian sofa.' },
    { image: 'images/boho-lighting.jpg', heading: 'Boho Lighting', description: 'Warm boho lighting.' },
    { image: 'images/boho-bedroom.jpg', heading: 'Boho Bedroom', description: 'Vibrant boho bedroom.' },
    { image: 'images/boho-kitchen.jpg', heading: 'Boho Kitchen', description: 'Free-spirited kitchen.' },
    { image: 'images/boho-hall.jpg', heading: 'Boho Hall', description: 'Relaxed hall with rugs.' },
    { image: 'images/boho-bathroom.jpg', heading: 'Boho Bathroom', description: 'Earthy-toned bathroom.' }
  ],
  Industrial: [
    { image: 'images/industrial-sofa.jpg', heading: 'Industrial Sofa', description: 'Metal-accented industrial sofa.' },
    { image: 'images/industrial-lighting.jpg', heading: 'Industrial Lighting', description: 'Industrial-style lighting.' },
    { image: 'images/industrial-bedroom.jpg', heading: 'Industrial Bedroom', description: 'Rugged industrial bedroom.' },
    { image: 'images/industrial-kitchen.jpg', heading: 'Industrial Kitchen', description: 'Metallic industrial kitchen.' },
    { image: 'images/industrial-hall.jpg', heading: 'Industrial Hall', description: 'Exposed beam hall.' },
    { image: 'images/industrial-bathroom.jpg', heading: 'Industrial Bathroom', description: 'Raw finish bathroom.' }
  ]
};

// Get container to display results
const ideasContainer = document.getElementById('ideas');
const selectedIdeas = roomIdeas[roomStyle];

// Render cards
if (selectedIdeas && selectedIdeas.length > 0) {
  selectedIdeas.forEach(idea => {
    const ideaDiv = document.createElement('div');
    ideaDiv.classList.add('idea');

    ideaDiv.innerHTML = `
      <img src="${idea.image}" alt="${idea.heading}" style="width: 300px; height: 200px; object-fit: cover; margin-bottom: 10px;">
      <h3>${idea.heading}</h3>
      <p>${idea.description}</p>
      <button class="wishlist-btn"> ❤️ Add to Wishlist</button>
    `;

    const button = ideaDiv.querySelector(".wishlist-btn");
    button.addEventListener("click", () => addToWishlist(idea));

    ideasContainer.appendChild(ideaDiv);
  });
} else {
  ideasContainer.innerHTML = '<p>No ideas available for this style.</p>';
}

// Wishlist Functionality
function addToWishlist(item) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const exists = wishlist.some(
    existing => existing.heading === item.heading && existing.image === item.image
  );

  if (exists) {
    alert("This item is already in your wishlist!");
    return;
  }

  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  showToast("Added to wishlist!");
}

// Toast Notification
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    toast.remove();
  }, 2500);
}
