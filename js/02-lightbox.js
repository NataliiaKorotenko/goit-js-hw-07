import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGalleryItemMarkup = ({ preview, original, description }) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
`;

const createGalleryMarkup = items => items.map(item => createGalleryItemMarkup(item)).join('');

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    docClose: false
  });






