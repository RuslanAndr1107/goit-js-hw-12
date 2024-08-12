import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import createMarkup from "./js/render-functions";
import getPictures from "./js/pixabay-api";


const formSearch = document.querySelector(".search");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".load-btn");
let currentPage = 0;
const perPage = 15;
let inputValue = "";
const refreshPage = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});


loader.style.display = "none";
loadBtn.style.display = "none";

formSearch.addEventListener("submit", onSearch);
loadBtn.addEventListener("click", onLoadMore);

async function onSearch(event) {
    event.preventDefault();
    currentPage = 1;
    gallery.innerHTML = "";
    loader.style.display = "block";
    loadBtn.style.display = "none";

    inputValue = event.target.elements.search.value.trim();

    if (!inputValue) {
        iziToast.warning({
            title: "Attention",
            message: "Fill in the field!",
        });

        loader.style.display = "none";
        return;
    }

    try {
        const { data } = await getPictures(inputValue, currentPage);
        const totalPages = Math.ceil(data.totalHits / perPage);

        if (!data.hits.length) {
            iziToast.error({
                title: "Error",
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
  
            return;
        }

        gallery.insertAdjacentHTML("beforeend", createMarkup(data.hits));
        refreshPage.refresh();

        if (currentPage === totalPages) {
            loadBtn.style.display = "none";
        } else {
            loadBtn.style.display = "block";
        }

        formSearch.reset();
    } catch (err) {
        iziToast.error({
            title: "Error",
            message: "Something went wrong. Please try again later.",
        });
        console.log(err);
    } finally {
        loader.style.display = "none";
    }
}

async function onLoadMore() {
    currentPage += 1;

    loader.style.display = "block";

    try {
        const { data } = await getPictures(inputValue, currentPage);
        gallery.insertAdjacentHTML("beforeend", createMarkup(data.hits));
        refreshPage.refresh();

        const totalPages = Math.ceil(data.totalHits / perPage);

        if (currentPage === totalPages) {
            iziToast.info({
                title: "Caution",
                message: "There is no more images to load!",
            });
            loadBtn.style.display = "none";
        } else {
            loadBtn.style.display = "block";
        }
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: "Something went wrong while loading more images.",
        });
        console.log(error);
    } finally {
        loader.style.display = "none";
    }
}
