import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGalleryItemMarkup = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`;

const createGalleryMarkup = items => items.map(item => createGalleryItemMarkup(item)).join('');

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

let instance = null;

const onGalleryItemClick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const { source, alt } = e.target.dataset;

  const instance = basicLightbox.create(`
    <img src="${source}" alt="${alt}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener('keydown', onModalKeyDown);
};

gallery.addEventListener('click', onGalleryItemClick);

function onModalKeyDown(event) {
  if (event.code === 'Escape' && instance) {
    instance.close(); 
    instance = null;
  }
}

if (instance) {
  instance.onClose(() => {
    document.removeEventListener('keydown', onModalKeyDown);
  });
}