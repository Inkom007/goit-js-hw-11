import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function imgCreated(image) {
    return `<a href="${image.largeImageURL}">
    <img src="${image.webformatURL}" alt="${image.tags}"></a>`;
}

export function imgTemplate(array) {
    return array.map(imgCreated).join("");
};


export function imagesGallery() {
    let gallery = $('.gallery a').SimpleLightbox({
        captionsData: 'alt',
        captionDelay: 250
    });
    gallery.refresh();
};



