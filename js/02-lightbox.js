import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsRef = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`;
}
function createGalleryList(galleryItems, createGalleryItem) {
  return galleryItems
    .map((galleryItem) => createGalleryItem(galleryItem))
    .join("");
}

galleryItemsRef.insertAdjacentHTML(
  "beforeend",
  createGalleryList(galleryItems, createGalleryItem)
);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
