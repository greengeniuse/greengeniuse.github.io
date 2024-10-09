function toggleDescription(card) {
    let description = card.querySelector('.description');
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
  }
  
  // Horizontal scroll functionality
  const container = document.querySelector('.product-card-container');
  
  function scrollLeft() {
    container.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }
  
  function scrollRight() {
    container.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
  