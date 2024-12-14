"use client";

import USER from "../images/USER.png";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <div className="font-sans flex text-center content-center sm:flex-row sm:text-left justify-between py-2 px-6 bg-black shadow sm:items-baseline w-full">
      <div className="mb-2 inner flex flex-col">
        <a className="text-2xl no-underline text-white hover:text-blue-dark font-sans font-bold">
          QUICKBET
        </a>
        <span className="text-xs text-white text-center">MOVIES</span>
      </div>

      <div className="self-center flex">
        <a className="text-md items-center justify-center no-underline text-white hover:text-blue-dark ml-0 px-0">
          <img className="h-[26]" src={USER.src} alt="" />
        </a>
      </div>
    </div>
  );
}
