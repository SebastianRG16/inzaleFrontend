import client from "./request";

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export const getPopularMovies = async (): Promise<Movie[] | null> => {
    try {
      const response = await client.get("movies/search?category=popular");
      if (response.status === 200) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error al obtener películas:", error);
      return null;
    }
};

export const getNowPayingMovies = async (): Promise<Movie[] | null> => {
    try {
      const response = await client.get("movies/search?category=now_playing");
      if (response.status === 200) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error al obtener películas:", error);
      return null;
    }
};

export const getNowUpcoming = async (): Promise<Movie[] | null> => {
    try {
      const response = await client.get("movies/search?category=upcoming");
      if (response.status === 200) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error al obtener películas:", error);
      return null;
    }
};

export const getNowTopRated = async (): Promise<Movie[] | null> => {
    try {
      const response = await client.get("movies/search?category=top_rated");
      if (response.status === 200) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error al obtener películas:", error);
      return null;
    }
};