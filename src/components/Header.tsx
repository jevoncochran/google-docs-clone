import React from "react";
import { Button } from "@/lib/materialTailwind";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        // color="blue"
        ripple={true}
        className="h-20 w-20 flex items-center justify-center bg-transparent hover:bg-gray-100 border-0 shadow-none hover:border-0 hover:shadow-none rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(55 65 81)"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#2096F3"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
      <h1 className="hidden md:flex ml-2 text-gray-700 text-2xl">
        Google Jock
      </h1>

      <div className="flex flex-grow items-center px-5 py-2 bg-gray-100 rounded-lg mx-5 md:mx-20 focus-within:shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>

      <Image
        src={"https://avatars.githubusercontent.com/u/56050743?v=4"}
        alt="Jevon Cochran"
        height={70}
        width={70}
        className="rounded-full"
      />
    </div>
  );
};

export default Header;
