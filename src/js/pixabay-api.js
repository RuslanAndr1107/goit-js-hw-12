import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const perPage = 15;

export default async function getPictures(name, page) {
  axios.defaults.baseURL = "https://pixabay.com/api/";
  const KEY = "45357458-06e8a1a2f264c6c9b3b3f40d6";

  try {
    if (name.includes(" ")) {
      name.replace(/\s+/g, "+");
    }
 
    const response = await axios.get("", {
      params: {
        key: KEY,
        q: name,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: perPage,
      }
    });

    return response;
  } catch {
    iziToast.error({
      title: "Error",
      message: "Try again later!",
    });
  }
}
