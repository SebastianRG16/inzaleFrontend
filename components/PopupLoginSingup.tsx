import Singup from "./Singup";
import Login from "./Login";
import { useState } from "react";
import imageSignup from "../images/signup.png";
import imageLogin from "../images/login.png";

export default function PopupLoginSignup() {
  const [stateLogin, setStateLogin] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50">
      <div className="flex shadow-md h-96 mt-20">
        <div className="flex p-6 flex-wrap content-center justify-center rounded-l-md bg-black bg-opacity-50 backdrop-blur-md">
          <div className="w-96">
            <div className="flex items-center justify-center">
              <div className="w-fit rounded-xl m-5 bg-black">
                <button
                  onClick={() => setStateLogin(false)}
                  className={`px-4 py-2 rounded-l-xl text-white m-0 ${
                    stateLogin ? "bg-[#262626]" : "bg-[#f0b908]"
                  } transition`}
                >
                  Sign up
                </button>
                <button
                  onClick={() => setStateLogin(true)}
                  className={`px-4 py-2 rounded-r-xl text-white m-0 ${
                    stateLogin ? "bg-[#f0b908]" : "bg-[#262626]"
                  } transition`}
                >
                  Log In
                </button>
              </div>
            </div>
            {stateLogin ? <Login /> : <Singup />}
          </div>
        </div>
        <div className="flex w-96 content-center justify-center bg-black bg-opacity-50 backdrop-blur-md rounded-r-md">
          {stateLogin ? (
            <div className="mr-2 mt-2 h-[364px] text-center justify-center bg-[#262626] w-full h-full flex-col rounded-md">
              <p className="w-full text-white mt-8 text-2xl font-bold">
                Welcome back to <br /> Quickbet Movies!
              </p>
              <p className="text-sm text-white mr-5 ml-5 mt-6">
                🍿 Ready to dive into the world of unlimited entertainment?
                Enter your credentials and let the cinematic adventure begin!
              </p>
              <div className="w-full flex justify-center">
                <img className="h-[180px]" src={imageLogin.src} alt="" />
              </div>
            </div>
          ) : (
            <div className="mr-2 mt-2 h-[364px] text-center justify-center bg-[#262626] w-full h-full flex-col rounded-md">
              <p className="w-full text-white mt-8 text-2xl font-bold">
                Welcome to Quickbet <br /> Movies!
              </p>
              <p className="text-sm text-white mr-5 ml-5 mt-6">
                🎬 Ready to unlock a universe of cinematic delights? Sign up now
                and start your journey with us!
              </p>
              <div className="w-full flex justify-center">
                <img className="h-[180px] mt-3" src={imageSignup.src} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
