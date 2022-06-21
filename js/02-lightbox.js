import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryElements = galleryItems.map(
  ({ preview, original, description }) => {
    return `
      <a class="gallery__item" href=${original}>
        <img 
          class="gallery__image" 
          src=${preview}
          data-source=${original}
          alt=${description} />
      </a>
    `;
  }
);

gallery.insertAdjacentHTML('afterbegin', galleryElements.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
