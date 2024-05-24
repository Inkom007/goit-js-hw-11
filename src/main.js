import { searchImg } from "./js/pixabay-api";
import { imgCreated } from "./js/render-functions";
import { imgTemplate } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", event => {
    event.preventDefault();
    gallery.innerHTML = '';

    const query = event.target.elements.query.value.trim();

    searchImg(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: `Sorry, there are no images matching your search query.Please try again!`,
                    messageColor: '#FAFAFB',
                    color: '#EF4040',
                    position: 'topRight'
                });
                return;
            }
            else {
                const markup = imgTemplate(data.hits);
                gallery.innerHTML = markup;
            }
        })
    
        .catch(error => console.log(error))
        .finally(() => {
            event.target.reset();
        })
});