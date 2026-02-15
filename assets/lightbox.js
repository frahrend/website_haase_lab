/**
 * Gallery Lightbox with Slideshow
 * Haase Lab Website
 */

(function() {
  'use strict';

  let currentImageIndex = 0;
  let galleryImages = [];

  function initGallery() {
    // Find all gallery figures
    const figures = document.querySelectorAll('.gallery-grid figure');
    
    if (figures.length === 0) return;

    // Collect all gallery images
    galleryImages = Array.from(figures).map((figure, index) => {
      const img = figure.querySelector('img');
      const caption = figure.querySelector('figcaption');
      
      return {
        src: img.src,
        alt: img.alt,
        caption: caption ? caption.textContent : ''
      };
    });

    // Create lightbox container
    const lightbox = createLightbox();
    document.body.appendChild(lightbox);

    // Add click handlers to figures
    figures.forEach((figure, index) => {
      figure.style.cursor = 'pointer';
      figure.addEventListener('click', function() {
        openLightbox(index);
      });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
  }

  function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.id = 'gallery-lightbox';
    
    lightbox.innerHTML = `
      <div class="lightbox__content">
        <button class="lightbox__close" aria-label="Close lightbox" title="Close (Esc)">
          ×
        </button>
        <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous image" title="Previous (←)">
          ‹
        </button>
        <div class="lightbox__image-container">
          <img class="lightbox__image" src="" alt="">
        </div>
        <button class="lightbox__nav lightbox__nav--next" aria-label="Next image" title="Next (→)">
          ›
        </button>
        <div class="lightbox__caption"></div>
      </div>
    `;

    // Close button handler
    const closeBtn = lightbox.querySelector('.lightbox__close');
    closeBtn.addEventListener('click', closeLightbox);

    // Navigation handlers
    const prevBtn = lightbox.querySelector('.lightbox__nav--prev');
    const nextBtn = lightbox.querySelector('.lightbox__nav--next');
    
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showPreviousImage();
    });
    
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showNextImage();
    });

    // Click outside to close
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    return lightbox;
  }

  function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('gallery-lightbox');
    
    if (!lightbox) return;

    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lightbox = document.getElementById('gallery-lightbox');
    
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox || galleryImages.length === 0) return;

    const image = galleryImages[currentImageIndex];
    const imgElement = lightbox.querySelector('.lightbox__image');
    const captionElement = lightbox.querySelector('.lightbox__caption');

    imgElement.src = image.src;
    imgElement.alt = image.alt;
    captionElement.textContent = image.caption;
  }

  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
  }

  function handleKeyboard(e) {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;

    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPreviousImage();
        break;
      case 'ArrowRight':
        showNextImage();
        break;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
