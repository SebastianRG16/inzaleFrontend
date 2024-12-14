"use client";

import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import client from "@/api/request";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";

export default function page({ params }: { params: Promise<{ id: string }> }) {
  interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
    };
    budget?: number;
    genres?: { id: number; name: string }[];
    homepage?: string;
    id: number;
    imdb_id?: string;
    origin_country?: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies?: {
      id: number;
      name: string;
      logo_path?: string;
      origin_country: string;
    }[];
    production_countries?: { iso_3166_1: string; name: string }[];
    release_date: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: { iso_639_1: string; name: string }[];
    status?: string;
    tagline?: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  const [dataMovie, setDataMovie] = useState<Movie | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [dataMoviesRecomendation, setDataMoviesRecomendation] = useState<Movie[]>([]);
  const router = useRouter();
  const getDatosMovieInit = async () => {
    try {
      const response = await client.get(`movies/id?movieId=${id}`, {});
      if (response.status == 200) {
        setTitle(response.data.title);
        setDataMovie(response.data);
      }
    } catch (error) {
      console.error("Error al obtener pelicula:", error);
    }
  };

  const getDatosMovieRecomendations = async () => {
    try {
      const response = await client.get(`movies/search?title=${id}`, {});
      if (response.status == 200) {
        setDataMoviesRecomendation(response.data);
      }
    } catch (error) {
      console.error("Error al obtener pelicula:", error);
    }
  };

  const redirect = () => {
    router.push(`/movies`);
  };

  useEffect(() => {
    getDatosMovieInit();
  }, [id]);

  useEffect(() => {
    getDatosMovieRecomendations();
  }, [title]);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };

    fetchParams();
  }, [params]);

  return (
    <div className="h-screen text-white">
      <Navbar />
      <div className="relative h-2/5">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${dataMovie?.backdrop_path}`}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/100 via-black/5 to-transparent p-6">
          <div className="flex">
            <div className="">
              <svg
                onClick={() => redirect()}
                className="cursor-pointer"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3333 30L13.3333 20L23.3333 10L25.6666 12.3333L17.9999 20L25.6666 27.6667L23.3333 30Z"
                  fill="#F6F6F6"
                />
              </svg>
            </div>
            <div className="">
              <img
                className="h-[300px] w-[500px] ml-10"
                src={`https://image.tmdb.org/t/p/original${dataMovie?.poster_path}`}
                alt=""
              />
            </div>
            <div className="font-bold ml-16">
              <div className="mb-6 text-white text-3xl font-bold">
                {dataMovie?.title}
              </div>
              <div className="mb-6 font-bold text-3xl text-white">
                Overview:
              </div>
              <p className="text-white text-sm mt-2 w-4/5">
                {dataMovie?.overview}
              </p>
              <div className="flex w-full items-center justify-center text-white text-sm mt-2">
                <span className="mr-4 left-0 w-full">
                  <div className="relative size-20">
                    <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <span className="text-lg font-bold text-white font-bold">
                        {dataMovie?.vote_average !== undefined
                          ? `${Math.round(dataMovie?.vote_average * 10)}%`
                          : ""}
                      </span>
                    </div>
                    <svg
                      className="rotate-[135deg] size-full"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-green-900"
                        strokeWidth="2"
                        strokeDasharray="100 100"
                        strokeLinecap="round"
                      ></circle>

                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-green-500"
                        strokeWidth="2"
                        strokeDasharray={`${
                          dataMovie?.vote_average !== undefined
                            ? `${Math.round(dataMovie?.vote_average * 10)}`
                            : ""
                        }, 100`}
                        strokeLinecap="round"
                      ></circle>
                    </svg>
                  </div>
                </span>
                <div>
                  <span className="flex w-full right-0 justify-end items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card title="Recomendations" movies={dataMoviesRecomendation} />
    </div>
  );
}
