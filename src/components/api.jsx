import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/500';

axios.defaults.baseURL = BASE_URL;

export const getMovies = async (request, page, per_page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?api_key=fa28ddeb45f8fcba0058ea610f4f6a84`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// const instance = axios.create({
//   base_url: 'https://api.themoviedb.org/3/movie/500/?',
// });

// export const getMovies = async (search, page) => {
//   const { data } = await instance.get({
//     params: {
//       api_key: 'fa28ddeb45f8fcba0058ea610f4f6a84',
//       query: 'cats',
//       page: '1',
//     },
//   });
//   return data;
// };
