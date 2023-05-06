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

let instance = null;

function onModalKeyDown(event) {
  if (event.code === 'Escape' && instance) {
    instance.close(); 
    instance = null;
    gallery.focus();
  }
}

const onGalleryItemClick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const { source, alt } = e.target.dataset;
  
  instance = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    docClose: false
  });

  document.addEventListener('keydown', onModalKeyDown);
};

gallery.addEventListener('click', onGalleryItemClick);





