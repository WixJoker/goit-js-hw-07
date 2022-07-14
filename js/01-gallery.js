import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsRef = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
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

galleryItemsRef.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  const modalWindow = event.target.classList.contains("gallery__image");
  if (modalWindow) {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" width="800" height="600">`
    );
    instance.show();

    document.addEventListener("keydown", onEscClick);
    document.addEventListener("mouseenter", mouseEnter);

    function onEscClick(event) {
      if (event.code === "Escape") {
        instance.close();
        document.removeEventListener("keydown", onEscClick);
      }
    }
    function mouseEnter(event) {
      if (event.code === "mouseenter") {
        instance.close();
        document.removeEventListener("mouseenter", mouseEnter);
      }
    }
  }
}
