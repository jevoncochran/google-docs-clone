"use client";

import { useContext, useEffect, useRef } from "react";
import { UiContext } from "@/context/UiContext";
import { AiOutlineClose } from "react-icons/ai";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { IoIosArrowUp as ArrowUpIcon } from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";
import { RxExit } from "react-icons/rx";

const AccountMenu = () => {
  const { data: session } = useSession();

  const { showAccountMenu, toggleAccountMenu } = useContext(UiContext);

  const accountMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showAccountMenu &&
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target)
      ) {
        toggleAccountMenu();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleAccountMenu]);

  return (
    <div
      ref={accountMenuRef}
      className={`bg-[#EDF2FA] w-[450px] absolute top-[64px] right-9 z-50 rounded-xl shadow-xl border border-gray-300 p-3 ${
        showAccountMenu ? "" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center relative text-sm">
        <p>{session?.user?.email}</p>
        <AiOutlineClose
          onClick={toggleAccountMenu}
          size={20}
          className="absolute right-0 cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center p-4">
        <Image
          src={session?.user?.image}
          alt={session?.user?.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <p className="pt-2 text-xl">{`Hi, ${
          session?.user.name?.split(" ")[0]
        }!`}</p>
      </div>
      <div className="flex justify-center pb-4">
        <button className="border-2 border-gray-500 hover:bg-[#D9E2F3] rounded-full py-2 px-4 text-sm text-blue-700 font-semibold">
          Manage Your Google Account
        </button>
      </div>

      <div className="bg-[#F7FAFD] w-full rounded-2xl">
        <div className="flex justify-between py-3 px-5 text-sm cursor-pointer hover:bg-[#DCE1E7] rounded-t-2xl">
          <p>Hide more accounts</p>
          <div className="bg-[#EDF2FA] rounded-full flex justify-center items-center p-1 ">
            <ArrowUpIcon size={18} color="black" />
          </div>
        </div>
        <div className="border-t-2 border-t-[#EDF2FA] py-3 px-5 flex items-center gap-4 cursor-pointer hover:bg-[#DCE1E7]">
          <BsPlusCircle />
          <p className="text-sm">Add another account</p>
        </div>
        <div
          onClick={() => signOut()}
          className="border-t-2 border-t-[#EDF2FA] py-3 px-5 flex items-center gap-4 cursor-pointer hover:bg-[#DCE1E7] rounded-b-2xl"
        >
          <div className="flex items-center gap-4 w-30 cursor-pointer">
            <RxExit />
            <p className="text-sm">Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
