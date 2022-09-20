// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryMarkup(arrayOfImages) {
  return arrayOfImages
    .map(
      ({ original, preview, description }) =>
        `<div><a class="gallery__item" href=${original}><img class="gallery__image" src=${preview} alt=${description} /></a></div>`
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
