export const apiKey = "?api_key=8affe8be373f48968e6754586fd5924d";
export const baseUrl = "https://api.themoviedb.org/3/movie/";
export const imgUrl = "https://image.tmdb.org/t/p/original/";

export const trendingMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
export const trendingTv = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`;

//Movies 

export const popularMovies = `${baseUrl}popular?${apiKey}&language=en-US&page=1`;
export const topRatedMovies = `${baseUrl}top_rated?${apiKey}&language=en-US&page=1`;
export const upcomingMovies = `${baseUrl}upcoming?${apiKey}&language=en-US&page=1`;
export const nowPlayingMovies = `${baseUrl}now_playing?${apiKey}&language=en-US&page=1`;


export const arrayCut = array => array.slice(0, 10);