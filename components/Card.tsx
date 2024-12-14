"use client";
import { useRouter } from "next/navigation";

const Card: React.FC<any> = ({ title, movies }) => {
  const router = useRouter();

  if (movies.length === 0) {
    return <div>No movies available.</div>;
  }

  console.log(movies);

  const redirect = (id: string) => {
    router.push(`/movie/${id}`);
  };

  return (
    <div className="">
      <div className="mt-6 ml-4 font-bold text-xl">{title}</div>
      <div className="overflow-x-auto flex">
        {movies.results.map((result: any, index: any) => (
          <div
            key={index}
            onClick={() => redirect(result.id)}
            className="block cursor-pointer rounded-lg bg-[#262626] w-56 mt-5 ml-4 flex-shrink-0"
          >
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-lg h-60 w-full"
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt=""
              />
            </div>
            <div className="p-2">
              <div className="flex justify-between">
                <h5 className="mb-1 text-md font-bold leading-tight text-white">
                  {result.title}
                </h5>
              </div>
              <p className="mb-1 text-sm text-neutral-600 ">
                {result.release_date}
              </p>
              <div className="flex items-center justify-center gap-4 mb-1 text-sm leading-tight text-neutral-800">
                <div className="flex flex-col text-white">
                  <p>Rating</p>
                  <div className="flex w-full justify-center items-center relative size-6">
                    <svg
                      className="rotate-[135deg] size-full justify-center items-center"
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
                          result?.vote_average !== undefined
                            ? `${Math.round(result?.vote_average * 10)}`
                            : ""
                        }, 100`}
                        strokeLinecap="round"
                      ></circle>
                    </svg>

                    <div className="absolute top-1/3 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <span className="text-[7px] font-bold text-white font-bold">
                        {result?.vote_average !== undefined
                          ? `${Math.round(result?.vote_average * 10)}%`
                          : ""}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-white text-center">
                  <p>Favorites</p>
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
