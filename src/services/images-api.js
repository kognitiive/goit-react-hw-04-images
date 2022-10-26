import axios from "axios"

export function imagesAPI(query, page) {
   return axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=29229306-2ad532334a119922b9cb31e3e&image_type=photo&orientation=horizontal&per_page=12`)
}
