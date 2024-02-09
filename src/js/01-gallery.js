import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import { generateGalleryMarkup } from './gallery-generator.js';

import "simplelightbox/dist/simple-lightbox.min.css";

const refGalleryContainer = document.querySelector(".gallery");

generateGalleryMarkup(refGalleryContainer, galleryItems);
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionType: 'attr',
    captionsData: 'alt'
});
