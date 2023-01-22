import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListRefs = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map((image) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img 
      class="gallery__image" 
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}">
    </a>
  </div>`;
  })
  .join("");
galleryListRefs.innerHTML = galleryMarkup;
galleryListRefs.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
