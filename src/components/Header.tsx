"use client";

import { Button } from "@/lib/materialTailwind";
import Image from "next/image";
import DocIcon from "./DocIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

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
      <DocIcon />
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
        src={session?.user?.image!}
        alt="Jevon Cochran"
        height={70}
        width={70}
        onClick={() => signOut()}
        className="rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Header;
