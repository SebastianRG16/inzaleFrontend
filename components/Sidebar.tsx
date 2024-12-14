"use client";

export default function Sidebar() {
  const options = [
    {
      id: 28,
      text: "Action",
    },
    {
      id: 12,
      text: "Adventure",
    },
    {
      id: 16,
      text: "Animation",
    },
    {
      id: 35,
      text: "Comedy",
    },
    {
      id: 80,
      text: "Crime",
    },
    {
      id: 99,
      text: "Documentary",
    },
    {
      id: "18",
      text: "Drama",
    },
    {
      id: 10751,
      text: "Family",
    },
    {
      id: 14,
      text: "Fantasy",
    },
    {
      id: "36",
      text: "History",
    },
    {
      id: 27,
      text: "Horror",
    },
    {
      id: 10402,
      text: "Music",
    },
    {
      id: 9648,
      text: "Mystery",
    },
    {
      id: 10749,
      text: "Romance",
    },
    {
      id: 878,
      text: "Science Fiction",
    },
    {
      id: 10770,
      text: "TV Movie",
    },
    {
      id: 53,
      text: "Thriller",
    },
    {
      id: 10752,
      text: "War",
    },
    {
      id: 37,
      text: "Western",
    },
  ];

  return (
    <div className="h-screen bg-[#262626]">
      <div className="sidebar top-1/3  bottom-0 p-2">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Search</h1>
          </div>
        </div>
        <div className="p-2.5 ml-5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-[#1c1c1c] text-white">
          <div className="relative w-full flex">
            <input
              type="text"
              placeholder="Keywords"
              className="text-[15px] w-full bg-transparent focus:outline-none pl-2 pr-8"
            />
            <button className="">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Genres</h1>
          </div>
        </div>
        <form className="max-w-sm rounded-md px-4 mx-auto ml-5 bg-[#1c1c1c]">
          <select
            id="countries"
            className="bg-transparent focus:outline-none text-white text-sm rounded-lg block w-full py-2.5"
          >
            <option value="">All</option>
            {options.map((option, index) => (
              <option key={index} value="US">
                {option.text}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}
