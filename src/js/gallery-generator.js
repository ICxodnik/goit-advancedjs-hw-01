export function generateGalleryMarkup(refGalleryContainer, galleryItems) {
    let data = galleryItems.map(getItemElMarkup).join("");
    refGalleryContainer.insertAdjacentHTML("afterbegin", data);
}

function getItemElMarkup({ preview, original, description }) {
    return (
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`)
}