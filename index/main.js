function createCarousel() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;
  
    /**
     * Show the current image based on the currentIndex.
     */
    function showCurrentImage() {
        images.forEach((image, index) => {
            if (index === currentIndex) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }
  
    // Initially show the first image
    showCurrentImage();
  
    // Event listener for the left arrow (prev)
    document.getElementById('left').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showCurrentImage();
    });
  
    // Event listener for the right arrow (next)
    document.getElementById('right').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showCurrentImage();
    }
  )}
  
  // Call the function to create the carousel with next/prev slider
  createCarousel();