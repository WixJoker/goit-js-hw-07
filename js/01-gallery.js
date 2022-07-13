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

const basicLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

function openModal(event) {
  event.preventDefault;
  if (event.target.classList.contains(".gallery__image")) {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" width="800" height="600">`
    );
    instance.show();
  }
}

document.addEventListener("keydown", onEscClick);
function onEscClick(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}

// function keydownEscape(event) {
//   if (event.key === "Escape") {
//     instance.close();
//   }
// }
// console.log(galleryItems);
