import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', openModal);

let modal;

const galleryElements = galleryItems.map(
  ({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </div>`;
  }
);

gallery.insertAdjacentHTML('afterbegin', galleryElements.join(''));

function openModal(event) {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    // console.log(1);
    return;
  }
  // console.log(event.target.dataset.source);
  modal = basicLightbox.create(
    `
      <img src=${event.target.dataset.source}>`,
    {
      onShow: () => {
        document.addEventListener('keydown', closeModalEsc);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeModalEsc);
      },
    }
  );

  modal.show();
}

function closeModalEsc(event) {
  // console.log(event.code);
  if (event.code !== 'Escape') {
    return;
  }
  modal.close();
}
