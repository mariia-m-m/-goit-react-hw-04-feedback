import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovies = async () => {
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=fa28ddeb45f8fcba0058ea610f4f6a84`
    );
    return response.data;
  } catch ({ response }) {
    console.log(response.data.message);
  }
};

export const getDetails = async id => {
  try {
    const response = await axios.get(
      `movie/${id}?api_key=fa28ddeb45f8fcba0058ea610f4f6a84&language=en-US`
    );
    return response.data;
  } catch ({ response }) {
    console.log(response.data.message);
  }
};
export const getMoviesSearch = async (search, page) => {
  try {
    const response = await axios.get(
      `search/movie?api_key=fa28ddeb45f8fcba0058ea610f4f6a84&language=en-US&page=${page}&include_adult=false&query=${search}`
    );
    return response.data;
  } catch ({ response }) {
    console.log(response.data.message);
  }
};

export const getActors = async id => {
  try {
    const response = await axios.get(
      `movie/${id}/credits?api_key=fa28ddeb45f8fcba0058ea610f4f6a84&language=en-US`
    );
    return response.data;
  } catch ({ response }) {
    console.log(response.data.message);
  }
};

export const getReviews = async id => {
  try {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=fa28ddeb45f8fcba0058ea610f4f6a84&language=en-US&page=1`
    );
    return response.data;
  } catch ({ response }) {
    console.log(response.data.message);
  }
};
