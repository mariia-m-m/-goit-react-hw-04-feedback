import axios from 'axios';

const API_KEY = 'fa28ddeb45f8fcba0058ea610f4f6a84';
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

// import axios from 'axios';
// const API_KEY = 'fa28ddeb45f8fcba0058ea610f4f6a84';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// export const getTrendingMoviee = async () => {
//   console.log(getTrendingMoviee);
//   return await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
// };
