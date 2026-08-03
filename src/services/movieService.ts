import axios from "axios";

import type { Movie } from "../types/movie";

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function getMoviesList(query: string): Promise<Movie[]> {
  const response = await axios.get<MoviesResponse>(
    import.meta.env.VITE_TMDB_BASE_URL,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
      params: {
        query,
      },
    },
  );

  return response.data.results;
}
