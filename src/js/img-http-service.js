import axios from 'axios';
import SimpleLightbox from 'simplelightbox';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29672596-80b7f00160ec49143013d00d9';

export default class ImagesAPIService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalHits = 0;
  }

  async getImages() {
    const images = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`,
    );

    this.totalHits = images.data.totalHits;

    return images;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  createGallery() {
    this.gallery = new SimpleLightbox('.gallery a');
  }

  updateGallery() {
    this.gallery.refresh();
  }
}