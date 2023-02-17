import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovies = async () => {
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=fa28ddeb45f8fcba0058ea610f4f6a84`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetails = async id => {
  try {
    const response = await axios.get(
      `movie/${id}?api_key=fa28ddeb45f8fcba0058ea610f4f6a84&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
