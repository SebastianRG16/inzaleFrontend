"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import client from "../../api/request";
import PopupLoginSingup from "../../components/PopupLoginSingup";

export default function MoviesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  interface Movie {
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

  const [dataMovie, setDataMovie] = useState<Movie | null>(null);
  const [acceso, setAcceso] = useState(
    localStorage.getItem("acces") === "true"
  );

  const getDatosMovieInit = async () => {
    try {
      const response = await client.get(`movies/popular/random`, {});
      if (response.status == 200) {
        console.log(response.data.backdrop_path);
        setDataMovie(response.data);
      }
    } catch (error) {
      console.error("Error al obtener pelicula:", error);
    }
  };
  console.log(acceso);

  useEffect(() => {
    getDatosMovieInit();
  }, []);

  return (
    <div className="h-screen">
      {acceso ? "" : <PopupLoginSingup />}
      <Navbar />
      <div className="relative h-1/3">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${dataMovie?.backdrop_path}`}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/100 via-black/5 to-transparent p-4">
          <div className="flex">
            <div className="font-bold">
              <div className="text-white text-3xl font-bold">
                {dataMovie?.title}
              </div>
              <p className="text-white text-sm mt-2 w-4/5">
                {dataMovie?.overview}
              </p>
            </div>
            <div className="flex text-white text-sm mt-2">
              <span className="flex mr-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
              <span className="flex mr-4 items-center">
                <div className="relative size-20">
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

                  <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-lg font-bold text-white font-bold">
                      {dataMovie?.vote_average !== undefined
                        ? `${Math.round(dataMovie?.vote_average * 10)}%`
                        : ""}
                    </span>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="default-sidebar"
        className="w-60 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="fixed w-60 min-h-screen">
          <Sidebar />
        </div>
      </div>
      <div className="bg-[#262626]">
        <div className="p-4 sm:ml-60 bg-[#454545] mr-1 border-gray-700">
          <div className="text-white mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
