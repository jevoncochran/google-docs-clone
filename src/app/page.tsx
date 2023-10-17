"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import Login from "@/components/Login";
import DocIcon from "@/components/DocIcon";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return <Login />;
  }

  return (
    <div>
      <section className="bg-[#F0F3F4] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="py-6 flex justify-between items-center">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <BsThreeDotsVertical size="1.2em" />
          </div>
          <div>
            <Image
              src={
                "https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
              }
              alt="new Google Jock"
              height={150}
              width={150}
              className="border-2 rounded-md cursor-pointer hover:border hover:border-blue-500"
            />
            <p className="mt-2 font-semibold text-sm text-gray-700">Blank</p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto py-8">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Previous 30 Days</th>
                <th>Owned by anyone</th>
                <th>Last opened by me</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center">
                    <DocIcon additionalClasses="mr-4" />
                    Jevon info
                  </div>
                </td>
                <td>me</td>
                <td>Sept 29, 2023</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center">
                    <DocIcon additionalClasses="mr-4" />
                    Zenfeat - Full Stack Developer - Sep 2023
                  </div>
                </td>
                <td>me</td>
                <td>Sept 16, 2023</td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center">
                    <DocIcon additionalClasses="mr-4" />
                    eSumry - Full Stack Developer - Sep 2023
                  </div>
                </td>
                <td>me</td>
                <td>Sept 16, 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
