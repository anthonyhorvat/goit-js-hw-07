import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryListRefs = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map((image) => {
    return `<a class="gallery__link" href="${image.original}">
      <img 
      class="gallery__image" 
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}">
    </a>`;
  })
  .join("");
galleryListRefs.innerHTML = galleryMarkup;
galleryListRefs.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
