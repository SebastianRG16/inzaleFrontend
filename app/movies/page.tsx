"use client";

import { useEffect, useState } from "react";
import Card from "../../components/Card";
import {
  getPopularMovies,
  getNowPayingMovies,
  getNowUpcoming,
  getNowTopRated,
  Movie,
} from "@/api/movieApi";

export default function page() {
  const [dataMoviesPopular, setDataMoviesPopular] = useState<Movie[]>([]);
  const [dataMoviesNowPaying, setDataMoviesNowPaying] = useState<Movie[]>([]);
  const [dataMoviesUpcoming, setDataMoviesUpcoming] = useState<Movie[]>([]);
  const [dataMoviesTopRated, setDataMoviesTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesPopulate = await getPopularMovies();
      if (moviesPopulate) {
        setDataMoviesPopular(moviesPopulate);
      }
      const moviesNowPaying = await getNowPayingMovies();
      if (moviesNowPaying) {
        setDataMoviesNowPaying(moviesNowPaying);
      }
      const moviesUpcoming = await getNowUpcoming();
      if (moviesUpcoming) {
        setDataMoviesUpcoming(moviesUpcoming);
      }
      const moviesTopRated = await getNowTopRated();
      if (moviesTopRated) {
        setDataMoviesTopRated(moviesTopRated);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="mb-10">
      <Card title="Popular" movies={dataMoviesPopular} />
      <Card title="Now Paying" movies={dataMoviesNowPaying} />
      <Card title="Upcoming" movies={dataMoviesUpcoming} />
      <Card title="Top Rated" movies={dataMoviesTopRated} />
    </div>
  );
}
