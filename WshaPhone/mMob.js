const images = [
  'images/head.png',
  'images/2.png',
  'images/1.png',
  'images/head.png',
  'images/1.png'
];

const mainImage = document.getElementById('mainImage');
const dots = document.querySelectorAll('.dot');

console.log('Image element:', mainImage); // Check if found
console.log('Dots found:', dots.length);   // Should be 5

let currentIndex = 0;
let autoSlideInterval;

// Function to change image and update dots with fade effect
function changeImage(index) {
  // Fade out
  mainImage.style.opacity = '0';
  
  setTimeout(() => {
    // Remove active class from all dots
    dots.forEach(d => d.classList.remove('active'));
    
    // Add active class to current dot
    dots[index].classList.add('active');
    
    // Change image source
    mainImage.src = images[index];
    
    // Fade in
    mainImage.style.opacity = '1';
    
    currentIndex = index;
  }, 300); // Wait for fade out to complete
}

// Auto slide function
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to 0 after last image
    changeImage(currentIndex);
  }, 1000); // 3 seconds
}

// Stop auto slide
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Manual click on dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    console.log('Dot clicked:', index); // Test if click works
    
    stopAutoSlide(); // Stop auto sliding when user clicks
    changeImage(index);
    startAutoSlide(); // Restart auto sliding after click
  });
});

// Start auto slide when page loads
startAutoSlide();

